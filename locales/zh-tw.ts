import { Translation } from "@/types";

export const ZH_TW: Translation = {
  nav: {
    home: "首頁",
    about: "關於",
    projects: "專案",
    contact: "聯絡方式",
    letsTalk: "聊一聊",
    contactMe: "聯絡我",
    resume: "履歷",
  },
  intro: {
    name: "范庭維",
    occupation: "軟體工程師",
    greeting:
      "嗨！我是庭維\n一名軟體工程師，專精全端網頁技術\n打造高效美觀的數位體驗",
  },
  about: {
    me: {
      name: "范庭維",
      title: "全端軟體工程師",
      intro:
        "擅長 TypeScript、Java 和 Python，擁有使用 React、Next.js、Node.js 和 Spring Boot 構建可擴展網頁應用的經驗。熟練 AWS、Docker 和現代認證方法。在資料結構、演算法和提供高效、用戶導向的解決方案方面表現出色。",
    },
    jobs: [
      {
        title: "軟體工程師",
        company: "麒發科技 Architech AI",
        date: "十月 2024 - 至今",
        description:
          "麒發科技是一家專注於AI技術的科技公司，我們的使命是讓AI技術更易於使用，讓每個人都能享受到AI帶來的便利。",
      },
      {
        title: "初階建築師",
        company: "Robert A.M. Stern Architects",
        date: "四月 2022 - 八月 2024",
        description:
          "羅伯特·A·M·斯特恩建築師事務所是一家專注於建築設計的建築師事務所，我們的使命是讓建築設計更易於使用，讓每個人都能享受到建築設計帶來的便利。",
      },
      {
        title: "實習建築師",
        company: "九典聯合建築師事務所",
        date: "五月 2019 - 八月 2019",
        description:
          "九典聯合建築師事務所是一家專注於建築設計的建築師事務所，我們的使命是讓建築設計更易於使用，讓每個人都能享受到建築設計帶來的便利。",
      },
    ],
    education: [
      {
        school: "喬治亞理工學院",
        degree: "線上碩士 - 電腦科學",
        date: "一月 2025 - 至今",
      },
      {
        school: "帝國州大學",
        degree: "碩士預科 - 電腦科學",
        date: "一月 2024 - 五月 2024",
      },
      {
        school: "康乃爾大學",
        degree: "建築學士",
        date: "六月 2016 - 十二月 2021",
      },
    ],
    techStacks: [
      {
        title: "語言",
        skills: "TypeScript, Java, Python, JavaScript, C++",
      },
      {
        title: "前端",
        skills: "Next.js, React, Redux, Zustand, Tailwind CSS",
      },
      {
        title: "後端",
        skills: "Node.js, Express.js, Spring Boot",
      },
      {
        title: "通訊",
        skills: "RESTful APIs, WebSockets",
      },
      {
        title: "認證",
        skills: "JWT, OAuth, Firebase Auth, Next Auth",
      },
      {
        title: "資料庫",
        skills: "MongoDB, PostgreSQL, MySQL",
      },
      {
        title: "開發維運",
        skills: "Git, Docker, AWS S3, AWS EC2, AWS Lambda",
      },
      {
        title: "測試",
        skills: "Jest, Unit Testing",
      },
      {
        title: "概念",
        skills: "Data Structures, Algorithms",
      },
    ],
  },
  footer: {
    title: "讓我們一起打造下一世代的產品",
    intro:
      "具備扎實開發AI應用經驗的全端工程師\n專注於打造高效可擴展且以使用者為核心的網頁應用",
    message: "傳送訊息",
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
    copyright: "版權所有 © 2025 Ting Wei Fan 保留所有權利",
  },
  label: {
    type: "類型",
    webDev: "開發技術",
    year: "年份",
    service: "應用",
    techStack: "技術應用",
    backend: "後端開發",
    frontend: "前端開發",
    devOps: "開發維運",
    uiux: "UI/UX 設計",
    achievements: "成果",
    impact: "影響",
    viewWebsite: "前往應用",
  },
};

