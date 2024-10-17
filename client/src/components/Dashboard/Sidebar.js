import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      className="border position-fixed top-0 start-0 vh-100"
      style={{ width: "20%" }}
    >
      <div className="w-75 border border-info border-4 rounded-4 text-info text-center p-2 mt-3 ms-3 h4 info">
        Logo
      </div>
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
            <div className="d-flex align-items-center sidebar-options py-2 px-3 sidebar-options-active">
              <i className="fa-solid fa-desktop"></i>
              <p className="mb-0 ms-3">Dashboard</p>
            </div>
            <div className="d-flex align-items-center sidebar-options py-2 px-3">
              <i className="fa-solid fa-list"></i>
              <p className="mb-0 ms-3">Transactions</p>
            </div>
            <div className="d-flex align-items-center sidebar-options py-2 px-3">
              <i className="fa-solid fa-arrow-turn-down"></i>
              <p className="mb-0 ms-3">Start Here</p>
            </div>
            <div className="d-flex align-items-center sidebar-options py-2 px-3">
              <i className="fa-regular fa-circle-question"></i>
              <p className="mb-0 ms-3">FAQ</p>
            </div>
            <div className="d-flex align-items-center sidebar-options py-2 px-3">
              <i className="fa-solid fa-book-open"></i>
              <p className="mb-0 ms-3">Learning Modules</p>
            </div>
            <div className="d-flex align-items-center sidebar-options py-2 px-3">
              <i className="fa-regular fa-star"></i>
              <p className="mb-0 ms-3">Rewards</p>
            </div>
            <div className="d-flex align-items-center sidebar-options py-2 px-3">
              <i className="fa-regular fa-message"></i>
              <p className="mb-0 ms-3">Feedack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
