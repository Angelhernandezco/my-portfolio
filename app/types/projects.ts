export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    code?: string;
    preview?: string;
  };
}
