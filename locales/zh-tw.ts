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
  hero: {
    name: "范庭維",
    occupation: "軟體工程師",
    greeting:
      "嗨，我是庭維\n擅長全端開發與 AI 技術的軟體工程師\n幫助產品實現快速上線與優異的使用者體驗",
    driveLink:
      "https://drive.google.com/file/d/1zztIxa3wGbKI3FcqAulb7toyLO8Fo6_o/view?usp=sharing",
  },
  about: {
    me: {
      name: "范庭維",
      title: "全端軟體工程師",
      intro: [
        "具備豐富實戰經驗的全端開發者，專長於設計與打造高效能、以使用者為核心的 AI 網頁應用。於百萬用戶的 AI 設計渲染服務中擔任核心工程角色，維運每日逾十萬活躍用戶與數百萬註冊帳號，成功交付多項關鍵功能，支撐平台穩定成長。熟悉雲端部署、自動化測試與敏捷開發流程，擅長跨部門協作與溝通，熱衷結合創新技術與現代架構，驅動產品價值最大化。",
      ],
    },
    jobs: [
      {
        title: "軟體工程師",
        company: "麒發科技 Architech AI",
        date: "十月 2024 - 至今",
        linkedin: "https://www.linkedin.com/company/architechtw",
        description: [
          "主導全產品 (ReRender & ReRoom) 主題重新設計，執行 A/B 測試，使註冊用戶增長超過 10%，並強化品牌與現代 UI 趨勢的一致性。利用 WebSocket 和 React Flow 打造類似 Miro 的 AI 版面功能，整合 AI 渲染控制，實現流暢的即時協作體驗，並優化選單系統以提升使用便利性",
        ],
      },
      {
        title: "初階建築師",
        company: "Robert A.M. Stern Architects",
        date: "四月 2022 - 八月 2024",
        linkedin: "https://www.linkedin.com/company/ramsa",
        description: [
          "在私有伺服器上部署 Stable Diffusion，消除對第三方 AI 服務的依賴，為 200 多個建築師訂閱帳戶節省超過 10 萬美元的年度服務訂閱費用",
        ],
      },
      {
        title: "實習建築師",
        company: "九典聯合建築師事務所",
        date: "五月 2019 - 八月 2019",
        linkedin:
          "https://www.linkedin.com/company/bio-architecture-formosana-taiwan/posts",
        description: [
          "主力負責成功大學老年醫院競圖視覺呈現表現，促成獲勝提案為事務所贏得該大型開發案",
        ],
      },
    ],
    education: [
      {
        school: "喬治亞理工學院",
        degree: "線上碩士 - 電腦科學",
        date: "一月 2025 - 至今",
      },
      {
        school: "紐約州立帝國大學",
        degree: "電腦科學碩士預修",
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
        skills: "TypeScript, JavaScript, Java, Python, C++",
      },
      {
        title: "前端",
        skills: "Next.js, React, Redux, Zustand, Tailwind CSS, Sass, HTML, CSS",
      },
      {
        title: "後端",
        skills: "Spring Boot, Node.js, Express.js, RESTful APIs, WebSockets",
      },
      {
        title: "認證",
        skills: "JWT, OAuth 2.0, Firebase Auth, NextAuth.js",
      },
      {
        title: "資料庫",
        skills: "MongoDB, PostgreSQL, Redis",
      },
      {
        title: "測試/打包",
        skills: "Jest, Unit Testing, Vite, npm, yarn, ESLint",
      },
      {
        title: "版本控制/開發維運",
        skills: "Git, GitHub, Linux, Shell Scripting, Nginx, Docker",
      },
      {
        title: "雲端",
        skills: "Cloudflare R2, AWS S3, AWS EC2, AWS Lambda, AWS CloudFront",
      },
      {
        title: "其他",
        skills:
          "Data Structure, Algorithms, Agile/Scrum, Performance Optimization, SEO",
      },
    ],
  },
  projects: [
    {
      title: "Sonicfi",
      year: "2025",
      description:
        "React, Zustand, TypeScript, Node.js, Express.js, MongoDB, Docker, AWS S3, AWS EC2",
      image: "/sonicfi-0.jpg",
      link: "/project/sonicfi",
    },
    {
      title: "Orbit",
      year: "2025",
      description:
        "React, Redux, TypeScript, Node.js, Express.js, MongoDB, Docker, AWS S3, AWS EC2",
      image: "/orbit-0.jpg",
      link: "/project/orbit",
    },
    {
      title: "Portfolio",
      year: "2025",
      description:
        "Next.js, Zustand, i18n, Tailwind CSS, Vercel, SEO, Cloudflare R2",
      image: "/portfolio-0.jpg",
      link: "/project/portfolio",
    },
    {
      title: "ReRender",
      year: "2024 - 2025",
      description:
        "Next.js, React, Redux, Socket.io, Redis, Node.js, MongoDB, Qdrant DB, AWS S3, AWS Lambda",
      image: "/rerender-0.jpg",
      link: "/project/rerender",
    },
    {
      title: "Tovier",
      year: "2024",
      description:
        "React, Context API, Tailwind CSS, Firebase Auth, Firebase Database, Vite, Vercel",
      image: "/tovier-0.jpg",
      link: "/project/tovier",
    },
    {
      title: "Orbit v1",
      year: "2024",
      description:
        "React, Context API, Gemini API, Tailwind CSS, Firebase Auth, Firebase Database, Vite, Vercel",
      image: "/orbit-v1-0.jpg",
      link: "/project/orbit-v1",
    },
  ],
  footer: {
    title: "讓我們一起打造下一世代的產品",
    intro:
      "具備扎實開發AI應用經驗的全端工程師\n專注於打造高效可擴展且以使用者為核心的網頁應用",
    message: "傳送訊息",
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
    fullstack: "全端網頁開發",
    devOps: "開發維運",
    uiux: "UI/UX 設計",
    achievements: "成果",
    impact: "影響",
    liveDemo: "前往應用",
    selectedWorks: "精選項目",
  },
};

