import React, { useState } from "react";
import Option from "./option";
import {
  setQuestion_no,
  setScore,
  setAns_flag,
} from "../redux/Q_and_ansReducer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Q_and_ans = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { all_ans, question_content, question_no, score, total_no_question } =
    useSelector((state) => state.Q_and_ans);

  const [answerd, setAnswerd] = useState(true);
  const [answerd_n, setAnswerd_n] = useState(0);

  const ans_check = () => {
    console.log(question_no);
    if (question_no === total_no_question) {
      navigate("/total result");
    } else {
      if (answerd_n !== 0) {
        // console.log(answerd_n - 1, all_ans[answerd_n - 1]);
        if (question_no < total_no_question) {
          if (all_ans[answerd_n - 1] === question_content?.correct_answer) {
            dispatch(
              setScore([
                ...score,
                {
                  user_answer: all_ans[answerd_n - 1],
                  correct_answer: question_content?.correct_answer,
                  user_score: score[score?.length - 1]?.user_score + 1 || 0,
                },
              ])
            );
          } else {
            dispatch(
              setScore([
                ...score,
                {
                  user_answer: all_ans[answerd_n - 1],
                  correct_answer: question_content?.correct_answer,
                  user_score: score[score?.length - 1]?.user_score || 0,
                },
              ])
            );
          }
          setAnswerd_n(0);
          dispatch(setQuestion_no(question_no + 1));
        } else {
          dispatch(setQuestion_no(9));
        }
        navigate("/result");
      }
    }
  };
  console.log(question_content);
  return (
    <div className="p-10">
      <div className="p-10  bg-slate-300  rounded-2xl">
        <div className=" md:flex  pb-5 text-lg justify-between gap-2">
          <div className="p-2">
            <div className="rounded-2xl p-2 shadow-2xl   shadow-green-400 bg-teal-200 ">
              category: {question_content?.category}
            </div>
          </div>
          <div className="flex py-2 gap-4 ">
            {question_content?.difficulty === "hard" ? (
              <div className=" rounded-full p-5 shadow-2xl shadow-orange-500   bg-red-200 ">
                hard
              </div>
            ) : question_content?.difficulty === "medium" ? (
              <div className=" rounded-full p-5 shadow-2xl shadow-orange-500 bg-yellow-200 ">
                medium
              </div>
            ) : (
              <div className=" rounded-full p-5 shadow-2xl shadow-green-950 bg-teal-200 ">
                easy
              </div>
            )}
          </div>
        </div>
        {/* quetion */}
        <p className="p-5 rounded-2xl text-white bg-gray-800">
          {question_content?.question}
        </p>
        {/* options */}
        <div className="grid  gap-4 py-6  ">
          {all_ans?.map((e, i) => {
            return (
              <Option
                answerd_n={answerd_n}
                setAnswerd_n={setAnswerd_n}
                answerd={answerd}
                setAnswerd={setAnswerd}
                e={e}
                i={i + 1}
              />
            );
          })}
        </div>
        <button
          className=" bg-slate-800 text-white shadow-2xl shadow-black   px-3 py-1 rounded-xl  uppercase  text-lg"
          onClick={() => {
            ans_check();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Q_and_ans;
