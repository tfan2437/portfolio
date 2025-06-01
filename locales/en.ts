import { Project, Translation } from "@/types";

export const EN: Translation = {
  nav: {
    home: "HOME",
    about: "ABOUT",
    projects: "PROJECTS",
    contact: "CONTACT",
    letsTalk: "Let's Talk",
    contactMe: "Contact Me",
    resume: "Resume",
  },
  intro: {
    name: "Ting Wei Fan",
    occupation: "Software Engineer",
    greeting:
      "Hey there! I'm Ting Wei. \nI build high-quality websites with \nmodern tech expertise.",
  },
  about: {
    me: {
      name: "Ting Wei Fan",
      title: "Full Stack Software Engineer",
      intro:
        "Skilled in TypeScript, Java, and Python, with experience building scalable web apps using React, Next.js, Node.js, and Spring Boot. Proficient in AWS, Docker, and modern authentication methods. Strong in data structures, algorithms, and delivering performant, user-focused solutions.",
    },
    jobs: [
      {
        title: "Software Engineer",
        company: "Architech AI",
        date: "Oct 2024 - Present",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eligendi, quaerat a atque eaque quasi porro doloremque doloribus consectetur corporis accusamus architecto similique facilis at soluta ex facere fugiat rem.",
      },
      {
        title: "Junior Architect",
        company: "Robert A.M. Stern Architects",
        date: "April 2022 - Aug 2024",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eligendi, quaerat a atque eaque quasi porro doloremque doloribus consectetur corporis accusamus architecto similique facilis at soluta ex facere fugiat rem.",
      },
      {
        title: "Intern Architect",
        company: "Bio Architecture Formosana",
        date: "May 2019 - Aug 2019",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eligendi, quaerat a atque eaque quasi porro doloremque doloribus consectetur corporis accusamus architecto similique facilis at soluta ex facere fugiat rem.",
      },
    ],
    education: [
      {
        school: "Georgia Institute of Technology",
        degree: "Online Master of Science in Computer Science",
        date: "Jan 2025 - Present",
      },
      {
        school: "Empire State University",
        degree: "Master Prerequisite - Computer Science",
        date: "Jan 2024 - May 2024",
      },
      {
        school: "Cornell University",
        degree: "Bachelor of Architecture",
        date: "June 2016 - Dec 2021",
      },
    ],
    techStacks: [
      {
        title: "Languages",
        skills: "TypeScript, Java, Python, JavaScript, C++",
      },
      {
        title: "Frontend",
        skills: "Next.js, React, Redux, Zustand, Tailwind CSS",
      },
      {
        title: "Backend",
        skills: "Node.js, Express.js, Spring Boot",
      },
      {
        title: "Communication",
        skills: "RESTful APIs, WebSockets",
      },
      {
        title: "Authentication",
        skills: "JWT, OAuth, Firebase Auth, Next Auth",
      },
      {
        title: "Databases",
        skills: "MongoDB, PostgreSQL, MySQL",
      },
      {
        title: "DevOps",
        skills: "Git, Docker, AWS S3, AWS EC2, AWS Lambda",
      },
      {
        title: "Testing",
        skills: "Jest, Unit Testing",
      },
      {
        title: "Concept",
        skills: "Data Structures, Algorithms",
      },
    ],
  },
  footer: {
    title: "Let’s Build Something Great Together",
    intro:
      "Fullstack engineer with solid experience building \nscalable, user-focused web apps",
    message: "Send a message",
    email: "tfan2437@gmail.com",
    projects: [
      {
        name: "Orbit AI",
        href: "https://orbit-ai-v2.vercel.app/",
      },
      {
        name: "Sonicfi",
        href: "https://sonicfi-ai.vercel.app/",
      },
      {
        name: "Tovier",
        href: "https://sonicfi-ai.vercel.app/",
      },
      {
        name: "Orbit AI v1",
        href: "https://orbit-ai-v2.vercel.app/",
      },
      {
        name: "Sonicfi v1",
        href: "https://sonicfi-ai.vercel.app/",
      },
    ],
    copyright: "Copyright © 2025 Ting Wei Fan. All Rights Reserved.",
  },
  label: {
    type: "Type",
    webDev: "Web Dev",
    year: "Year",
    service: "Service",
    techStack: "Technology Stack",
    backend: "Backend Development",
    frontend: "Frontend Development",
    devOps: "DevOps & CI/CD",
    uiux: "UI/UX Design",
    achievements: "Achievements",
    impact: "Impact",
    viewWebsite: "View Website",
  },
};

