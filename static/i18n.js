/**
 * Multilingual / Internationalization (i18n) System
 * Supports English (en) and Khmer (km)
 * Mao Visal Portfolio & CV
 */

(function () {
    'use strict';

    const STORAGE_KEY = 'portfolio_language';
    const DEFAULT_LANG = 'en';
    const SUPPORTED_LANGS = ['en', 'km', 'ru'];

    const translations = {
        en: {
            // Document Metadata
            doc_title: "Mao Visal | Portfolio",
            cv_doc_title: "Mao Visal - CV",

            // Navigation
            nav_home: "Home",
            nav_profile: "Profile",
            nav_projects: "Projects",
            nav_skills: "Skills",
            nav_experience: "Experience",
            nav_connect: "Connect",
            nav_theme: "Theme",
            nav_theme_title: "Toggle Theme",
            nav_lang_aria: "Select Language",
            lang_en: "English",
            lang_km: "ភាសាខ្មែរ",
            lang_ru: "Russian",

            // Hero Section
            hero_title: "HELLO WORLD",
            hero_subtitle: "Welcome to my server.",
            social_twitter: "Twitter",
            social_instagram: "Instagram",
            social_tiktok: "TikTok",
            social_telegram: "Telegram",
            social_youtube: "YouTube",

            // Profile / About Section
            profile_name: "MAO VISAL",
            profile_role: "COMPUTER SCIENCE STUDENT",
            profile_bio: "Hi! I'm <strong>Mao Visal</strong>, a Computer Science student at RUPP and studying Computer Services at NTTI, specializing in Backend development and networking. I enjoy building secure, efficient systems using tools like Python, Laravel and etc.",
            btn_view_inventory: "View Inventory",
            btn_download_cv: "Download CV",

            // Projects Section
            projects_title: "PROJECTS",
            btn_view_details: "View Details",
            btn_source_code: "Source Code",
            btn_live_demo: "Live Demo",
            btn_live_web_app: "Live Web App",
            btn_close: "Close",
            btn_prev: "Previous",
            btn_next: "Next",

            // Project Cards & Modals
            proj_python_title: "Python Project",
            proj_python_desc: "A decentralized ledger built from scratch using Python.",
            proj_python_modal_desc: "A decentralized ledger built from scratch using Python.",
            btn_learning_python: "Learning Python",
            btn_diagram_py: "Diagram Py",

            proj_webdev_title: "Web Development",
            proj_webdev_desc: "A personal portfolio website showcasing my projects and skills.",
            proj_webdev_modal_desc: "A personal portfolio website showcasing my projects and skills.",

            proj_snake_title: "Snake Game",
            proj_snake_desc: "A classic Snake Game built using Python.",
            proj_snake_modal_desc: "A classic Snake Game built using Python.",

            proj_bot_title: "Telegram Bot",
            proj_bot_desc: "Telegram bot projects.",
            proj_bot_modal_desc: "Telegram bot projects.",

            proj_mediahub_title: "Media Downloader Hub",
            proj_mediahub_desc: "A web interface for downloading media via my Telegram bot.",
            proj_mediahub_modal_desc: "A dedicated web interface for downloading media via my Telegram bot.",

            proj_facerec_title: "Face Recognition System",
            proj_facerec_desc: "Student Management System with Face Recognition",
            proj_facerec_modal_desc: "Student Management System with Face Recognition and attendance tracking.",

            proj_calc_title: "Calculator GUI",
            proj_calc_desc: "A graphical user interface calculator.",
            proj_calc_modal_desc: "A graphical user interface calculator project.",

            proj_tips_title: "Tips Dataset Analysis",
            proj_tips_desc: "Data analysis and visualization of the tips dataset.",
            proj_tips_modal_desc: "Data analysis and visualization of the tips dataset using Python.",

            proj_aiedu_title: "Analyzing AI in Education",
            proj_aiedu_desc: "Data analysis and visualization of AI perception in education.",
            proj_aiedu_modal_desc: "Data analysis and visualization of AI perception in education using Python.",

            proj_audiowav_title: "AudioWAV",
            proj_audiowav_desc: "A web application for handling audio WAV files.",
            proj_audiowav_modal_desc: "A web application for handling audio WAV files.",

            proj_qrcode_title: "QR Code Generator",
            proj_qrcode_desc: "A web application for generating custom QR codes.",
            proj_qrcode_modal_desc: "A web application for generating custom QR codes.",

            proj_nagavoice_title: "Naga Voice AI",
            proj_nagavoice_desc: "An AI voice application with interactive features.",
            proj_nagavoice_modal_desc: "An AI voice application with interactive features.",

            proj_oauth_title: "OAuth Authentication",
            proj_oauth_desc: "A web application demonstrating OAuth authentication flow.",
            proj_oauth_modal_desc: "A web application demonstrating OAuth authentication flow.",

            proj_attendance_title: "Attendance Dashboard",
            proj_attendance_desc: "A web application for tracking and managing attendance.",
            proj_attendance_modal_desc: "A web application for tracking and managing attendance.",

            proj_chatbot_title: "ChatBot Shop",
            proj_chatbot_desc: "An AI chatbot shop application.",
            proj_chatbot_modal_desc: "An AI chatbot shop application.",

            proj_ecommerce_title: "Ecommerce Year 3",
            proj_ecommerce_desc: "My Year 3 Ecommerce project.",
            proj_ecommerce_modal_desc: "My Year 3 Ecommerce project.",

            proj_winserver_title: "Windows Server & AWS Lab",
            proj_winserver_desc: "Hands-on IT lab series covering Windows Server 2022 administration, Active Directory, GPO, and AWS Cloud integration.",
            proj_winserver_modal_desc: "A hands-on video tutorial series on Windows Server 2022 system administration, Active Directory, Group Policy, and AWS Cloud integration.",
            btn_watch_playlist: "Watch Playlist",
            btn_youtube_channel: "YouTube Channel",

            // Skills Section
            skills_section_title: "Technical Skills",
            skill_cat_frontend: "Front-End",
            skill_cat_backend: "Back-End",
            skill_cat_tools: "Tools",
            skill_cat_softskills: "Programming & Others",
            skill_problem_solving: "Problem Solving",
            skill_teamwork: "Teamwork",
            skill_leadership: "Leadership",

            // Journey / Experience Section
            journey_title: "My Journey",
            journey_intro: "No professional experience yet, but actively building projects, learning new skills, and eager for opportunities to work and grow.",
            timeline_badge_present: "Present",
            timeline_hub_title: "Media Downloader Hub Bot",
            timeline_hub_desc: "Launched a dedicated web application for my Telegram media downloader bot.<br><a href=\"https://media-downloader-hub-bot.vercel.app\" target=\"_blank\" class=\"pixel-link-btn\">View Bot App</a> <a href=\"https://beautiful-reflection-production.up.railway.app/\" target=\"_blank\" class=\"pixel-link-btn\">View Ecommerce App</a> <a href=\"https://t.me/rupp_shop_bot\" target=\"_blank\" class=\"pixel-link-btn\">View Rupp Shop Bot</a>",
            timeline_ntti_title: "National Technical Training Institute (NTTI)",
            timeline_ntti_desc: "Study Computer Services.",
            timeline_php_title: "PHP, Laravel & React.js",
            timeline_php_desc: "Study PHP, Laravel, and React.js to build scalable, modern full-stack web applications.",
            timeline_attendance_title: "School Attendance System",
            timeline_attendance_desc: "<a href=\"https://school-attendance-system-kappa.vercel.app/\" target=\"_blank\" class=\"pixel-link-btn\">Attendance</a>",
            timeline_webdev_title: "Started Web Development",
            timeline_webdev_desc: "Began learning the fundamentals of HTML, CSS, and Bootstrap to build responsive user interfaces.",
            timeline_python_title: "Deepening Python Knowledge",
            timeline_python_desc: "Mastered automation scripts and GUI development using libraries like Selenium and Tkinter.",
            timeline_fullstack_title: "Building Full-Stack Projects",
            timeline_fullstack_desc: "Developing a comprehensive management system using Python (Flask) and SQL. Focusing on backend logic and database architecture.",

            // Connect Section
            connect_title: "MULTIPLAYER",
            connect_placeholder: "Type a message...",
            btn_send: "Send",
            footer_copy: "&copy; 2025 Mao Visal. Crafted with HTML & CSS.",

            // Alerts & Messaging
            contact_alert_error: "[Error] Please enter a message before sending.",
            contact_alert_success: "[Success] Your message has been prepared: ",
            contact_email_subject: "Multiplayer Connection",

            // CV Page Translations
            cv_download_btn: "Download CV as PDF",
            cv_generating_btn: "Generating PDF...",
            cv_job_title: "Student at Royal University of Phnom Penh",
            cv_location: "Phnom Penh, Cambodia",

            cv_sec_personal: "Personal Information",
            cv_lbl_name: "Name:",
            cv_val_name: "Mao Visal",
            cv_lbl_sex: "Sex:",
            cv_val_sex: "Male",
            cv_lbl_nat: "National Status:",
            cv_val_nat: "Cambodia",
            cv_lbl_marital: "Marital Status:",
            cv_val_marital: "Single",
            cv_lbl_dob: "Date of Birth:",
            cv_val_dob: "18 February 2006",
            cv_lbl_pob: "Place of Birth:",
            cv_val_pob: "Lorkambor Village, Svay Pak Sangkat, Russey Keo District, Phnom Penh, Cambodia.",

            cv_sec_summary: "Professional Summary",
            cv_summary_text: "Motivated Computer Science student currently pursuing a 4-year Bachelor's degree at the Royal University of Phnom Penh (RUPP), with strong knowledge of software engineering, backend development, and cybersecurity fundamentals. Experienced in building real-world applications using Python, Flask, FastAPI, PHP, Laravel, REST APIs, MySQL, SQLite, HTML, CSS, and JavaScript. Skilled at developing full-stack web applications, desktop software, automation tools, Telegram bots, and AI-assisted solutions while following secure software development practices. Familiar with Git, GitHub, Linux, networking concepts, authentication systems, and API integration. Passionate about solving complex technical problems, collaborating within teams, and continuously learning modern technologies to build scalable, secure, and high-performance applications.",

            cv_sec_education: "Education & Certifications",
            cv_edu_rupp_title: "Royal University of Phnom Penh (RUPP)",
            cv_edu_rupp_sub: "Bachelor of Computer Science and Engineering | 2023 – Present",
            cv_edu_rupp_year: "Current Year:",
            cv_edu_rupp_year_val: "Year 1",
            cv_edu_rupp_gpa: "Current GPA:",
            cv_edu_rupp_gpa_val: "3.42 / 4.0 (Year 1)",
            cv_edu_puc_title: "Paññāsāstra University of Cambodia",
            cv_edu_puc_sub: "Intensive English for Academic Purposes (IEAP), Levels 1–4 | 2025 – 2026",
            cv_edu_puc_sub1: "IEAP-Level (1-4) | 2025 – 2026",
            cv_edu_puc_sub2: "Intensive English for Academic Purposes",
            cv_edu_highschool_title: "Chea Sim Chamroeun Roth High School",
            cv_edu_highschool_sub: "High School Diploma (Baccalaureate II) | 2023",
            cv_edu_etech_title: "ETECH Center | 2024",
            cv_edu_etech_li1: "Basic & Advanced Python Programming",
            cv_edu_etech_li2: "Flask Web Development",
            cv_edu_etech_li3: "Software Project Development",
            cv_edu_ntti_title: "National Technical Training Institute (NTTI)",
            cv_edu_ntti_sub: "Computer Services Internship | 2026 – Present",

            cv_sec_skills: "Technical Skills",
            cv_skills_grp1: "Programming Languages",
            cv_skills_grp2: "Backend & APIs",
            cv_skills_grp3: "Frontend & UI",
            cv_skills_grp4: "Databases",
            cv_skills_grp5: "DevOps & Tools",
            cv_skills_grp6: "Data Science & Desktop Dev",

            cv_sec_projects: "Professional Projects",
            cv_proj1_title: "Student Management System",
            cv_proj1_sub: "Python • Flask • MySQL • Face Recognition",
            cv_proj1_li1: "Developed a complete student management platform for academic administration.",
            cv_proj1_li2: "Implemented facial recognition attendance tracking, secure authentication, and role-based access.",
            cv_proj1_li3: "Designed a normalized MySQL database for records, reports, departments, classes, and scheduling.",

            cv_proj2_title: "Multi-Platform Media Downloader",
            cv_proj2_sub: "Python • Flask • Telegram Bot • yt-dlp",
            cv_proj2_li1: "Built a downloader supporting YouTube, TikTok, Facebook, Instagram, Reddit, and Twitter/X.",
            cv_proj2_li2: "Developed a responsive web dashboard and integrated a Telegram Bot for automated downloads.",

            cv_proj3_title: "Web Shop Application & Telegram Automation Bots",
            cv_proj3_sub: "Flask • MySQL • REST API • Python",
            cv_proj3_li1: "Built an e-commerce application with secure authentication, user management, and REST APIs.",
            cv_proj3_li2: "Developed workflow automation bots for media downloading and file processing via Telegram Bot API.",

            cv_proj4_title: "Python Blockchain Project & Data Analysis",
            cv_proj4_sub: "Python • Pandas • NumPy • Matplotlib",
            cv_proj4_li1: "Developed a decentralized blockchain ledger utilizing SHA-based block hashing and transaction validation.",
            cv_proj4_li2: "Conducted data cleaning, EDA, and statistical analysis on datasets including \"Tips\" and \"AI in Education\".",

            cv_proj5_title: "QR Code Generator & Naga Voice AI",
            cv_proj5_sub: "Web Applications • AI • Telegram Bots",
            cv_proj5_li1: "Developed a web application for generating custom QR codes.",
            cv_proj5_li2: "Built Naga Voice AI, an AI voice application with interactive features.",
            cv_proj5_li3: "Integrated corresponding Telegram bots (@my_qr_awesome_bot, @NagaVoiceBot) for user accessibility.",

            cv_proj6_title: "IT Lab Series: Windows Server & AWS",
            cv_proj6_sub: "System Administration • Windows Server 2022 • Active Directory • AWS",
            cv_proj6_li1: "Created hands-on instructional video tutorials on YouTube demonstrating Windows Server 2022 administration.",
            cv_proj6_li2: "Demonstrated Active Directory Domain Services, GPO configuration, DHCP, and file sharing permissions.",
            cv_proj6_li3: "Integrated on-premises virtual lab environments with AWS Cloud infrastructure.",

            cv_sec_experience: "Experience",
            cv_exp_intern_title: "IT Support Intern",
            cv_exp_intern_sub: "NTTI Computer Service | Duration: 1 Month (Part-time: Saturday & Sunday)",
            cv_exp_intern_li1: "Assisted with basic computer hardware and software troubleshooting.",
            cv_exp_intern_li2: "Supported computer maintenance and system installation.",
            cv_exp_intern_li3: "Gained practical experience in computer services and IT support.",

            cv_exp_dev_title: "Independent Software Developer",
            cv_exp_dev_desc: "Independently designed and developed numerous software projects including web applications, backend systems, desktop applications, automation tools, Telegram bots, blockchain applications, and data analysis projects. These experiences strengthened my understanding of software architecture, database design, REST APIs, authentication, debugging, Git version control, and secure software development practices.",

            cv_sec_softskills: "Soft Skills",
            cv_soft_1: "✔️ Problem Solving & Critical Thinking",
            cv_soft_2: "✔️ Leadership & Teamwork",
            cv_soft_3: "✔️ Adaptability & Time Management",
            cv_soft_4: "✔️ Fast Learning & Self-Motivation",

            cv_sec_languages: "Languages",
            cv_lang_1: "🇰🇭 <strong>Khmer</strong> — Native",
            cv_lang_2: "🇬🇧 <strong>English</strong> — Intermediate",

            cv_sec_interests: "Interests",
            cv_int_1: "🚀 Software Engineering & Backend Dev",
            cv_int_2: "🧠 Artificial Intelligence & Machine Learning",
            cv_int_3: "🛡️ Cybersecurity & Ethical Hacking",
            cv_int_4: "☁️ Cloud Computing & Networking",
            cv_int_5: "🌍 Open Source Contribution"
        },

        km: {
            // Document Metadata
            doc_title: "ម៉ៅ វិសាល | គេហទំព័រផ្ទាល់ខ្លួន (Portfolio)",
            cv_doc_title: "ម៉ៅ វិសាល - ប្រវត្តិរូបសង្ខេប (CV)",

            // Navigation
            nav_home: "ទំព័រដើម",
            nav_profile: "ព័ត៌មានផ្ទាល់ខ្លួន",
            nav_projects: "គម្រោង",
            nav_skills: "ជំនាញ",
            nav_experience: "បទពិសោធន៍",
            nav_connect: "ទំនាក់ទំនង",
            nav_theme: "ប្តូរពណ៌",
            nav_theme_title: "ប្តូរពន្លឺ / ងងឹត",
            nav_lang_aria: "ជ្រើសរើសភាសា",
            lang_en: "English",
            lang_km: "ភាសាខ្មែរ",
            lang_ru: "ភាសារុស្ស៊ី",

            // Hero Section
            hero_title: "សួស្តីពិភពលោក",
            hero_subtitle: "សូមស្វាគមន៍មកកាន់គេហទំព័ររបស់ខ្ញុំ។",
            social_twitter: "Twitter",
            social_instagram: "Instagram",
            social_tiktok: "TikTok",
            social_telegram: "Telegram",
            social_youtube: "YouTube",

            // Profile / About Section
            profile_name: "ម៉ៅ វិសាល",
            profile_role: "និស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ",
            profile_bio: "សួស្តី! ខ្ញុំបាទឈ្មោះ <strong>ម៉ៅ វិសាល</strong> ជានិស្សិតផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រនៅសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP) និងកំពុងសិក្សាជំនាញសេវាកម្មកុំព្យូទ័រនៅវិទ្យាស្ថានជាតិបណ្តុះបណ្តាលបច្ចេកទេស (NTTI) ដែលមានជំនាញពិសេសលើការអភិវឌ្ឍ Backend និងប្រព័ន្ធបណ្តាញ (Networking)។ ខ្ញុំចូលចិត្តបង្កើតប្រព័ន្ធដែលមានសុវត្ថិភាព និងប្រសិទ្ធភាពខ្ពស់ដោយប្រើប្រាស់ Python, Laravel និងបច្ចេកវិទ្យាជាច្រើនទៀត។",
            btn_view_inventory: "មើលបញ្ជីគម្រោង",
            btn_download_cv: "ទាញយក CV",

            // Projects Section
            projects_title: "គម្រោងស្នាដៃ",
            btn_view_details: "មើលព័ត៌មានលម្អិត",
            btn_source_code: "កូដប្រភព",
            btn_live_demo: "មើលសាកល្បងផ្ទាល់",
            btn_live_web_app: "ចូលទៅកាន់ Web App",
            btn_close: "បិទ",
            btn_prev: "ថយក្រោយ",
            btn_next: "បន្ទាប់",

            // Project Cards & Modals
            proj_python_title: "Python Project",
            proj_python_desc: "ប្រព័ន្ធកត់ត្រាទិន្នន័យវិមជ្ឈការ (Blockchain Ledger) បង្កើតឡើងដោយផ្ទាល់ជាមួយ Python។",
            proj_python_modal_desc: "ប្រព័ន្ធកត់ត្រាទិន្នន័យវិមជ្ឈការ (Blockchain Ledger) បង្កើតឡើងដោយផ្ទាល់ជាមួយ Python។",
            btn_learning_python: "មេរៀន Python",
            btn_diagram_py: "Diagram Py",

            proj_webdev_title: "Web Development",
            proj_webdev_desc: "គេហទំព័រផ្ទាល់ខ្លួន (Portfolio) បង្ហាញពីគម្រោង និងជំនាញបច្ចេកវិទ្យារបស់ខ្ញុំ។",
            proj_webdev_modal_desc: "គេហទំព័រផ្ទាល់ខ្លួន (Portfolio) បង្ហាញពីគម្រោង និងជំនាញបច្ចេកវិទ្យារបស់ខ្ញុំ។",

            proj_snake_title: "Snake Game",
            proj_snake_desc: "ហ្គេមពស់បែប Classic បង្កើតឡើងដោយប្រើប្រាស់ Python។",
            proj_snake_modal_desc: "ហ្គេមពស់បែប Classic បង្កើតឡើងដោយប្រើប្រាស់ Python។",

            proj_bot_title: "Telegram Bot",
            proj_bot_desc: "គម្រោងប្រព័ន្ធ Telegram Bot សម្រាប់ស្វ័យប្រវត្តិកម្ម។",
            proj_bot_modal_desc: "គម្រោងប្រព័ន្ធ Telegram Bot សម្រាប់ស្វ័យប្រវត្តិកម្ម។",

            proj_mediahub_title: "Media Downloader Hub",
            proj_mediahub_desc: "គេហទំព័រសម្រាប់ទាញយកវីដេអូ និងមេឌៀតាមរយៈ Telegram Bot។",
            proj_mediahub_modal_desc: "គេហទំព័រផ្លូវការសម្រាប់ទាញយកវីដេអូ និងមេឌៀតាមរយៈ Telegram Bot។",

            proj_facerec_title: "Face Recognition System",
            proj_facerec_desc: "ប្រព័ន្ធគ្រប់គ្រងសិស្ស ជាមួយនឹងការស្កេនមុខ (Student Management System)",
            proj_facerec_modal_desc: "ប្រព័ន្ធគ្រប់គ្រងសិស្ស ជាមួយនឹងការស្កេនមុខ និងកត់ត្រាវត្តមានដោយស្វ័យប្រវត្តិ។",

            proj_calc_title: "Calculator GUI",
            proj_calc_desc: "កម្មវិធីគិតលេខដែលមានផ្ទាំងបញ្ជាក្រាហ្វិក (GUI) ងាយស្រួលប្រើប្រាស់។",
            proj_calc_modal_desc: "កម្មវិធីគិតលេខដែលមានផ្ទាំងបញ្ជាក្រាហ្វិក (GUI) ងាយស្រួលប្រើប្រាស់។",

            proj_tips_title: "Tips Dataset Analysis",
            proj_tips_desc: "ការវិភាគ និងបង្ហាញទិន្នន័យលើសំណុំទិន្នន័យ Tips (Data Analysis)។",
            proj_tips_modal_desc: "ការវិភាគ និងបង្ហាញទិន្នន័យលើសំណុំទិន្នន័យ Tips ដោយប្រើប្រាស់ Python។",

            proj_aiedu_title: "Analyzing AI in Education",
            proj_aiedu_desc: "ការវិភាគ និងបង្ហាញទិន្នន័យស្តីពីទស្សនៈនៃការប្រើប្រាស់ AI ក្នុងការអប់រំ។",
            proj_aiedu_modal_desc: "ការវិភាគ និងបង្ហាញទិន្នន័យស្តីពីទស្សនៈនៃការប្រើប្រាស់ AI ក្នុងការអប់រំដោយប្រើ Python។",

            proj_audiowav_title: "AudioWAV",
            proj_audiowav_desc: "កម្មវិធីគេហទំព័រសម្រាប់គ្រប់គ្រង និងកែច្នៃឯកសារសំឡេង WAV។",
            proj_audiowav_modal_desc: "កម្មវិធីគេហទំព័រសម្រាប់គ្រប់គ្រង និងកែច្នៃឯកសារសំឡេង WAV។",

            proj_qrcode_title: "QR Code Generator",
            proj_qrcode_desc: "កម្មវិធីគេហទំព័រសម្រាប់បង្កើត QR Code ផ្ទាល់ខ្លួនបានយ៉ាងរហ័ស។",
            proj_qrcode_modal_desc: "កម្មវិធីគេហទំព័រសម្រាប់បង្កើត QR Code ផ្ទាល់ខ្លួនបានយ៉ាងរហ័ស។",

            proj_nagavoice_title: "Naga Voice AI",
            proj_nagavoice_desc: "កម្មវិធីសំឡេង AI ដែលមានមុខងារអន្តរកម្មឆ្លាតវៃ។",
            proj_nagavoice_modal_desc: "កម្មវិធីសំឡេង AI ដែលមានមុខងារអន្តរកម្មឆ្លាតវៃ។",

            proj_oauth_title: "OAuth Authentication",
            proj_oauth_desc: "កម្មវិធីគេហទំព័របង្ហាញពីលំហូរការផ្ទៀងផ្ទាត់សុវត្ថិភាពដោយប្រើប្រាស់ OAuth។",
            proj_oauth_modal_desc: "កម្មវិធីគេហទំព័របង្ហាញពីលំហូរការផ្ទៀងផ្ទាត់សុវត្ថិភាពដោយប្រើប្រាស់ OAuth។",

            proj_attendance_title: "Attendance Dashboard",
            proj_attendance_desc: "កម្មវិធីគេហទំព័រសម្រាប់កត់ត្រា និងគ្រប់គ្រងទិន្នន័យវត្តមាន។",
            proj_attendance_modal_desc: "កម្មវិធីគេហទំព័រសម្រាប់កត់ត្រា និងគ្រប់គ្រងទិន្នន័យវត្តមាន។",

            proj_chatbot_title: "ChatBot Shop",
            proj_chatbot_desc: "កម្មវិធី AI Chatbot សម្រាប់ហាង និងការឆ្លើយតបអតិថិជន។",
            proj_chatbot_modal_desc: "កម្មវិធី AI Chatbot សម្រាប់ហាង និងការឆ្លើយតបអតិថិជន។",

            proj_ecommerce_title: "Ecommerce Year 3",
            proj_ecommerce_desc: "គម្រោងគេហទំព័រលក់ទំនិញអនឡាញ (E-commerce) ឆ្នាំទី៣។",
            proj_ecommerce_modal_desc: "គម្រោងគេហទំព័រលក់ទំនិញអនឡាញ (E-commerce) ឆ្នាំទី៣ របស់ខ្ញុំ។",

            proj_winserver_title: "Windows Server & AWS Lab",
            proj_winserver_desc: "ស៊េរីវីដេអូបង្រៀនអនុវត្តជាក់ស្តែងស្តីពីការគ្រប់គ្រង Windows Server 2022, Active Directory, GPO និងការតភ្ជាប់ជាមួយ AWS Cloud។",
            proj_winserver_modal_desc: "ស៊េរីវីដេអូនេះបង្កើតឡើងសម្រាប់សិស្ស IT និងអ្នកដែលចង់ចាប់ផ្តើមសិក្សាពី System Administration ដោយបង្ហាញពីការរៀបចំ Lab, ការដំឡើង Windows Server 2022, Active Directory, GPO រហូតដល់ការតភ្ជាប់ជាមួយប្រព័ន្ធ AWS Cloud។",
            btn_watch_playlist: "មើល Playlist លើ YouTube",
            btn_youtube_channel: "ឆានែល YouTube",

            // Skills Section
            skills_section_title: "ជំនាញបច្ចេកវិទ្យា",
            skill_cat_frontend: "Front-End",
            skill_cat_backend: "Back-End",
            skill_cat_tools: "ឧបករណ៍ និងប្រព័ន្ធ (Tools)",
            skill_cat_softskills: "ការសរសេរកូដ និងជំនាញទន់",
            skill_problem_solving: "ការដោះស្រាយបញ្ហា",
            skill_teamwork: "ការធ្វើការងារជាក្រុម",
            skill_leadership: "ភាពជាអ្នកដឹកនាំ",

            // Journey / Experience Section
            journey_title: "ដំណើរវិវត្តន៍របស់ខ្ញុំ",
            journey_intro: "ទោះបីជាទើបតែចាប់ផ្តើម ប៉ុន្តែខ្ញុំបាននិងកំពុងអនុវត្តគម្រោងជាក់ស្តែងជាច្រើន អភិវឌ្ឍជំនាញថ្មីៗជាបន្តបន្ទាប់ និងត្រៀមខ្លួនជានិច្ចសម្រាប់ឱកាសការងារ និងការរីកចម្រើន។",
            timeline_badge_present: "បច្ចុប្បន្ន",
            timeline_hub_title: "Media Downloader Hub Bot",
            timeline_hub_desc: "បានដាក់ឱ្យដំណើរការគេហទំព័រផ្លូវការសម្រាប់ Telegram Bot ទាញយកមេឌៀ។<br><a href=\"https://media-downloader-hub-bot.vercel.app\" target=\"_blank\" class=\"pixel-link-btn\">ចូលទៅកាន់ Bot App</a> <a href=\"https://beautiful-reflection-production.up.railway.app/\" target=\"_blank\" class=\"pixel-link-btn\">ចូលទៅកាន់ Ecommerce</a> <a href=\"https://t.me/rupp_shop_bot\" target=\"_blank\" class=\"pixel-link-btn\">ចូលទៅកាន់ Rupp Shop Bot</a>",
            timeline_ntti_title: "វិទ្យាស្ថានជាតិបណ្តុះបណ្តាលបច្ចេកទេស (NTTI)",
            timeline_ntti_desc: "សិក្សាផ្នែកសេវាកម្មកុំព្យូទ័រ (Computer Services)។",
            timeline_php_title: "PHP, Laravel & React.js",
            timeline_php_desc: "សិក្សា PHP, Laravel និង React.js ដើម្បីបង្កើតកម្មវិធី Full-Stack ទំនើប និងមានគុណភាពខ្ពស់។",
            timeline_attendance_title: "ប្រព័ន្ធកត់ត្រាវត្តមានសិស្ស",
            timeline_attendance_desc: "<a href=\"https://school-attendance-system-kappa.vercel.app/\" target=\"_blank\" class=\"pixel-link-btn\">មើលប្រព័ន្ធវត្តមាន</a>",
            timeline_webdev_title: "ចាប់ផ្តើមរៀន Web Development",
            timeline_webdev_desc: "បានចាប់ផ្តើមរៀនមូលដ្ឋានគ្រឹះ HTML, CSS និង Bootstrap ដើម្បីបង្កើតផ្ទាំងគេហទំព័រឆ្លើយតបគ្រប់ឧបករណ៍ (Responsive UI)។",
            timeline_python_title: "ពង្រឹងចំណេះដឹង Python",
            timeline_python_desc: "បង្កើនសមត្ថភាពសរសេរកូដស្វ័យប្រវត្តិកម្ម និងការអភិវឌ្ឍ GUI ដោយប្រើ Selenium និង Tkinter។",
            timeline_fullstack_title: "កសាងគម្រោង Full-Stack",
            timeline_fullstack_desc: "អភិវឌ្ឍប្រព័ន្ធគ្រប់គ្រងទិន្នន័យដោយប្រើ Python (Flask) និង SQL ដោយផ្តោតសំខាន់លើ Backend Logic និងរចនាសម្ព័ន្ធ Database។",

            // Connect Section
            connect_title: "ការតភ្ជាប់ (MULTIPLAYER)",
            connect_placeholder: "សរសេរសារនៅទីនេះ...",
            btn_send: "ផ្ញើសារ",
            footer_copy: "&copy; ២០២៥ ម៉ៅ វិសាល។ បង្កើតឡើងដោយ HTML & CSS។",

            // Alerts & Messaging
            contact_alert_error: "[កំហុស] សូមបញ្ចូលសារមុននឹងផ្ញើ។",
            contact_alert_success: "[ជោគជ័យ] សាររបស់អ្នកត្រូវបានរៀបចំរួចរាល់៖ ",
            contact_email_subject: "ការទំនាក់ទំនងពីគេហទំព័រ (Multiplayer Connection)",

            // CV Page Translations
            cv_download_btn: "ទាញយក CV ជា PDF",
            cv_generating_btn: "កំពុងបង្កើត PDF...",
            cv_job_title: "និស្សិតនៅសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
            cv_location: "រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា",

            cv_sec_personal: "ព័ត៌មានផ្ទាល់ខ្លួន",
            cv_lbl_name: "ឈ្មោះ៖",
            cv_val_name: "ម៉ៅ វិសាល",
            cv_lbl_sex: "ភេទ៖",
            cv_val_sex: "ប្រុស",
            cv_lbl_nat: "សញ្ជាតិ៖",
            cv_val_nat: "ខ្មែរ",
            cv_lbl_marital: "ស្ថានភាពគ្រួសារ៖",
            cv_val_marital: "នៅលីវ",
            cv_lbl_dob: "ថ្ងៃខែឆ្នាំកំណើត៖",
            cv_val_dob: "១៨ កុម្ភៈ ២០០៦",
            cv_lbl_pob: "ទីកន្លែងកំណើត៖",
            cv_val_pob: "ភូមិឡកំបោរ សង្កាត់ស្វាយប៉ាក ខណ្ឌឫស្សីកែវ រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា",

            cv_sec_summary: "សេចក្តីសង្ខេបវិជ្ជាជីវៈ",
            cv_summary_text: "និស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រប្រកបដោយឆន្ទៈ និងការប្តេជ្ញាចិត្តខ្ពស់ កំពុងសិក្សាថ្នាក់បរិញ្ញាបត្ររយៈពេល ៤ ឆ្នាំនៅសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP) ជាមួយចំណេះដឹងរឹងមាំលើវិស្វកម្មកម្មវិធី ការអភិវឌ្ឍ Backend និងមូលដ្ឋានគ្រឹះសន្តិសុខសាយប័រ។ មានបទពិសោធន៍ក្នុងការកសាងកម្មវិធីជាក់ស្តែងដោយប្រើ Python, Flask, FastAPI, PHP, Laravel, REST APIs, MySQL, SQLite, HTML, CSS និង JavaScript។ មានជំនាញក្នុងការបង្កើតកម្មវិធី Full-Stack, កម្មវិធីលើ Desktop, ឧបករណ៍ស្វ័យប្រវត្តិកម្ម, Telegram Bots និងដំណោះស្រាយជំនួយដោយ AI ស្របតាមគោលការណ៍សុវត្ថិភាព។ ស្ទាត់ជំនាញជាមួយ Git, GitHub, Linux, បណ្តាញកុំព្យូទ័រ, ប្រព័ន្ធផ្ទៀងផ្ទាត់ និងការតភ្ជាប់ API។ ស្រឡាញ់ការដោះស្រាយបញ្ហាបច្ចេកទេសស្មុគស្មាញ ការសហការជាក្រុម និងការរៀនសូត្របច្ចេកវិទ្យាថ្មីៗឥតឈប់ឈរ ដើម្បីបង្កើតកម្មវិធីដែលអាចពង្រីកបាន មានសុវត្ថិភាព និងប្រសិទ្ធភាពខ្ពស់។",

            cv_sec_education: "ការអប់រំ និងវិញ្ញាបនបត្រ",
            cv_edu_rupp_title: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP)",
            cv_edu_rupp_sub: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ និងវិស្វកម្ម | ២០២៣ – បច្ចុប្បន្ន",
            cv_edu_rupp_year: "ឆ្នាំសិក្សាបច្ចុប្បន្ន៖",
            cv_edu_rupp_year_val: "ឆ្នាំទី ១",
            cv_edu_rupp_gpa: "ពិន្ទុមធ្យមបច្ចុប្បន្ន (GPA)៖",
            cv_edu_rupp_gpa_val: "3.42 / 4.0 (ឆ្នាំទី ១)",
            cv_edu_puc_title: "សាកលវិទ្យាល័យបញ្ញាសាស្ត្រកម្ពុជា",
            cv_edu_puc_sub: "ភាសាអង់គ្លេសសម្រាប់ការសិក្សាជាន់ខ្ពស់ (IEAP) កម្រិត ១–៤ | ២០២៥ – ២០២៦",
            cv_edu_puc_sub1: "IEAP-Level (1-4) | ២០២៥ – ២០២៦",
            cv_edu_puc_sub2: "ភាសាអង់គ្លេសដែលពង្រឹងសម្រាប់ការសិក្សាជាន់ខ្ពស់",
            cv_edu_highschool_title: "វិទ្យាល័យ ជា ស៊ីម ចំរើនរដ្ឋ",
            cv_edu_highschool_sub: "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប) | ២០២៣",
            cv_edu_etech_title: "មជ្ឈមណ្ឌល ETECH | ២០២៤",
            cv_edu_etech_li1: "ការសរសេរកូដ Python កម្រិតមូលដ្ឋាន និងកម្រិតខ្ពស់",
            cv_edu_etech_li2: "ការអភិវឌ្ឍ Web ជាមួយ Flask",
            cv_edu_etech_li3: "ការអភិវឌ្ឍគម្រោងកម្មវិធីកុំព្យូទ័រ",
            cv_edu_ntti_title: "វិទ្យាស្ថានជាតិបណ្តុះបណ្តាលបច្ចេកទេស (NTTI)",
            cv_edu_ntti_sub: "កម្មសិក្សាសេវាកម្មកុំព្យូទ័រ | ២០២៦ – បច្ចុប្បន្ន",

            cv_sec_skills: "ជំនាញបច្ចេកវិទ្យា",
            cv_skills_grp1: "ភាសាសរសេរកូដ (Programming Languages)",
            cv_skills_grp2: "Backend និង APIs",
            cv_skills_grp3: "Frontend និង UI",
            cv_skills_grp4: "មូលដ្ឋានទិន្នន័យ (Databases)",
            cv_skills_grp5: "DevOps និងឧបករណ៍ (Tools)",
            cv_skills_grp6: "វិទ្យាសាស្ត្រទិន្នន័យ និង Desktop Dev",

            cv_sec_projects: "គម្រោងវិជ្ជាជីវៈ",
            cv_proj1_title: "Student Management System",
            cv_proj1_sub: "Python • Flask • MySQL • Face Recognition",
            cv_proj1_li1: "បានអភិវឌ្ឍប្រព័ន្ធគ្រប់គ្រងសិស្សពេញលេញសម្រាប់ការគ្រប់គ្រងរដ្ឋបាលអប់រំ។",
            cv_proj1_li2: "បានដាក់បញ្ចូលការកត់ត្រាវត្តមានតាមរយៈស្កេនមុខ ការផ្ទៀងផ្ទាត់សុវត្ថិភាព និងការបែងចែកសិទ្ធិប្រើប្រាស់តាមតួនាទី។",
            cv_proj1_li3: "បានរៀបចំរចនាសម្ព័ន្ធ MySQL Database ស្តង់ដារសម្រាប់កំណត់ត្រា របាយការណ៍ ដេប៉ាតឺម៉ង់ ថ្នាក់រៀន និងកាលវិភាគ។",

            cv_proj2_title: "Multi-Platform Media Downloader",
            cv_proj2_sub: "Python • Flask • Telegram Bot • yt-dlp",
            cv_proj2_li1: "បានបង្កើតកម្មវិធីទាញយកមេឌៀគាំទ្រ YouTube, TikTok, Facebook, Instagram, Reddit, និង Twitter/X។",
            cv_proj2_li2: "បានអភិវឌ្ឍផ្ទាំងគេហទំព័រឆ្លើយតប និងភ្ជាប់ Telegram Bot សម្រាប់ដំណើរការទាញយកដោយស្វ័យប្រវត្តិ។",

            cv_proj3_title: "Web Shop Application & Telegram Automation Bots",
            cv_proj3_sub: "Flask • MySQL • REST API • Python",
            cv_proj3_li1: "បានកសាងកម្មវិធីពាណិជ្ជកម្មអេឡិចត្រូនិចជាមួយប្រព័ន្ធសុវត្ថិភាព គ្រប់គ្រងអ្នកប្រើប្រាស់ និង REST APIs។",
            cv_proj3_li2: "បានអភិវឌ្ឍ Bot ស្វ័យប្រវត្តិកម្មសម្រាប់ទាញយកមេឌៀ និងដំណើរការឯកសារតាមរយៈ Telegram Bot API។",

            cv_proj4_title: "Python Blockchain Project & Data Analysis",
            cv_proj4_sub: "Python • Pandas • NumPy • Matplotlib",
            cv_proj4_li1: "បានបង្កើតប្រព័ន្ធ Blockchain Ledger វិមជ្ឈការដោយប្រើ SHA-based block hashing និងការផ្ទៀងផ្ទាត់ប្រតិបត្តិការ។",
            cv_proj4_li2: "បានធ្វើការសម្អាតទិន្នន័យ (Data Cleaning), EDA និងការវិភាគស្ថិតិលើសំណុំទិន្នន័យ \"Tips\" និង \"AI in Education\"។",

            cv_proj5_title: "QR Code Generator & Naga Voice AI",
            cv_proj5_sub: "Web Applications • AI • Telegram Bots",
            cv_proj5_li1: "បានអភិវឌ្ឍកម្មវិធីគេហទំព័រសម្រាប់បង្កើត QR Code ផ្ទាល់ខ្លួន។",
            cv_proj5_li2: "បានបង្កើត Naga Voice AI ជាកម្មវិធីសំឡេង AI ជាមួយមុខងារអន្តរកម្ម។",
            cv_proj5_li3: "បានភ្ជាប់ Telegram Bots ផ្លូវការ (@my_qr_awesome_bot, @NagaVoiceBot) សម្រាប់ភាពងាយស្រួលរបស់អ្នកប្រើប្រាស់។",

            cv_proj6_title: "IT Lab Series: Windows Server & AWS",
            cv_proj6_sub: "System Administration • Windows Server 2022 • Active Directory • AWS",
            cv_proj6_li1: "បានបង្កើតស៊េរីវីដេអូបង្រៀនអនុវត្តជាក់ស្តែងលើ YouTube ស្តីពីការគ្រប់គ្រងប្រព័ន្ធ Windows Server 2022។",
            cv_proj6_li2: "បានបង្ហាញពីការរៀបចំ Active Directory Domain Services, ការកំណត់ GPO, សេវាកម្ម DHCP និងការចែករំលែក File Sharing។",
            cv_proj6_li3: "បានតភ្ជាប់ប្រព័ន្ធ Virtual Lab ជាមួយហេដ្ឋារចនាសម្ព័ន្ធ AWS Cloud។",

            cv_sec_experience: "បទពិសោធន៍ការងារ",
            cv_exp_intern_title: "កម្មសិក្សាការីផ្នែក IT Support (IT Support Intern)",
            cv_exp_intern_sub: "NTTI Computer Service | រយៈពេល៖ ១ ខែ (ក្រៅម៉ោង៖ ថ្ងៃសៅរ៍ និងអាទិត្យ)",
            cv_exp_intern_li1: "ជួយសម្របសម្រួលដោះស្រាយបញ្ហាមូលដ្ឋានលើ Hardware និង Software កុំព្យូទ័រ។",
            cv_exp_intern_li2: "ចូលរួមថែទាំកុំព្យូទ័រ និងដំឡើងប្រព័ន្ធប្រតិបត្តិការ/កម្មវិធីផ្សេងៗ។",
            cv_exp_intern_li3: "ទទួលបានបទពិសោធន៍អនុវត្តជាក់ស្តែងក្នុងផ្នែកសេវាកម្មកុំព្យូទ័រ និង IT Support។",

            cv_exp_dev_title: "អ្នកអភិវឌ្ឍន៍កម្មវិធីឯករាជ្យ (Independent Software Developer)",
            cv_exp_dev_desc: "បានរៀបចំ និងអភិវឌ្ឍគម្រោងកម្មវិធីជាច្រើនដោយផ្ទាល់ រួមមានកម្មវិធីគេហទំព័រ ប្រព័ន្ធ Backend កម្មវិធីលើ Desktop ឧបករណ៍ស្វ័យប្រវត្តិកម្ម Telegram Bots កម្មវិធី Blockchain និងគម្រោងវិភាគទិន្នន័យ។ បទពិសោធន៍ទាំងនេះបានពង្រឹងការយល់ដឹងស៊ីជម្រៅលើរចនាសម្ព័ន្ធកម្មវិធី ការរចនា Database, REST APIs, ប្រព័ន្ធផ្ទៀងផ្ទាត់, ការស្វែងរកកំហុស (Debugging), Git version control និងការអនុវត្តសុវត្ថិភាពក្នុងការសរសេរកូដ។",

            cv_sec_softskills: "ជំនាញទន់ (Soft Skills)",
            cv_soft_1: "✔️ ការដោះស្រាយបញ្ហា និងការត្រិះរិះពិចារណា",
            cv_soft_2: "✔️ ភាពជាអ្នកដឹកនាំ និងការធ្វើការងារជាក្រុម",
            cv_soft_3: "✔️ ភាពបត់បែន និងការគ្រប់គ្រងពេលវេលា",
            cv_soft_4: "✔️ ការរៀនសូត្ររហ័ស និងមានការលើកទឹកចិត្តខ្លួនឯងខ្ពស់",

            cv_sec_languages: "ភាសា",
            cv_lang_1: "🇰🇭 <strong>ភាសាខ្មែរ</strong> — ភាសាកំណើត",
            cv_lang_2: "🇬🇧 <strong>ភាសាអង់គ្លេស</strong> — កម្រិតមធ្យម",

            cv_sec_interests: "ចំណាប់អារម្មណ៍",
            cv_int_1: "🚀 វិស្វកម្មកម្មវិធី និងការអភិវឌ្ឍ Backend",
            cv_int_2: "🧠 បញ្ញាសិប្បនិម្មិត និង Machine Learning",
            cv_int_3: "🛡️ សន្តិសុខសាយប័រ និង Ethical Hacking",
            cv_int_4: "☁️ Cloud Computing និងប្រព័ន្ធបណ្តាញ",
            cv_int_5: "🌍 ការចូលរួមចំណែកក្នុងគម្រោង Open Source"
        },

        ru: {
            // Document Metadata
            doc_title: "Мао Висал | Портфолио",
            cv_doc_title: "Мао Висал — Резюме",

            // Navigation
            nav_home: "Главная",
            nav_profile: "Профиль",
            nav_projects: "Проекты",
            nav_skills: "Навыки",
            nav_experience: "Опыт",
            nav_connect: "Связь",
            nav_theme: "Тема",
            nav_theme_title: "Переключить тему",
            nav_lang_aria: "Выбрать язык",
            lang_en: "Английский",
            lang_km: "Кхмерский",
            lang_ru: "Русский",

            // Hero Section
            hero_title: "HELLO WORLD",
            hero_subtitle: "Добро пожаловать на мой сервер.",
            social_twitter: "Twitter",
            social_instagram: "Instagram",
            social_tiktok: "TikTok",
            social_telegram: "Telegram",
            social_youtube: "YouTube",

            // Profile / About Section
            profile_name: "МАО ВИСАЛ",
            profile_role: "СТУДЕНТ ФАКУЛЬТЕТА КОМПЬЮТЕРНЫХ НАУК",
            profile_bio: "Привет! Я <strong>Мао Висал</strong>, студент факультета компьютерных наук RUPP и обучающийся компьютерным услугам в NTTI, специализируюсь на бэкенд-разработке и сетевых технологиях. Мне нравится создавать безопасные и эффективные системы с использованием Python, Laravel и др.",
            btn_view_inventory: "Инвентарь проектов",
            btn_download_cv: "Скачать резюме",

            // Projects Section
            projects_title: "ПРОЕКТЫ",
            btn_view_details: "Подробнее",
            btn_source_code: "Исходный код",
            btn_live_demo: "Демо-версия",
            btn_live_web_app: "Веб-приложение",
            btn_close: "Закрыть",
            btn_prev: "Назад",
            btn_next: "Вперед",

            // Project Cards & Modals
            proj_python_title: "Проект на Python",
            proj_python_desc: "Децентрализованный реестр (блокчейн), созданный с нуля на Python.",
            proj_python_modal_desc: "Децентрализованный реестр (блокчейн), созданный с нуля на Python.",
            btn_learning_python: "Изучение Python",
            btn_diagram_py: "Диаграмма Python",

            proj_webdev_title: "Веб-разработка",
            proj_webdev_desc: "Персональный сайт-портфолио, демонстрирующий мои проекты и навыки.",
            proj_webdev_modal_desc: "Персональный сайт-портфолио, демонстрирующий мои проекты и навыки.",

            proj_snake_title: "Игра «Змейка»",
            proj_snake_desc: "Классическая игра «Змейка», написанная на Python.",
            proj_snake_modal_desc: "Классическая игра «Змейка», созданная на языке Python.",

            proj_bot_title: "Telegram-бот",
            proj_bot_desc: "Проекты автоматизации и ботов для Telegram.",
            proj_bot_modal_desc: "Проекты автоматизации и ботов для Telegram.",

            proj_mediahub_title: "Media Downloader Hub",
            proj_mediahub_desc: "Веб-интерфейс для загрузки медиафайлов через Telegram-бота.",
            proj_mediahub_modal_desc: "Специализированный веб-интерфейс для загрузки медиафайлов через Telegram-бота.",

            proj_facerec_title: "Система распознавания лиц",
            proj_facerec_desc: "Система управления студентами с функцией распознавания лиц.",
            proj_facerec_modal_desc: "Система управления студентами с функцией распознавания лиц и отслеживанием посещаемости.",

            proj_calc_title: "Калькулятор с GUI",
            proj_calc_desc: "Калькулятор с графическим пользовательским интерфейсом.",
            proj_calc_modal_desc: "Проект калькулятора с графическим интерфейсом на Python.",

            proj_tips_title: "Анализ набора данных Tips",
            proj_tips_desc: "Анализ и визуализация данных о чаевых (Tips Dataset).",
            proj_tips_modal_desc: "Анализ и визуализация данных о чаевых с использованием библиотек Python.",

            proj_aiedu_title: "Анализ ИИ в образовании",
            proj_aiedu_desc: "Анализ и визуализация данных о восприятии ИИ в образовательном процессе.",
            proj_aiedu_modal_desc: "Анализ и визуализация данных о восприятии искусственного интеллекта в образовании с использованием Python.",

            proj_audiowav_title: "AudioWAV",
            proj_audiowav_desc: "Веб-приложение для обработки и управления аудиофайлами WAV.",
            proj_audiowav_modal_desc: "Веб-приложение для обработки и управления аудиофайлами WAV.",

            proj_qrcode_title: "Генератор QR-кодов",
            proj_qrcode_desc: "Веб-приложение для создания персонализированных QR-кодов.",
            proj_qrcode_modal_desc: "Веб-приложение для создания персонализированных QR-кодов.",

            proj_nagavoice_title: "Naga Voice AI",
            proj_nagavoice_desc: "Голосовое приложение на базе ИИ с интерактивными возможностями.",
            proj_nagavoice_modal_desc: "Голосовое приложение на базе искусственного интеллекта с интерактивным функционалом.",

            proj_oauth_title: "OAuth-аутентификация",
            proj_oauth_desc: "Веб-приложение, демонстрирующее процесс аутентификации через OAuth.",
            proj_oauth_modal_desc: "Веб-приложение, демонстрирующее полный цикл аутентификации через протокол OAuth.",

            proj_attendance_title: "Панель посещаемости",
            proj_attendance_desc: "Веб-приложение для отслеживания и учета посещаемости занятий.",
            proj_attendance_modal_desc: "Веб-приложение для отслеживания и учета посещаемости занятий.",

            proj_chatbot_title: "ChatBot Shop",
            proj_chatbot_desc: "Приложение интернет-магазина с интегрированным чат-ботом на базе ИИ.",
            proj_chatbot_modal_desc: "Приложение интернет-магазина с интегрированным чат-ботом на базе искусственного интеллекта.",

            proj_ecommerce_title: "Интернет-магазин (3 курс)",
            proj_ecommerce_desc: "Курсовой проект интернет-магазина за 3-й курс.",
            proj_ecommerce_modal_desc: "Полнофункциональный проект платформы электронной коммерции за 3-й курс.",

            proj_winserver_title: "Лаборатория Windows Server и AWS",
            proj_winserver_desc: "Практический цикл лабораторий: администрирование Windows Server 2022, Active Directory, GPO и интеграция с облаком AWS.",
            proj_winserver_modal_desc: "Обучающая серия видеоуроков по системному администрированию Windows Server 2022, Active Directory, групповым политикам и интеграции с AWS.",
            btn_watch_playlist: "Смотреть плейлист",
            btn_youtube_channel: "YouTube-канал",

            // Skills Section
            skills_section_title: "Технические навыки",
            skill_cat_frontend: "Фронтенд",
            skill_cat_backend: "Бэкенд",
            skill_cat_tools: "Инструменты",
            skill_cat_softskills: "Программирование и др.",
            skill_problem_solving: "Решение задач",
            skill_teamwork: "Командная работа",
            skill_leadership: "Лидерство",

            // Journey / Timeline Section
            journey_title: "Мой путь",
            journey_intro: "Коммерческого опыта пока нет, но я активно создаю проекты, осваиваю новые технологии и открыт для возможностей профессионального роста.",
            timeline_badge_present: "По наст. время",

            timeline_hub_title: "Бот Media Downloader Hub",
            timeline_hub_desc: "Запустил веб-приложение для своего Telegram-бота загрузки медиа.<br><a href=\"https://media-downloader-hub-bot.vercel.app\" target=\"_blank\" class=\"pixel-link-btn\">Открыть бот-приложение</a> <a href=\"https://beautiful-reflection-production.up.railway.app/\" target=\"_blank\" class=\"pixel-link-btn\">Открыть магазин</a> <a href=\"https://t.me/rupp_shop_bot\" target=\"_blank\" class=\"pixel-link-btn\">Открыть Rupp Shop Bot</a>",

            timeline_ntti_title: "Национальный институт технической подготовки (NTTI)",
            timeline_ntti_desc: "Обучение по направлению «Компьютерные услуги и сервис».",

            timeline_php_title: "PHP, Laravel и React.js",
            timeline_php_desc: "Изучение PHP, Laravel и React.js для разработки масштабируемых современных full-stack веб-приложений.",

            timeline_attendance_title: "Система учета посещаемости",
            timeline_attendance_desc: "<a href=\"https://school-attendance-system-kappa.vercel.app/\" target=\"_blank\" class=\"pixel-link-btn\">Посещаемость</a>",

            timeline_webdev_title: "Начало веб-разработки",
            timeline_webdev_desc: "Начал изучение основ HTML, CSS и Bootstrap для создания адаптивных пользовательских интерфейсов.",

            timeline_python_title: "Углубление знаний Python",
            timeline_python_desc: "Освоил скрипты автоматизации и разработку GUI с использованием библиотек Selenium и Tkinter.",

            timeline_fullstack_title: "Разработка Full-Stack проектов",
            timeline_fullstack_desc: "Разработка комплексной системы управления на Python (Flask) и SQL. Фокус на бэкенд-логике и архитектуре баз данных.",

            // Connect / Multiplayer Section
            connect_title: "МУЛЬТИПЛЕЕР",
            connect_placeholder: "Введите сообщение...",
            btn_send: "Отправить",
            footer_copy: "&copy; 2025 Мао Висал. Создано с помощью HTML и CSS.",

            // Interactive Alerts
            contact_alert_error: "[Ошибка] Пожалуйста, введите сообщение перед отправкой.",
            contact_alert_success: "[Успешно] Ваше сообщение подготовлено: ",
            contact_email_subject: "Подключение к мультиплееру",

            // CV Page
            cv_download_btn: "Скачать резюме в PDF",
            cv_generating_btn: "Создание PDF...",
            cv_job_title: "Студент Королевского университета Пномпеня",
            cv_location: "Пномпень, Камбоджа",

            cv_sec_personal: "Личная информация",
            cv_lbl_name: "Имя:",
            cv_val_name: "Мао Висал",
            cv_lbl_sex: "Пол:",
            cv_val_sex: "Мужской",
            cv_lbl_nat: "Гражданство:",
            cv_val_nat: "Камбоджа",
            cv_lbl_marital: "Семейное положение:",
            cv_val_marital: "Холост",
            cv_lbl_dob: "Дата рождения:",
            cv_val_dob: "18 февраля 2006",
            cv_lbl_pob: "Место рождения:",
            cv_val_pob: "Деревня Лоркамбор, коммуна Свай Пак, район Руссей Кео, Пномпень, Камбоджа",

            cv_sec_summary: "Профессиональный профиль",
            cv_summary_text: "Целеустремленный студент факультета компьютерных наук, обучающийся на 4-летней программе бакалавриата в Королевском университете Пномпеня (RUPP). Обладаю глубокими знаниями программной инженерии, бэкенд-разработки и основ кибербезопасности. Имею практический опыт создания приложений на Python, Flask, FastAPI, PHP, Laravel, REST API, MySQL, SQLite, HTML, CSS и JavaScript. Специализируюсь на создании full-stack веб-приложений, десктопного ПО, инструментов автоматизации, Telegram-ботов и решений с ИИ с соблюдением стандартов безопасной разработки. Уверенно работаю с Git, GitHub, Linux, основами компьютерных сетей, системами аутентификации и интеграцией API. Стремлюсь решать сложные технические задачи, работать в команде и постоянно осваивать современные технологии для построения масштабируемых, защищенных и высокопроизводительных решений.",

            cv_sec_education: "Образование и сертификаты",
            cv_edu_rupp_title: "Королевский университет Пномпеня (RUPP)",
            cv_edu_rupp_sub: "Бакалавр компьютерных наук и инженерии | 2023 – Наст. время",
            cv_edu_rupp_year: "Текущий курс:",
            cv_edu_rupp_year_val: "1-й курс",
            cv_edu_rupp_gpa: "Текущий средний балл (GPA):",
            cv_edu_rupp_gpa_val: "3.42 / 4.0 (1-й курс)",
            cv_edu_puc_title: "Университет Панньясастра в Камбодже",
            cv_edu_puc_sub: "Интенсивный академический английский (IEAP), уровни 1–4 | 2025 – 2026",
            cv_edu_puc_sub1: "Программа IEAP (уровни 1-4) | 2025 – 2026",
            cv_edu_puc_sub2: "Интенсивный академический английский язык",
            cv_edu_highschool_title: "Средняя школа Чеа Сим Чамроен Рот",
            cv_edu_highschool_sub: "Аттестат о среднем общем образовании (Бакалавриат II) | 2023",
            cv_edu_etech_title: "Центр ETECH | 2024",
            cv_edu_etech_li1: "Базовое и продвинутое программирование на Python",
            cv_edu_etech_li2: "Веб-разработка на Flask",
            cv_edu_etech_li3: "Разработка программных проектов",
            cv_edu_ntti_title: "Национальный институт технической подготовки (NTTI)",
            cv_edu_ntti_sub: "Стажировка по компьютерным услугам | 2026 – Наст. время",

            cv_sec_skills: "Технические навыки",
            cv_skills_grp1: "Языки программирования",
            cv_skills_grp2: "Бэкенд и API",
            cv_skills_grp3: "Фронтенд и UI",
            cv_skills_grp4: "Базы данных",
            cv_skills_grp5: "DevOps и инструменты",
            cv_skills_grp6: "Data Science и десктоп-разработка",

            cv_sec_projects: "Практические проекты",
            cv_proj1_title: "Система управления студентами",
            cv_proj1_sub: "Python • Flask • MySQL • Face Recognition",
            cv_proj1_li1: "Разработал комплексную платформу для академического учета и управления студентами.",
            cv_proj1_li2: "Реализовал учет посещаемости по распознаванию лиц, безопасную аутентификацию и ролевой доступ.",
            cv_proj1_li3: "Спроектировал нормализованную базу данных MySQL для записей, отчетов, отделений, классов и расписания.",

            cv_proj2_title: "Кроссплатформенный загрузчик медиафайлов",
            cv_proj2_sub: "Python • Flask • Telegram Bot • yt-dlp",
            cv_proj2_li1: "Создал загрузчик с поддержкой YouTube, TikTok, Facebook, Instagram, Reddit и Twitter/X.",
            cv_proj2_li2: "Разработал адаптивную веб-панель и интегрировал Telegram-бота для автоматической загрузки.",

            cv_proj3_title: "Интернет-магазин и боты автоматизации Telegram",
            cv_proj3_sub: "Flask • MySQL • REST API • Python",
            cv_proj3_li1: "Создал приложение электронной коммерции с безопасной аутентификацией, управлением пользователями и REST API.",
            cv_proj3_li2: "Разработал ботов для автоматизации загрузки медиа и обработки файлов через Telegram Bot API.",

            cv_proj4_title: "Блокчейн-проект на Python и анализ данных",
            cv_proj4_sub: "Python • Pandas • NumPy • Matplotlib",
            cv_proj4_li1: "Разработал децентрализованный блокчейн-реестр с хешированием блоков на SHA и валидацией транзакций.",
            cv_proj4_li2: "Провел очистку данных, EDA и статистический анализ на датасетах «Tips» и «AI in Education».",

            cv_proj5_title: "Генератор QR-кодов и Naga Voice AI",
            cv_proj5_sub: "Веб-приложения • ИИ • Telegram-боты",
            cv_proj5_li1: "Разработал веб-приложение для генерации пользовательских QR-кодов.",
            cv_proj5_li2: "Создал Naga Voice AI — голосовое приложение на базе ИИ с интерактивным функционалом.",
            cv_proj5_li3: "Интегрировал Telegram-ботов (@my_qr_awesome_bot, @NagaVoiceBot) для удобного доступа пользователей.",

            cv_proj6_title: "Цикл ИТ-лабораторий: Windows Server и AWS",
            cv_proj6_sub: "Системное администрирование • Windows Server 2022 • Active Directory • AWS",
            cv_proj6_li1: "Создал серию практических видеоуроков на YouTube по администрированию Windows Server 2022.",
            cv_proj6_li2: "Продемонстрировал настройку Active Directory Domain Services, групповых политик (GPO), DHCP и прав общего доступа к файлам.",
            cv_proj6_li3: "Интегрировал локальные виртуальные лаборатории с облачной инфраструктурой AWS Cloud.",

            cv_sec_experience: "Опыт работы",
            cv_exp_intern_title: "Стажер технической поддержки (IT Support)",
            cv_exp_intern_sub: "NTTI Computer Service | Срок: 1 месяц (Частичная занятость: суббота и воскресенье)",
            cv_exp_intern_li1: "Помощь в диагностике и устранении неисправностей компьютерного оборудования и ПО.",
            cv_exp_intern_li2: "Техническое обслуживание компьютеров и установка операционных систем.",
            cv_exp_intern_li3: "Получение практического опыта сервисного обслуживания и технической поддержки ИТ.",

            cv_exp_dev_title: "Независимый разработчик ПО",
            cv_exp_dev_desc: "Самостоятельно спроектировал и разработал множество программных проектов, включая веб-приложения, бэкенд-системы, десктопное ПО, инструменты автоматизации, Telegram-ботов, блокчейн-приложения и проекты анализа данных. Этот опыт укрепил понимание архитектуры ПО, проектирования баз данных, REST API, аутентификации, отладки, контроля версий Git и стандартов безопасной разработки.",

            cv_sec_softskills: "Гибкие навыки (Soft Skills)",
            cv_soft_1: "✔️ Решение сложных задач и критическое мышление",
            cv_soft_2: "✔️ Лидерство и работа в команде",
            cv_soft_3: "✔️ Адаптивность и управление временем",
            cv_soft_4: "✔️ Быстрая обучаемость и самомотивация",

            cv_sec_languages: "Языки",
            cv_lang_1: "🇰🇭 <strong>Кхмерский</strong> — Родной",
            cv_lang_2: "🇬🇧 <strong>Английский</strong> — Средний (Intermediate)",

            cv_sec_interests: "Интересы",
            cv_int_1: "🚀 Программная инженерия и бэкенд-разработка",
            cv_int_2: "🧠 Искусственный интеллект и машинное обучение",
            cv_int_3: "🛡️ Кибербезопасность и этичный хакинг",
            cv_int_4: "☁️ Облачные вычисления и компьютерные сети",
            cv_int_5: "🌍 Участие в проектах с открытым исходным кодом (Open Source)"
        }
    };

    /**
     * Get currently selected language from localStorage or default
     */
    function getCurrentLanguage() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && SUPPORTED_LANGS.includes(saved)) {
                return saved;
            }
        } catch (e) {
            console.warn('[i18n] LocalStorage access unavailable:', e);
        }
        return DEFAULT_LANG;
    }

    /**
     * Get translation for a key
     */
    function t(key, lang) {
        const activeLang = lang || getCurrentLanguage();
        const dict = translations[activeLang] || translations[DEFAULT_LANG];
        if (dict && typeof dict[key] !== 'undefined') {
            return dict[key];
        }
        // Fallback to default language
        if (translations[DEFAULT_LANG] && typeof translations[DEFAULT_LANG][key] !== 'undefined') {
            return translations[DEFAULT_LANG][key];
        }
        return key;
    }

    /**
     * Update all DOM elements with i18n data attributes
     */
    function updateDOM(lang) {
        const dict = translations[lang] || translations[DEFAULT_LANG];

        // 1. Text elements: data-i18n
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                // If element has an icon or FA child and no child span, preserve the icon
                const icon = el.querySelector('i, svg, [class*="fa-"]');
                if (icon) {
                    const span = el.querySelector('span[data-i18n]') || el.querySelector('span');
                    if (span) {
                        span.textContent = dict[key];
                    } else {
                        const iconClone = icon.cloneNode(true);
                        el.textContent = ' ' + dict[key];
                        el.prepend(iconClone);
                    }
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // 2. HTML elements: data-i18n-html
        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // 3. Placeholders: data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        // 4. Titles: data-i18n-title
        document.querySelectorAll('[data-i18n-title]').forEach((el) => {
            const key = el.getAttribute('data-i18n-title');
            if (dict[key] !== undefined) {
                el.setAttribute('title', dict[key]);
            }
        });

        // 5. Aria Labels: data-i18n-aria
        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
            const key = el.getAttribute('data-i18n-aria');
            if (dict[key] !== undefined) {
                el.setAttribute('aria-label', dict[key]);
            }
        });

        // 6. Page Title
        const pageTitleKey = document.querySelector('meta[name="i18n-title-key"]')?.getAttribute('content');
        if (pageTitleKey && dict[pageTitleKey]) {
            document.title = dict[pageTitleKey];
        } else if (document.body.classList.contains('cv-body') || document.querySelector('.cv-document')) {
            document.title = dict.cv_doc_title || document.title;
        } else if (dict.doc_title) {
            document.title = dict.doc_title;
        }

        // 7. Protect all Font Awesome & icon elements from language font-substitution / HarfBuzz PUA conflict
        document.querySelectorAll('i, [class*="fa-"], svg').forEach((icon) => {
            if (icon.getAttribute('lang') !== 'en') {
                icon.setAttribute('lang', 'en');
            }
            icon.setAttribute('translate', 'no');
            icon.setAttribute('aria-hidden', 'true');
        });
    }

    /**
     * Update active switcher buttons and badges
     */
    function updateSwitcherUI(lang) {
        // Dropdown toggle indicators
        const flagEl = document.getElementById('current-lang-flag');
        const codeEl = document.getElementById('current-lang-code');
        if (flagEl) flagEl.textContent = lang === 'km' ? '🇰🇭' : (lang === 'ru' ? '🇷🇺' : '🇬🇧');
        if (codeEl) codeEl.textContent = lang.toUpperCase();

        // Dropdown items
        document.querySelectorAll('.lang-btn').forEach((btn) => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            }
        });

        // CV Page pill buttons
        document.querySelectorAll('.cv-lang-btn').forEach((btn) => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    /**
     * Set language dynamically
     */
    function setLanguage(lang) {
        if (!SUPPORTED_LANGS.includes(lang)) {
            lang = DEFAULT_LANG;
        }

        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            console.warn('[i18n] Failed to persist language:', e);
        }

        document.documentElement.setAttribute('lang', lang);

        updateDOM(lang);
        updateSwitcherUI(lang);

        // Notify other components (like skills tabs in style-js.js)
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    // Initialize on load
    function init() {
        const lang = getCurrentLanguage();
        setLanguage(lang);

        // Bind click events on all language selector elements
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-lang]');
            if (btn) {
                e.preventDefault();
                const targetLang = btn.getAttribute('data-lang');
                if (targetLang && targetLang !== getCurrentLanguage()) {
                    setLanguage(targetLang);
                }
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Public API
    window.i18n = {
        translations,
        getCurrentLanguage,
        setLanguage,
        t
    };
})();

