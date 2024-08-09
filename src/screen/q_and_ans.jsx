import React from "react";

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
  const ans_check = ({ e }) => {
    setAns_flag(!ans_flag);
    if (question_no <= 9) {
      if (e === correct_answer) {
        setScore([...score, 1]);
      } else {
        setScore([...score, 0]);
      }

      setQuestion_no(question_no + 1);
    } else {
      setQuestion_no(9);
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
              <div className=" rounded-full p-5 shadow-2xl shadow-green-950 bg-teal-200 ">
                easy
              </div>
            )}
          </div>
        </div>
        {/* quetion */}
        <p>{question}</p>
        {/* options */}
        <div className="grid gap-2 py-4  ">
          {all_ans?.map((e, i) => {
            return (
              <div
                onClick={() => {
                  ans_check(e, i);
                }}
                className="p-5 rounded-2xl  bg-slate-500"
              >
                <p>{e}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* results  */}
      <div>
        <h1>Results</h1>
      </div>
    </div>
  );
};

export default Q_and_ans;
