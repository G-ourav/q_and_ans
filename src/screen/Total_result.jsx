import React from "react";

const Total_result = ({ score }) => {
  return (
    <div>
      {" "}
      <div className="col-span-1    ">
        <div className="rounded-2xl text-left bg-slate-300  p-5">
          <h1 className=" text-xl bg-slate-500 text-blue  p-5 uppercase">
            Total Questions Served : {score?.length}{" "}
          </h1>
          <h1 className=" text-xl bg-slate-500  text-blue  p-5 uppercase">
            Total Correct Questions : {}
          </h1>
          <h1 className=" text-xl bg-slate-500  text-blue  p-5 uppercase">
            Total Incorrect Questions : {}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Total_result;
