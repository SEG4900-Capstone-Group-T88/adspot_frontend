import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/createAccount";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Messages from "./pages/messages";
import Search from "./pages/search";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/search" element={<Search/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/create-account" element={<CreateAccount/>}/>
        <Route exact path="/messages" element={<Messages/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