export const EN_PROJECTS: Record<string, Project> = {
  sonicfi: {
    type: "Personal Project",
    webDev: "Full Stack",
    year: "2025",
    service: "Music Streaming Platform",
    title: "SonicFi Music Streaming Platform",
    summary:
      "A full-stack music streaming application built with modern technologies, featuring secure authentication, real-time audio streaming, and intelligent music recommendations. This project showcases expertise in secure API design, efficient database management, modern frontend development, and robust CI/CD pipelines, delivering a seamless and personalized user experience.",
    techStack: [
      {
        title: "Frontend: ",
        description: "React, Zustand, React Router DOM, Tailwind CSS",
      },
      {
        title: "Backend: ",
        description: "Node.js, Express.js, JWT Authentication, AWS S3",
      },
      {
        title: "Database: ",
        description:
          "MongoDB with optimized relational database and custom indexing",
      },
      {
        title: "DevOps: ",
        description: "AWS S3, AWS EC2, Docker, Docker Compose, Nginx",
      },
    ],
    backend: [
      {
        title: "Structured API Design: ",
        description:
          "Developed organized RESTful API routes with modular controllers and schema validations, following industry best practices for maintainability and scalability.",
      },
      {
        title: "Secure Authentication & Authorization: ",
        description:
          "Implemented JWT-based authentication with protected routes, ensuring token validation and user ID matching against database records to prevent unauthorized access.",
      },
      {
        title: "Database Design & Performance: ",
        description:
          "Designed optimized MongoDB schemas with strategic indexing for fast queries on albums, tracks, and artists, supporting efficient search functionality and real-time music discovery.",
      },
      {
        title: "Cloud Infrastructure & Storage: ",
        description:
          "Integrated AWS S3 for scalable storage of static assets and media files, ensuring reliable access and systematic API architecture with organized routes, controllers, and schema models.",
      },
      {
        title: "Intelligent Music Recommendations: ",
        description:
          "Built an advanced recommendation engine utilizing database indexing and algorithmic sorting, enabling dynamic content delivery by trending status, popularity, release date, and artist relationships.",
      },
      {
        title: "Flexible Access Control: ",
        description:
          "Enabled unauthenticated users to stream music via GET requests while providing authenticated users with full CRUD functionality for personalized playlist management (create, read, update, delete).",
      },
    ],
    frontend: [
      {
        title: "RESTful API Integration: ",
        description:
          "Utilized React to efficiently fetch and display real-time data for recommended tracks, albums, and artists, ensuring a smooth streaming experience.",
      },
      {
        title: "State Management & Real-time Features: ",
        description:
          "Implemented Zustand for global audio player state management, handling track queuing, volume control, and playback functionality with minimal re-renders.",
      },
      {
        title: "Dynamic Routing & Navigation: ",
        description:
          "Employed React Router DOM with parameterized routes (/album/:id, /artist/:id, /track/:id), reflecting database schema for efficient data fetching and responsive navigation.",
      },
      {
        title: "Secure User Interactions: ",
        description:
          "Enabled authenticated users to securely manage playlists (rename, delete, search, and add tracks) via protected API calls, ensuring data integrity with JWT-based authentication.",
      },
      {
        title: "Advanced File Handling: ",
        description:
          "Built a versatile image processing pipeline supporting multiple formats (JPG, PNG, WebP), converting to base64 for AI integration (Gemini API) and Uint8Array for AWS S3 uploads.",
      },
    ],
    devOps: [
      {
        title: "Containerization & Cloud Deployment: ",
        description:
          "Built and deployed a Dockerized Express.js backend with all dependencies packaged into a container image, hosted on Docker Hub for seamless AWS EC2 deployments.",
      },
      {
        title: "Docker Compose Configuration: ",
        description:
          "Defined a comprehensive docker-compose.yml to automate container setup, specifying platform, ports, environment variables, resource limits, database configurations, and Nginx for optimal performance.",
      },
      {
        title: "System Administration: ",
        description:
          "Utilized Linux shell commands for AWS EC2 management and Docker Hub integration, showcasing strong system administration skills for cloud infrastructure monitoring and maintenance.",
      },
    ],
    uiux: [
      {
        title: "Modern Interface Design: ",
        description:
          "Crafted a clean, contemporary landing page, login interface, and music player UI with a cohesive visual design system, reflecting SonicFi’s brand identity and enhancing user engagement.",
      },
      {
        title: "Consistent Theme: ",
        description:
          "Designed a responsive, accessible interface ensuring a seamless user journey across devices, aligning with modern music streaming platform aesthetics.",
      },
      {
        title: "User Playlist Management: ",
        description:
          "Provided an intuitive interface for music library management, supporting comprehensive playlist functionality (rename, delete, search, and create) with real-time updates.",
      },
    ],
    achievements: [
      "The project implemented robust JWT authentication with comprehensive user authorization validation to ensure secure API access and maintain data integrity throughout the system. Performance optimization was a key focus, achieving sub-second query responses through strategic database indexing and carefully optimized data models that streamline data retrieval processes. The architecture was designed with scalability in mind, featuring a cloud-based infrastructure that supports concurrent users through seamless AWS S3 and EC2 integration.",
      "To enhance accessibility and personalization, the platform provides a dual-tier service model that accommodates both guest and authenticated users with tailored experiences. The development demonstrated proficiency across the full technology stack using modern JavaScript frameworks, contemporary development tools, and industry-standard DevOps practices.",
    ],
    impact: [
      "The project successfully delivered a secure, scalable, and user-centric music streaming platform with optimized performance capabilities for real-time interactions. This work showcased comprehensive expertise in full-stack development, cloud integration, state management with Zustand, and modern DevOps practices, all of which align with current industry standards for production-ready applications.",
      "The platform enhanced user engagement through intuitive UI/UX design, seamless navigation functionality, and intelligent music recommendation systems, ultimately resulting in a polished and professional product that meets contemporary user expectations.",
    ],
  },
  orbit: {
    type: "Personal Project",
    webDev: "Full Stack",
    year: "2025",
    service: "AI Chat Application",
    title: "Orbit AI Chat Application",
    summary:
      "A sophisticated conversational AI platform leveraging Google's Gemini 2.0 Flash for text generation and image synthesis, built with enterprise-grade security and scalability. This project showcases expertise in secure backend development, efficient database design, dynamic frontend implementation with robust state management, and streamlined CI/CD pipelines, delivering a seamless and engaging user experience.",
    techStack: [
      {
        title: "Frontend: ",
        description:
          "React, Redux, React Router DOM, Tailwind CSS, Framer Motion",
      },
      {
        title: "Backend: ",
        description:
          "Node.js, Express.js, JWT Authentication, Google Gemini API",
      },
      {
        title: "Database: ",
        description: "MongoDB with optimized indexing",
      },
      {
        title: "DevOps: ",
        description: "AWS S3, AWS EC2, Docker, Docker Compose, Nginx",
      },
      {
        title: "Other: ",
        description:
          "Image processing (base64, Uint8Array), UI/UX design principles",
      },
    ],
    backend: [
      {
        title: "Secure Authentication System: ",
        description:
          "Implemented JWT-based authentication with protected routes, ensuring token validation and user ID verification against database records for secure API access.",
      },
      {
        title: "Efficient Data Model: ",
        description:
          "Designed high-performance chat and message schemas with optimized indexing, enabling rapid and precise queries for chat retrieval and search functionality.",
      },
      {
        title: "RESTful API Design: ",
        description:
          "Developed a modular API architecture with organized routes, middleware, and schema validation, ensuring maintainable and scalable code.",
      },
      {
        title: "Data Transformation Layer: ",
        description:
          "Engineered minimal yet robust data structures to optimize Gemini API response payloads, enhancing client-server communication efficiency.",
      },
      {
        title: "Cloud Storage Integration: ",
        description:
          "Architected AWS S3 integration for efficient storage of user-uploaded and AI-generated images, with automated optimization for scalability.",
      },
    ],
    frontend: [
      {
        title: "Global State Management: ",
        description:
          "Leveraged Redux to manage complex application state, ensuring predictable data flow for chat sessions, user settings, and real-time UI updates, improving scalability and maintainability.",
      },
      {
        title: "AI API Integration: ",
        description:
          "Seamlessly integrated Google Gemini 2.0 Flash for text and image generation, with robust error handling and fallback mechanisms for reliable performance.",
      },
      {
        title: "Advanced File Handling: ",
        description:
          "Built a versatile image processing pipeline supporting multiple formats (JPG, PNG, WebP), converting to base64 for API compatibility and Uint8Array for AWS S3 uploads.",
      },
      {
        title: "Dynamic Routing: ",
        description:
          "Utilized React Router DOM with parameterized routes (/c/:id) for efficient chat navigation and optimized database fetching.",
      },
      {
        title: "Enhanced User Experience: ",
        description:
          "Incorporated fluid animations using Framer Motion for response generation and loading states, elevating user engagement and interface polish.",
      },
      {
        title: "Modern UI Design: ",
        description:
          "Crafted a sleek, intuitive chat interface with a centralized input area for text and images, a sidebar for chat history, navigation, and settings, aligning with modern AI chat design trends.",
      },
      {
        title: "Secure User Actions: ",
        description:
          "Enabled full chat management (create, rename, delete, search) with JWT-authenticated API calls, ensuring secure and user-specific operations.",
      },
    ],
    devOps: [
      {
        title: "Complete Chat Management: ",
        description:
          "Implemented full CRUD operations for chat sessions with real-time updates and optimistic UI patterns, powered by Redux for consistent state synchronization.",
      },
      {
        title: "Security-First Approach: ",
        description:
          "Ensured all user actions are protected by JWT validation and user ownership verification, preventing unauthorized access.",
      },
      {
        title: "Responsive Design: ",
        description:
          "Designed modern, responsive landing and authentication pages that reflect Orbit AI’s brand identity and AI capabilities.",
      },
    ],
    uiux: [
      {
        title: "Containerized Deployment: ",
        description:
          "Packaged the Express.js backend and dependencies into a Docker image, pushed to Docker Hub, and deployed on AWS EC2 for reliable, scalable hosting.",
      },
      {
        title: "Automated Infrastructure: ",
        description:
          "Configured Docker Compose YAML to define platform settings, ports, environment variables, resource limits, database specifications, and Nginx for efficient container orchestration.",
      },
      {
        title: "Linux Proficiency: ",
        description:
          "Utilized Linux shell commands for AWS EC2 management and Docker Hub integration, showcasing strong system administration skills.",
      },
    ],
    achievements: [
      "The Orbit AI Chat Application showcases advanced full-stack development, featuring a secure JWT-based authentication system with rigorous token validation to ensure safe API access. I designed optimized MongoDB schemas with strategic indexing for sub-second chat retrieval, integrated Google Gemini 2.0 Flash for dynamic text and image generation, and used Redux for seamless state management with Framer Motion animations for enhanced UI engagement. The Dockerized Express.js backend, deployed on AWS EC2 with AWS S3 for scalable storage and a streamlined Docker Compose setup, demonstrates expertise in cloud integration and modern DevOps, delivering a production-ready platform.",
    ],
    impact: [
      "Orbit AI delivers a secure, scalable, and engaging conversational platform with real-time text and image generation powered by Google Gemini 2.0 Flash, ensuring rapid responses and a polished user experience. Its intuitive UI/UX, with responsive navigation and secure CRUD operations via Redux and JWT-authenticated APIs, enhances user engagement. The cloud-based architecture, leveraging AWS S3 and EC2, supports concurrent users while my expertise in full-stack development and DevOps ensures a professional, industry-standard product that exceeds modern user expectations.",
    ],
  },
};
