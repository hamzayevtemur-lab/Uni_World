from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import mysql.connector
from datetime import datetime
import os

app = FastAPI()

# CORS settings - Allow your frontend domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database configuration
DB_CONFIG = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "database": os.getenv("DB_NAME"),
    "port": int(os.getenv("DB_PORT", 3306))
}

# Pydantic models
class CommentCreate(BaseModel):
    name: str
    country: str
    rating: int
    comment_text: str

class Comment(BaseModel):
    id: int
    name: str
    country: str
    rating: int
    comment_text: str
    created_at: datetime

# Database connection
def get_db_connection():
    return mysql.connector.connect(**DB_CONFIG)

# Get all approved comments
@app.get("/api/comments", response_model=List[Comment])
async def get_comments():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("""
            SELECT id, name, country, rating, comment_text, created_at 
            FROM comments 
            WHERE is_approved = TRUE 
            ORDER BY created_at DESC
        """)
        comments = cursor.fetchall()
        cursor.close()
        conn.close()
        return comments
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Add new comment
@app.post("/api/comments")
async def add_comment(comment: CommentCreate):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO comments (name, country, rating, comment_text, is_approved) 
            VALUES (%s, %s, %s, %s, FALSE)
        """, (comment.name, comment.country, comment.rating, comment.comment_text))
        conn.commit()
        cursor.close()
        conn.close()
        return {"message": "Comment submitted successfully. It will appear after approval."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Admin: Approve comment
@app.put("/api/comments/{comment_id}/approve")
async def approve_comment(comment_id: int):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("UPDATE comments SET is_approved = TRUE WHERE id = %s", (comment_id,))
        conn.commit()
        cursor.close()
        conn.close()
        return {"message": "Comment approved"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Admin: Get pending comments
@app.get("/api/comments/pending")
async def get_pending_comments():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("""
            SELECT id, name, country, rating, comment_text, created_at 
            FROM comments 
            WHERE is_approved = FALSE 
            ORDER BY created_at DESC
        """)
        comments = cursor.fetchall()
        cursor.close()
        conn.close()
        return comments
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@app.delete("/api/comments/{comment_id}")
async def delete_comment(comment_id: int):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM comments WHERE id = %s", (comment_id,))
        conn.commit()
        cursor.close()
        conn.close()
        return {"message": "Comment deleted"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))




if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port)
    