import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './assets/fonts/fonts.css';
import './styles/global-theme.css';
import './i18n';
import App from './App.jsx';

// DEFER: Service Worker registration (non-critical)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.error('SW registration failed:', error);
      });
    }, 2000);
  });
}

// Initialize and render app
const root = createRoot(document.getElementById('root'));

root.render(
  import.meta.env.PROD ? (
    <App />
  ) : (
    <StrictMode>
      <App />
    </StrictMode>
  )
);
