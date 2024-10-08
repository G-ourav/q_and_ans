import React from "react";
import Result from "../screen/result";
import Total_result from "../screen/Total_result";
import Q_and_ans from "../screen/q_and_ans";
import Start from "../screen/Start";

import { Routes, Route, Navigate } from "react-router-dom";

const app_stack = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/q-and-ans" element={<Q_and_ans />} />
      <Route path="/result" element={<Result />} />
      <Route path="/total-result" element={<Total_result />} />
      {/* Redirect any other path to the Start page */}
      {/* Redirect any other path to the Start page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default app_stack;
