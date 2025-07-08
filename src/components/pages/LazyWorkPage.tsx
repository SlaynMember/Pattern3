import { lazy } from 'react'

// Lazy load the WorkPage component
const WorkPage = lazy(() => import('./WorkPage'))

export default WorkPage