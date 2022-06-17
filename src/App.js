import React from "react";
import Footer from "./components/Footer";
import Front from "./components/Front";
import Navbar from "./components/Navbar";
import Barbers from "./pages/Barbers"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import SignUpClient from "./components/signupClient";
import SignUpBarber from "./components/signupBarber";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='*' element={<Navigate to="/"/>} />
          <Route path="/" element={<Front />} />
          <Route path="barbers" element={<Barbers />} />
          <Route path="login" element={<Login />} />
          <Route path="signup/" element={<SignUpClient />} />
          <Route path="signup/client" element={<SignUpClient />} />
          <Route path="signup/barber" element={<SignUpBarber />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
