// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Repositories from "./pages/Repositories";
import Auth from "./pages/Authentication"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />

        <Route path="/" element={<Layout />}>
          <Route path="repo" element={<Repositories />} />
          <Route path="code" element={<></>} />
          <Route path="cloud" element={<></>} />
          <Route path="guide" element={<></>} />
          <Route path="settings" element={<></>} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
