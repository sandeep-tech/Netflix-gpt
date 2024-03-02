import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Main>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/browse" element={<Browse />} />
        </Routes>
      </Main>
    </div>
  );
};

export default Body;
