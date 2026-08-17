// Campus data — editable via the CMS dashboard (content/campuses.json).
import campusesJson from "../../content/campuses.json";

export type CampusSlug = "keshav-nagar" | "mundhwa" | "gahunje";

export interface Campus {
  slug: CampusSlug;
  name: string;
  shortName: string;
  address: string;
  phones: string[];
  email: string;
  image: string;
  blurb: string;
  mapQuery: string;
}

export const CAMPUSES = (campusesJson as { campuses: Campus[] }).campuses;

export function getCampus(slug: string): Campus | undefined {
  return CAMPUSES.find((c) => c.slug === slug);
}
