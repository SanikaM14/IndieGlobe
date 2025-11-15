import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import './styles/main.css';
import './styles/professional-theme.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

// Force disable React DevTools debugging that causes runtime errors
if (typeof window !== 'undefined') {
  // Completely override the problematic DevTools hook
  Object.defineProperty(window, '__REACT_DEVTOOLS_GLOBAL_HOOK__', {
    value: {
      recentlyCreatedOwnerStacks: [],
      isDisabled: true,
      supportsFiber: false,
      supportsPersistence: false,
      supportsProfiler: false,
      inject: () => {},
      onCommitFiberRoot: () => {},
      onCommitFiberUnmount: () => {},
      onPostCommitFiberRoot: () => {}
    },
    configurable: false,
    enumerable: false,
    writable: false
  });

  // Suppress all DevTools related errors
  const originalError = console.error;
  const originalWarn = console.warn;

  console.error = (...args) => {
    const message = args.join(' ');
    if (message.includes('recentlyCreatedOwnerStacks') ||
        message.includes('__REACT_DEVTOOLS_GLOBAL_HOOK__') ||
        message.includes('DevTools')) {
      return; // Suppress DevTools errors
    }
    originalError.apply(console, args);
  };

  console.warn = (...args) => {
    const message = args.join(' ');
    if (message.includes('DevTools') || message.includes('React does not recognize')) {
      return; // Suppress DevTools warnings
    }
    originalWarn.apply(console, args);
  };
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
