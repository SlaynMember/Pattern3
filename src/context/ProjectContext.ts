import { createContext } from 'react';
import { Project } from '../types/Project';

export interface ProjectContextType {
  projects: Project[];
}

export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

