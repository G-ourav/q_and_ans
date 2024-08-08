import "./App.css";
import React, { useState } from "react";

function App() {
  const [start, setStart] = useState(true);
  return (
    <div className="App">
      <div className="h-screen bg-slate-100 ">
        <div className="  flex text-center justify-center ">
          <h1 className=" text-3xl bg-slate-300 text-blue rounded-2xl p-5 uppercase">
            Q and Ans
          </h1>
        </div>

        {start ? (
          <div className="p-10  flex justify-center my-auto ">
            <button
              className=" bg-slate-500 rounded-xl p-5  uppercase  text-5xl"
              onClick={() => {
                setStart(false);
              }}
            >
              start test
            </button>
          </div>
        ) : (
          <div className="p-10  flex justify-center my-auto ">
            <div
              className=" p-10  bg-slate-300  rounded-2xl
             "
            >
              {/* quetion */}
              <p>adsfad</p>
              {/* options */}
              <p>asgfdf</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
