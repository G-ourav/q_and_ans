import React, { useState } from "react";

const Option = ({ e, i, answerd, setAnswerd, answerd_n, setAnswerd_n }) => {
  const [checked, setChecked] = useState(0);
  return (
    <div
      //   onClick={() => {
      //     if (answerd || answerd_n === i) {
      //       setChecked(!checked);
      //       setAnswerd_n(i);
      //       setAnswerd(!answerd);
      //     }
      //   }}
      className="p-5 rounded-2xl  bg-slate-500"
    >
      <div class="flex">
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
