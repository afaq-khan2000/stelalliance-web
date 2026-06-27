import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { About, Home, Portfolio, PortfolioDetail, CyberSecurity, SecurityDetail, ServiceDetail } from "../pages";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<CyberSecurity />} />
        <Route path="/security/:slug" element={<SecurityDetail />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
