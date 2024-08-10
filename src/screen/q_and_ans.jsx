import React, { useState } from "react";
import Option from "./option";

const Q_and_ans = ({
  question,
  category,
  setQuestion_no,
  question_no,
  all_ans,
  difficulty,
  score,
  setScore,
  correct_answer,
  ans_flag,
  setAns_flag,
}) => {
  const [answerd, setAnswerd] = useState(true);
  const [answerd_n, setAnswerd_n] = useState(0);

  const ans_check = () => {
    setAns_flag(!ans_flag);
    console.log(answerd_n - 1, all_ans[answerd_n - 1]);
    if (answerd_n !== 0) {
      console.log(answerd_n - 1, all_ans[answerd_n - 1]);
      if (question_no <= 9) {
        if (all_ans[answerd_n - 1] === correct_answer) {
          setScore([
            ...score,
            {
              user_answer: all_ans[answerd_n - 1],
              correct_answer: correct_answer,
              user_score: score[score?.length - 1]?.user_score + 1 || 0,
            },
          ]);
        } else {
          setScore([
            ...score,
            {
              user_answer: all_ans[answerd_n - 1],
              correct_answer: correct_answer,
              user_score: score[score?.length - 1]?.user_score || 0,
            },
          ]);
        }
        setAnswerd_n(0);
        setQuestion_no(question_no + 1);
      } else {
        setQuestion_no(9);
      }
    }
  };

  return (
    <div className=" h-full  w-screen p-10  ">
      <div
        className=" p-10  bg-slate-300  rounded-2xl
   "
      >
        <div className=" md:flex text-lg justify-between gap-2">
          <div className="p-2">
            <div className=" rounded-2xl p-2 shadow-2xl   shadow-green-400 bg-teal-200 ">
              category: {category}
            </div>
          </div>
          <div className="flex py-2 gap-4 ">
            {difficulty === "hard" ? (
              <div className=" rounded-full p-5 shadow-2xl shadow-orange-500   bg-red-200 ">
                hard
              </div>
            ) : difficulty === "medium" ? (
              <div className=" rounded-full p-5 shadow-2xl shadow-orange-500 bg-yellow-200 ">
                medium
              </div>
            ) : (
              <div className=" rounded-full p-5 shadow-2xl shadow-green-950 bg-teal-200 ">easy</div>
            )}
          </div>
        </div>
        {/* quetion */}
        <p>{question}</p>
        {/* options */}
        <div className="grid gap-2 py-4  ">
          {all_ans?.map((e, i) => {
            return (
              <Option
                answerd_n={answerd_n}
                setAnswerd_n={setAnswerd_n}
                answerd={answerd}
                setAnswerd={setAnswerd}
                // ans_check={ans_check}
                e={e}
                i={i + 1}
              />
            );
          })}
        </div>
        <button
          className=" bg-slate-500 rounded-xl p-2  uppercase  text-3xl"
          onClick={() => {
            ans_check();
          }}
        >
          Submit
        </button>
      </div>

      {/* results 
      <div>
        <h1>Results</h1>
      </div> */}
    </div>
  );
};

export default Q_and_ans;
