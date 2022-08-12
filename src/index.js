import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./Main";
import WaystonePage from "./routes/waystone-page";
import FracalzPage from "./routes/fracalz-page";
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/waystone" element={<WaystonePage />} />
      <Route path="/fractalz" element={<FracalzPage />} />
    </Routes>
  </BrowserRouter>
);