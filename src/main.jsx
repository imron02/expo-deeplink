import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ReferralRedirect from "./ReferralRedirect.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/referral/:code" element={<ReferralRedirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
