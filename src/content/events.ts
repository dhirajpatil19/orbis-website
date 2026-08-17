// Upcoming events ticker — scraped from live site home (§3)
export interface EventItem {
  date: string;
  title: string;
  type: "holiday" | "activity" | "meeting";
}

export const EVENTS: EventItem[] = [
  { date: "28th Aug", title: "Rakshabandhan – Holiday", type: "holiday" },
  { date: "26th Aug", title: "Milad-un-Nabi / Id-E-Milad – Holiday", type: "holiday" },
  { date: "25th Aug", title: "Founders' Day", type: "activity" },
  { date: "15th Aug", title: "Independence Day", type: "activity" },
  { date: "4th Aug", title: "OrbiLoqui – Grades 11 & 12", type: "activity" },
  { date: "1st Aug", title: "GBM Meeting", type: "meeting" },
];

export const STATS = [
  { value: "3", label: "Campuses in Pune" },
  { value: "19", label: "Years of Excellence" },
  { value: "3000+", label: "Students Enrolled" },
  { value: "100%", label: "Board Results" },
];
