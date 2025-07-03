'use client'

import { ReactNode } from 'react'
import { projectsData } from '@/data/projectsData'
import { ProjectContext } from './ProjectContext'

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProjectContext.Provider value={{ projects: projectsData }}>
      {children}
    </ProjectContext.Provider>
  )
}