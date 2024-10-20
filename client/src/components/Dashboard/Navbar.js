import React, { useContext } from "react";
import { UserContext } from "../store/UserContext";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await axios.post(
        "https://naye-pankh.onrender.com/logout",
        {},
        { withCredentials: true }
      );
      toast.success(response.data.msg);
      logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <nav className="d-flex h-25 justify-content-end align-items-center mh-100">
      <div
        className="d-flex pe-5 py-3 align-items-center profile-hover"
        onClick={logoutHandler}
        role="button" // Improve accessibility
        tabIndex="0" // Make the div focusable
        onKeyPress={(e) => { if (e.key === 'Enter') logoutHandler(); }} // Enable keyboard navigation
        aria-label="Logout" // Accessibility label
      >
        <img
          src="images/profile.jfif"
          alt="Profile"
          style={{ width: "40px", height: "40px", borderRadius: "0.75rem" }}
        />
        <div className="ms-3">
          <p className="mb-0 fw-bold">{user.name}</p>
          <div className="d-flex align-items-center">
            <p className="mb-0 text-muted" style={{ fontSize: "0.75rem" }}>
              Fundraiser
            </p>
            <i className="fa-solid fa-angle-down ms-2 fa-2xs"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
