import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../store/UserContext";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        newUser,
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.msg);
      const userData = {
        name: response.data.userName,
        referralCode: response.data.referralCode,
      };

      login(userData);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-4">Login</h3>
            <p className="text-center">
              Don't have an account?
              <Link className="text-decoration-none ms-2" to="/signup">
                Signup Now
              </Link>
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-danger w-100">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
