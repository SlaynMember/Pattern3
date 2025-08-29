// Global type declarations for third-party services

interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

// Extend the global namespace to include these types
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export {}; // This makes the file a module and ensures the global declarations work properly