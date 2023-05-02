import React, { useState, useEffect } from "react";
import "./index.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // reset error message on email or password change
    setEmail("");
    setPassword("");
  }, []);

  const signIn = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Successfully signed in!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
        setIsLoading(false);
        console.log(userCredential);
      })
      .catch((error) => {
        setIsError(error.message);
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="container-signin">
        <section className="wrapper">
          <div className="heading">
            <h1 className="text text-large">
              <strong>Sign In</strong>
            </h1>
            <p className="text text-normal">
              New User ?{" "}
              <span>
                <a href="/signup" className="text text-links">
                  Create an account
                </a>
              </span>
            </p>
          </div>
          <form onSubmit={signIn}>
            <div className="input-control">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              ></input>
            </div>

            <div className="input-control">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              ></input>
            </div>

            <button
              type="submit"
              name="submit"
              className="input-submit"
              value="Sign In"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
          </form>
          {isError && <p className="text text-error">{isError}</p>}
        </section>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default Login;
