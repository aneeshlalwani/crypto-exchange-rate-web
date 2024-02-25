import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import ErrorBoundary from "../src/components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
