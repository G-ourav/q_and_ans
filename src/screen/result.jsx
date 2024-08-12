import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const { score } = useSelector((state) => state.Q_and_ans);

  return (
    <div className="  p-10  ">
      <div
        className=" p-10  bg-slate-300  rounded-2xl
 "
      >
        <div className="col-span-1    ">
          <div className="rounded-2xl text-left bg-slate-300  p-5">
            <div className="md:flex  pb-5 justify-between ">
              <div>
                {score[score?.length - 1]?.correct_answer ===
                score[score?.length - 1]?.user_answer ? (
                  <>
                    <div className=" text-3xl pb-5  flex ">
                      <p data-wow-duration="2s" data-wow-delay="1s">
                        Correct! 🎉
                      </p>
                      <p className="  wow animate__animated animate__heartBeat  ">
                        🤩
                      </p>
                    </div>

                    <div className="  py-1  flex ">
                      <p>Your answer :</p>
                      <p className=" px-1  text-lime-500  ">
                        {score[score?.length - 1]?.user_answer || 0}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-3xl  pb-5  flex ">
                      <p>Incorrect!</p>
                      <p className="  wow animate__animated animate__heartBeat  ">
                        😧
                      </p>
                    </div>
                    <div className=" py-1 flex ">
                      <p>Your answer :</p>
                      <p className=" px-1  text-red-600  ">
                        {score[score?.length - 1]?.user_answer || 0}
                      </p>
                    </div>
                  </>
                )}
                <div className=" pb-3  flex  ">
                  <p className="  ">Correct answer :</p>

                  <p className=" px-1   text-blue-500  ">
                    {score[score?.length - 1]?.correct_answer || 0}
                  </p>
                </div>
              </div>
              <div>
                <button
                  className=" bg-slate-800 text-white   px-3 py-1  rounded-xl  uppercase  text-lg"
                  onClick={() => {
                    navigate("/total-result");
                  }}
                >
                  end test
                </button>
              </div>
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
              Total Correct answer : {score[score?.length - 1]?.user_score || 0}
            </h1>
          </div>
          <div className=" ">
            <button
              className=" bg-slate-800 text-white rounded-xl   px-3 py-1  uppercase  text-lg"
              onClick={() => {
                navigate("/q-and-ans");
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
