import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { RequestListProvider } from "./context/RequestListContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <RequestListProvider>
        <App />
      </RequestListProvider>
    </HashRouter>
  </StrictMode>
);
