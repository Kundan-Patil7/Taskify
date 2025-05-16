import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { TodoContext } from "./context/Todocontext";

// Pages

import Navbar from "./components/Navbar";

import CreatTodo from "./pages/CreatTodo";
import AllTodos from "./pages/AllTodos";
import ContactPage from "./pages/ContactPage";
import SignUp from "./pages/signUp";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage ";
import LandingPage from "./pages/LandingPage ";
import EditTodo from "./pages/EditTodo";


function App() {
  const { user } = useContext(TodoContext);

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/todos" replace /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/todos" replace /> : <SignUp />}
        />

        {/* Protected Routes */}
        <Route
          path="/todos"
          element={user ? <AllTodos /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/create"
          element={user ? <CreatTodo /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/about"
          element={user ? <ContactPage /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/edit/:id"
          element={user ? <EditTodo /> : <Navigate to="/login" replace />}
        />
        {/* 404 - Accessible to all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;