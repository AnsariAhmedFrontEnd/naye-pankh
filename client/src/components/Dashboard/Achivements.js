import React from "react";
import "./Achivements.css";
import { msg } from "../data";

const Achivements = () => {
  const copyLinkHandler = () => {
    alert("Link is now copied to the clipboard!");
  };

  const shareOnWhatsapp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(msg.msg)}`;
    window.open(url, "_blank"); // Opens the WhatsApp share link in a new tab
  };

  return (
    <div className="container p-5 bg-white">
      <div className="row px-5">
        <div className="col px-5">
          <div className="progress">
            <p className="goal-title">Goal Achieved</p>
            <p className="goal-achieved">10</p>
          </div>
          <div className="targated-progess">
            <p className="goal-title text-center mt-1">Total Goal</p>
            <p className="goal-achieved text-center">₹30000</p>
          </div>
        </div>
        <div className="col px-5">
          <div className="row">
            <p className="text-center fw-bold" style={{ color: "#ea4633" }}>
              Level Achieved : <span className="text-dark">Star</span>
            </p>
            <hr className="hr-1" />
          </div>
          <div className="row">
            <div className="d-flex align-items-center justify-content-evenly">
              <button className="button">
                <i className="fa-regular fa-star"></i> Rewards
              </button>
              <button className="button" onClick={copyLinkHandler}>
                <i className="fa-regular fa-copy"></i> Copy Donation Link
              </button>
            </div>
            <i className="text-center mt-3 mb-4">
              Unlock <b>Ninja Level</b> at 5000
            </i>
            <p className="text-center">
              <b className="text-danger">
                Time Left: <span className="text-dark">Campaing Expired</span>
              </b>
            </p>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <button className="btn btn-danger w-50">Extend Now</button>
            </div>
            <hr className="hr-2" />
          </div>
          <div className="d-flex justify-content-center row text-center">
            <p className="fw-bold text-danger">
              Reference Code: <span className="text-dark">sdafhas5</span>
            </p>
            <button className="button w-50 mb-5">Start Here</button>
          </div>
        </div>
      </div>
      <div className="row">
        <button className="button w-25" onClick={shareOnWhatsapp}>
          <i className="fa-solid fa-arrow-up-from-bracket me-2"></i>Share On
          Whatsapp
        </button>
      </div>
    </div>
  );
};

export default Achivements;
