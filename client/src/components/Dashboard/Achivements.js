import React, { useContext } from "react";
import "./Achivements.css";
import { generateMsg } from "../data";
import { UserContext } from "../store/UserContext";

const Achivements = () => {
  const { user } = useContext(UserContext);
  
  const copyLinkHandler = async () => {
    const linkToCopy = `https://naye-pankh.onrender.com/donate/${user.referralCode}`;
    console.log(linkToCopy);
    try {
      await navigator.clipboard.writeText(linkToCopy);
      alert("Link is now copied to the clipboard!"); // Notify the user
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  
  const shareOnWhatsapp = () => {
    const msg = generateMsg(user.referralCode);
    console.log(msg);
    const url = `https://wa.me/?text=${encodeURIComponent(msg.msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="container p-5 bg-white">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="progress">
            <p className="goal-title">Goal Achieved</p>
            <p className="goal-achieved">10</p>
          </div>
          
          <div className="targeted-progress">
            <p className="goal-title text-center mt-1">Total Goal</p>
            <p className="goal-achieved text-center">₹30000</p>

          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="text-center">
            <p className="fw-bold" style={{ color: "#ea4633" }}>
              Level Achieved : <span className="text-dark">Star</span>
            </p>
            <hr className="hr-1" />
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex gap-3">
            <button className="button mb-3">
              <i className="fa-regular fa-star"></i> Rewards
            </button>
            <button className="button mb-3" onClick={copyLinkHandler}>
              <i className="fa-regular fa-copy"></i> Copy Donation Link
            </button>
            </div>
            <i className="text-center mt-3 mb-4">
              Unlock <b>Ninja Level</b> at 5000
            </i>
            <p className="text-center">
              <b className="text-danger">
                Time Left: <span className="text-dark">Campaign Expired</span>
              </b>
            </p>
            <button className="btn btn-danger w-50 mb-3">Extend Now</button>
            <hr className="hr-2" />
            <div className="text-center">
              <p className="fw-bold text-danger">
                Reference Code:{" "}
                <span className="text-dark">{user.referralCode}</span>
              </p>
              <button className="button w-50 mb-5">Start Here</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="button w-25" onClick={shareOnWhatsapp}>
            <i className="fa-solid fa-arrow-up-from-bracket me-2"></i> Share On Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