export const ZH_TW_PROJECTS = {
  sonicfi: {
    type: "個人專案",
    webDev: "全端",
    year: "2025",
    service: "音樂串流平台",
    title: "SonicFi 音樂串流平台",
    summary:
      "一個採用現代技術打造的全棧音樂串流應用程式，具備安全認證、實時音頻串流以及智能音樂推薦功能。此項目展示了在安全API設計、高效資料庫管理、現代前端開發以及穩健的CI/CD管道方面的專業知識，提供無縫且個人化的使用者體驗。",
    techStack: [
      {
        title: "前端: ",
        description: "React, Zustand, React Router DOM",
      },
      {
        title: "後端: ",
        description: "Node.js, Express.js, JWT Authentication, AWS S3",
      },
      {
        title: "資料庫: ",
        description:
          "MongoDB with optimized relational database and custom indexing",
      },
      {
        title: "開發維運: ",
        description: "AWS EC2, Docker, Docker Compose, Nginx",
      },
    ],
    backend: [
      {
        title: "結構化API設計： ",
        description:
          "開發了組織化的RESTful API路由，搭配模組化控制器和模式驗證，遵循行業最佳實踐，確保可維護性和可擴展性。",
      },
      {
        title: "安全認證與授權： ",
        description:
          "實現基於JWT的認證，保護路由，確保令牌驗證和用戶ID與資料庫記錄匹配，防止未經授權的訪問。",
      },
      {
        title: "資料庫設計與性能： ",
        description:
          "設計優化的MongoDB模式，採用策略性索引，實現對專輯、曲目和藝術家的快速查詢，支援高效搜尋功能和實時音樂發現。",
      },
      {
        title: "雲端基礎設施與儲存： ",
        description:
          "整合AWS S3進行可擴展的靜態資產和媒體文件儲存，確保可靠訪問，並實現有組織的API架構，包含路由、控制器和模式模型。",
      },
      {
        title: "智能音樂推薦： ",
        description:
          "構建先進的推薦引擎，利用資料庫索引和演算法排序，根據趨勢狀態、熱門程度、發行日期和藝術家關聯實現動態內容傳遞。",
      },
      {
        title: "靈活的訪問控制： ",
        description:
          "允許未認證用戶通過GET請求串流音樂，同時為認證用戶提供完整的CRUD功能（創建、讀取、更新、刪除），實現個人化播放列表管理。",
      },
    ],
    frontend: [
      {
        title: "RESTful API整合： ",
        description:
          "使用React高效獲取和顯示推薦曲目、專輯和藝術家的實時資料，確保流暢的串流體驗。",
      },
      {
        title: "狀態管理與實時功能： ",
        description:
          "採用Zustand進行全局音頻播放器狀態管理，處理曲目排隊、音量控制和播放功能，最大程度減少重新渲染。",
      },
      {
        title: "動態路由與導航： ",
        description:
          "使用React Router DOM實現參數化路由（/album/:id、/artist/:id、/track/:id），與資料庫模式對應，實現高效資料獲取和響應式導航。",
      },
      {
        title: "安全用戶交互： ",
        description:
          "允許認證用戶通過受保護的API調用安全管理播放列表（重命名、刪除、搜尋和添加曲目），通過基於JWT的認證確保資料完整性。",
      },
      {
        title: "進階文件處理： ",
        description:
          "構建多功能圖像處理管道，支援多種格式（JPG、PNG、WebP），轉換為Uint8Array用於AWS S3上傳。",
      },
    ],
    devOps: [
      {
        title: "容器化與雲端部署： ",
        description:
          "構建並部署Docker化的Express.js後端，將所有依賴項打包到容器鏡像中，託管於Docker Hub，實現AWS EC2無縫部署。",
      },
      {
        title: "Docker Compose配置： ",
        description:
          "定義全面的docker-compose.yml檔案，自動化容器設置，指定平台、端口、環境變數、資源限制、資料庫配置和Nginx以實現最佳性能。",
      },
      {
        title: "系統管理： ",
        description:
          "利用Linux shell命令進行AWS EC2管理和Docker Hub整合，展示強大的系統管理技能，用於雲端基礎設施監控和維護。",
      },
    ],
    uiux: [
      {
        title: "現代界面設計： ",
        description:
          "打造乾淨、現代的登陸頁面、登入界面和音樂播放器UI，採用一致的視覺設計系統，體現SonicFi的品牌形象，提升用戶參與度。",
      },
      {
        title: "一致的主題： ",
        description:
          "設計響應式、可訪問的界面，確保跨設備的無縫用戶體驗，符合現代音樂串流平台的審美標準。",
      },
      {
        title: "用戶播放列表管理： ",
        description:
          "提供直觀的音樂庫管理界面，支援全面的播放列表功能（重命名、刪除、搜尋和創建），實現實時更新。",
      },
    ],
    achievements: [
      "該項目實現了強大的JWT認證，搭配全面的用戶授權驗證，確保安全的API訪問並維護系統的資料完整性。性能優化是重點，通過策略性資料庫索引和精心優化的資料模型，實現亞秒級查詢響應，簡化資料檢索流程。架構設計考慮到可擴展性，採用基於雲端的基礎設施，通過無縫的AWS S3和EC2整合支援並發用戶。",
      "為提升可訪問性和個人化，平台提供雙層服務模型，為訪客和認證用戶提供量身定制的體驗。開發過程展示了對現代JavaScript框架、當代開發工具和行業標準DevOps實踐的全面熟練度。",
    ],
    impact: [
      "該項目成功交付了一個安全、可擴展、以用戶為中心的音樂串流平台，具備優化的實時交互性能。此工作展示了在全棧開發、雲端整合、Zustand狀態管理和現代DevOps實踐方面的全面專業知識，符合當前行業標準的生產就緒應用程式要求。",
      "平台通過直觀的UI/UX設計、無縫的導航功能和智能音樂推薦系統提升用戶參與度，最終打造出一個符合現代用戶期望的精緻、專業產品。",
    ],
  },
};
