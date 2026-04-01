import os
from datetime import datetime
from typing import List

import mysql.connector
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel

app = FastAPI()

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_DIR = os.path.join(BASE_DIR, "frontend")

app.mount("/static", StaticFiles(directory=FRONTEND_DIR), name="static")
templates = Jinja2Templates(directory=FRONTEND_DIR)

# CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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
    "port": int(os.getenv("DB_PORT", 3306)),
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


@app.get("/")
async def serve_home(request: Request):
    return templates.TemplateResponse(request, "index.html")


@app.get("/admin")
async def serve_admin(request: Request):
    return templates.TemplateResponse(request, "admin.html")


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
        cursor.execute(
            """
            INSERT INTO comments (name, country, rating, comment_text, is_approved) 
            VALUES (%s, %s, %s, %s, FALSE)
            """,
            (comment.name, comment.country, comment.rating, comment.comment_text),
        )
        conn.commit()
        cursor.close()
        conn.close()
        return {
            "message": "Comment submitted successfully. It will appear after approval."
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Admin: Approve comment
@app.put("/api/comments/{comment_id}/approve")
async def approve_comment(comment_id: int):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "UPDATE comments SET is_approved = TRUE WHERE id = %s", (comment_id,)
        )
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


@app.get("/setup-db")
def setup_database():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS comments (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                country VARCHAR(100),
                rating INT,
                comment_text TEXT,
                is_approved BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        conn.commit()
        cursor.close()
        conn.close()
        return {"message": "Database table created successfully"}
    except Exception as e:
        return {"error": str(e)}


if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("PORT", 4000))
    uvicorn.run("main:app", host="0.0.0.0", port=port)

