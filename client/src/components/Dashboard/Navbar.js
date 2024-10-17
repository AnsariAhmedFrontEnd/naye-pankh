import React from "react";

const Navbar = () => {
  return (
    <nav className="d-flex h-25 justify-content-end align-items-center mh-100">
      <div className="d-flex px-5 py-3 align-items-center">
        <img
          src="images/profile.jfif"
          alt="profile"
          style={{ width: "40px", height: "40px", borderRadius: "0.75rem" }}
        />

        <div className="ms-3">
          <p className="mb-0 fw-bold">UseName</p>
          <div className="d-flex align-items-center">
            <p className="mb-0 text-muted" style={{fontSize:"0.75rem"}}>Fundraise</p>
            <i className="fa-solid fa-angle-down ms-2 fa-2xs"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
