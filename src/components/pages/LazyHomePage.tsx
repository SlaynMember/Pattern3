import { lazy } from 'react'

// Lazy load the HomePage component
const HomePage = lazy(() => import('./HomePage'))

export default HomePage