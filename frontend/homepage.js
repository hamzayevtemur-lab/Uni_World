
// Country Modal Data
const countryData = {
    latvia: {
        flag: '🇱🇻',
        name: 'Latvia',
        numofpartnet: '10+',
        universities: ['TSI universiteti', 'EKA University of Applied Sciences',],
        description: 'Latvia offers high-quality European education at affordable costs. Known for its vibrant culture and modern universities.',
        programs: ['Business Administration', 'Computer Science', 'Engineering', 'Medicine', 'Architecture'],
        costOfLiving: '$600-800/month',
        language: 'English programs available',
        visaRequirements: 'Student visa required, processing time: 2-3 months'
    },
    netherlands: {
        flag: '🇳🇱',
        name: 'Netherlands',
        numofpartnet: '10+',
        universities: ['University', 'University'],
        description: 'The Netherlands is home to world-renowned universities offering innovative programs in English.',
        programs: ['Business', 'Technology', 'Social Sciences', 'Arts', 'Law'],
        costOfLiving: '$900-1200/month',
        language: 'English programs widely available',
        visaRequirements: 'Student visa (MVV) required, processing time: 2-4 weeks'
    },
    germany: {
        flag: '🇩🇪',
        name: 'Germany',
        numofpartnet: '10+',
        universities: ['GISMA University of Applied Sciences', 'University of Europe of Applied Sciences', 'Frensenius University of Applied Sciences', 'Constructor University', 'SRH Berlin University of Applied Sciences'],
        description: 'Germany offers tuition-free education at public universities with excellent research opportunities.',
        programs: ['Engineering', 'Computer Science', 'Business', 'Medicine', 'Natural Sciences'],
        costOfLiving: '$800-1100/month',
        language: 'English and German programs',
        visaRequirements: 'Student visa required, blocked account needed'
    },
    malaysia: {
        flag: '🇲🇾',
        name: 'Malaysia',
        numofpartnet: '10+',
        universities: ['University', 'University'],
        description: 'Malaysia combines quality education with affordable living costs in a multicultural environment.',
        programs: ['Business', 'Engineering', 'IT', 'Hospitality', 'Medicine'],
        costOfLiving: '$400-600/month',
        language: 'English programs available',
        visaRequirements: 'Student pass required, processed through university'
    },
    uk: {
        flag: '🇬🇧',
        name: 'United Kingdom',
        numofpartnet: '10+',
        universities: ['University', 'University'],
        description: 'The UK hosts some of the world\'s oldest and most prestigious universities with diverse programs.',
        programs: ['Business', 'Engineering', 'Arts', 'Sciences', 'Law'],
        costOfLiving: '$1200-1500/month',
        language: 'English',
        visaRequirements: 'Student visa (Tier 4) required, CAS needed'
    },
    china: {
        flag: '🇨🇳',
        name: 'China',
        numofpartnet: '10+',
        universities: ['Jiangsu University', 'Shenzhen University', 'Southern University of Science and Technology', 'Beijing Jiaotong University', 'Shanghai University'],
        description: 'China offers numerous scholarships and cutting-edge programs in technology and business.',
        programs: ['Engineering', 'Business', 'Medicine', 'Chinese Language', 'Technology'],
        costOfLiving: '$200-500/month',
        language: 'English and Chinese programs',
        visaRequirements: 'X1/X2 student visa required'
    },
    korea: {           
        flag: '🇰🇷',
        name: 'South Korea',
        numofpartnet: '10+',
        universities: ['Konkook university', 'Semyung university','Hosan university','Shinhan university','Korea politek university','Sahmyook university','Inha university',
            'Singangi university','Tegu hani university','Tegu university','Hanshin university','Kemyong university','Dongshin university','Dong- university','Pusan national university'],
        description: 'South Korea combines traditional culture with modern technology education and generous scholarships.',
        programs: ['Engineering', 'Business', 'Korean Studies', 'Technology', 'Design'],
        costOfLiving: '$700-1000/month',
        language: 'English and Korean programs',
        visaRequirements: 'D-2 student visa required'
    },
    uae: {
        flag: '🇦🇪',
        name: 'United Arab Emirates',
        numofpartnet: '15+',
        universities: ['Amity University Dubai', 'Walsh College','Middlesex University Dubai',''],
        description: 'UAE offers world-class education with state-of-the-art facilities in a rapidly growing region.',
        programs: ['Business', 'Engineering', 'Hospitality', 'Technology', ''],
        costOfLiving: '$800-1200/month',
        language: 'English programs available',
        visaRequirements: 'Student visa processed through university'
    },
    turkey: {
        flag: '🇹🇷',
        name: 'Turkey',
        numofpartnet: '10+',
        universities: ['University', 'University'],
        description: 'Turkey offers a unique blend of Eastern and Western culture with affordable, high-quality education and rich historical heritage.',
        programs: ['Business Administration', 'Engineering', 'Medicine', 'Architecture', 'Tourism & Hospitality'],
        costOfLiving: '$400-600/month',
        language: 'English and Turkish programs available',
        visaRequirements: 'Student visa required, residence permit upon arrival'
    },
    singapore: {
        flag: '🇸🇬',
        name: 'Singapore',
        numofpartnet: '10+',
        universities: ['Management Development Institute of Singapore','Jain School of Global Management','Curtin University Singapore',''],
        description: 'Singapore offers world-class education with state-of-the-art facilities in a rapidly growing region.',
            programs: ['Business Administration', 'Engineering', 'Medicine', 'Architecture', 'Tourism & Hospitality','IT and Ciber Security'],
            costOfLiving: '$400-600/month',
            language: 'English programs available',
            visaRequirements: 'Student visa required, residence permit upon arrival'
    }
};

