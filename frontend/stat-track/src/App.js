import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Register from "./pages/Login/Register";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>home</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
