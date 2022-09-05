import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";


export default function RoutesIndex() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<App />}></Route>
          
        </Routes>
      </div>
    </Router>
  );
}
