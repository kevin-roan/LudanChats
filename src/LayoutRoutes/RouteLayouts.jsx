import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../components/Login";
import ChatRoom from "../components/ChatRoom";
import Groups from "../components/Groups";

export default function AppRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </Router>
  );
}
