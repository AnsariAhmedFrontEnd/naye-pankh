import React, { useContext } from "react";
import Achivements from "./Achivements";
import { UserContext } from "../store/UserContext";

const Main = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-light p-4" style={{marginLeft:"20%"}}>
      <h2 className="fs-4">Dashboard</h2>
      <div className="position-relative">
        <img
          src="images/smile.avif"
          alt="smile"
          className="img-fluid rounded-4"
          style={{ width: "100%", height: "auto" }} // Ensure the image maintains its aspect ratio
        />
        <div
          className="p-4 rounded-4 position-absolute top-50 start-50 translate-middle"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", width: "90%", maxWidth: "600px" }} // Limit max width for larger screens
        >
          <h3 className="text-danger">Hello {user.name},</h3>
          <p className="text-white mt-4 mb-0">
            The initial push is the toughest! Go through the learning modules, or reach out to your fundraising manager to level up.
          </p>
        </div>
      </div>
      <Achivements />
    </div>
  );
};

export default Main;
