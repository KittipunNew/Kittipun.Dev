import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ScrollProvider } from './Context/ScrollContext.jsx';
import { ProjectDataProvider } from './Context/ProjectDataContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectDataProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </ProjectDataProvider>
  </StrictMode>
);
