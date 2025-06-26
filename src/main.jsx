import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";
import { setLocalStoarge } from "./utils/localStorage";

// ✅ Only set initial data if it's not already in localStorage
if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
  setLocalStoarge();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
