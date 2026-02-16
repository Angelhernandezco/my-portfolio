export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  color: string; // Color hex para el punto de la línea
}

export interface AboutContent {
  title: string;
  aboutText: string[];
  whatSetsText: string[];
  timeline: TimelineItem[];
}
