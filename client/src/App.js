import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Donate from "./components/Donate/Donate";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AuthCheck from "./components/AuthCheck";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard/*"
        element={
          <AuthCheck>
            <Layout>
              <Dashboard />
            </Layout>
          </AuthCheck>
        }
      />
      {/* <Route
        path="/transactions"
        element={
          <Layout>
            <Transactions />
          </Layout>
        }
      /> */}
      <Route path="/donate/:referralCode" element={<Donate />} />
    </Routes>
  );
}

export default App;
