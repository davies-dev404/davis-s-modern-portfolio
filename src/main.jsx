import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Ensure single unified corporate theme (no dark/light mode split)
document.documentElement.classList.remove("dark");
try {
  localStorage.removeItem("theme");
} catch {
  // ignore storage restriction
}

createRoot(document.getElementById("root")).render(<App />);
