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
  hero: {
    name: "Ting Wei Fan",
    occupation: "Software Engineer",
    driveLink:
      "https://drive.google.com/file/d/1zztIxa3wGbKI3FcqAulb7toyLO8Fo6_o/view?usp=sharing",
    intro: [
      "Hi there! I'm Ting Wei\nEngineering robust, scalable web solutions for high-impact platforms\nEnsuring high performance, security, and agile collaboration",
      "Hi there! I'm Ting Wei\nCrafting robust web solutions for global platforms\nEnsuring scalability, security, and performance",
      "Hi there! I'm Ting Wei\nEngineering scalable, high-performance, secure AI solutions",
    ],
  },
  about: {
    me: {
      name: "Ting Wei Fan",
      title: "Full Stack Software Engineer",
      intro: [
        "Proven expert in developing scalable, user-centric web applications for an AI image-generating platform, serving millions of registered users and hundreds of thousands of daily active users. Skilled in delivering innovative, high-impact solutions in fast-paced, agile environments. Passionate about driving product excellence within collaborative teams.",
      ],
    },
    jobs: [
      {
        title: "Software Engineer",
        company: "Architech AI",
        date: "Oct 2024 - Present",
        linkedin: "https://www.linkedin.com/company/architechtw",
        description: [
          "Spearheaded a product-wide theme redesign that modernized the UI, improved brand alignment, and resulted in a 10%+ increase in user registrations through A/B testing. Built a Miro-style AI canvas using WebSocket and React Flow, integrating real-time collaborative rendering controls and optimizing the menu system for usability.",
        ],
      },
      {
        title: "Junior Architect",
        company: "Robert A.M. Stern Architects",
        date: "April 2022 - Aug 2024",
        linkedin: "https://www.linkedin.com/company/ramsa",
        description: [
          "Deployed Stable Diffusion on a private server, eliminating reliance on third-party services and reducing annual AI subscription costs by over $100,000 across 200+ architect accounts.",
        ],
      },
      {
        title: "Intern Architect",
        company: "Bio Architecture Formosana",
        date: "May 2019 - Aug 2019",
        linkedin:
          "https://www.linkedin.com/company/bio-architecture-formosana-taiwan/posts",
        description: [
          "Contributed significantly to visual representation for the Cheng Kung University Senior Hospital concept competition, leading to a winning proposal and securing the project for the firm.",
        ],
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
        degree: "Computer Science Master Prerequisite",
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
        skills: "TypeScript, JavaScript, Java, Python, C++",
      },
      {
        title: "Frontend",
        skills: "Next.js, React, Redux, Zustand, Tailwind CSS, Sass, HTML, CSS",
      },
      {
        title: "Backend",
        skills: "Spring Boot, Node.js, Express.js, RESTful APIs, WebSockets",
      },
      {
        title: "Authentication",
        skills: "JWT, OAuth 2.0, Firebase Auth, NextAuth.js",
      },
      {
        title: "Databases",
        skills: "MongoDB, PostgreSQL, Redis",
      },
      {
        title: "Testing & Build",
        skills: "Jest, Unit Testing, Vite, npm, yarn, ESLint",
      },
      {
        title: "Version Control & DevOps",
        skills: "Git, GitHub, Linux, Shell Scripting, Nginx, Docker",
      },
      {
        title: "Cloud",
        skills: "Cloudflare R2, AWS S3, AWS EC2, AWS Lambda, AWS CloudFront",
      },
      {
        title: "Additional",
        skills:
          "Data Structure, Algorithms, Agile/Scrum, Performance Optimization, SEO",
      },
    ],
  },
  footer: {
    title: "Let’s Build Something Great Together",
    intro:
      "Fullstack engineer with real-world experience\ndelivering scalable, AI-driven web apps with intuitive UX",
    message: "Send a message",
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
    fullstack: "Fullstack Web Development",
    devOps: "DevOps & CI/CD",
    uiux: "UI/UX Design",
    achievements: "Achievements",
    impact: "Impact",
    liveDemo: "Live Demo",
    selectedWorks: "Selected Works",
  },
};

