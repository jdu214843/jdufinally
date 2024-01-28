import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Analyze from "../components/Analyze";
import Moderate from "../components/Moderate";
import Account from "../components/Account";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/moderate" element={<Moderate />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          <Route index element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Root;
