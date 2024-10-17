import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Transactions from "./components/Transactions/Transactions";
import Layout from "./components/Layout/Layout";
import Donate from "./components/Donate/Donate";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/transactions"
        element={
          <Layout>
            <Transactions />
          </Layout>
        }
      />
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
}

export default App;