export const PROJECTS_EN: Record<string, Project> = {
  portfolio: {
    href: "https://www.tingweifan.com",
    type: "Personal Project",
    webDev: "Frontend",
    year: "2025",
    service: "Personal Portfolio",
    title: "Portfolio – Next.js SEO Optimized Website",
    summary: [
      "A high-performance personal portfolio website built using Next.js, designed to showcase engineering projects with exceptional user experience, modern design aesthetics, and robust SEO. The project demonstrates deep expertise in image optimization, metadata configuration, cloud-based asset delivery, and frontend animation, aligning with industry best practices for web performance and discoverability.",
    ],
    topic: [
      {
        type: "bullet-point",
        name: "Technology Stack",
        details: [
          {
            title: "Frontend: ",
            description: "Next.js, Tailwind CSS, Framer Motion, Next Image",
          },
          {
            title: "Assets Hosting: ",
            description: "Cloudflare R2",
          },
          {
            title: "SEO: ",
            description:
              "Semantic HTML, Custom Metadata, Social Media Card Previews",
          },
          {
            title: "DevOps: ",
            description:
              "Vercel Deployment with GitHub CI/CD, Custom Domain (www.tingweifan.com)",
          },
        ],
      },
      {
        type: "breakdown",
        name: "SEO Optimization & Metadata Strategy",
        details: [
          {
            title: "Search Engine Optimization: ",
            description:
              "Properly configured metadata for page titles, descriptions, and canonical URLs, ensuring compatibility across search engines.",
          },
          {
            title: "Social Media Integration: ",
            description:
              "Designed dynamic Open Graph and Twitter card metadata for enhanced previews on platforms like Twitter, LinkedIn, and Facebook.",
          },
          {
            title: "Favicon & Icon Compatibility: ",
            description:
              "Implemented a complete set of browser-compatible favicons, including fallback mechanisms for older and less common browsers.",
          },
        ],
      },
      {
        type: "breakdown",
        name: "Image Optimization & Asset Delivery",
        details: [
          {
            title: "Optimized Image Rendering: ",
            description:
              "Leveraged Next.js’s next/image component with properly set dimensions (width, height) matching browser display containers for best visual clarity and performance.",
          },
          {
            title: "Priority & Lazy Loading: ",
            description:
              "Assigned priority loading to above-the-fold content (e.g., hero section, project cards), while deferring offscreen assets via lazy loading for improved page speed.",
          },
          {
            title: "Cloudflare R2 Integration: ",
            description:
              "Deployed all image assets on Cloudflare R2 for fast global delivery, efficient caching, and scalable static asset management.",
          },
          {
            title: "High-Resolution Fallbacks: ",
            description:
              "Exported assets at 4× the display resolution (e.g., 800×800px for a 400×400px display area) in WebP format at 72 DPI, accounting for high-resolution and retina displays without compromising file size.",
          },
        ],
      },
      {
        type: "breakdown",
        name: "Frontend Development & UX Design",
        details: [
          {
            title: "Modern UI Design: ",
            description:
              "Crafted a visually refined layout, including harmonious color palettes, component-level spacing, and a pixel-perfect project showcase section.",
          },
          {
            title: "Motion & Interaction Design: ",
            description:
              "Integrated Framer Motion for animated transitions, hover states, and scroll-based visual effects that enhance user engagement and aesthetic appeal.",
          },
          {
            title: "Responsive Layout: ",
            description:
              "Fully responsive design built with Tailwind CSS, optimized for mobile, tablet, and large desktop displays.",
          },
          {
            title: "Mockups & Presentation: ",
            description:
              "Designed and exported mockup-ready content for showcasing projects, ensuring clean asset alignment and sharp display across all screen types.",
          },
        ],
      },
      {
        type: "paragraph",
        name: "Achievements",
        paragraphs: [
          "The portfolio project exemplifies best practices in SEO, cloud asset management, and frontend development. It highlights technical fluency with Next.js's SSR/ISR rendering for SEO, precise image optimization via Cloudflare R2, and rich interactive UI using Framer Motion. The result is a performant and elegant portfolio that demonstrates both design sensitivity and engineering discipline.",
        ],
        details: [],
      },
      {
        type: "paragraph",
        name: "Impact",
        paragraphs: [
          "Delivered a professional-grade personal website that reflects expertise in modern web development, search engine optimization, and user-first design. The site not only showcases full-stack capabilities but also serves as a real-world demonstration of frontend precision, aesthetic sensibility, and performance-aware engineering.",
        ],
        details: [],
      },
    ],
  },
  sonicfi: {
    href: "https://www.sonic-fi.com",
    type: "Personal Project",
    webDev: "Full Stack",
    year: "2025",
    service: "Music Streaming Platform",
    title: "SonicFi Music Streaming Platform",
    summary: [
      "A full-stack music streaming application built with modern technologies, featuring secure authentication, real-time audio streaming, and intelligent music recommendations. This project showcases expertise in secure API design, efficient database management, modern frontend development, and robust CI/CD pipelines, delivering a seamless and personalized user experience.",
    ],
    topic: [
      {
        type: "bullet-point",
        name: "Technology Stack",
        details: [
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
      },
      {
        type: "breakdown",
        name: "Backend Development",
        details: [
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
      },
      {
        type: "breakdown",
        name: "Frontend Development",
        details: [
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
      },
      {
        type: "breakdown",
        name: "DevOps & CI/CD",
        details: [
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
      },
      {
        type: "image",
        name: "UI/UX Design",
        images: [
          "https://r2.tfan2437.workers.dev/projects/sonicfi-3.webp",
          "https://r2.tfan2437.workers.dev/projects/sonicfi-4.webp",
        ],
        paragraphs: [],
        details: [
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
      },
      {
        type: "paragraph",
        name: "Achievements",
        paragraphs: [
          "The project implemented robust JWT authentication with comprehensive user authorization validation to ensure secure API access and maintain data integrity throughout the system. Performance optimization was a key focus, achieving sub-second query responses through strategic database indexing and carefully optimized data models that streamline data retrieval processes. The architecture was designed with scalability in mind, featuring a cloud-based infrastructure that supports concurrent users through seamless AWS S3 and EC2 integration.",
          "To enhance accessibility and personalization, the platform provides a dual-tier service model that accommodates both guest and authenticated users with tailored experiences. The development demonstrated proficiency across the full technology stack using modern JavaScript frameworks, contemporary development tools, and industry-standard DevOps practices.",
        ],
        details: [],
      },
      {
        type: "paragraph",
        name: "Impact",
        paragraphs: [
          "The project successfully delivered a secure, scalable, and user-centric music streaming platform with optimized performance capabilities for real-time interactions. This work showcased comprehensive expertise in full-stack development, cloud integration, state management with Zustand, and modern DevOps practices, all of which align with current industry standards for production-ready applications.",
          "The platform enhanced user engagement through intuitive UI/UX design, seamless navigation functionality, and intelligent music recommendation systems, ultimately resulting in a polished and professional product that meets contemporary user expectations.",
        ],
        details: [],
      },
    ],
  },
  orbit: {
    href: "https://www.orbits-ai.com",
    type: "Personal Project",
    webDev: "Full Stack",
    year: "2025",
    service: "Conversational AI Chat",
    title: "Orbit – Conversational AI Chat",
    summary: [
      "A sophisticated conversational AI platform leveraging Google's Gemini 2.0 Flash for text generation and image synthesis, built with enterprise-grade security and scalability. This project showcases expertise in secure backend development, efficient database design, dynamic frontend implementation with robust state management, and streamlined CI/CD pipelines, delivering a seamless and engaging user experience.",
    ],
    topic: [
      {
        type: "bullet-point",
        name: "Technology Stack",
        details: [
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
      },
      {
        type: "breakdown",
        name: "Backend Development",
        details: [
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
      },
      {
        type: "breakdown",
        name: "Frontend Development",
        details: [
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
      },
      {
        type: "breakdown",
        name: "DevOps & CI/CD",
        details: [
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
      },
      {
        type: "image",
        name: "UI/UX Design",
        images: [
          "https://r2.tfan2437.workers.dev/projects/orbit-3.webp",
          "https://r2.tfan2437.workers.dev/projects/orbit-4.webp",
          "https://r2.tfan2437.workers.dev/projects/orbit-5.webp",
          "https://r2.tfan2437.workers.dev/projects/orbit-6.webp",
        ],
        paragraphs: [],
        details: [
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
      },
      {
        type: "paragraph",
        name: "Achievements",
        paragraphs: [
          "The Orbit AI Chat Application showcases advanced full-stack development, featuring a secure JWT-based authentication system with rigorous token validation to ensure safe API access. I designed optimized MongoDB schemas with strategic indexing for sub-second chat retrieval, integrated Google Gemini 2.0 Flash for dynamic text and image generation, and used Redux for seamless state management with Framer Motion animations for enhanced UI engagement. The Dockerized Express.js backend, deployed on AWS EC2 with AWS S3 for scalable storage and a streamlined Docker Compose setup, demonstrates expertise in cloud integration and modern DevOps, delivering a production-ready platform.",
        ],
        details: [],
      },
      {
        type: "paragraph",
        name: "Impact",
        paragraphs: [
          "Orbit AI delivers a secure, scalable, and engaging conversational platform with real-time text and image generation powered by Google Gemini 2.0 Flash, ensuring rapid responses and a polished user experience. Its intuitive UI/UX, with responsive navigation and secure CRUD operations via Redux and JWT-authenticated APIs, enhances user engagement. The cloud-based architecture, leveraging AWS S3 and EC2, supports concurrent users while my expertise in full-stack development and DevOps ensures a professional, industry-standard product that exceeds modern user expectations.",
        ],
        details: [],
      },
    ],
  },
  "orbit-v1": {
    href: "https://orbit-ai-chatbot.vercel.app",
    type: "Personal Project",
    webDev: "Full Stack",
    year: "2024",
    service: "Conversational AI Chat",
    title: "Orbit v1 – Conversational AI Chat",
    summary: [
      "This version of Orbit AI laid the groundwork for the conversational AI platform, focusing on rapid development with Firebase and Context API. While it offered a polished user experience and seamless real-time chat, it lacks the enterprise-grade features introduced in Orbit AI v2—such as Redux for scalable state management, JWT-secured Express APIs, MongoDB indexing, image generation support, and Dockerized AWS deployment.",
      "An advanced AI chatbot application built to deliver a seamless, interactive experience across web and mobile platforms. The project demonstrates strong integration of AI APIs, secure user management, and responsive UI design, highlighting proficiency in real-time data handling and modern deployment practices.",
    ],
    topic: [
      {
        type: "bullet-point",
        name: "Technology Stack",
        details: [
          {
            title: "Frontend: ",
            description: "React, React Router DOM, Context API, Tailwind CSS",
          },
          {
            title: "Backend: ",
            description: "Gemini API, Firebase, Firebase Authentication",
          },
          {
            title: "Database: ",
            description: "Firestore",
          },
          {
            title: "Deployment: ",
            description: "Vercel, Vite",
          },
        ],
      },
      {
        type: "breakdown",
        name: "Backend Development",
        details: [
          {
            title: "Gemini API Integration: ",
            description:
              "Integrated Google's Gemini API to generate intelligent, conversational responses with real-time interaction capabilities.",
          },
          {
            title: "Data Persistence & Session Management: ",
            description:
              "Utilized Firestore to store chat histories and user data securely, ensuring reliability and fast access for returning sessions.",
          },
          {
            title: "Secure Authentication: ",
            description:
              "Enabled both email/password and Google OAuth login methods via Firebase Authentication, with protected routes ensuring secure data access.",
          },
          {
            title: "Scalable Hosting: ",
            description:
              "Deployed on Vercel for high availability and fast global load times, supporting concurrent users without compromising performance.",
          },
        ],
      },
      {
        type: "breakdown",
        name: "Frontend Development",
        details: [
          {
            title: "Dynamic Chat Interface: ",
            description:
              "Developed an engaging, real-time chat UI with smooth typing animations and clear conversation layouts to enhance user experience.",
          },
          {
            title: "Global State Management: ",
            description:
              "Applied Context API to handle chat state, user sessions, and settings globally, allowing consistent behavior across components.",
          },
          {
            title: "Responsive Design: ",
            description:
              "Designed a fully responsive interface with Tailwind CSS, adapting seamlessly to both desktop and mobile form factors.",
          },
          {
            title: "User Interaction Elements: ",
            description:
              "Implemented interactive elements such as animated buttons and inputs, contributing to a polished and accessible interface.",
          },
        ],
      },
      {
        type: "breakdown",
        name: "DevOps & CI/CD",
        details: [
          {
            title: "Vercel Hosting: ",
            description:
              "Leveraged Vercel's serverless architecture for auto-scaling, CI/CD integration, and zero-configuration deployment pipelines.",
          },
          {
            title: "Performance Optimization: ",
            description:
              "Ensured efficient asset delivery and minimal load times through Vercel’s CDN and build-time optimizations.",
          },
        ],
      },
      {
        type: "image",
        name: "UI/UX Design",
        images: [
          "https://r2.tfan2437.workers.dev/projects/orbit-v1-3.webp",
          "https://r2.tfan2437.workers.dev/projects/orbit-v1-4.webp",
          "https://r2.tfan2437.workers.dev/projects/orbit-v1-5.webp",
        ],
        paragraphs: [],
        details: [
          {
            title: "Modern Visuals: ",
            description:
              "Crafted a clean, user-friendly layout that aligns with contemporary chatbot design standards, ensuring an intuitive chat experience.",
          },
          {
            title: "Accessibility & Feedback: ",
            description:
              "Prioritized keyboard navigation, readable fonts, and clear visual feedback to support a broad range of users.",
          },
        ],
      },
      {
        type: "paragraph",
        name: "Achievements",
        paragraphs: [
          "Orbit AI demonstrates robust security through Firebase Authentication, smooth real-time performance via Gemini API integration, and scalability using Vercel’s serverless infrastructure. The application delivers a polished user experience with responsive layouts and interactive design, while showcasing modern full-stack development with React, Firebase, and Tailwind CSS.",
        ],
        details: [],
      },
      {
        type: "paragraph",
        name: "Impact",
        paragraphs: [
          "Successfully delivered a responsive and intelligent AI chatbot that showcases modern frontend design, secure backend integration, and scalable cloud deployment. The project demonstrates full-stack engineering capabilities with a focus on real-time interactivity, usability, and deployment efficiency.",
        ],
        details: [],
      },
    ],
  },
  tovier: {
    href: "https://tovier-trailer.vercel.app",
    type: "Personal Project",
    webDev: "Full Stack",
    year: "2024",
    service: "Movie Trailer Application",
    title: "Tovier – Movie & TV Show Trailer Preview",
    summary: [
      "A visually rich web application for exploring and previewing movie and TV show trailers, powered by real-time data from TMDB. Tovier highlights strong frontend development skills, secure user management, and performance-focused deployment, delivering an engaging entertainment discovery experience across all devices.",
    ],
    topic: [
      {
        type: "bullet-point",
        name: "Technology Stack",
        details: [
          {
            title: "Frontend: ",
            description: "React, React Router DOM, Context API, Tailwind CSS",
          },
          {
            title: "Backend: ",
            description: "TMDB API, Firebase, Firebase Authentication",
          },
          {
            title: "Database: ",
            description: "Firestore",
          },
          {
            title: "Deployment: ",
            description: "Vercel, Vite",
          },
        ],
      },
      {
        type: "breakdown",
        name: "Backend Development",
        details: [
          {
            title: "TMDB API Integration: ",
            description:
              "Integrated the TMDB API to fetch real-time data for movies and TV shows, including metadata, trailers, and trending content.",
          },
          {
            title: "Secure Authentication: ",
            description:
              "Utilized Firebase Authentication to enable secure sign-up, login, and session management, supporting both email/password methods and ensuring protected access to personalized features.",
          },
          {
            title: "User Preference Storage: ",
            description:
              "Configured Firestore to store user data such as favorites and watchlists, allowing dynamic content rendering based on user interests.",
          },
        ],
      },
      {
        type: "breakdown",
        name: "Frontend Development",
        details: [
          {
            title: "Dynamic Content Display: ",
            description:
              "Built a responsive UI that dynamically renders movie/show details, trailers, and categories using React hooks and API data.",
          },
          {
            title: "User Interaction & Personalization: ",
            description:
              "Enabled registered users to mark favorites and return to their selected content with real-time Firestore sync.",
          },
          {
            title: "State Management: ",
            description:
              "Employed React’s built-in state and context for handling user state, navigation, and interaction flows efficiently.",
          },
        ],
      },
      {
        type: "breakdown",
        name: "DevOps & CI/CD",
        details: [
          {
            title: "Vercel Hosting: ",
            description:
              "Deployed on Vercel for fast, serverless delivery and seamless CI/CD integration, ensuring minimal latency and high availability.",
          },
          {
            title: "Performance Optimization: ",
            description:
              "Optimized image loading, routing, and API requests to ensure efficient page loads and real-time interaction without delays.",
          },
        ],
      },
      {
        type: "image",
        name: "UI/UX Design",
        images: [
          "https://r2.tfan2437.workers.dev/projects/tovier-3.webp",
          "https://r2.tfan2437.workers.dev/projects/tovier-6.webp",
          "https://r2.tfan2437.workers.dev/projects/tovier-5.webp",
        ],
        paragraphs: [],
        details: [
          {
            title: "Responsive Layout: ",
            description:
              "Designed with Tailwind CSS to adapt fluidly across screen sizes, offering a smooth and intuitive experience on mobile and desktop.",
          },
          {
            title: "Visual Aesthetics: ",
            description:
              "Emphasized clean layouts, modern typography, and media previews that align with popular streaming platform aesthetics.",
          },
        ],
      },
      {
        type: "paragraph",
        name: "Achievements",
        paragraphs: [
          "Tovier integrates real-time movie and TV data from TMDB, provides secure and personalized user experiences through Firebase Authentication and Firestore, and delivers a polished interface with responsive design via Tailwind CSS. The application achieves fast performance and scalability through serverless deployment on Vercel, highlighting full-stack proficiency and user-centric development.",
        ],
        details: [],
      },
      {
        type: "paragraph",
        name: "Impact",
        paragraphs: [
          "Tovier successfully delivers an immersive platform for discovering and previewing movies and TV shows, combining real-time data access, secure personalization, and modern UI design. It exemplifies strong full-stack development and deployment skills tailored for interactive content consumption.",
        ],
        details: [],
      },
    ],
  },
  rerender: {
    href: "https://rerenderai.com",
    type: "Company Product",
    webDev: "Full Stack",
    year: "2024 – 2025",
    service: "AI Rendering Application",
    title: "ReRender and ReRoom",
    summary: [
      "At Architech AI, I work as a full stack engineer maintaining and developing our flagship AI-powered design platforms —ReRender and ReRoom— within a fast-paced startup environment. I contribute across the full product lifecycle, from UI/UX ideation and architectural planning to scalable implementation and continuous iteration.",
      "My core tech stack includes React, Redux, TypeScript, Tailwind, Next.js, Node.js, and vector databases, with a strong emphasis on type-safe, maintainable code at scale. I write unit and integration tests using Jest to ensure reliability, and actively produce technical documentation, PRDs, and TSDs to support alignment across engineering and product teams.",
      "I’m well-versed in Scrum and Agile development, with experience both leading sprints and contributing meaningfully to cross-functional sprints led by others. I’ve helped deliver high-impact features that integrate advanced AI rendering models and embedding pipelines, improving creative workflows, enhancing user experience, and driving measurable business outcomes.",
    ],
    topic: [
      {
        type: "image",
        name: "Board: Miro-Style Collaborative AI Canvas",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-board-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-board-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-board-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-board-3.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-board-4.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-board-5.jpg",
        ],
        paragraphs: [
          "This feature was completed through close team collaboration. I contributed to the development of an interactive canvas interface that enables collaborative, node-based design—similar to Miro but powered by AI rendering capabilities.",
          "My primary focus was on render menu integration and node interaction, covering both frontend and backend implementation. I reused and enhanced layouts from my previous enterprise UI design to support preset visibility, fullscreen mode, and streamlined configuration.",
          "I also built a reusable, high-quality component system for node display, ensuring that user inputs and AI-generated outputs were visually aligned and intuitive. This maximized creative control and contributed to a more responsive, team-based design experience. The Board now serves as a foundational feature that powers real-time collaboration on our platform.",
        ],
        details: [],
      },
      {
        type: "image",
        name: "Moodboard Personalization for AI Style Control",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-personalize-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-personalize-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-personalize-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-personalize-3.jpg",
        ],
        paragraphs: [
          "To enhance personalization in AI-driven rendering workflows, I independently designed and built the Moodboard feature—allowing architects and designers to centralize and reuse visual inspiration. This end-to-end project involved UI/UX ideation, schema design, and full-stack implementation.",
          "I developed a custom CRUD system atop a quadrant-based vector database, using dot product similarity to retrieve the most relevant reference images from a user’s moodboard. By integrating our internal image recognition and embedding pipeline, the system enabled highly accurate, style-consistent rendering.",
          "The feature saw rapid adoption and became a core part of the creative workflow for power users. It also marked a major milestone in my evolution as a full stack engineer, showcasing my ability to deliver technically sophisticated, user-centered solutions.",
        ],
        details: [],
      },
      {
        type: "image",
        name: "Image-to-Video Rendering",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-video-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-video-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-video-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-video-3.jpg",
        ],
        paragraphs: [
          "I redesigned and implemented the Image-to-Video feature using our proprietary AI video generation model, integrating directly with our GPU server to deliver high-fidelity video outputs. This enhancement addressed major quality issues in the original implementation and introduced improvements focused on visual realism, usability, and monetization potential. I added auto-play hover previews for each camera motion preset and designed a clean, immersive UI that integrates seamlessly into the rendering workflow.",
          "In addition, I restructured the homepage video module to prominently showcase Pro-tier offerings, aligning with our conversion funnel and driving increased subscription interest. The feature received strong positive feedback from interior designers and led to a noticeable rise in video tool engagement and user retention. This experience demonstrated my ability to maintain and iterate on existing features, uncover new potential through design thinking, and evolve core functionality in support of both user satisfaction and business growth.",
        ],
        details: [],
      },
      {
        type: "image",
        name: "Virtual Staging",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-staging-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-staging-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-staging-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-staging-3.jpg",
        ],
        paragraphs: [
          "I independently developed the Virtual Staging feature to meet the speed, quality, and realism expectations of both real estate professionals and homeowners. This feature is especially valuable for brokers using mobile devices to present live staging options to potential buyers or tenants during on-site visits.",
          "To deliver an intuitive and adaptable experience, I implemented a three-mode reference system that supports various levels of user control. The first mode offers curated interior style presets for immediate application. The second allows users to upload custom reference images to guide AI staging. The third introduces a built-in image search function, enabling users to explore inspiration directly from the internet and apply those styles to their spaces using AI.",
          "This feature greatly expanded the platform’s creative flexibility and showcased my ability to design user-centered experiences that integrate seamlessly with AI-driven pipelines—balancing frontend usability, backend connectivity, and real-world user needs.",
        ],
        details: [],
      },
      {
        type: "image",
        name: "Leadership in Theme Redesign and Enterprise UI",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-theme-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-theme-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-theme-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-theme-3.jpg",
        ],
        paragraphs: [
          "I led the complete UI overhaul of both our ReRender/ReRoom platforms and a new enterprise-only product. Leveraging industry insights and modern design references, I proposed and implemented layout and aesthetic upgrades across the full suite of pre- and post-login pages. The redesign introduced a clean, full-screen interface aligned with high-end visual standards in architecture and design.",
          "Through rigorous A/B testing, we validated these changes, resulting in a statistically significant increase in user registrations. This experience demonstrated my ability to lead large-scale UI/UX initiatives from concept to production—blending visual strategy with hands-on frontend engineering.",
        ],
        details: [],
      },
      {
        type: "image",
        name: "Organization Subscription Management & Affiliate Program",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-team-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-team-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-team-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-team-3.jpg",
        ],
        paragraphs: [
          "I developed and launched core monetization features supporting both enterprise collaboration and community-driven growth. For enterprise users, I built the full frontend for our Team Billing and Role Management system—supporting centralized billing, role-based access control, and Stripe integration. After receiving feedback on component architecture, I took initiative to refactor the structure for scalability and maintainability. The feature became widely adopted by agencies and studios.",
          "In parallel, I built a flexible affiliate program and responsive pricing page, enabling tailored discounting for KOLs and educators via class-based user segmentation. Together, these systems increased conversion, expanded our audience reach, and demonstrated my ability to deliver production-ready, growth-oriented infrastructure that bridges engineering and business.",
        ],
        details: [],
      },
    ],
  },
};
