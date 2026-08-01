export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // ── Featured Projects ──────────────────────────────────────────────
  {
    id: "smartsafe-ppe-detection",
    title: "SmartSafe AI — Enterprise PPE Detection",
    description:
      "A real-time industrial personal protective equipment detection system delivered as a SaaS platform, built on YOLO and OpenCV.",
    longDescription:
      "SmartSafe AI monitors industrial work sites in real time and detects whether personnel are wearing the required personal protective equipment. The system runs YOLO-based object detection over live camera streams handled with OpenCV and FFmpeg, persists detection events to a SQL database, and exposes the results through a modern full-stack dashboard. The whole stack is containerised with Docker for repeatable deployment across sites.",
    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "FFmpeg",
      "SQL",
      "Docker",
      "Computer Vision",
      "Full Stack",
    ],
    achievements: [
      "Built real-time PPE detection over live industrial camera streams using YOLO and OpenCV",
      "Designed a multi-tenant SaaS architecture with a SQL-backed detection event pipeline",
      "Containerised the full stack with Docker for repeatable deployment across work sites",
      "Handled video ingestion and stream processing with FFmpeg for continuous monitoring",
    ],
    image: "/images/projects/smartsafe-ppe-detection/smartsafe-ppe-detection.jpg",
    github: "https://github.com/Yigit033/SmartSafe-PPE-Detection",
    featured: true,
  },
  {
    id: "swing-trade",
    title: "Professional Swing Trading System",
    description:
      "A modular algorithmic trading system combining multi-factor signals, XGBoost prediction, SHAP explainability and LLM-powered analytics.",
    longDescription:
      "AI Swing Trader is an event-driven algorithmic trading system built around a modular architecture. It generates multi-factor trading signals, predicts price movement with XGBoost, and makes every decision auditable through SHAP explainability rather than leaving the model as a black box. Position sizing and stop levels are governed by ATR-based risk engines, while an LLM layer produces natural-language analytics on top of the quantitative output.",
    technologies: [
      "Python",
      "XGBoost",
      "SHAP",
      "Event-Driven Architecture",
      "Generative AI",
      "LLMs",
      "Quantitative Analysis",
    ],
    achievements: [
      "Designed a modular, event-driven architecture separating signals, prediction, risk and analytics",
      "Implemented XGBoost-based price movement prediction with multi-factor signal inputs",
      "Added SHAP explainability so every trading decision can be traced back to its drivers",
      "Built ATR-based risk engines for position sizing and stop management",
      "Layered LLM-powered analytics on top of the quantitative pipeline",
    ],
    image: "/images/projects/swing-trade/swing-trade.jpg",
    github: "https://github.com/Yigit033/swing_trade",
    featured: true,
  },
  {
    id: "insurance-automation",
    title: "Insurance Automation System",
    description:
      "An AI- and OCR-powered platform that automates document management in the insurance industry and integrates with enterprise systems via API.",
    longDescription:
      "This system removes manual document handling from insurance operations. Incoming documents are read with OCR, interpreted by AI models, and processed in real time into structured data. The platform integrates with existing enterprise systems through an API layer, so automation can be added without replacing the systems already in place.",
    technologies: ["Python", "OCR", "Artificial Intelligence", "REST API", "Automation", "SQL"],
    achievements: [
      "Automated insurance document management with an OCR and AI processing pipeline",
      "Processed and structured incoming document data in real time",
      "Integrated with existing enterprise systems through a dedicated API layer",
    ],
    image: "/images/projects/insurance-automation/insurance-automation.jpg",
    github: "https://github.com/Yigit033/insurance-automation-system",
    featured: true,
  },

  // ── Other Projects ─────────────────────────────────────────────────
  {
    id: "taskflow",
    title: "TaskFlow Automation System",
    description:
      "A task and workflow management system that streamlines complex operational pipelines with agent-driven automation.",
    longDescription:
      "TaskFlow is a comprehensive task and workflow management system built to streamline complex operational pipelines. It combines a Next.js front end with Python services and Supabase for data and authentication, and integrates agent workflows so routine process steps are handled automatically rather than manually.",
    technologies: ["Next.js", "Python", "Supabase", "TypeScript", "Agent Workflows", "Automation"],
    achievements: [
      "Engineered an end-to-end task and workflow management system for operational pipelines",
      "Integrated scalable backend services with Supabase for data and authentication",
      "Added agent workflows for automated process handling",
    ],
    image: "/images/projects/taskflow/taskflow.jpg",
    github: "https://github.com/reklamciyildiz/taskflow",
    featured: false,
  },
  {
    id: "youtube-video-automation",
    title: "YouTube Video Automation Pipeline",
    description:
      "A fully automated, multi-step video production pipeline for cinematic historical channels, driven by LLM script generation.",
    longDescription:
      "This pipeline takes a video from idea to finished render without manual intervention. An LLM generates the script, automated workflows assemble the required visual assets, and FFmpeg handles the final rendering. Each stage is orchestrated in Python with external API integrations, turning what is normally hours of editing work into a repeatable automated process.",
    technologies: ["Python", "FFmpeg", "LLMs", "Generative AI", "API Integration", "Automation"],
    achievements: [
      "Built a multi-step, fully autonomous video production pipeline",
      "Automated script generation with LLMs for cinematic historical content",
      "Orchestrated visual asset workflows and final rendering through FFmpeg",
    ],
    image: "/images/projects/youtube-video-automation/youtube-video-automation.jpg",
    github: "https://github.com/Yigit033/youtube_video_automation",
    featured: false,
  },
  {
    id: "matematik-macerasi",
    title: "Matematik Macerası — Android App",
    description:
      "A published Android game that teaches mathematics to children through fun games, characters and daily tasks.",
    longDescription:
      "Matematik Macerası is a native Android application published on Google Play. It teaches mathematics to children through game mechanics — fun math games, cute characters, daily tasks and progression rewards. Built with Kotlin and Java in Android Studio.",
    technologies: ["Kotlin", "Java", "Android Studio", "Android SDK"],
    achievements: [
      "Published a native Android application to the Google Play Store",
      "Designed child-friendly game mechanics around mathematics learning",
      "Implemented daily tasks and progression to encourage repeat engagement",
    ],
    image: "/images/projects/matematik-macerasi/matematik-macerasi.jpg",
    liveUrl: "https://play.google.com/store/apps/details?id=com.yigit033.matematikmacarasi",
    featured: false,
  },
  {
    id: "bist-stock-analysis",
    title: "BIST Stock Analysis and Alert System",
    description:
      "A web-based Python application for fundamental and technical analysis of BIST stocks, with live price tracking and scheduled email alerts.",
    longDescription:
      "A Streamlit application that performs both fundamental and technical analysis on Borsa Istanbul equities. It pulls market data through yfinance, stores results in MySQL, tracks live prices, and sends customisable email alerts on a schedule managed by APScheduler.",
    technologies: ["Python", "Streamlit", "yfinance", "MySQL", "pandas", "APScheduler"],
    achievements: [
      "Combined fundamental and technical analysis in a single Streamlit interface",
      "Implemented live price tracking backed by a MySQL data layer",
      "Built customisable scheduled email alerts with APScheduler",
    ],
    image: "/images/projects/bist-stock-analysis/bist-stock-analysis.jpg",
    github: "https://github.com/Yigit033/bist_stock_analysis_and_alert_system",
    featured: false,
  },
  {
    id: "stock-assistant-nlp",
    title: "Stock Assistant with NLP",
    description:
      "A stock analysis assistant that applies natural language processing to market data for recommendations and insights.",
    technologies: ["Python", "yfinance", "Hugging Face", "scikit-learn", "NLTK", "NLP"],
    achievements: [
      "Applied NLP techniques to stock data for recommendation generation",
      "Integrated Hugging Face transformer models into the analysis pipeline",
    ],
    image: "/images/projects/stock-assistant-nlp/stock-assistant-nlp.jpg",
    github: "https://github.com/Yigit033/stock_assistants_with_NLP",
    featured: false,
  },
  {
    id: "image-video-processing",
    title: "AI-Powered Image & Video Processing System",
    description:
      "A desktop application for real-time image classification, model training and prediction with a GUI-driven workflow.",
    technologies: ["Python", "OpenCV", "Tkinter", "scikit-learn", "SVM"],
    achievements: [
      "Built real-time image classification with a linear SVM model",
      "Delivered model training and prediction through a Tkinter GUI",
    ],
    image: "/images/projects/image-video-processing/image-video-processing.jpg",
    github: "https://github.com/Yigit033/AI-Powered-Image-Video-Processing-System",
    featured: false,
  },
  {
    id: "spotify-podcast-analysis",
    title: "Top Spotify Podcast Episodes Analysis",
    description:
      "An analysis of Spotify's top podcast episodes using CatBoost regression with SHAP-based model interpretation.",
    technologies: ["Python", "CatBoost", "SHAP", "pandas", "NumPy", "scikit-learn", "Matplotlib"],
    achievements: [
      "Modelled podcast performance with CatBoost regression",
      "Interpreted model behaviour with SHAP value analysis",
    ],
    image: "/images/projects/spotify-podcast-analysis/spotify-podcast-analysis.jpg",
    github: "https://github.com/Yigit033/top_spotify_podcast_episodes",
    featured: false,
  },
  {
    id: "financial-ai-assistant",
    title: "Financial AI Assistant",
    description:
      "An assistant that answers financial queries and provides market insights using machine learning techniques.",
    technologies: ["Python", "TensorFlow", "NeuralIntents", "mplfinance", "pandas", "Matplotlib"],
    achievements: [
      "Built an intent-driven assistant for answering financial questions",
      "Visualised market data with mplfinance for decision support",
    ],
    image: "/images/projects/financial-ai-assistant/financial-ai-assistant.jpg",
    github: "https://github.com/Yigit033/financial-ai-assistant",
    featured: false,
  },
];
