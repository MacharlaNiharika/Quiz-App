
import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashbord from "./pages/Dashbord.jsx";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/dashboard" element={<Dashbord />} />
    </Routes>
  );
};

export default App;
