import React, { useState } from "react";

const Option = ({ e, i, answerd, setAnswerd, answerd_n, setAnswerd_n }) => {
  const [checked, setChecked] = useState(0);
  return (
    <div
      className={
        answerd_n === i
          ? "p-5 rounded-2xl text-white  shadow-2xl shadow-black  bg-gray-800"
          : "p-5 rounded-2xl  shadow-2xl shadow-black  bg-gray-100"
      }
    >
      <div className="flex">
        <input
          id="checkbox"
          type="checkbox"
          checked={checked}
          onChange={() => {
            if (answerd || answerd_n === i) {
              setChecked(!checked);
              setAnswerd_n(i);
              setAnswerd(!answerd);
            }
          }}
          className="h-4 w-4 my-auto  text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />

        <p className=" px-2  text-left">{e}</p>
      </div>
    </div>
  );
};

export default Option;
