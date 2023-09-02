import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import EmployeeChatPage from "./pages/EmployeeChatPage";
import PageNotFound from "./pages/PageNotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* All Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<EmployeeChatPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
