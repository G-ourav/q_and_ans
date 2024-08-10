import React, { useEffect } from "react";

const Result = ({
  score,
  setQuestion_no,
  question_no,
  ans_flag,
  setAns_flag,
}) => {
  useEffect(() => {
    if (score) {
      console.log(score);
    }
  }, []);

  return (
    <div className="  p-10  ">
      <div
        className=" p-10  bg-slate-300  rounded-2xl
 "
      >
        <div className="col-span-1    ">
          <div className="rounded-2xl text-left bg-slate-300  p-5">
            <div className="md:flex  pb-5 justify-between ">
              {score[score?.length - 1]?.correct_answer ===
              score[score?.length - 1]?.user_answer ? (
                <p
                  className=" text-3xl pb-5  flex "
                  data-wow-duration="2s"
                  data-wow-delay="1s"
                >
                  Correct! 🎉
                  <p className="  wow animate__animated animate__heartBeat  ">
                    🤩
                  </p>
                </p>
              ) : (
                <p className="text-3xl  pb-5  flex ">
                  Incorrect!
                  <p className="  wow animate__animated animate__heartBeat  ">
                    😧
                  </p>
                </p>
              )}
              <button
                className=" bg-slate-800 text-white   px-3 py-1  rounded-xl  uppercase  text-lg"
                onClick={() => {
                  console.log(question_no);
                  // setQuestion_no(question_no < 9 ? question_no + 1 : 9);
                }}
              >
                end test
              </button>
            </div>
            <div>
              {score[score?.length - 1]?.correct_answer ===
              score[score?.length - 1]?.user_answer ? (
                <p className=" text-lg">
                  Great job! You got it right. Keep up the good work and get
                  ready for the next question.
                </p>
              ) : (
                <p className=" text-lg">
                  Great effort! That was close, but not quite right. Don’t
                  worry, you’re doing great—let’s move on to the next question
                  and keep up the good work!
                </p>
              )}
            </div>

            <h1 className="  text-lg text-blue  pt-5 ">
              Total Questions Served : {score?.length}{" "}
            </h1>
            <h1 className="  text-lg  text-blue  py-1 ">
              Total Correct Questions : {score[score?.length - 1]?.user_score}
            </h1>
          </div>
          <div className=" ">
            <button
              className=" bg-slate-800 text-white rounded-xl   px-3 py-1  uppercase  text-lg"
              onClick={() => {
                setAns_flag(!ans_flag);
              }}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
