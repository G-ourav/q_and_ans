import "./App.css";
import React, { useEffect, useState } from "react";
import useGetData from "./hooks/useGetData";

function App() {
  const [start, setStart] = useState(true);
  const [question, setQuestion] = useState();
  const [ans, setAns] = useState([]);
  const [question_no, setQuestion_no] = useState(0);
  const [get_user_data, Get_error] = useGetData(`https://opentdb.com/api.php?amount=10`);
  useEffect(() => {
    if (get_user_data) {
      setQuestion(get_user_data?.results[question_no].question);
      setAns([
        ...get_user_data?.results[question_no].incorrect_answers,
        get_user_data?.results[question_no].correct_answer,
      ]);
      console.log(get_user_data?.results[question_no].incorrect_answers);
    }
  }, [get_user_data, question_no]);
  return (
    <div className="App">
      <div className="h-screen bg-slate-100 ">
        <div className="  flex text-center justify-center ">
          <h1 className=" text-3xl bg-slate-300 text-blue rounded-2xl p-5 uppercase">Q and Ans</h1>
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
              <div className="flex gap-4 ">
                {get_user_data?.results[question_no].difficulty === "hard" ? (
                  <div className=" rounded-full p-5 shadow-2xl   bg-red-600 ">hard</div>
                ) : get_user_data?.results[question_no].difficulty === "medium" ? (
                  <div className=" rounded-full p-5 shadow-2xl bg-yellow-300 ">medium</div>
                ) : (
                  <div className=" rounded-full p-5 shadow-2xl bg-teal-800 ">easy</div>
                )}
              </div>
              {/* quetion */}
              <p>{question}</p>
              {/* options */}
              <div className="grid gap-2 py-4  grid-cols-4">
                {ans?.map((e, i) => {
                  return (
                    <div className="p-5 rounded-2xl  bg-slate-500">
                      <p>{e}</p>
                    </div>
                  );
                })}
              </div>
              <button
                className=" bg-slate-500 rounded-xl p-2  uppercase  text-xl"
                onClick={() => {
                  console.log(question_no);
                  setQuestion_no(question_no < 9 ? question_no + 1 : 9);
                }}
              >
                next quetion
              </button>
            </div>
            {/* results  */}
            <div>
              <h1>Results</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