// Service Modal Data
const serviceData = {
    application: {
        icon: '📝',
        title: 'Application Assistance',
        description: 'Comprehensive support throughout your university application journey.',
        details: [
            'Profile assessment and improvement strategies',
            'University and program selection guidance',
            'Application timeline planning',
            'Essay and personal statement review',
            'Application submission support',
            'Follow-up with universities'
        ],
        benefits: 'Increase your chances of acceptance with expert guidance from experienced consultants who understand what universities are looking for.'
    },
    selection: {
        icon: '🎯',
        title: 'University Selection',
        description: 'Find the perfect university match for your academic and career goals.',
        details: [
            'Detailed university research and comparison',
            'Program matching based on your interests',
            'Career prospects analysis',
            'Location and campus life information',
            'Cost and scholarship opportunities',
            'Ranking and accreditation verification'
        ],
        benefits: 'Make informed decisions with data-driven insights and personalized recommendations tailored to your unique profile.'
    },
    visa: {
        icon: '💼',
        title: 'Visa Support',
        description: 'Navigate the complex visa process with confidence.',
        details: [
            'Visa requirement consultation',
            'Document checklist and preparation',
            'Application form assistance',
            'Interview preparation and coaching',
            'Financial documentation guidance',
            'Embassy appointment scheduling'
        ],
        benefits: 'Maximize your visa approval chances with thorough preparation and expert guidance on country-specific requirements.'
    },
    scholarship: {
        icon: '💰',
        title: 'Scholarship Guidance',
        description: 'Access funding opportunities to make your education affordable.',
        details: [
            'Scholarship database access',
            'Eligibility assessment',
            'Application essay writing',
            'Financial need documentation',
            'Multiple scholarship applications',
            'Deadline management'
        ],
        benefits: 'Reduce your education costs significantly with our extensive scholarship network and proven application strategies.'
    },
    document: {
        icon: '📄',
        title: 'Document Preparation',
        description: 'Create compelling application documents that stand out.',
        details: [
            'Personal statement writing and editing',
            'CV/Resume optimization',
            'Recommendation letter guidance',
            'Academic transcript verification',
            'Portfolio development (if needed)',
            'Document translation services'
        ],
        benefits: 'Present your best self with professionally crafted documents that highlight your strengths and achievements.'
    },
    departure: {
        icon: '✈️',
        title: 'Pre-Departure Support',
        description: 'Prepare for your new life abroad with comprehensive support.',
        details: [
            'Accommodation assistance',
            'Flight booking guidance',
            'Airport pickup arrangements',
            'Banking and financial setup',
            'Cultural orientation sessions',
            'Packing lists and checklists'
        ],
        benefits: 'Start your journey with confidence, knowing you\'re fully prepared for life in your new country.'
    }
};

