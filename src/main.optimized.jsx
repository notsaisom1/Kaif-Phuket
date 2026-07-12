import React, { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

// Critical CSS only
import './index.css';

// Defer everything else
const App = lazy(() => import('./App.jsx'));

// Inline loader
const Loader = () => (
  <div style={{
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <div style={{
      width: '48px',
      height: '48px',
      border: '2px solid rgba(255,255,255,0.1)',
      borderTop: '2px solid #fff',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
  </div>
);

// Initialize after DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </StrictMode>
  );

  // Defer i18n and other heavy imports
  setTimeout(() => {
    import('./i18n');
    import('./styles/global-theme.css');
    import('./assets/fonts/fonts.css');
  }, 100);

  // Register service worker after load
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
}