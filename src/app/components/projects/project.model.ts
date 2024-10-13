export interface Project {
    number: number;
    title: string;
    description: string;
    technologies: { 
      icon: string; 
      name: string; 
    }[];
    githubLink: string; 
    livetestLink: string; 
    imageSrc: string;
  }