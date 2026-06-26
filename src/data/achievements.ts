export interface Achievement {
  icon: "trophy" | "medal";
  title: string;
  date: string;
  org: string;
  description: string;
  tags: string[];
}

export const achievementsList: Achievement[] = [
  {
    icon: "trophy",
    title: "Best Performer — Innovative Model Expo 2K25",
    date: "Dec 2025",
    org: "EPICS Day 2025",
    description: "Awarded Best Performer of the Section at the Innovative Model Expo 2K25 (EPICS Day) among numerous competing tech solutions for CampusTrack, recognized for technical scalability and immediate real-world user impact.",
    tags: ["CampusTrack", "EPICS Day", "Best Performer"]
  },
  {
    icon: "medal",
    title: "3rd Prize — Sparkathon Hackathon",
    date: "Dec 2025",
    org: "R.V.R. & J.C. College of Engineering",
    description: "Secured 3rd Prize at the multi-collegiate Sparkathon Hackathon by presenting CampusTrack's end-to-end automated platform architecture to a panel of industry veterans.",
    tags: ["CampusTrack", "Hackathon", "3rd Prize"]
  }
];
