import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Containers/Home';
import Users from './Containers/Users';

function actRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default actRoutes;
