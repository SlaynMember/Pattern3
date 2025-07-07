import { Routes, Route } from 'react-router-dom'
import Navigation from './components/ui/Navigation'
import HomePage from './components/pages/HomePage'
import WorkPage from './components/pages/WorkPage'
import StartPage from './components/pages/StartPage'
import AboutPage from './components/pages/AboutPage'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App