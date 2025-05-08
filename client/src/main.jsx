import React from "react";
import ReactDOM from "react-dom/client";

// Global Styles
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Main Router
import RouterMain from "./router/main.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterMain />
  </React.StrictMode>
);
