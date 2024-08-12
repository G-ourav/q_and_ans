import React from "react";
import Start from "../screen/Start";
import { Routes, Route } from "react-router-dom";

const auth_stack = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
    </Routes>
  );
};

export default auth_stack;