function openCountryModal(country) {
    const data = countryData[country];
    const content = `
                <div class="modal-header">
                    <div class="modal-flag">${data.flag}</div>
                    <h2>${data.name}</h2>
                    <p>${data.numofpartnet} Partner Universities</p>
                </div>
                <div class="modal-body">
                    <p>${data.description}</p>

                    <h3>Popular Universities</h3>
                    <ul>
                        ${data.universities.map(university => `<li>${university}</li>`).join('')}
                    </ul>
                    
                    <h3>Popular Programs</h3>
                    <ul>
                        ${data.programs.map(program => `<li>${program}</li>`).join('')}
                    </ul>
                    
                    <h3>Living Costs</h3>
                    <p>${data.costOfLiving}</p>
                    
                    <h3>Language</h3>
                    <p>${data.language}</p>
                    
                    <h3>Visa Requirements</h3>
                    <p>${data.visaRequirements}</p>
                    
                    <div class="modal-cta">
                        <p>Ready to study in ${data.name}?</p>
                        <a href="#contact">Contact Us Today</a>
                    </div>
                </div>
            `;
    document.getElementById('countryModalContent').innerHTML = content;
    document.getElementById('countryModal').classList.add('active');
}

function openServiceModal(service) {
    const data = serviceData[service];
    const content = `
                <div class="modal-header">
                    <div class="modal-flag">${data.icon}</div>
                    <h2>${data.title}</h2>
                </div>
                <div class="modal-body">
                    <p>${data.description}</p>
                    
                    <h3>What We Offer</h3>
                    <ul>
                        ${data.details.map(detail => `<li>${detail}</li>`).join('')}
                    </ul>
                    
                    <h3>Why Choose This Service?</h3>
                    <p>${data.benefits}</p>
                    
                    <div class="modal-cta">
                        <p>Want to learn more about this service?</p>
                        <a href="#contact">Schedule a Consultation</a>
                    </div>
                </div>
            `;
    document.getElementById('serviceModalContent').innerHTML = content;
    document.getElementById('serviceModal').classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    const formData = new FormData(form);

    // Disable button and show loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatus.innerHTML = '<span style="color: #3d6fa6;">⏳ Sending your message...</span>';

    // Get form values
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        country: formData.get('country'),
        message: formData.get('message')
    };

    // OPTION 1: Using Formspree (Recommended)
    // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
    // Get it from: https://formspree.io (free account)

    fetch('https://formspree.io/f/mykgrkbl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                formStatus.innerHTML = '<span style="color: #10b981;">✅ Message sent successfully! We will contact you soon.</span>';
                form.reset();
            } else {
                throw new Error('Failed to send');
            }
        })
        .catch(error => {
            // Fallback to mailto if Formspree fails or not configured
            formStatus.innerHTML = '<span style="color: #ef4444;">⚠️ Using backup method...</span>';

            const subject = `Inquiry from ${data.name} - Study in ${data.country}`;
            const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0APhone: ${data.phone}%0D%0APreferred Country: ${data.country}%0D%0A%0D%0AMessage:%0D%0A${data.message}`;
            const mailtoLink = `mailto:info@uniworld.uz?subject=${subject}&body=${body}`;

            window.location.href = mailtoLink;

            setTimeout(() => {
                formStatus.innerHTML = '<span style="color: #3d6fa6;">📧 Please send the email from your email client.</span>';
            }, 1000);
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Language Switcher
let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(element => {
        if (lang === 'en') {
            if (element.tagName === 'H2' && element.innerHTML.includes('<span>')) {
                // Handle hero title with span
                element.innerHTML = element.getAttribute('data-en');
            } else {
                element.textContent = element.getAttribute('data-en');
            }
        } else {
            if (element.tagName === 'H2' && element.innerHTML.includes('<span>')) {
                // Handle hero title with span
                element.innerHTML = element.getAttribute('data-uz');
            } else {
                element.textContent = element.getAttribute('data-uz');
            }
        }
    });

    // Update stats
    updateStats(lang);

    // Update section headers
    updateSectionHeaders(lang);
}

function updateStats(lang) {
    const stats = {
        en: {
            students: 'Students Placed',
            universities: 'Partner Universities',
            countries: 'Countries Covered',
            success: 'Success Rate'
        },
        uz: {
            students: 'Joylashtirilgan Talabalar',
            universities: 'Hamkor Universitetlar',
            countries: 'Qamrab Olingan Mamlakatlar',
            success: 'Muvaffaqiyat Darajasi'
        }
    };

    document.querySelectorAll('.stat-label').forEach((label, index) => {
        const keys = Object.keys(stats[lang]);
        if (keys[index]) {
            label.textContent = stats[lang][keys[index]];
        }
    });
}

function updateSectionHeaders(lang) {
    const headers = {
        en: {
            aboutBadge: 'About Us',
            aboutTitle: 'Partner With Our <span>Trusted Consultants</span> Today',
            aboutText1: 'At Uni World, we are a trusted educational consulting firm dedicated to helping students achieve their dreams of studying abroad. Our team of experienced consultants brings diverse industry knowledge and expertise in international admissions.',
            aboutText2: 'We understand your unique challenges and goals to deliver customized solutions tailored to your specific needs. We are committed to providing exceptional service, innovative strategies, and tangible results for our students.',
            aboutBtn: 'Learn More About Us',

            countriesBadge: 'Study Destinations',
            countriesTitle: 'Countries We Serve',
            countriesDesc: 'Explore world-class education opportunities across 8 countries with our expert guidance',

            servicesBadge: 'Our Services',
            servicesTitle: 'Consulting Services We Offer',
            servicesDesc: 'Our team of experienced consultants combines industry knowledge, cutting-edge strategies, and innovative approaches to guide you towards a brighter future.',

            processTitle: 'Our Simple 4-Step Process',
            processDesc: 'From initial consultation to university enrollment, we guide you every step of the way',

            contactBadge: 'Get In Touch',
            contactTitle: 'Ready to Start Your Journey?',
            contactDesc: 'Contact us today for a free consultation and take the first step towards your dream education'
        },
        uz: {
            aboutBadge: 'Biz Haqimizda',
            aboutTitle: 'Bugun <span>Ishonchli Maslahatchilarimiz</span> Bilan Hamkorlik Qiling',
            aboutText1: 'Uni World - bu talabalarning chet elda o\'qish orzularini amalga oshirishga yordam beradigan ishonchli ta\'lim konsalting firmasi. Bizning tajribali maslahatchilar jamoamiz xalqaro qabul bo\'yicha turli sohalar bilimi va tajribasiga ega.',
            aboutText2: 'Biz sizning noyob muammolaringiz va maqsadlaringizni tushunamiz va sizning ehtiyojlaringizga moslashtirilgan yechimlarni taqdim etamiz. Biz talabalarga ajoyib xizmat, innovatsion strategiyalar va aniq natijalarni taqdim etishga sodiqmiz.',
            aboutBtn: 'Biz Haqimizda Batafsil',

            countriesBadge: 'O\'qish Yo\'nalishlari',
            countriesTitle: 'Biz Xizmat Ko\'rsatadigan Mamlakatlar',
            countriesDesc: 'Bizning professional yo\'l-yo\'rig\'imiz bilan 8 mamlakatda jahon darajasidagi ta\'lim imkoniyatlarini o\'rganing',

            servicesBadge: 'Bizning Xizmatlar',
            servicesTitle: 'Biz Taklif Qiladigan Konsalting Xizmatlari',
            servicesDesc: 'Tajribali maslahatchilar jamoamiz sanoat bilimi, zamonaviy strategiyalar va innovatsion yondashuvlarni birlashtirib, sizni yorqin kelajakka yo\'naltiradi.',

            processTitle: 'Bizning Oddiy 4 Bosqichli Jarayon',
            processDesc: 'Dastlabki konsultatsiyadan universitetga ro\'yxatdan o\'tishgacha har bir bosqichda sizga yo\'l-yo\'riq ko\'rsatamiz',

            contactBadge: 'Bog\'lanish',
            contactTitle: 'Sayohatingizni Boshlashga Tayyormisiz?',
            contactDesc: 'Bugun bepul konsultatsiya uchun biz bilan bog\'laning va orzuingizdagi ta\'limga birinchi qadamni qo\'ying'
        }
    };

    const h = headers[lang];

    // About section
    document.querySelector('.about-badge').textContent = h.aboutBadge;
    document.querySelector('.about-content h2').innerHTML = h.aboutTitle;
    const aboutPs = document.querySelectorAll('.about-content p');
    if (aboutPs[0]) aboutPs[0].textContent = h.aboutText1;
    if (aboutPs[1]) aboutPs[1].textContent = h.aboutText2;
    document.querySelector('.about-btn').textContent = h.aboutBtn;

    // Countries section
    document.querySelector('.countries-badge').textContent = h.countriesBadge;
    document.querySelector('.countries-header h2').textContent = h.countriesTitle;
    document.querySelector('.countries-header p').textContent = h.countriesDesc;

    // Services section
    document.querySelector('.services-badge').textContent = h.servicesBadge;
    document.querySelector('.services-header h2').textContent = h.servicesTitle;
    document.querySelector('.services-header p').textContent = h.servicesDesc;

    // Process section
    document.querySelector('.process-header h2').textContent = h.processTitle;
    document.querySelector('.process-header p').textContent = h.processDesc;

    // Contact section
    document.querySelector('.contact-badge').textContent = h.contactBadge;
    document.querySelector('.contact-header h2').textContent = h.contactTitle;
    document.querySelector('.contact-header p').textContent = h.contactDesc;

    // Update country cards
    updateCountryCards(lang);

    // Update service cards
    updateServiceCards(lang);

    // Update process steps
    updateProcessSteps(lang);

    // Update contact info
    updateContactInfo(lang);
}

function updateCountryCards(lang) {
    const cards = {
        en: ['Partner Universities', 'Partner Universities', 'Partner Universities', 'Partner Universities', 'Partner Universities', 'Partner Universities', 'Partner Universities', 'Partner Universities'],
        uz: ['Hamkor Universitetlar', 'Hamkor Universitetlar', 'Hamkor Universitetlar', 'Hamkor Universitetlar', 'Hamkor Universitetlar', 'Hamkor Universitetlar', 'Hamkor Universitetlar', 'Hamkor Universitetlar']
    };

    const btnText = lang === 'en' ? 'Learn More' : 'Batafsil';

    document.querySelectorAll('.country-card p').forEach((p, index) => {
        const num = p.textContent.match(/\d+\+/)[0];
        p.textContent = `${num} ${cards[lang][index]}`;
    });

    document.querySelectorAll('.country-btn').forEach(btn => {
        btn.textContent = btnText;
    });
}

function updateServiceCards(lang) {
    const services = {
        en: {
            titles: ['Application Assistance', 'University Selection', 'Visa Support', 'Scholarship Guidance', 'Document Preparation', 'Pre-Departure Support'],
            descriptions: [
                'Our experienced consultants help develop strategic plans to prepare competitive university applications, improve your profile, and achieve your admission goals.',
                'Our experts offer market research, program matching, and university selection strategies to enhance your academic journey and ensure the best fit for your goals.',
                'We provide visa application guidance, document preparation, and interview coaching to optimize your visa approval and ensure smooth immigration processes.',
                'We help identify scholarship opportunities, prepare compelling applications, and maximize your funding to make international education more affordable.',
                'Expert assistance with personal statements, recommendation letters, CVs, and all required documents to create a compelling application package.',
                'Comprehensive guidance on accommodation, travel arrangements, cultural preparation, and everything you need for a smooth transition to your new country.'
            ]
        },
        uz: {
            titles: ['Ariza Yordami', 'Universitet Tanlash', 'Viza Yordami', 'Stipendiya Yo\'l-Yo\'rig\'i', 'Hujjat Tayyorlash', 'Jo\'nash Oldidan Yordam'],
            descriptions: [
                'Tajribali maslahatchilarimiz raqobatbardosh universitet arizalarini tayyorlash, profilingizni yaxshilash va qabul maqsadlaringizga erishish uchun strategik rejalar ishlab chiqishda yordam beradi.',
                'Mutaxassislarimiz bozor tadqiqotlari, dastur moslashtirish va universitet tanlash strategiyalarini taklif qiladi, bu akademik sayohatingizni yaxshilaydi va maqsadlaringizga eng mos keladi.',
                'Biz viza arizasi bo\'yicha maslahat, hujjatlarni tayyorlash va intervyu tayyorlashni taqdim etamiz, bu vizangizni tasdiqlashni optimallashtiradi va immigratsiya jarayonlarini soddalashtiradi.',
                'Biz stipendiya imkoniyatlarini aniqlashda, ta\'sirli arizalarni tayyorlashda va xalqaro ta\'limni yanada arzonroq qilish uchun moliyalashtirishni maksimal darajada oshirishda yordam beramiz.',
                'Shaxsiy bayonotlar, tavsiya xatlari, rezyume va barcha kerakli hujjatlar bilan professional yordam, ta\'sirli ariza paketini yaratish.',
                'Turar joy, sayohat tartibotlari, madaniy tayyorgarlik va yangi mamlakatga silliq o\'tish uchun kerak bo\'lgan hamma narsa bo\'yicha keng qamrovli yo\'l-yo\'riq.'
            ]
        }
    };

    const readMore = lang === 'en' ? 'Read More →' : 'Batafsil →';

    document.querySelectorAll('.service-card h3').forEach((h3, index) => {
        h3.textContent = services[lang].titles[index];
    });

    document.querySelectorAll('.service-card p').forEach((p, index) => {
        p.textContent = services[lang].descriptions[index];
    });

    document.querySelectorAll('.service-link').forEach(link => {
        link.textContent = readMore;
    });
}

function updateProcessSteps(lang) {
    const steps = {
        en: {
            titles: ['Initial Consultation', 'University Selection', 'Application Support', 'Visa & Departure'],
            descriptions: [
                'We assess your profile, goals, and preferences to create a personalized roadmap',
                'We identify the best-fit universities and programs based on your aspirations',
                'We help prepare compelling applications and all required documentation',
                'We assist with visa processing and pre-departure preparations'
            ]
        },
        uz: {
            titles: ['Dastlabki Konsultatsiya', 'Universitet Tanlash', 'Ariza Yordami', 'Viza va Jo\'nash'],
            descriptions: [
                'Shaxsiy yo\'l xaritasini yaratish uchun profilingiz, maqsadlaringiz va afzalliklaringizni baholaymiz',
                'Sizning intilishlaringizga asoslangan eng mos universitetlar va dasturlarni aniqlaymiz',
                'Ta\'sirli arizalar va barcha kerakli hujjatlarni tayyorlashda yordam beramiz',
                'Viza jarayoni va jo\'nash oldidan tayyorgarlikda yordam beramiz'
            ]
        }
    };

    document.querySelectorAll('.process-step h3').forEach((h3, index) => {
        h3.textContent = steps[lang].titles[index];
    });

    document.querySelectorAll('.process-step p').forEach((p, index) => {
        p.textContent = steps[lang].descriptions[index];
    });
}

function updateContactInfo(lang) {
    const contact = {
        en: {
            infoTitle: 'Contact Information',
            infoDesc: 'Have questions? We\'re here to help you every step of the way. Reach out through any of these channels.',
            phone: 'Phone',
            email: 'Email',
            office: 'Office',
            officeAddr1: 'Tashkent, Uzbekistan',
            officeAddr2: 'Amir Temur Street 123',
            hours: 'Working Hours',
            hours1: 'Mon - Fri: 9:00 AM - 6:00 PM',
            hours2: 'Sat: 10:00 AM - 4:00 PM',
            formName: 'Full Name *',
            formNamePh: 'Your Name',
            formEmail: 'Email *',
            formEmailPh: 'your@email.com',
            formPhone: 'Phone Number *',
            formCountry: 'Preferred Country *',
            formCountryPh: 'Select a country',
            formMessage: 'Your Message *',
            formMessagePh: 'Tell us about your educational goals and how we can help you...',
            formBtn: 'Send Message'
        },
        uz: {
            infoTitle: 'Aloqa Ma\'lumotlari',
            infoDesc: 'Savollaringiz bormi? Biz har bir bosqichda sizga yordam berishga tayyormiz. Ushbu kanallardan biri orqali bog\'laning.',
            phone: 'Telefon',
            email: 'Elektron pochta',
            office: 'Ofis',
            officeAddr1: 'Toshkent, O\'zbekiston',
            officeAddr2: 'Amir Temur ko\'chasi 123',
            hours: 'Ish Vaqti',
            hours1: 'Dush - Jum: 9:00 - 18:00',
            hours2: 'Shan: 10:00 - 16:00',
            formName: 'To\'liq Ism *',
            formNamePh: 'Ismingiz',
            formEmail: 'Elektron pochta *',
            formEmailPh: 'sizning@email.com',
            formPhone: 'Telefon Raqam *',
            formCountry: 'Afzal Ko\'rilgan Mamlakat *',
            formCountryPh: 'Mamlakatni tanlang',
            formMessage: 'Sizning Xabaringiz *',
            formMessagePh: 'Ta\'lim maqsadlaringiz va biz sizga qanday yordam bera olishimiz haqida bizga xabar bering...',
            formBtn: 'Xabar Yuborish'
        }
    };

    const c = contact[lang];

    document.querySelector('.contact-info h3').textContent = c.infoTitle;
    document.querySelector('.contact-info > p').textContent = c.infoDesc;

    const contactLabels = document.querySelectorAll('.contact-details h4');
    contactLabels[0].textContent = c.phone;
    contactLabels[1].textContent = c.email;
    contactLabels[2].textContent = c.office;
    contactLabels[3].textContent = c.hours;

    const officePs = document.querySelectorAll('.contact-details')[2].querySelectorAll('p');
    officePs[0].textContent = c.officeAddr1;
    officePs[1].textContent = c.officeAddr2;

    const hoursPs = document.querySelectorAll('.contact-details')[3].querySelectorAll('p');
    hoursPs[0].textContent = c.hours1;
    hoursPs[1].textContent = c.hours2;

    // Form labels
    document.querySelectorAll('.form-group label')[0].textContent = c.formName;
    document.querySelectorAll('.form-group label')[1].textContent = c.formEmail;
    document.querySelectorAll('.form-group label')[2].textContent = c.formPhone;
    document.querySelectorAll('.form-group label')[3].textContent = c.formCountry;
    document.querySelectorAll('.form-group label')[4].textContent = c.formMessage;

    // Form placeholders
    document.getElementById('name').placeholder = c.formNamePh;
    document.getElementById('email').placeholder = c.formEmailPh;
    document.getElementById('message').placeholder = c.formMessagePh;

    // Form button
    document.getElementById('submitBtn').textContent = c.formBtn;
}


// API Configuration
const API_URL = 'https://uni-world.onrender.com'; 

let allCommentsShown = false;


// Add new comment
async function addComment(e) {
    e.preventDefault();

    const name = document.getElementById('commentName').value;
    const country = document.getElementById('commentCountry').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const comment_text = document.getElementById('commentText').value;

    const submitBtn = document.querySelector('.submit-comment-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    try {
        const response = await fetch(`${API_URL}/api/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                country,
                rating: parseInt(rating),
                comment_text
            })
        });

        if (response.ok) {
            alert('Thank you! Your comment will appear after approval.');
            document.getElementById('commentForm').reset();

            // Optionally reload comments (won't show new one until approved)
            // loadComments();
        } else {
            throw new Error('Failed to submit comment');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting comment. Please try again.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Post Comment';
    }
}



