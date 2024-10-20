import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button
        className="toggle-sidebar btn btn-primary"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        {isSidebarOpen ? "Close" : "Open"} Sidebar
      </button>
      <div
        className={`sidebar border position-fixed top-0 start-0 vh-100 ${
          isSidebarOpen ? "active" : ""
        }`}
        style={{ width: "20%" }}
      >
        <Link to="/dashboard" className="text-decoration-none">
          <div className="w-75 border border-info border-4 rounded-4 text-info text-center p-2 mt-3 ms-3 h4 info">
            Logo
          </div>
        </Link>
        <div className="bg-light h-100 mt-3">
          <div className="bg-danger-subtle mx-3 px-3 py-2 rounded-4">
            <h5 className="mb-0 text-danger">General</h5>
            <p className="mb-0 text-muted" style={{ fontSize: "0.85rem" }}>
              Dashboard
            </p>
          </div>
          <div className="px-2 mt-3">
            <div className="d-flex flex-column px-3 gap-2">
              <Link to="/dashboard" className="text-decoration-none text-dark">
                <div
                  className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                    activeOption === 0 ? "sidebar-options-active" : ""
                  }`}
                  onClick={() => setActiveOption(0)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setActiveOption(0);
                  }}
                  aria-label="Dashboard"
                >
                  <i className="fa-solid fa-desktop"></i>
                  <p className="mb-0 ms-3">Dashboard</p>
                </div>
              </Link>
              <Link to="/transactions" className="text-decoration-none text-dark">
                <div
                  className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                    activeOption === 1 ? "sidebar-options-active" : ""
                  }`}
                  onClick={() => setActiveOption(1)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setActiveOption(1);
                  }}
                  aria-label="Transactions"
                >
                  <i className="fa-solid fa-list"></i>
                  <p className="mb-0 ms-3">Transactions</p>
                </div>
              </Link>
              <Link to="/startHere" className="text-decoration-none text-dark">
                <div
                  className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                    activeOption === 2 ? "sidebar-options-active" : ""
                  }`}
                  onClick={() => setActiveOption(2)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setActiveOption(2);
                  }}
                  aria-label="Start Here"
                >
                  <i className="fa-solid fa-arrow-turn-down"></i>
                  <p className="mb-0 ms-3">Start Here</p>
                </div>
              </Link>
              <Link to="/faq" className="text-decoration-none text-dark">
                <div
                  className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                    activeOption === 3 ? "sidebar-options-active" : ""
                  }`}
                  onClick={() => setActiveOption(3)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setActiveOption(3);
                  }}
                  aria-label="FAQ"
                >
                  <i className="fa-regular fa-circle-question"></i>
                  <p className="mb-0 ms-3">FAQ</p>
                </div>
              </Link>
              <Link to="/learning" className="text-decoration-none text-dark">
                <div
                  className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                    activeOption === 4 ? "sidebar-options-active" : ""
                  }`}
                  onClick={() => setActiveOption(4)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setActiveOption(4);
                  }}
                  aria-label="Learning Modules"
                >
                  <i className="fa-solid fa-book-open"></i>
                  <p className="mb-0 ms-3">Learning Modules</p>
                </div>
              </Link>
              <Link to="/rewards" className="text-decoration-none text-dark">
                <div
                  className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                    activeOption === 5 ? "sidebar-options-active" : ""
                  }`}
                  onClick={() => setActiveOption(5)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setActiveOption(5);
                  }}
                  aria-label="Rewards"
                >
                  <i className="fa-regular fa-star"></i>
                  <p className="mb-0 ms-3">Rewards</p>
                </div>
              </Link>
              <Link to="/feedback" className="text-decoration-none text-dark">
                <div
                  className={`d-flex align-items-center sidebar-options py-2 px-3 ${
                    activeOption === 6 ? "sidebar-options-active" : ""
                  }`}
                  onClick={() => setActiveOption(6)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") setActiveOption(6);
                  }}
                  aria-label="Feedback"
                >
                  <i className="fa-regular fa-message"></i>
                  <p className="mb-0 ms-3">Feedback</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
