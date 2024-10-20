import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [acitveOption, setActiveOption] = useState(0);
  return (
    <div
      className="border position-fixed top-0 start-0 vh-100"
      style={{ width: "20%" }}
    >
      <Link to="/dashboard" className="text-decoration-none">
        <div className="w-75 border border-info border-4 rounded-4 text-info text-center p-2 mt-3 ms-3 h4 info">
          Logo
        </div>
      </Link>
      <div className="bg-light h-100 mt-3">
        <div className="bg-danger-subtle mx-3 px-3 py-2 rounded-4">
          <h5 className="mb-0 text-danger "> General</h5>
          <p className="mb-0 text-muted" style={{ fontSize: "0.85rem" }}>
            {" "}
            Dashboard
          </p>
        </div>
        <div className="px-2 mt-3">
          <div className="d-flex flex-column px-3 gap-2">
            <Link to="/dashboard" className="text-decoration-none text-dark">
              <div
                className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                  acitveOption === 0 ? "sidebar-options-active" : " "
                }`}
                onClick={() =>setActiveOption(0)}
              >
                <i className="fa-solid fa-desktop"></i>
                <p className="mb-0 ms-3">Dashboard</p>
              </div>
            </Link>
            <Link to="transactions" className="text-decoration-none text-dark">
              <div
                className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                  acitveOption === 1 ? "sidebar-options-active" : " "
                }`}
                onClick={() => setActiveOption(1)}
              >
                <i className="fa-solid fa-list"></i>

                <p className="mb-0 ms-3">Transactions</p>
              </div>
            </Link>
            <Link to="startHere" className="text-decoration-none text-dark">
                <div
                className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                  acitveOption === 2 ? "sidebar-options-active" : " "
                }`}
                onClick={() => setActiveOption(2)}
              >
                <i className="fa-solid fa-arrow-turn-down"></i>
                <p className="mb-0 ms-3">Start Here</p>
              </div>
            </Link>
            <Link to="faq" className="text-decoration-none text-dark">
                <div
                className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                  acitveOption === 3 ? "sidebar-options-active" : " "
                }`}
                onClick={() => setActiveOption(3)}
              >
                <i className="fa-regular fa-circle-question"></i>
                <p className="mb-0 ms-3">FAQ</p>
              </div>
            </Link>
            <Link to="learning" className="text-decoration-none text-dark">
                <div
                className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                  acitveOption === 4 ? "sidebar-options-active" : " "
                }`}
                onClick={() => setActiveOption(4)}
              >
                <i className="fa-solid fa-book-open"></i>
                <p className="mb-0 ms-3">Learning Modules</p>
              </div>
            </Link>
            <Link to="rewards" className="text-decoration-none text-dark">
                <div
                className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                  acitveOption === 5 ? "sidebar-options-active" : " "
                }`}
                onClick={() => setActiveOption(5)}
              >
                <i className="fa-regular fa-star"></i>
                <p className="mb-0 ms-3">Rewards</p>
              </div>
            </Link>
            <Link to="feedback" className="text-decoration-none text-dark">
                <div
                className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                  acitveOption === 6 ? "sidebar-options-active" : " "
                }`}
                onClick={() => setActiveOption(6)}
              >
                <i className="fa-regular fa-message"></i>
                <p className="mb-0 ms-3">Feedack</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
