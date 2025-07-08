import { lazy } from 'react'

// Lazy load the AboutPage component
const AboutPage = lazy(() => import('./AboutPage'))

export default AboutPage