export type BulletPoint = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  summary: string;
  techStack: BulletPoint[];
  backend: BulletPoint[];
  frontend: BulletPoint[];
  devOps: BulletPoint[];
  uiux: BulletPoint[];
  achievements: string[];
  impact: string[];
};

export const SONICFI: Project = {
  title: "SonicFi Music Streaming Platform",
  summary:
    "A full-stack music streaming application built with modern technologies, featuring secure authentication, real-time audio streaming, and intelligent music recommendations. This project showcases expertise in secure API design, efficient database management, modern frontend development, and robust CI/CD pipelines, delivering a seamless and personalized user experience.",
  techStack: [
    {
      title: "Frontend: ",
      description: "React, Zustand, React Router DOM",
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
      description: "AWS EC2, Docker, Docker Compose, Nginx",
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
};

export const PROJECTS: Project[] = [SONICFI];
