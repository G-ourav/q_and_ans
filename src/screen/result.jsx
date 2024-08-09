import React from "react";

const Result = ({
  score,
  setQuestion_no,
  question_no,
  ans_flag,
  setAns_flag,
}) => {
  return (
    <div>
      {" "}
      <div className="col-span-1    ">
        <div className="rounded-2xl text-left bg-slate-300  p-5">
          <p className="text-xl">Correct! 🎉</p>
          <p className="">
            Great job! You got it right. Keep up the good work and get ready for
            the next question.
          </p>
        </div>
        <div className=" grid grid-cols-2 ">
          <div className="">
            <button
              className=" bg-slate-500 rounded-xl p-2  uppercase  text-xl"
              onClick={() => {
                console.log(question_no);
                // setQuestion_no(question_no < 9 ? question_no + 1 : 9);
              }}
            >
              end
            </button>
          </div>
          <div className=" ">
            <button
              className=" bg-slate-500 rounded-xl   p-2  uppercase  text-xl"
              onClick={() => {
                console.log(question_no);
                setAns_flag(!ans_flag);
                // if (question_no <= 9) {
                //   setQuestion_no((prev) => prev + 1);
                // } else setQuestion_no((prev) => prev);
              }}
            >
              next quetion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
