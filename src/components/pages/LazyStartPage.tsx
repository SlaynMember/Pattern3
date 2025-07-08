import { lazy } from 'react'

// Lazy load the StartPage component
const StartPage = lazy(() => import('./StartPage'))

export default StartPage