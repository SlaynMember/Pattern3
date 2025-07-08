import { Routes, Route } from 'react-router-dom'
import Navigation from './components/ui/Navigation'
import ScrollToTop from './components/ui/ScrollToTop'
import HomePage from './components/pages/HomePage'
import WorkPage from './components/pages/WorkPage'
import StartPage from './components/pages/StartPage'
import AboutPage from './components/pages/AboutPage'
import ProjectDetailPage from './components/pages/ProjectDetailPage'
import Footer from './components/ui/Footer'
import PerformanceDashboard from './components/ui/PerformanceDashboard'

function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/:projectId" element={<ProjectDetailPage />} />
      </Routes>
      <Footer />
      <PerformanceDashboard />
    </div>
  )
}

export default App