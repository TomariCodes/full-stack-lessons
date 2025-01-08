import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
=======
import "./index.css";
>>>>>>> 953691e27683be4e847afafa84aae3c6dd06132a
import App from "./App.jsx";
import { Provider } from "@/components/ui/provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
