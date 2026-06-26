export interface Certification {
  name: string;
  issuer: string;
  date: string;
  color: string;
  initials: string;
  credentialId: string | null;
}

export const certificationsList: Certification[] = [
  {
    name: "Introducing Generative AI with AWS",
    issuer: "Udacity & AWS (AWS AI & ML Scholars Challenge)",
    date: "May 2025",
    color: "#FF9900",
    initials: "AWS",
    credentialId: null
  },
  {
    name: "AI For Everyone",
    issuer: "DeepLearning.AI via Coursera",
    date: "March 2025",
    color: "#0056D3",
    initials: "DL",
    credentialId: "TF2JES7I6EZT"
  },
  {
    name: "Database Programming with PL/SQL",
    issuer: "Oracle Academy",
    date: "November 2024",
    color: "#C74634",
    initials: "ORA",
    credentialId: null
  },
  {
    name: "One Week Seasonal School on GEO AI for Remotely Sensed Data",
    issuer: "VR Siddhartha Engineering College, ISRO & IEEE GRSS Student Chapter",
    date: "September 2024",
    color: "#00529B",
    initials: "ISRO",
    credentialId: null
  }
];
