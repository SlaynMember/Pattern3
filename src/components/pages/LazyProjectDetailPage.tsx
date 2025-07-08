import { lazy } from 'react'

// Lazy load the ProjectDetailPage component
const ProjectDetailPage = lazy(() => import('./ProjectDetailPage'))

export default ProjectDetailPage