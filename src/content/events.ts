// Events ticker + stats — editable via the CMS dashboard (content/events.json).
import eventsJson from "../../content/events.json";

export interface EventItem {
  date: string;
  title: string;
  type: "holiday" | "activity" | "meeting";
}

export interface StatItem {
  value: string;
  label: string;
}

export const EVENTS = (eventsJson as { events: EventItem[] }).events;
export const STATS = (eventsJson as { stats: StatItem[] }).stats;
