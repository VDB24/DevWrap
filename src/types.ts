export type Stats = {
  linesOfCode: string;
  commits: string;
  beverages: string;
  hoursCoded: string;
  bugsFixed: string;
  projectsShipped: string;
  meetingHours: string;
  buddy: string;
};

export type PersonalDetails = {
  role: string;
  company: string;
  image: string | null; // Base64 or URL
  personality: string;
};

export type Theme = 'main' | 'purple' | 'blue' | 'orange';

export type BackgroundSettings = {
  image: string | null;
  intensity: number;
};

export type WrappedData = {
  stats: Stats;
  tools: string[];
  languages: string[];
  details: PersonalDetails;
  theme: Theme;
  background: BackgroundSettings;
};

export const INITIAL_DATA: WrappedData = {
  stats: {
    linesOfCode: '25k+',
    commits: '150+',
    beverages: '400+',
    hoursCoded: '1000+',
    bugsFixed: '186',
    projectsShipped: '10+',
    meetingHours: '300+',
    buddy: 'Co-pilot',
  },
  tools: ['VS Code', 'Slack', 'Teams'],
  languages: ['TypeScript', 'Python', 'Go'],
  details: {
    role: 'Software Engineer',
    company: 'XYZ',
    image: null,
    personality: 'Batman',
  },
  theme: 'main',
  background: {
    image: null,
    intensity: 30,
  },
};
