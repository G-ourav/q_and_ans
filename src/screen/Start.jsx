import React from "react";

const Start = ({ setStart }) => {
  return (
    <div className=" h-full  w-screen p-10  ">
      <div
        className=" p-10  bg-slate-300  rounded-2xl
   "
      >
        <p className=" bg-slate-500 rounded-xl p-2  uppercase  text-3xl">
          before starting the Quiz
        </p>
        <div className="text-left">
          <p>
            1 Start a Quiz: Click on any quiz to begin playing. Select an
            Answer:
          </p>
          <p>
            2 Pick your answer by clicking on one of the options. Submit Your{" "}
          </p>
          <p>
            3 Answer: Hit Submit to see if you got it right. View the Result:{" "}
          </p>
          <p>
            4 Instantly see if your answer is correct or incorrect. Move to the
            Next{" "}
          </p>
          <p>
            5 Question: Click NEXT to go to the following question. Complete the{" "}
          </p>
          <p>
            6 Quiz: Answer all questions to view your final score. Review Your{" "}
          </p>
          <p>
            7 Results: Go over your answers and learn from the explanations.{" "}
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
