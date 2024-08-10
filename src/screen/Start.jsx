import React from "react";

const Start = ({ setStart }) => {
  return (
    <div className=" h-full  w-screen p-10  ">
      <div
        className=" p-10 flex flex-col gap-5  bg-slate-300  rounded-2xl
   "
      >
        <p className=" bg-slate-500 rounded-xl p-2  uppercase  text-3xl">
          before starting the Quiz
        </p>
        <div className=" flex flex-col gap-3  text-left">
          <p>
            <span className=" font-semibold">1 Start a Quiz:</span> Click on any quiz to begin
            playing. Select an Answer:
          </p>
          <p>
            <span className=" font-semibold">2 </span> Pick your answer by clicking on one of the
            options. Submit Your{" "}
          </p>
          <p>
            <span className=" font-semibold">3 Answer:</span> Hit Submit to see if you got it right.
            View the Result:{" "}
          </p>
          <p>
            <span className=" font-semibold">4 </span> Instantly see if your answer is correct or
            incorrect. Move to the Next{" "}
          </p>
          <p>
            <span className=" font-semibold">5 Question:</span> Click NEXT to go to the following
            question. Complete the{" "}
          </p>
          <p>
            <span className=" font-semibold">6 Quiz:</span> Answer all questions to view your final
            score. Review Your{" "}
          </p>
          <p>
            <span className=" font-semibold">7 Results:</span> Go over your answers and learn from
            the explanations.{" "}
          </p>
        </div>
        <button
          className=" bg-slate-500 rounded-xl p-2  uppercase  text-3xl"
          onClick={() => {
            setStart(false);
          }}
        >
          Start a Quiz
        </button>
      </div>
    </div>
  );
};

export default Start;
