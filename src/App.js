import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        // No user is signed in.
        setIsSignedIn(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {isSignedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
