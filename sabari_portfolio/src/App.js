import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import WhatIDo from "./Components/WhatIDo";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Sidebar from "./Components/sidebar";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-1/4 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about-me" element={<AboutMe />} />
          <Route path="/what-i-do" element={<WhatIDo />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<PageNotFound />} /> {/* Fallback route */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
