import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import logger from '../utils/logger.js';

dotenv.config();

let pool = null;
let isFallbackMode = false;

// Mock Data matching the CV seeds
const mockExperiences = [
  {
    id: 1,
    role: "Mid Level Software Engineer",
    company: "Jupitice Justice Technologies Pvt. Ltd.",
    duration: "Aug 2025 – Present",
    location: "IT Park, Chandigarh",
    description: [
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
    ],
    sort_order: 1
  },
  {
    id: 2,
    role: "MERN Full Stack Developer",
    company: "Basta Tech Solutions Pvt. Ltd.",
    duration: "Oct 2023 – July 2025",
    location: "Mohali, India",
    description: [
      "Led a team of 4 developers in designing and deploying BastaxCasino, a full-stack casino gaming platform for European markets, including admin and affiliate panels, using Node.js and ReactJS.",
      "Architected the MongoDB database schema from scratch, optimizing real-time transaction processing and scalability, achieving 99.9% uptime.",
      "Developed 100+ RESTful APIs using Node.js for game betting, affiliate commission tracking (2%), and admin dashboards.",
      "Configured Nginx as a reverse proxy, PM2 for monitoring, and managed deployment via Termius, reducing deployment time by 50%.",
      "Developed microservices for a Banking Application, incorporating Redis and Kafka for high performance and scalability.",
      "Tested iGaming API connections between RGS and slot games, analyzing backend logs, and verifying business logic for regulatory audits.",
      "Developed a Decentralized Application integrating AI and Blockchain technologies, implementing Role-Based Access Control (RBAC) inspired by the UMA Protocol.",
      "Designed APIs with Swagger documentation and resolved security/quality issues identified by SonarQube.",
      "Optimized database performance by refactoring complex query patterns."
    ],
    sort_order: 2
  },
  {
    id: 3,
    role: "Full Stack MERN Developer",
    company: "Zapbuild Technologies",
    duration: "Mar 2022 – Oct 2023",
    location: "Mohali, India",
    description: [
      "Created a full-stack data warehousing system from the ground up utilizing Express.js, React, and Material UI.",
      "Developed custom APIs from scratch to cater to various user roles including administrators, suppliers, and customers.",
      "Established efficient database schemas and tables in MySQL for inventory management and role-based access control (RBAC).",
      "Implemented administration features to manage suppliers, customers, and inventory streams (incoming and outgoing transactions)."
    ],
    sort_order: 3
  }
];

const mockProjects = [
  {
    id: 1,
    title: "BastaxCasino",
    description: "A full-stack casino gaming platform for European markets featuring live betting, real-time transaction tracking, and interactive dashboards. Built with admin and affiliate panels.",
    tags: "Node.js, React.js, MongoDB, Nginx, PM2, Docker",
    link: "https://bastaxcasino.com/home",
    github: null,
    category: "Full Stack",
    sort_order: 1
  },
  {
    id: 2,
    title: "Decentralized AI & Blockchain Application",
    description: "A Web3 application integrating AI and Blockchain technologies. Implements Role-Based Access Control (RBAC) inspired by the UMA Protocol with End-to-End testing across User, Admin, and Moderator panels.",
    tags: "React, Node.js, Solidity, Web3, UMA Protocol, RBAC",
    link: null,
    github: "https://github.com",
    category: "Blockchain & AI",
    sort_order: 2
  },
  {
    id: 3,
    title: "WhatsApp Business API Integration",
    description: "Core product integration using WhatsApp Business APIs, Meta Business Manager, and Webhooks for real-time customer messaging, event notifications, and automated replies.",
    tags: "Node.js, Express, Webhooks, Meta APIs, Redis",
    link: null,
    github: null,
    category: "Integrations",
    sort_order: 3
  },
  {
    id: 4,
    title: "Government Judicial Data Processing Pipelines",
    description: "High-volume data fetching and processing tools for Supreme Court, High Court, and NHAI official portals. Automated ETL pipelines clean, validate, and load records into secure databases.",
    tags: "Node.js, TypeScript, MySQL, Scripting, Caching",
    link: null,
    github: null,
    category: "Backend Systems",
    sort_order: 4
  },
  {
    id: 5,
    title: "Data Warehousing Inventory Management",
    description: "A complete data warehousing system built from scratch with custom MySQL tables. Features role-based views for admin, suppliers, and customers with incoming/outgoing transaction tracking.",
    tags: "React, Express, MySQL, Material UI",
    link: null,
    github: "https://github.com",
    category: "Full Stack",
    sort_order: 5
  },
  {
    id: 6,
    title: "Zapier, Google Calendar & Office 365 Automation",
    description: "Enterprise workflow automation pipeline connecting Google Calendar API and Microsoft 365 Excel/Word directories with Node.js and Zapier Webhooks for automated task triggering.",
    tags: "Node.js, Zapier, Webhooks, Google APIs, Microsoft 365",
    link: null,
    github: null,
    category: "Integrations",
    sort_order: 6
  },
  {
    id: 7,
    title: "Food Store E-Commerce Platform",
    description: "A full-featured food ordering application with shopping cart functionalities, custom payment gateway processing, and role-based restaurant admin management consoles.",
    tags: "React, Node.js, Express, MongoDB, Payment APIs",
    link: null,
    github: "https://github.com",
    category: "Full Stack",
    sort_order: 7
  }
];

const mockAchievements = [
  {
    id: 1,
    title: "GeeksForGeeks College Rank",
    value: "Rank 1st",
    details: "Ranked 1st in CGC Landran college and solved over 1500+ problems across GeeksforGeeks and Leetcode.",
    sort_order: 1
  },
  {
    id: 2,
    title: "YouTube Educator",
    value: "3 Lakh+ Views",
    details: "Run a technical channel teaching Data Structures & Algorithms (DSA) and MERN Stack problem-solving.",
    sort_order: 2
  },
  {
    id: 3,
    title: "ICPC Regionals Rank",
    value: "Rank 613",
    details: "Secured Team Rank 613 in ICPC Amritapuri Regionals and College Rank 1 in the Preliminary round 2021 (among 4000+ teams).",
    sort_order: 3
  },
  {
    id: 4,
    title: "LeetCode Rating",
    value: "1753 Max",
    details: "Acquired a maximum rating of 1753 (3 Star developer status) on the LeetCode platform.",
    sort_order: 4
  },
  {
    id: 5,
    title: "Developer Mentorship",
    value: "200+ Guided",
    details: "Mentored and instructed over 200+ students and junior developers in programming foundations and full-stack development.",
    sort_order: 5
  }
];

const mockMessages = [];

try {
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'rahul_portfolio',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ...(process.env.DB_SSL === 'true' && {
      ssl: {
        rejectUnauthorized: false
      }
    })
  });

  // Test connection immediately to trigger fallback if MySQL server is down
  await pool.query('SELECT 1');
  logger.info('Successfully connected to MySQL database: ' + (process.env.DB_NAME || 'rahul_portfolio'));
} catch (error) {
  logger.warn('\n⚠️  WARNING: Could not connect to MySQL database.');
  logger.warn('Reason: ' + error.message);
  logger.warn('🔌 ACTIVATING RUNTIME MOCK DATABASE FALLBACK.');
  logger.warn('The application will serve predefined CV data from memory. All submissions will be logged to the console.\n');
  isFallbackMode = true;
}

export {
  pool,
  isFallbackMode,
  mockExperiences,
  mockProjects,
  mockAchievements,
  mockMessages
};
