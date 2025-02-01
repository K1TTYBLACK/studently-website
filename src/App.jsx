import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./index";

import Terms from "./terms";
import Policy from "./policy";
import Oauth from "./oauth";
import Signin from "./signin";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/privacypolicy" element={<Policy />} />
        <Route path="/termsofservice" element={<Terms />} />
        <Route path="/oauth" element={<Oauth />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
