export type SkillItem = {
  name: string;
  abbr?: string; // Short label to show in the tile when no icon is provided
  color?: string; // Brand-ish color used for accents
  icon?: string; // Optional public path to an icon under /images/skills or data URL
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

// Helper: brand-like colors (can be tweaked later)
const C = {
  react: "#61DAFB",
  ts: "#3178C6",
  tailwind: "#38BDF8",
  vite: "#646CFF",
  laravel: "#FF2D20",
  express: "#000000",
  node: "#3C873A",
  mysql: "#4479A1",
  postgres: "#336791",
  flutter: "#02569B",
  powerbi: "#F2C811",
  pentaho: "#0B5CAB",
  php: "#777BB4",
  dart: "#0175C2",
  kotlin: "#7F52FF",
  android: "#3DDC84",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Framework",
    items: [
      { name: "ExpressJS", abbr: "EX", color: C.express },
      { name: "ReactJS", abbr: "RJ", color: C.react },
      { name: "ReactTS", abbr: "RT", color: C.ts },
      { name: "Laravel", abbr: "LA", color: C.laravel },
      { name: "Flutter", abbr: "FL", color: C.flutter },
      { name: "Jetpack Compose", abbr: "JC", color: C.android },
    ],
  },
  {
    title: "Programming Language",
    items: [
      { name: "JavaScript", abbr: "JS", color: "#F5DE19" },
      { name: "TypeScript", abbr: "TS", color: C.ts },
      { name: "PHP", abbr: "PH", color: C.php },
      { name: "Dart", abbr: "DA", color: C.dart },
      { name: "Kotlin", abbr: "KT", color: C.kotlin },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      { name: "Power BI", abbr: "PB", color: C.powerbi },
      { name: "Pentaho", abbr: "PE", color: C.pentaho },
      { name: "MySQL (DBMS)", abbr: "MY", color: C.mysql },
      { name: "PostgreSQL (DBMS)", abbr: "PG", color: C.postgres },
      { name: "Microsoft Office", abbr: "OF", color: "#0078D4" },
      { name: "Spreadsheets", abbr: "SS", color: "#22C55E" },
      { name: "Trello", abbr: "TR", color: "#0079BF" },
    ],
  },
];
