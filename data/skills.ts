// data/skills.ts
export type SkillCategory =
  | "Languages"
  | "AI & Machine Learning"
  | "Data & Analytics"
  | "Web & Full Stack"
  | "Cloud & DevOps"
  | "Concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "Python", category: "Languages", logoKey: "python" },
    { name: "TypeScript", category: "Languages", logoKey: "typescript" },
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
    { name: "SQL", category: "Languages", logoKey: "mysql" },
    { name: "Kotlin", category: "Languages", logoKey: "kotlin" },
    { name: "Java", category: "Languages", logoKey: "java" },
  ],
  "AI & Machine Learning": [
    { name: "TensorFlow", category: "AI & Machine Learning", logoKey: "tensorflow" },
    { name: "PyTorch", category: "AI & Machine Learning", logoKey: "pytorch" },
    { name: "scikit-learn", category: "AI & Machine Learning", logoKey: "scikitlearn" },
    { name: "OpenCV", category: "AI & Machine Learning", logoKey: "opencv" },
    { name: "YOLO", category: "AI & Machine Learning", logoKey: "opencv" },
    { name: "XGBoost", category: "AI & Machine Learning", logoKey: "python" },
    { name: "Hugging Face", category: "AI & Machine Learning", logoKey: "python" },
    { name: "Large Language Models", category: "AI & Machine Learning", logoKey: "python" },
    { name: "Generative AI", category: "AI & Machine Learning", logoKey: "python" },
    { name: "SHAP", category: "AI & Machine Learning", logoKey: "python" },
  ],
  "Data & Analytics": [
    { name: "pandas", category: "Data & Analytics", logoKey: "pandas" },
    { name: "NumPy", category: "Data & Analytics", logoKey: "numpy" },
    { name: "Matplotlib", category: "Data & Analytics", logoKey: "matplotlib" },
    { name: "Seaborn", category: "Data & Analytics", logoKey: "python" },
    { name: "Jupyter", category: "Data & Analytics", logoKey: "jupyter" },
    { name: "MySQL", category: "Data & Analytics", logoKey: "mysql" },
    { name: "PostgreSQL", category: "Data & Analytics", logoKey: "postgresql" },
  ],
  "Web & Full Stack": [
    { name: "React", category: "Web & Full Stack", logoKey: "react" },
    { name: "Next.js", category: "Web & Full Stack", logoKey: "nextjs" },
    { name: "Node.js", category: "Web & Full Stack", logoKey: "nodejs" },
    { name: "Tailwind CSS", category: "Web & Full Stack", logoKey: "tailwindcss" },
    { name: "Streamlit", category: "Web & Full Stack", logoKey: "streamlit" },
    { name: "Supabase", category: "Web & Full Stack", logoKey: "supabase" },
    { name: "WordPress", category: "Web & Full Stack", logoKey: "wordpress" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", category: "Cloud & DevOps", logoKey: "amazonwebservices" },
    { name: "Google Cloud Platform", category: "Cloud & DevOps", logoKey: "googlecloud" },
    { name: "Microsoft Azure", category: "Cloud & DevOps", logoKey: "azure" },
    { name: "Docker", category: "Cloud & DevOps", logoKey: "docker" },
    { name: "Git", category: "Cloud & DevOps", logoKey: "git" },
    { name: "GitHub", category: "Cloud & DevOps", logoKey: "github" },
    { name: "GitLab", category: "Cloud & DevOps", logoKey: "gitlab" },
    { name: "FFmpeg", category: "Cloud & DevOps", logoKey: "ffmpeg" },
    { name: "n8n", category: "Cloud & DevOps", logoKey: "github" },
  ],
  Concepts: [
    { name: "Computer Vision", category: "Concepts", logoKey: "opencv" },
    { name: "Machine Learning", category: "Concepts", logoKey: "github" },
    { name: "Data Science", category: "Concepts", logoKey: "github" },
    { name: "Event-Driven Architecture", category: "Concepts", logoKey: "github" },
    { name: "Digital Twin", category: "Concepts", logoKey: "github" },
    { name: "Workflow Automation", category: "Concepts", logoKey: "github" },
    { name: "API Design", category: "Concepts", logoKey: "swagger" },
  ],
};
