"use client";

import { ReactNode } from 'react';
import Layout from './components/Layout';
import { ProjectProvider } from './context/ProjectProvider';
import './App.css';

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return (
    <ProjectProvider>
      <Layout>{children}</Layout>
    </ProjectProvider>
  );
}

export default App