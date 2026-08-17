// Tiny frontmatter + markdown-block parser for the CMS-editable content files.
// Supports the subset of YAML the Decap CMS config emits:
//   key: value | key: "quoted value" | key: (blank, then indented - list items)

export interface FrontmatterResult {
  data: Record<string, unknown>;
  body: string;
}

function unquote(s: string): string {
  return s.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
}

function scalar(s: string): unknown {
  const u = unquote(s.trim());
  if (u === "true") return true;
  if (u === "false") return false;
  if (/^-?\d+$/.test(u)) return Number(u);
  return u;
}

export function parseFrontmatter(raw: string): FrontmatterResult {
  if (!raw.startsWith("---")) return { data: {}, body: raw.trim() };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: raw.trim() };
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).trim();

  const data: Record<string, unknown> = {};
  let currentKey: string | null = null;
  for (const line of fm.split("\n")) {
    const listMatch = line.match(/^\s+-\s+(.*)$/);
    if (listMatch) {
      if (currentKey) {
        const arr = (data[currentKey] as string[]) ?? [];
        arr.push(unquote(listMatch[1]));
        data[currentKey] = arr;
      }
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (kv) {
      currentKey = kv[1];
      const val = kv[2].trim();
      data[currentKey] = val === "" ? [] : scalar(val);
    }
  }
  return { data, body };
}

export interface ContentBlock {
  heading?: string;
  body: string;
  bullets?: string[];
}

/** Convert the markdown body (## sections, paragraphs, - lists) to content blocks. */
export function markdownToBlocks(body: string): ContentBlock[] {
  if (!body.trim()) return [];
  const blocks: ContentBlock[] = [];
  let current: ContentBlock | null = null;

  for (const rawLine of body.split("\n")) {
    const line = rawLine.trimEnd();
    const heading = line.match(/^##\s+(.*)$/);
    if (heading) {
      if (current && (current.body || current.bullets?.length)) blocks.push(current);
      current = { heading: heading[1].trim(), body: "" };
      continue;
    }
    const bullet = line.match(/^\s*[-*]\s+(.*)$/);
    if (bullet) {
      if (!current) current = { body: "" };
      current.bullets = [...(current.bullets ?? []), bullet[1].trim()];
      continue;
    }
    const text = line.trim();
    if (!text) continue;
    if (!current) current = { body: "" };
    current.body = current.body ? `${current.body}\n${text}` : text;
  }
  if (current && (current.body || current.bullets?.length)) blocks.push(current);
  return blocks;
}

/** Split a markdown body into paragraphs (blank-line separated). */
export function markdownToParagraphs(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
