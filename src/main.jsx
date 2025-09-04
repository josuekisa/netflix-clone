import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Page2 from "./Pages/Page2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Page2 />
  </StrictMode>
);
