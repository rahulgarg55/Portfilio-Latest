-- Create database if not exists
CREATE DATABASE IF NOT EXISTS rahul_portfolio;
USE rahul_portfolio;

-- Experience Table
CREATE TABLE IF NOT EXISTS experiences (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    duration VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description JSON NOT NULL,
    sort_order INT DEFAULT 0
);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    tags VARCHAR(255) NOT NULL,
    link VARCHAR(255),
    github VARCHAR(255),
    category VARCHAR(100) NOT NULL,
    sort_order INT DEFAULT 0
);

-- Achievements Table
CREATE TABLE IF NOT EXISTS achievements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    value VARCHAR(255) NOT NULL,
    details TEXT NOT NULL,
    sort_order INT DEFAULT 0
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Clear existing data
TRUNCATE TABLE experiences;
TRUNCATE TABLE projects;
TRUNCATE TABLE achievements;

-- Seed Experiences
INSERT INTO experiences (role, company, duration, location, description, sort_order) VALUES
(
    'Mid Level Software Engineer',
    'Jupitice Justice Technologies Pvt. Ltd.',
    'Aug 2025 – Present',
    'IT Park, Chandigarh',
    '[
        "Worked on Supreme Court and High Court official websites, fetching and processing real-time judicial data and integrating it into production-grade applications.",
        "Developed and integrated Offline KYC (Know Your Customer) solutions for real-world use cases, ensuring data accuracy, validation, and compliance.",
        "Fetched and processed NHAI (National Highways Authority of India) data, structured large datasets, and prepared them for government database insertion.",
        "Designed and optimized database schemas for high-volume government data handling.",
        "Improved application performance by implementing caching mechanisms using key-value storage, significantly reducing database load.",
        "Wrote automation and data-processing scripts to clean, transform, and manage large datasets.",
        "Worked on a company’s core product, developing a major feature: WhatsApp Integration.",
        "Integrated WhatsApp Business APIs using Meta Business Manager and Webhooks for real-time messaging, notifications, and event handling.",
        "Optimized backend codebase by leveraging metadata-driven architecture to improve scalability and maintainability.",
        "Optimized complex database queries, resulting in faster response times and improved system performance.",
        "Contributed to Lok Adalat government project, handling legal and public service-related data with high reliability and security.",
        "Deployed feature branches across multiple servers and closely coordinated with QA teams to ensure stable releases."
    ]',
    1
),
(
    'MERN Full Stack Developer',
    'Basta Tech Solutions Pvt. Ltd.',
    'Oct 2023 – July 2025',
    'Mohali, India',
    '[
        "Led a team of 4 developers in designing and deploying BastaxCasino, a full-stack casino gaming platform for European markets, including admin and affiliate panels, using Node.js and ReactJS.",
        "Architected the MongoDB database schema from scratch, optimizing real-time transaction processing and scalability, achieving 99.9% uptime.",
        "Developed 100+ RESTful APIs using Node.js for game betting, affiliate commission tracking (2%), and admin dashboards.",
        "Configured Nginx as a reverse proxy, PM2 for monitoring, and managed deployment via Termius, reducing deployment time by 50%.",
        "Developed microservices for a Banking Application, incorporating Redis and Kafka for high performance and scalability.",
        "Tested iGaming API connections between RGS and slot games, analyzing backend logs, and verifying business logic for regulatory audits.",
        "Developed a Decentralized Application integrating AI and Blockchain technologies, implementing Role-Based Access Control (RBAC) inspired by the UMA Protocol.",
        "Designed APIs with Swagger documentation and resolved security/quality issues identified by SonarQube.",
        "Optimized database performance by refactoring complex query patterns."
    ]',
    2
),
(
    'Full Stack MERN Developer',
    'Zapbuild Technologies',
    'Mar 2022 – Oct 2023',
    'Mohali, India',
    '[
        "Created a full-stack data warehousing system from the ground up utilizing Express.js, React, and Material UI.",
        "Developed custom APIs from scratch to cater to various user roles including administrators, suppliers, and customers.",
        "Established efficient database schemas and tables in MySQL for inventory management and role-based access control (RBAC).",
        "Implemented administration features to manage suppliers, customers, and inventory streams (incoming and outgoing transactions)."
    ]',
    3
);

-- Seed Projects
INSERT INTO projects (title, description, tags, link, github, category, sort_order) VALUES
(
    'BastaxCasino',
    'A full-stack casino gaming platform for European markets featuring live betting, real-time transaction tracking, and interactive dashboards. Built with admin and affiliate panels.',
    'Node.js, React.js, MongoDB, Nginx, PM2, Docker',
    'https://bastaxcasino.com/home',
    NULL,
    'Full Stack',
    1
),
(
    'Decentralized AI & Blockchain Application',
    'A Web3 application integrating AI and Blockchain technologies. Implements Role-Based Access Control (RBAC) inspired by the UMA Protocol with End-to-End testing across User, Admin, and Moderator panels.',
    'React, Node.js, Solidity, Web3, UMA Protocol, RBAC',
    NULL,
    'https://github.com',
    'Blockchain & AI',
    2
),
(
    'WhatsApp Business API Integration',
    'Core product integration using WhatsApp Business APIs, Meta Business Manager, and Webhooks for real-time customer messaging, event notifications, and automated replies.',
    'Node.js, Express, Webhooks, Meta APIs, Redis',
    NULL,
    NULL,
    'Integrations',
    3
),
(
    'Government Judicial Data Processing Pipelines',
    'High-volume data fetching and processing tools for Supreme Court, High Court, and NHAI official portals. Automated ETL pipelines clean, validate, and load records into secure databases.',
    'Node.js, TypeScript, MySQL, Scripting, Caching',
    NULL,
    NULL,
    'Backend Systems',
    4
),
(
    'Data Warehousing Inventory Management',
    'A complete data warehousing system built from scratch with custom MySQL tables. Features role-based views for admin, suppliers, and customers with incoming/outgoing transaction tracking.',
    'React, Express, MySQL, Material UI',
    NULL,
    'https://github.com',
    'Full Stack',
    5
);

-- Seed Achievements
INSERT INTO achievements (title, value, details, sort_order) VALUES
(
    'GeeksForGeeks College Rank',
    'Rank 1st',
    'Ranked 1st in CGC Landran college and solved over 1500+ problems across GeeksforGeeks and Leetcode.',
    1
),
(
    'YouTube Educator',
    '3 Lakh+ Views',
    'Run a technical channel teaching Data Structures & Algorithms (DSA) and MERN Stack problem-solving.',
    2
),
(
    'ICPC Regionals Rank',
    'Rank 613',
    'Secured Team Rank 613 in ICPC Amritapuri Regionals and College Rank 1 in the Preliminary round 2021 (among 4000+ teams).',
    3
),
(
    'LeetCode Rating',
    '1753 Max',
    'Acquired a maximum rating of 1753 (3 Star developer status) on the LeetCode platform.',
    4
),
(
    'Developer Mentorship',
    '200+ Guided',
    'Mentored and instructed over 200+ students and junior developers in programming foundations and full-stack development.',
    5
);
