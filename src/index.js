import React from 'react';
import { createRoot } from 'react-dom/client';
import './tailwind.output.css';               // Use optimized Tailwind build
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './components/ErrorBoundary';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Log performance metrics or send to analytics
reportWebVitals(console.log);

// Optional: register service worker for PWA features
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// serviceWorkerRegistration.register();
