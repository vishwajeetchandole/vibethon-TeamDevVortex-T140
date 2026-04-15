import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";
import Games from "./pages/Games";
import MLPlayground from "./pages/MLPlayground";
import AITutor from "./pages/AITutor";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/learn" element={<Learn />} />

        <Route path="/quiz" element={
          <ProtectedRoute><Quiz /></ProtectedRoute>
        } />

        <Route path="/games" element={
          <ProtectedRoute><Games /></ProtectedRoute>
        } />

        <Route path="/playground" element={
          <ProtectedRoute><MLPlayground /></ProtectedRoute>
        } />

        <Route path="/tutor" element={
          <ProtectedRoute><AITutor /></ProtectedRoute>
        } />

        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}
