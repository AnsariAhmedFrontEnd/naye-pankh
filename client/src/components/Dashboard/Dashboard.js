import React from "react";
import Main from "./Main";
import { Routes, Route, Outlet } from "react-router-dom";
import Transactions from "../SidebarPages/Transactions";
import StartHere from "../SidebarPages/StartHere";
import FAQ from "../SidebarPages/FAQ";
import LearningModule from "../SidebarPages/LearningModule";
import Rewards from "../SidebarPages/Rewards";
import Feedback from "../SidebarPages/Feedback";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="transactions" element={<Transactions />} />
        <Route path="startHere" element={<StartHere />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="learning" element={<LearningModule />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="feedback" element={<Feedback />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default Dashboard;
