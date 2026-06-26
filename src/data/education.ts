export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  score: string;
  highlights: string[];
}

export const educationList: EducationEntry[] = [
  {
    institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
    location: "Vijayawada, Andhra Pradesh",
    degree: "B.Tech in Computer Science and Engineering (AI & DS)",
    duration: "2023 – Expected June 2027",
    score: "8.74 / 10.0 CGPA",
    highlights: [
      "Specialization in Artificial Intelligence and Data Science",
      "Built 3+ production-grade AI systems during coursework",
      "Award-winning project at EPICS Day 2025"
    ]
  },
  {
    institution: "Sri Chaitanya Junior College",
    location: "Vijayawada, Andhra Pradesh",
    degree: "Intermediate (Class XI–XII), MPC Stream",
    duration: "2021 – 2023",
    score: "979 / 1000 Score",
    highlights: [
      "Top academic performer",
      "Mathematics, Physics, Chemistry stream"
    ]
  },
  {
    institution: "Sri Chaitanya Techno School",
    location: "Tiruvuru, Andhra Pradesh",
    degree: "Secondary School Education (Class X)",
    duration: "2020 – 2021",
    score: "598 / 600 Score",
    highlights: [
      "Near-perfect score across all subjects"
    ]
  }
];
