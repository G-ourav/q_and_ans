import React, { useEffect } from "react";

const Result = ({ score, setQuestion_no, question_no, ans_flag, setAns_flag }) => {
  useEffect(() => {
    if (score) {
      console.log(score);
    }
  }, []);
  return (
    <div className=" h-full  w-screen p-10  ">
      <div
        className=" p-10  bg-slate-300  rounded-2xl
 "
      >
        <div className="col-span-1    ">
          <div className="rounded-2xl text-left bg-slate-300  p-5">
            <div className="flex  justify-between ">
              {score[score?.length - 1]?.correct_answer ===
              score[score?.length - 1]?.user_answer ? (
                <p className="text-3xl">Correct! 🎉🤩</p>
              ) : (
                <p className="text-3xl">Incorrect! 😧</p>
              )}
              <button
                className="  bg-slate-500 rounded-xl p-2  uppercase  text-xl"
                onClick={() => {
                  console.log(question_no);
                  // setQuestion_no(question_no < 9 ? question_no + 1 : 9);
                }}
              >
                end test
              </button>
            </div>
            {score[score?.length - 1]?.correct_answer === score[score?.length - 1]?.user_answer ? (
              <p className=" text-lg">
                Great job! You got it right. Keep up the good work and get ready for the next
                question.
              </p>
            ) : (
              <p className=" text-lg">
                Great effort! That was close, but not quite right. Don’t worry, you’re doing
                great—let’s move on to the next question and keep up the good work!
              </p>
            )}

            <h1 className="  text-lg text-blue  pt-2 ">
              Total Questions Served : {score?.length}{" "}
            </h1>
            <h1 className="  text-lg  text-blue  py-1 ">
              Total Correct Questions : {score[score?.length - 1]?.user_score}
            </h1>
          </div>
          <div className=" ">
            <button
              className=" bg-slate-500 rounded-xl   p-2  uppercase  text-xl"
              onClick={() => {
                setAns_flag(!ans_flag);
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
