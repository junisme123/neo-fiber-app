// ============================================================
// NEO-FIBER APP CONFIGURATION
// ============================================================
// SECURITY NOTE:
// 1. Add this file to .gitignore to avoid committing secrets.
// 2. In Firebase Console > Project Settings > App Check,
//    restrict API key by HTTP referrers to your domain only.
// 3. In Azure Portal > App registrations > Authentication,
//    ensure redirect URI matches your deployed domain.
// ============================================================

window.__NF_FIREBASE_CONFIG = {
  apiKey: "AIzaSyAAcUIxWKWbLcKDh3RY6SxBysfqrqLhGl0",
  authDomain: "neo-fiber-automation.firebaseapp.com",
  databaseURL: "https://neo-fiber-automation-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "neo-fiber-automation",
  storageBucket: "neo-fiber-automation.firebasestorage.app",
  messagingSenderId: "263832752624",
  appId: "1:263832752624:web:338c7e577ae4feb1978d35",
  measurementId: "G-H6WETXMSSB"
};

window.__NF_MSAL_CONFIG = {
  auth: {
    clientId: "67ffc852-e5aa-4648-a19c-c2abbb370daa",
    authority: "https://login.microsoftonline.com/8f4e92f4-6d11-400d-8b90-3a63b659ccdc",
    redirectUri: window.location.origin
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false
  },
  system: {
    allowNativeBroker: false,
    loggerOptions: {
      logLevel: 0,
      piiLoggingEnabled: false
    }
  }
};
