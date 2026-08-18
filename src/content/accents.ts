// Campus design tokens — accent colors per franchise (master typography/layout shared).
export interface CampusAccent {
  hex: string;
  soft: string;
}

const ACCENTS: Record<string, CampusAccent> = {
  "keshav-nagar": { hex: "#14996f", soft: "#ddf2ea" },
  mundhwa: { hex: "#d9a441", soft: "#fbf0d8" },
  gahunje: { hex: "#b6533a", soft: "#f7e4de" },
};

export function campusAccent(slug: string): CampusAccent {
  return ACCENTS[slug] ?? ACCENTS["keshav-nagar"];
}
