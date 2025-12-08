// src/index.js (Check this file!)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./context/GlobalContext"; // <-- Import the Provider

// ... import styles

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      {/* VITAL: App MUST be wrapped by GlobalProvider 
          so that useGlobalContext returns the actual context value, not undefined.
        */}
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </React.StrictMode>
  );
}
