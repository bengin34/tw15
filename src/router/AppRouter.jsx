import React from "react";
import Navbar from "../components/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home'


const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRouter;
