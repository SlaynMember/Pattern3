import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import AIPage from './pages/AIPage';
import AboutPage from './pages/AboutPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import StartPage from './pages/StartPage';
import SuccessPage from './pages/SuccessPage';
import CancelPage from './pages/CancelPage';
import Layout from './components/Layout';
import { ProjectProvider } from './context/ProjectProvider';
import './App.css';

function App() {
  return (
    <ProjectProvider>
      <Router>
        <Routes>
          <Route path="/start" element={<StartPage />} />
          <Route path="/success" element={<Layout><SuccessPage /></Layout>} />
          <Route path="/cancel" element={<Layout><CancelPage /></Layout>} />
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/work" element={<Layout><WorkPage /></Layout>} />
          <Route path="/ai" element={<Layout><AIPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/project/:id" element={<Layout><ProjectDetailPage /></Layout>} />
        </Routes>
      </Router>
    </ProjectProvider>
  );
}

export default App