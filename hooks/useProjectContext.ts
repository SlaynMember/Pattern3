import { useContext } from 'react'
import { ProjectContext } from '@/context/ProjectContext'

export const useProjectContext = () => {
  const context = useContext(ProjectContext)
  if (context === undefined) {
    throw new Error('useProjectContext must be used within a ProjectProvider')
  }
  return context
}