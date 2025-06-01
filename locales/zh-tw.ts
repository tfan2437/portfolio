import { Project, Translation } from "@/types";

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

export const ZH_TW_PROJECTS: Record<string, Project> = {
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
        description: "React, Zustand, React Router DOM, Tailwind CSS",
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
        description: "AWS S3, AWS EC2, Docker, Docker Compose, Nginx",
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
  orbit: {
    type: "個人專案",
    webDev: "全端",
    year: "2025",
    service: "AI 聊天應用",
    title: "Orbit AI 聊天應用",
    summary:
      "一個利用 Google Gemini 2.0 Flash 進行文字生成和圖像合成的先進對話式 AI 平台，具備企業級安全性和可擴展性。此項目展示了在安全後端開發、高效資料庫設計、動態前端實現與穩健狀態管理以及流暢的 CI/CD 管道方面的專業知識，提供無縫且引人入勝的使用者體驗。",
    techStack: [
      {
        title: "前端: ",
        description:
          "React, Redux, React Router DOM, Tailwind CSS, Framer Motion",
      },
      {
        title: "後端: ",
        description:
          "Node.js, Express.js, JWT Authentication, Google Gemini API",
      },
      {
        title: "資料庫: ",
        description: "MongoDB with optimized indexing",
      },
      {
        title: "開發維運: ",
        description: "AWS S3, AWS EC2, Docker, Docker Compose, Nginx",
      },
      {
        title: "其他: ",
        description: "圖像處理 (base64, Uint8Array), UI/UX 設計原則",
      },
    ],
    backend: [
      {
        title: "安全認證系統：",
        description:
          "實現基於 JWT 的認證，保護路由，確保令牌驗證和用戶 ID 與資料庫記錄的驗證，提供安全的 API 訪問。",
      },
      {
        title: "高效資料模型：",
        description:
          "設計高效的聊天和訊息模式，採用優化索引，實現快速且精準的聊天檢索和搜尋功能。",
      },
      {
        title: "RESTful API 設計：",
        description:
          "開發模組化的 API 架構，具備組織化的路由、中間件和模式驗證，確保程式碼的可維護性和可擴展性。",
      },
      {
        title: "資料轉換層：",
        description:
          "設計簡約但穩健的資料結構，優化 Gemini API 響應負載，提升客戶端-伺服器通訊效率。",
      },
      {
        title: "雲端儲存整合：",
        description:
          "架構 AWS S3 整合，用於高效儲存用戶上傳和 AI 生成的圖像，自動優化以實現可擴展性。",
      },
    ],
    frontend: [
      {
        title: "全局狀態管理： ",
        description:
          "利用 Redux 管理複雜的應用程式狀態，確保聊天會話、用戶設置和實時 UI 更新的可預測資料流，提升可擴展性和可維護性。",
      },
      {
        title: "AI API 整合： ",
        description:
          "無縫整合 Google Gemini 2.0 Flash 用於文字和圖像生成，具備穩健的錯誤處理和後備機制，確保可靠性能。",
      },
      {
        title: "進階文件處理： ",
        description:
          "構建多功能圖像處理管道，支援多種格式（JPG、PNG、WebP），轉換為 base64 以確保 API 兼容性，以及 Uint8Array 用於 AWS S3 上傳。",
      },
      {
        title: "動態路由： ",
        description:
          "使用 React Router DOM 實現參數化路由（/c/:id），提供高效的聊天導航和優化的資料庫獲取。",
      },
      {
        title: "增強用戶體驗： ",
        description:
          "採用 Framer Motion 實現流暢的響應生成和載入狀態動畫，提升用戶參與度和界面精緻度。",
      },
      {
        title: "現代 UI 設計： ",
        description:
          "打造簡潔直觀的聊天界面，包含集中式的文字和圖像輸入區、聊天歷史側邊欄、導航和設置，符合現代 AI 聊天設計趨勢。",
      },
      {
        title: "安全用戶操作： ",
        description:
          "通過 JWT 認證的 API 調用，實現完整的聊天管理（創建、重命名、刪除、搜尋），確保安全且特定於用戶的操作。",
      },
    ],
    devOps: [
      {
        title: "容器化部署： ",
        description:
          "將 Express.js 後端及其依賴項打包為 Docker 鏡像，推送至 Docker Hub，並部署於 AWS EC2，提供可靠、可擴展的託管。",
      },
      {
        title: "自動化基礎設施： ",
        description:
          "配置 Docker Compose YAML，定義平台設置、端口、環境變數、資源限制、資料庫規格和 Nginx，實現高效的容器編排。",
      },
      {
        title: "Linux 熟練度：",
        description:
          "利用 Linux shell 命令進行 AWS EC2 管理和 Docker Hub 整合，展示強大的系統管理技能。",
      },
    ],
    uiux: [
      {
        title: "完整聊天管理： ",
        description:
          "實現聊天會話的完整 CRUD 操作，具備實時更新和樂觀 UI 模式，通過 Redux 確保一致的狀態同步。",
      },
      {
        title: "安全優先方法： ",
        description:
          "確保所有用戶操作均受 JWT 驗證和用戶所有權驗證保護，防止未經授權的訪問。",
      },
      {
        title: "響應式設計： ",
        description:
          "設計現代、響應式的登陸和認證頁面，體現 Orbit AI 的品牌形象和 AI 能力。",
      },
    ],
    achievements: [
      "Orbit AI 聊天應用程式展示了先進的全棧開發技術，具備基於 JWT 的安全認證系統，通過嚴格的令牌驗證確保安全的 API 訪問。我設計了優化的 MongoDB 模式，採用策略性索引實現亞秒級聊天檢索，整合 Google Gemini 2.0 Flash 實現動態文字和圖像生成，並使用 Redux 進行無縫狀態管理，搭配 Framer Motion 動畫提升 UI 參與度。Docker化的 Express.js 後端部署於 AWS EC2，結合 AWS S3 提供可擴展儲存，以及流暢的 Docker Compose 配置，展現了雲端整合和現代 DevOps 的專業知識，交付了一個生產就緒的平台。",
    ],
    impact: [
      "Orbit AI 提供了一個安全、可擴展且引人入勝的對話平台，通過 Google Gemini 2.0 Flash 實現實時文字和圖像生成，確保快速響應和精緻的使用者體驗。其直觀的 UI/UX 設計，具備響應式導航和通過 Redux 及 JWT 認證 API 實現的安全 CRUD 操作，提升了用戶參與度。基於雲端的架構利用 AWS S3 和 EC2 支援並發用戶，我的的全棧開發和 DevOps 專業知識確保了符合行業標準的專業產品，超越現代用戶期望。",
    ],
  },
};
