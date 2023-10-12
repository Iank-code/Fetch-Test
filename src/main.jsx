import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Car from "./pages/Car.jsx"
// import Contact from "./pages/Contact.jsx"
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<App />} />
        <Route path="/car/:id" element={<Car />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
