// src/config.js
// Environment configuration for both CRA and Vite
const config = {
  GEMINI_API_KEY: (
    (typeof process !== 'undefined' && process.env && (
      process.env.REACT_APP_GEMINI_API_KEY ||
      process.env.VITE_GEMINI_API_KEY ||
      ''
    )) || ''
  ),
  API_BASE_URL: (
    (typeof process !== 'undefined' && process.env && (
      process.env.REACT_APP_API_URL ||
      process.env.VITE_API_URL ||
      'http://localhost:5000'
    )) || 'http://localhost:5000'
  )
};

// Debug logging (only in development)
if (typeof window !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
  console.log('Config loaded:', {
    hasKey: !!config.GEMINI_API_KEY,
    keyLength: (config.GEMINI_API_KEY || '').length,
    apiBaseUrl: config.API_BASE_URL,
    envSource: process.env.REACT_APP_GEMINI_API_KEY ? 'REACT_APP' : (process.env.VITE_GEMINI_API_KEY ? 'VITE' : 'none')
  });
}

export default config;
