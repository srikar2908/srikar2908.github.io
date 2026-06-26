export interface Skill {
  name: string;
  description: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", description: "Primary language, production backends", iconName: "python" },
      { name: "Java", description: "OOP fundamentals", iconName: "java" },
      { name: "SQL", description: "Complex queries, optimization", iconName: "sql" },
      { name: "C", description: "Systems-level programming", iconName: "c" },
      { name: "Dart", description: "Flutter mobile apps", iconName: "dart" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "FastAPI", description: "High-performance async APIs", iconName: "fastapi" },
      { name: "LangGraph", description: "Agentic AI workflows", iconName: "langgraph" },
      { name: "Flutter", description: "Cross-platform mobile", iconName: "flutter" },
      { name: "Django", description: "Web framework", iconName: "django" },
      { name: "Sentence Transformers", description: "Semantic embeddings", iconName: "nlp" },
      { name: "XGBoost", description: "Gradient boosting ML", iconName: "xgboost" }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", description: "Relational, production DBs", iconName: "postgresql" },
      { name: "MongoDB", description: "NoSQL, document store", iconName: "mongodb" },
      { name: "Supabase", description: "BaaS + vector store", iconName: "supabase" },
      { name: "Firebase", description: "Real-time mobile backend", iconName: "firebase" },
      { name: "MySQL", description: "Relational databases", iconName: "mysql" }
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", description: "Predictive modeling", iconName: "ml" },
      { name: "Generative AI", description: "LLM integration", iconName: "genai" },
      { name: "LLMs", description: "Groq, OpenAI APIs", iconName: "llm" },
      { name: "FAISS", description: "Vector indexing & similarity", iconName: "faiss" }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Docker", description: "Containerization", iconName: "docker" },
      { name: "Git & GitHub", description: "Version control", iconName: "git" },
      { name: "JWT", description: "Auth & security", iconName: "jwt" },
      { name: "REST APIs", description: "API design & integration", iconName: "api" }
    ]
  }
];