export const PROJECTS_ZHTW: Record<string, Project> = {
  portfolio: {
    href: "https://www.tingweifan.com",
    type: "個人專案",
    webDev: "前端開發",
    year: "2025",
    service: "個人作品集",
    title: "作品集 – Next.js SEO 最佳化個人網站",
    summary: [
      "這是高效能的個人作品集網站，採用 Next.js 開發，旨在以優異的使用者體驗、現代化設計美學與強大的 SEO 功能，展示工程專案。此專案展現了在圖像優化、中繼資料設定、雲端資產傳遞及前端動畫方面的深厚技術，全面對齊業界對網站效能與可被搜尋性（Discoverability）的最佳實踐。",
    ],
    topic: [
      {
        type: "bullet-point",
        name: "技術應用",
        details: [
          {
            title: "前端技術: ",
            description: "Next.js, Tailwind CSS, Framer Motion, Next Image",
          },
          {
            title: "資產託管: ",
            description: "Cloudflare R2",
          },
          {
            title: "搜尋引擎優化: ",
            description:
              "Semantic HTML, Custom Metadata, Social Media Card Previews",
          },
          {
            title: "開發維運: ",
            description:
              "Vercel Deployment with GitHub CI/CD, Custom Domain (www.tingweifan.com)",
          },
        ],
      },
      {
        type: "breakdown",
        name: "SEO優化與中繼資料策略",
        details: [
          {
            title: "搜尋引擎最佳化: ",
            description:
              "正確設定頁面標題、描述與標準網址（Canonical URL）的中繼資料，確保與各大搜尋引擎相容",
          },
          {
            title: "社群媒體整合: ",
            description:
              "設計動態 Open Graph 與 Twitter 卡片中繼資料，提升在 Twitter、LinkedIn 和 Facebook 等平台的分享預覽效果",
          },
          {
            title: "Favicon與圖示相容性: ",
            description:
              "實作完整的瀏覽器相容圖示，並針對舊版或非主流瀏覽器設計回退機制",
          },
        ],
      },
      {
        type: "breakdown",
        name: "圖像優化與靜態資源傳遞",
        details: [
          {
            title: "圖像渲染最佳化: ",
            description:
              "使用 Next.js 的 next/image 元件，為每張圖片設置正確的寬度與高度，確保視覺清晰度與效能",
          },
          {
            title: "優先與延遲載入策略: ",
            description:
              "將畫面上方的關鍵內容（如主視覺區塊、專案卡片）設定為優先載入，其餘畫面外資源則透過延遲載入加速頁面速度",
          },
          {
            title: "Cloudflare R2 整合: ",
            description:
              "所有圖像資產皆部署至 Cloudflare R2，以提供快速的全球傳遞、有效的快取機制與可擴展的靜態資產管理",
          },
          {
            title: "高解析度備援: ",
            description:
              "將圖片以 4 倍顯示解析度匯出（例如為 400×400px 顯示區域輸出 800×800px 的 WebP 圖片，72 DPI），兼顧 Retina 螢幕與檔案大小控制",
          },
        ],
      },
      {
        type: "breakdown",
        name: "前端開發與使用者體驗設計",
        details: [
          {
            title: "現代化UI設計: ",
            description:
              "打造視覺精緻的版面，包括協調的配色、元件級間距設定與像素級精準的專案展示區塊",
          },
          {
            title: "動態與互動設計: ",
            description:
              "整合 Framer Motion，加入動畫轉場、滑鼠懸停特效與捲動觸發視覺效果，提升互動性與美感",
          },
          {
            title: "響應式佈局: ",
            description:
              "採用 Tailwind CSS 建立全響應式設計，完美適應手機、平板與大型桌面裝置",
          },
          {
            title: "展示內容: ",
            description:
              "設計並匯出適合展示的 Mock up 內容，確保資產整齊對齊，於各種螢幕上皆有清晰顯示效果",
          },
        ],
      },
      {
        type: "paragraph",
        name: "成果",
        paragraphs: [
          "此作品集專案體現了 SEO、雲端資產管理與前端開發的最佳實務，展現對 Next.js 的 SSR/ISR 技術、Cloudflare R2 的圖像優化策略與 Framer Motion 的互動 UI 設計之技術熟練。成果是一個高效能且優雅的作品網站，兼具設計敏銳度與工程紀律。",
        ],
        details: [],
      },
      {
        type: "paragraph",
        name: "影響",
        paragraphs: [
          "交付了一個具專業水準的個人網站，充分展現現代網頁開發、搜尋引擎優化與以使用者為核心的設計能力。此網站不僅呈現全端開發實力，也作為前端細節把控、美感品味與效能意識的實戰證明。",
        ],
        details: [],
      },
    ],
  },
  sonicfi: {
    href: "https://www.sonic-fi.com",
    type: "個人專案",
    webDev: "全端",
    year: "2025",
    service: "音樂串流平台",
    title: "SonicFi 音樂串流平台",
    summary: [
      "一個採用現代技術打造的全端音樂串流應用程式，具備安全認證、實時音頻串流以及智能音樂推薦功能。此項目展示了在安全 API 設計、高效資料庫管理、現代前端開發以及穩健的 CI/CD 管道方面的專業知識，提供無縫且個人化的使用者體驗。",
    ],
    topic: [
      {
        type: "bullet-point",
        name: "技術應用",
        details: [
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
      },
      {
        type: "breakdown",
        name: "後端開發",
        details: [
          {
            title: "結構化 API 設計: ",
            description:
              "開發了組織化的 RESTful API 路由，搭配模組化控制器和模式驗證，遵循行業最佳實踐，確保可維護性和可擴展性。",
          },
          {
            title: "安全認證與授權: ",
            description:
              "實現基於 JWT 的認證，保護路由，確保令牌驗證和用戶 ID 與資料庫記錄匹配，防止未經授權的訪問。",
          },
          {
            title: "資料庫設計與性能: ",
            description:
              "設計優化的 MongoDB 模式，採用策略性索引，實現對專輯、曲目和藝術家的快速查詢，支援高效搜尋功能和實時音樂發現。",
          },
          {
            title: "雲端基礎設施與儲存: ",
            description:
              "整合 AWS S3 進行可擴展的靜態資產和媒體文件儲存，確保可靠訪問，並實現有組織的 API 架構，包含路由、控制器和模式模型。",
          },
          {
            title: "智能音樂推薦: ",
            description:
              "構建先進的推薦引擎，利用資料庫索引和演算法排序，根據趨勢狀態、熱門程度、發行日期和藝術家關聯實現動態內容傳遞。",
          },
          {
            title: "靈活的訪問控制: ",
            description:
              "允許未認證用戶通過GET請求串流音樂，同時為認證用戶提供完整的CRUD功能（創建、讀取、更新、刪除），實現個人化播放列表管理。",
          },
        ],
      },
      {
        type: "breakdown",
        name: "前端開發",
        details: [
          {
            title: "RESTful API 整合: ",
            description:
              "使用 React 高效獲取和顯示推薦曲目、專輯和藝術家的實時資料，確保流暢的串流體驗。",
          },
          {
            title: "狀態管理與實時功能: ",
            description:
              "採用 Zustand 進行全局音頻播放器狀態管理，處理曲目排隊、音量控制和播放功能，最大程度減少重新渲染。",
          },
          {
            title: "動態路由與導航: ",
            description:
              "使用 React Router DOM 實現參數化路由（/album/:id、/artist/:id、/track/:id），與資料庫模式對應，實現高效資料獲取和響應式導航。",
          },
          {
            title: "安全用戶交互: ",
            description:
              "允許認證用戶通過受保護的API調用安全管理播放列表（重命名、刪除、搜尋和添加曲目），通過基於JWT的認證確保資料完整性。",
          },
          {
            title: "進階文件處理: ",
            description:
              "構建多功能圖像處理管道，支援多種格式（JPG、PNG、WebP），轉換為 Uint8Array 用於 AWS S3 上傳。",
          },
        ],
      },
      {
        type: "breakdown",
        name: "開發維運",
        details: [
          {
            title: "容器化與雲端部署: ",
            description:
              "構建並部署 Docker化 的 Express.js 後端，將所有依賴項打包到容器鏡像中，託管於 Docker Hub，實現 AWS EC2 無縫部署。",
          },
          {
            title: "Docker Compose 配置: ",
            description:
              "定義全面的 docker-compose.yml 檔案，自動化容器設置，指定平台、端口、環境變數、資源限制、資料庫配置和 Nginx 以實現最佳性能。",
          },
          {
            title: "系統管理: ",
            description:
              "利用 Linux shell 命令進行 AWS EC2 管理和 Docker Hub 整合，展示強大的系統管理技能，用於雲端基礎設施監控和維護。",
          },
        ],
      },
      {
        type: "image",
        name: "UI/UX 設計",
        images: ["/sonicfi-3.jpg", "/sonicfi-4.jpg"],
        paragraphs: [],
        details: [
          {
            title: "現代界面設計: ",
            description:
              "打造乾淨、現代的登陸頁面、登入界面和音樂播放器 UI，採用一致的視覺設計系統，體現 SonicFi 的品牌形象，提升用戶參與度。",
          },
          {
            title: "一致的主題: ",
            description:
              "設計響應式、可訪問的界面，確保跨設備的無縫用戶體驗，符合現代音樂串流平台的審美標準。",
          },
          {
            title: "用戶播放列表管理: ",
            description:
              "提供直觀的音樂庫管理界面，支援全面的播放列表功能（重命名、刪除、搜尋和創建），實現實時更新。",
          },
        ],
      },
      {
        type: "paragraph",
        name: "成果",
        paragraphs: [
          "該項目實現了強大的 JWT 認證，搭配全面的用戶授權驗證，確保安全的 API 訪問並維護系統的資料完整性。性能優化是重點，通過策略性資料庫索引和精心優化的資料模型，實現亞秒級查詢響應，簡化資料檢索流程。架構設計考慮到可擴展性，採用基於雲端的基礎設施，通過無縫的 AWS S3 和 AWS EC2 整合支援並發用戶。",
          "為提升可訪問性和個人化，平台提供雙層服務模型，為訪客和認證用戶提供量身定制的體驗。開發過程展示了對現代 JavaScript 框架、當代開發工具和行業標準 DevOps 實踐的全面熟練度。",
        ],
        details: [],
      },
      {
        type: "paragraph",
        name: "影響",
        paragraphs: [
          "該項目成功交付了一個安全、可擴展、以用戶為中心的音樂串流平台，具備優化的實時交互性能。此工作展示了在全棧開發、雲端整合、Zustand 狀態管理和現代 DevOps 實踐方面的全面專業知識，符合當前行業標準的生產就緒應用程式要求。",
          "平台通過直觀的 UI/UX 設計、無縫的導航功能和智能音樂推薦系統提升用戶參與度，最終打造出一個符合現代用戶期望的精緻、專業產品。",
        ],
        details: [],
      },
    ],
  },
  orbit: {
    href: "https://www.orbits-ai.com",
    type: "個人專案",
    webDev: "全端",
    year: "2025",
    service: "AI 對話式應用",
    title: "Orbit — AI 對話式應用",
    summary: [
      "一個利用 Google Gemini 2.0 Flash 進行文字生成和圖像合成的先進對話式 AI 平台，具備企業級安全性和可擴展性。此項目展示了在安全後端開發、高效資料庫設計、動態前端實現與穩健狀態管理以及流暢的 CI/CD 管道方面的專業知識，提供無縫且引人入勝的使用者體驗。",
    ],
    topic: [
      {
        type: "bullet-point",
        name: "技術應用",
        details: [
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
      },
      {
        type: "breakdown",
        name: "後端開發",
        details: [
          {
            title: "安全認證系統: ",
            description:
              "實現基於 JWT 的認證，保護路由，確保令牌驗證和用戶 ID 與資料庫記錄的驗證，提供安全的 API 訪問。",
          },
          {
            title: "高效資料模型: ",
            description:
              "設計高效的聊天和訊息模式，採用優化索引，實現快速且精準的聊天檢索和搜尋功能。",
          },
          {
            title: "RESTful API 設計: ",
            description:
              "開發模組化的 API 架構，具備組織化的路由、中間件和模式驗證，確保程式碼的可維護性和可擴展性。",
          },
          {
            title: "資料轉換層: ",
            description:
              "設計簡約但穩健的資料結構，優化 Gemini API 響應負載，提升客戶端-伺服器通訊效率。",
          },
          {
            title: "雲端儲存整合: ",
            description:
              "架構 AWS S3 整合，用於高效儲存用戶上傳和 AI 生成的圖像，自動優化以實現可擴展性。",
          },
        ],
      },
      {
        type: "breakdown",
        name: "前端開發",
        details: [
          {
            title: "全局狀態管理: ",
            description:
              "利用 Redux 管理複雜的應用程式狀態，確保聊天會話、用戶設置和實時 UI 更新的可預測資料流，提升可擴展性和可維護性。",
          },
          {
            title: "AI API 整合: ",
            description:
              "無縫整合 Google Gemini 2.0 Flash 用於文字和圖像生成，具備穩健的錯誤處理和後備機制，確保可靠性能。",
          },
          {
            title: "進階文件處理: ",
            description:
              "構建多功能圖像處理管道，支援多種格式（JPG、PNG、WebP），轉換為 base64 以確保 API 兼容性，以及 Uint8Array 用於 AWS S3 上傳。",
          },
          {
            title: "動態路由: ",
            description:
              "使用 React Router DOM 實現參數化路由（/c/:id），提供高效的聊天導航和優化的資料庫獲取。",
          },
          {
            title: "增強用戶體驗: ",
            description:
              "採用 Framer Motion 實現流暢的響應生成和載入狀態動畫，提升用戶參與度和界面精緻度。",
          },
          {
            title: "現代 UI 設計: ",
            description:
              "打造簡潔直觀的聊天界面，包含集中式的文字和圖像輸入區、聊天歷史側邊欄、導航和設置，符合現代 AI 聊天設計趨勢。",
          },
          {
            title: "安全用戶操作: ",
            description:
              "通過 JWT 認證的 API 調用，實現完整的聊天管理（創建、重命名、刪除、搜尋），確保安全且特定於用戶的操作。",
          },
        ],
      },
      {
        type: "breakdown",
        name: "開發維運",
        details: [
          {
            title: "容器化部署: ",
            description:
              "將 Express.js 後端及其依賴項打包為 Docker 鏡像，推送至 Docker Hub，並部署於 AWS EC2，提供可靠、可擴展的託管。",
          },
          {
            title: "自動化基礎設施: ",
            description:
              "配置 Docker Compose YAML，定義平台設置、端口、環境變數、資源限制、資料庫規格和 Nginx，實現高效的容器編排。",
          },
          {
            title: "Linux 熟練度: ",
            description:
              "利用 Linux shell 命令進行 AWS EC2 管理和 Docker Hub 整合，展示強大的系統管理技能。",
          },
        ],
      },
      {
        type: "breakdown",
        name: "UI/UX 設計",
        details: [
          {
            title: "完整聊天管理: ",
            description:
              "實現聊天會話的完整 CRUD 操作，具備實時更新和樂觀 UI 模式，通過 Redux 確保一致的狀態同步。",
          },
          {
            title: "安全優先方法: ",
            description:
              "確保所有用戶操作均受 JWT 驗證和用戶所有權驗證保護，防止未經授權的訪問。",
          },
          {
            title: "響應式設計: ",
            description:
              "設計現代、響應式的登陸和認證頁面，體現 Orbit AI 的品牌形象和 AI 能力。",
          },
        ],
      },
      {
        type: "paragraph",
        name: "成果",
        paragraphs: [
          "Orbit AI 聊天應用程式展示了先進的全棧開發技術，具備基於 JWT 的安全認證系統，通過嚴格的令牌驗證確保安全的 API 訪問。我設計了優化的 MongoDB 模式，採用策略性索引實現亞秒級聊天檢索，整合 Google Gemini 2.0 Flash 實現動態文字和圖像生成，並使用 Redux 進行無縫狀態管理，搭配 Framer Motion 動畫提升 UI 參與度。Docker化的 Express.js 後端部署於 AWS EC2，結合 AWS S3 提供可擴展儲存，以及流暢的 Docker Compose 配置，展現了雲端整合和現代 DevOps 的專業知識，交付了一個生產就緒的平台。",
        ],
        details: [],
      },
      {
        type: "paragraph",
        name: "影響",
        paragraphs: [
          "Orbit AI 提供了一個安全、可擴展且引人入勝的對話平台，通過 Google Gemini 2.0 Flash 實現實時文字和圖像生成，確保快速響應和精緻的使用者體驗。其直觀的 UI/UX 設計，具備響應式導航和通過 Redux 及 JWT 認證 API 實現的安全 CRUD 操作，提升了用戶參與度。基於雲端的架構利用 AWS S3 和 EC2 支援並發用戶，我的的全棧開發和 DevOps 專業知識確保了符合行業標準的專業產品，超越現代用戶期望。",
        ],
        details: [],
      },
    ],
  },
  "orbit-v1": {
    href: "https://orbit-ai-chatbot.vercel.app",
    type: "個人專案",
    webDev: "全端",
    year: "2024",
    service: "AI 對話式應用",
    title: "Orbit v1 — AI 對話式應用",
    summary: [
      "作為 Orbit AI 系列的首個版本，此專案奠定對話式 AI 平台的基礎架構，採用 Firebase 與 Context API 實現快速迭代開發。雖具備流暢的即時對話體驗與精緻用戶介面，相較於後續企業級規格的 v2 版本，尚未引入 Redux 狀態管理、JWT 加密的 Express API、MongoDB 索引優化、圖像生成功能及 Docker 化 AWS 部署等高階功能。",
      "這款先進 AI 聊天機器人應用程式，專為跨網頁與行動平台打造無縫互動體驗，展現 AI API 整合能力、安全的用戶管理系統與響應式 UI 設計，突顯開發者在即時資料處理與現代化部署的專業實力。",
    ],
    topic: [
      {
        type: "bullet-point",
        name: "技術應用",
        details: [
          {
            title: "前端: ",
            description: "React, React Router DOM, Context API, Tailwind CSS",
          },
          {
            title: "後端: ",
            description: "Gemini API, Firebase, Firebase Authentication",
          },
          {
            title: "資料庫: ",
            description: "Firestore",
          },
          {
            title: "部署方案: ",
            description: "Vercel, Vite",
          },
        ],
      },
      {
        type: "breakdown",
        name: "後端開發",
        details: [
          {
            title: "Gemini API 深度整合: ",
            description:
              "串接 Google 新一代 Gemini AI 模型，實現具上下文感知的智能對話流",
          },
          {
            title: "會話持久化設計: ",
            description:
              "運用 Firestore 安全儲存對話歷程與用戶資料，確保重啟會話時快速載入歷史紀錄",
          },
          {
            title: "多重認證方案: ",
            description:
              "支援電子郵件/密碼與 Google OAuth 雙重登入機制，搭配路由保護強化資料安全性",
          },
          {
            title: "彈性部署架構: ",
            description:
              "採用 Vercel 無伺服器部署，實現全球低延遲響應與高併發承載能力",
          },
        ],
      },
      {
        type: "breakdown",
        name: "前端開發",
        details: [
          {
            title: "即時對話引擎: ",
            description:
              "建置具打字動畫效果的聊天室界面，優化對話流可讀性與互動即時感",
          },
          {
            title: "輕量級狀態管理: ",
            description:
              "透過 Context API 集中管理對話狀態、用戶偏好設定與跨組件資料流",
          },
          {
            title: "響應式佈局: ",
            description:
              "基於 Tailwind CSS 的斷點自適應設計，完美適配從手機到桌機的多元裝置",
          },
          {
            title: "微互動優化: ",
            description:
              "設計按鈕懸停動效與輸入框焦點狀態，提升介面操作回饋精緻度",
          },
        ],
      },
      {
        type: "breakdown",
        name: "開發維運",
        details: [
          {
            title: "自動化 CI/CD 管道: ",
            description:
              "利用 Vercel 原生集成實現 Git 觸發式部署，分鐘級完成生產環境更新",
          },
          {
            title: "邊緣網路優化: ",
            description:
              "透過 Vercel CDN 全球節點分發靜態資源，達成 95% 以上地區 sub-200ms 載入",
          },
        ],
      },
      {
        type: "image",
        name: "UI/UX 設計",
        images: ["/orbit-v1-5.jpg", "/orbit-v1-4.jpg", "/orbit-v1-3.jpg"],
        paragraphs: [],
        details: [
          {
            title: "現代化視覺語言: ",
            description:
              "遵循 Material Design 3 設計規範，打造符合預期心理模型的直覺對話流程",
          },
          {
            title: "無障礙優先: ",
            description:
              "嚴格對比度檢核、鍵盤導航支援與即時操作回饋，確保包容性使用體驗",
          },
        ],
      },
      {
        type: "paragraph",
        name: "成果",
        paragraphs: [
          "Orbit AI v1 成功驗證 Firebase 認證系統的安全架構，結合 Gemini API 實現低延遲智能對話，並藉由 Vercel 無伺服器部署展現水平擴展能力。其精煉的互動設計與跨裝置相容性，完整體現 React + Tailwind CSS 技術組合的生產力優勢，為後續企業級版本奠定技術驗證基礎。",
        ],
        details: [],
      },
      {
        type: "paragraph",
        name: "影響",
        paragraphs: [
          "Orbit AI v1 展現了現代化對話式AI應用的關鍵技術實踐: 透過輕量級技術棧（Context API + Firebase）實現高效能即時互動，驗證了精簡架構在商業場景中的可行性；深度整合Gemini API與Firestore，建立可擴展的AI對話服務架構，為後續功能擴展奠定基礎；採用Vercel無伺服器部署，不僅達成99.9%運行時可用性，更實證了邊緣運算在即時互動場景的效能優勢。本專案完整呈現從AI能力整合、狀態管理到全球部署的全端開發實力，特別彰顯在資源有限情況下仍能兼顧效能與使用者體驗的技術決策能力。",
        ],
        details: [],
      },
    ],
  },
  tovier: {
    href: "https://tovier-trailer.vercel.app",
    type: "個人專案",
    webDev: "全端",
    year: "2024",
    service: "影視串流平台",
    title: "Tovier — 電影預告串流平台",
    summary: [
      "一個視覺豐富的全端網頁應用，整合 TMDB 即時資料庫，提供影視作品預覽與探索功能。本作品展現了前端開發實力、安全的用戶管理系統與效能優化部署，為多端設備使用者打造沉浸式娛樂內容發現體驗。",
    ],
    topic: [
      {
        type: "bullet-point",
        name: "技術應用",
        details: [
          {
            title: "前端: ",
            description: "React, React Router DOM, Context API, Tailwind CSS",
          },
          {
            title: "後端: ",
            description: "TMDB API, Firebase, Firebase Authentication",
          },
          {
            title: "資料庫: ",
            description: "Firestore",
          },
          {
            title: "部署方案: ",
            description: "Vercel, Vite",
          },
        ],
      },
      {
        type: "breakdown",
        name: "後端開發",
        details: [
          {
            title: "TMDB API 整合: ",
            description:
              "串接全球影視資料庫 TMDB，即時獲取電影/影集元數據、預告片與熱門內容",
          },
          {
            title: "安全認證機制: ",
            description:
              "採用 Firebase Authentication 實現電子郵件/密碼登入系統，確保用戶個資安全與會話管理",
          },
          {
            title: "用戶偏好儲存: ",
            description:
              "透過 Firestore 儲存收藏片單與觀看紀錄，實現基於用戶興趣的動態內容渲染",
          },
        ],
      },
      {
        type: "breakdown",
        name: "前端開發",
        details: [
          {
            title: "動態內容展示: ",
            description:
              "運用 React Hooks 與 API 數據流，構建響應式界面動態呈現影視詳情與預告片",
          },
          {
            title: "用戶互動個人化: ",
            description:
              "註冊用戶可即時同步收藏內容至 Firestore，隨時返回個人化片單",
          },
          {
            title: "狀態管理優化: ",
            description:
              "結合 React 內建狀態與 Context API，高效處理用戶流程與導航交互",
          },
        ],
      },
      {
        type: "breakdown",
        name: "開發維運",
        details: [
          {
            title: "Vercel 無伺服器部署: ",
            description:
              "透過 Vercel 實現快速發布與 CI/CD 自動化流程，確保高可用性與低延遲",
          },
          {
            title: "效能調校: ",
            description:
              "優化圖片載入策略、路由切換與 API 請求頻率，達成即時互動無卡頓體驗",
          },
        ],
      },
      {
        type: "image",
        name: "UI/UX 設計",
        images: [
          "https://r2.tfan2437.workers.dev/projects/tovier-3.webp",
          "https://r2.tfan2437.workers.dev/projects/tovier-4.webp",
        ],
        paragraphs: [],
        details: [
          {
            title: "自適應佈局: ",
            description:
              "基於 Tailwind CSS 的流體響應設計，在行動端與桌機端均提供直覺操作體驗",
          },
          {
            title: "視覺美學: ",
            description:
              "採用類主流串流平台設計語言，融合簡潔版式、現代字體排印與多媒體預覽區塊",
          },
        ],
      },
      {
        type: "paragraph",
        name: "成果",
        paragraphs: [
          "Tovier 成功整合 TMDB 即時影視資料流，透過 Firebase 認證系統與 Firestore 實現安全個人化功能，並藉由 Tailwind CSS 打造符合現代標準的響應式界面。採用 Vercel 無伺服器架構部署，展現兼具高效能與擴展性的全端開發實力。",
        ],
        details: [],
      },
      {
        type: "paragraph",
        name: "影響",
        paragraphs: [
          "本平台為影視愛好者提供沉浸式內容探索體驗，完美結合即時資料擷取、用戶個人化系統與當代 UI 設計，充分體現針對互動式內容消費場景的全端開發專業度。",
        ],
        details: [],
      },
    ],
  },
  rerender: {
    href: "https://rerenderai.com",
    type: "公司產品",
    webDev: "全端",
    year: "2024 – 2025",
    service: "AI 渲染應用",
    title: "ReRender 與 ReRoom",
    summary: [
      "在 Architech AI，我擔任全端工程師，負責維護與開發公司旗艦的 AI 設計平台 ReRender 與 ReRoom，並在節奏快速的新創環境中協作推進。我參與整個產品生命週期的各個階段，從 UI/UX 構思、系統架構設計，到可擴展的功能實作與持續優化。",
      "我使用的核心技術包括 React、Redux、TypeScript、Tailwind、Next.js、Node.js 與 向量資料庫，並特別重視撰寫具備類型安全性、可維護性與可擴展性的程式碼。我也透過 Jest 撰寫單元測試與整合測試，確保系統穩定性，並積極撰寫 技術文件、產品需求文件（PRD）與技術規格文件（TSD），以促進工程與產品團隊之間的協作與共識。",
      "我熟悉 Scrum 與敏捷開發流程，不僅具備 帶領 Sprint 的經驗，也能在由他人主導的跨職能 Sprint 中積極投入並發揮價值。我參與並成功交付多項高影響力功能，整合先進的 AI 渲染模型與嵌入式資料流程，持續優化設計流程、提升使用者體驗，並推動具體的業務成效。",
    ],
    topic: [
      {
        type: "image",
        name: "Board 多人協作 AI 版面功能",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-board-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-board-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-board-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-board-3.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-board-4.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-board-5.jpg",
        ],
        paragraphs: [
          "這項功能是在我與工程團隊密切合作下完成的。我參與開發一套互動式畫布介面，支援協作式、節點導向的設計流程類似 Miro 或 Figma 的 FigJam，但專為建築與室內設計領域中的 AI 渲染應用所量身打造。",
          "我負責設計與實作系統的核心部分，包括支援即時同步的 WebSocket 功能、前後端整合的畫布元件庫、以及使用者互動的樂觀 UI 更新機制。我設計了全新的版型，用於這項創新功能的首次發表，並基於 React Flow 延伸開發可重複使用的元件，以支援我們的 AI 渲染流程。",
          "我的主要任務是整合渲染選單與節點互動邏輯，打造一套高度一致、直觀的 UI/UX 系統，確保使用者操作與 AI 模型的反應同步一致。這次經驗奠定了我在畫布式 UI 架構、即時協作設計模式與可擴展全端系統設計上的實力。如今，Board 功能已成為我們平台上推動創意協作的核心基礎。",
        ],
        details: [],
      },
      {
        type: "image",
        name: "Moodboard: 風格個人化開發",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-personalize-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-personalize-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-personalize-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-personalize-3.jpg",
        ],
        paragraphs: [
          "為提升 AI 渲染流程的個人化程度，我獨立設計並開發了 Moodboard 情緒板功能，讓建築師與室內設計師能夠集中管理與重複使用他們收集的設計靈感。這項完整的功能開發涵蓋資料結構與 Schema 設計、前端介面實作，以及串接後端 AI 模型伺服器，以提供最佳化的使用者體驗。",
          "我在象限型向量資料庫上建立了自訂的 CRUD 系統，透過向量點積相似度演算法，從使用者的情緒板中擷取最符合風格的參考圖片。此功能同時整合我們內部的圖像辨識與嵌入流程，實現高精度、風格一致的渲染結果。此功能迅速成為高階使用者的核心工具之一，也象徵著我在後端系統與資料庫整合能力上的重要突破，累積了實際操作向量演算法與生產環境部署經驗。",
        ],
        details: [],
      },
      {
        type: "image",
        name: "圖片轉影片渲染",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-video-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-video-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-video-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-video-3.jpg",
        ],
        paragraphs: [
          "我重新設計並實作了圖片轉影片渲染功能，使用我們自研的 AI 影片生成模型，並直接串接 GPU 伺服器以產出高保真度的視覺內容。此功能升級解決了原始版本中的主要品質問題，重點改善視覺真實度、使用體驗以及商業轉換潛力。我加入了 相機視角的自動播放預覽功能，並設計了乾淨、沉浸式的 UI，無縫整合至渲染流程中。",
          "我同時重構了首頁的影片模組，突顯 Pro 進階訂閱方案，進一步強化用戶轉換路徑。該功能廣受室內設計師好評，並成功帶動影片工具的使用率與留存率提升。這段經歷展現了我維護並優化既有功能的能力，能透過設計思維發掘功能潛力，同時兼顧使用者體驗與商業成長需求，推動產品持續進化。",
        ],
        details: [],
      },
      {
        type: "image",
        name: "虛擬佈置",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-staging-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-staging-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-staging-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-staging-3.jpg",
        ],
        paragraphs: [
          "我獨立開發了虛擬佈置功能，針對房地產專業人士與居家用戶對速度、品質與真實感的需求進行設計與優化。此功能特別適合仲介在帶看時，透過行動裝置即時展示不同空間配置與風格的視覺效果。",
          "為了提升使用靈活度與易用性，我實作了 三種參考風格輸入模式，分別對應不同層次的自訂需求。第一種為即選即用的熱門空間風格預設組合；第二種允許使用者上傳自選參考圖片，引導 AI 進行風格化佈置；第三種則內建圖像搜尋功能，讓使用者能直接從網路探索靈感並應用至空間設計中。",
          "此功能大幅提升平台的創作彈性，展現了我在設計使用者導向功能、整合前端體驗與後端 AI 模型之間的協同能力，並能實際解決跨桌機與行動端的真實使用場景。",
        ],
        details: [],
      },
      {
        type: "image",
        name: "主題樣式改版與企業級 UI 設計領導經驗",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-theme-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-theme-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-theme-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-theme-3.jpg",
        ],
        paragraphs: [
          "我主導了公司兩項核心產品 ReRender 和 ReRoom 以及一款新推出的企業級產品的 UI 全面改版。結合產業最佳實踐與現代設計趨勢，我提出並實作了從登入前到登入後所有頁面的版面與視覺更新。此次改版導入了極簡、全螢幕的介面風格，全面提升了產品在建築與室內設計領域的專業審美標準。",
          "透過嚴謹的 A/B 測試，我們驗證了新版高質感視覺主題的成效，成功帶來超過統計顯著的使用者註冊成長。除了實作外，我也積極參與 Sprint 規劃與跨部門協作，展現我從概念到產品落地的 UI/UX 領導能力，結合設計思維與前端工程實力，推動整體產品體驗提升。",
        ],
        details: [],
      },
      {
        type: "image",
        name: "企業團隊訂閱管理與聯盟推廣功能",
        images: [
          "https://r2.tfan2437.workers.dev/products/rerender-team-0.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-team-1.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-team-2.jpg",
          "https://r2.tfan2437.workers.dev/products/rerender-team-3.jpg",
        ],
        paragraphs: [
          "我設計並開發了多項核心商業化功能，支援企業用戶的協作管理需求與社群推廣策略，成功擴展平台的收入來源與使用者成長潛力。在企業端，我獨立實作團隊帳單與權限管理功能前端，支援集中帳單管理、角色權限控制與 Stripe 整合。針對架構回饋，我主動重構元件結構，提升系統的可擴展性與維護性。此功能已廣泛被設計事務所與建築工作室採用。",
          "同時，我也開發了彈性的聯盟推廣機制與響應式定價頁面，支援 KOL 與教育工作者透過用戶分類制度（Class-based Segmentation）提供專屬折扣與個人化價格顯示。這兩項功能大幅提升了轉換率與用戶覆蓋面，並展現了我將工程實作、商業策略與產品思維整合的能力，打造出具備成長導向與生產等級品質的基礎架構。",
        ],
        details: [],
      },
    ],
  },
};
