import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import { ProjectProvider } from './context/ProjectProvider';
import './App.css';

function App() {
  return (
    <ProjectProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ProjectProvider>
  );
}

export default App;