// Global variables
let allComments = [];
let showingAll = false;

// Load comments
async function loadComments() {
    try {
        const response = await fetch(`${API_URL}/api/comments`);
        allComments = await response.json();

        displayComments();

    } catch (error) {
        console.error('Error loading comments:', error);
    }
}

// Display comments based on current state
function displayComments() {
    const commentsList = document.getElementById('commentsList');
    const showMoreContainer = document.getElementById('showMoreContainer');
    const showMoreBtn = document.getElementById('showMoreBtn');

    // Clear existing comments
    commentsList.innerHTML = '';

    // Determine how many to show
    const commentsToShow = showingAll ? allComments : allComments.slice(0, 3);

    // Render comments
    commentsToShow.forEach(comment => {
        const initials = comment.name.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2);
        const stars = '⭐'.repeat(comment.rating);
        const date = new Date(comment.created_at);
        const timeAgo = getTimeAgo(date);

        const commentHTML = `
            <div class="comment-card">
                <div class="comment-author">
                    <div class="author-avatar">${initials}</div>
                    <div class="author-details">
                        <h4>${comment.name}</h4>
                        <p class="comment-date">${timeAgo}</p>
                        <p class="comment-country">${comment.country}</p>
                    </div>
                </div>
                <div class="comment-text">
                    "${comment.comment_text}"
                </div>
                <div class="comment-rating">${stars}</div>
            </div>
        `;
        commentsList.innerHTML += commentHTML;
    });

    // Show/hide button
    if (allComments.length > 3) {
        showMoreContainer.style.display = 'block';

        if (showingAll) {
            showMoreBtn.innerHTML = '⬆️ Show Less Comments';
        } else {
            const remaining = allComments.length - 3;
            showMoreBtn.innerHTML = `⬇️ Show More Comments (${remaining} more)`;
        }
    } else {
        showMoreContainer.style.display = 'none';
    }
}

// Toggle function
function toggleComments() {
    showingAll = !showingAll;
    displayComments();

    // Scroll behavior
    if (showingAll) {
        // When showing all, scroll to show more button
        setTimeout(() => {
            document.getElementById('showMoreBtn').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 100);
    } else {
        // When collapsing, scroll to comments section
        setTimeout(() => {
            document.getElementById('commentsList').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }
}

// Helper function for time ago (keep this as is)
function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / secondsInUnit);
        if (interval >= 1) {
            return `${interval} ${unit}${interval > 1 ? 's' : ''} ago`;
        }
    }

    return 'Just now';
}

// Load comments when page loads
document.addEventListener('DOMContentLoaded', loadComments);