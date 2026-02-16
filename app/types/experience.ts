export interface TimelineExperience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  status?: string;
  description: string[];
  technologies?: string[];
}
