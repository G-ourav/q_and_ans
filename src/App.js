import "./App.css";
import React, { useEffect, useState } from "react";
import useGetData from "./hooks/useGetData";
import Start from "./screen/Start";
import Q_and_ans from "./screen/q_and_ans";
import Result from "./screen/result";
import Total_result from "./screen/Total_result";

function App() {
  const [start, setStart] = useState(true);
  const [question, setQuestion] = useState();
  const [all_ans, setAll_ans] = useState([]);
  const [question_no, setQuestion_no] = useState(0);
  const [score, setScore] = useState([]);
  const [ans_flag, setAns_flag] = useState(true);
  const [get_user_data] = useGetData(`https://opentdb.com/api.php?amount=10`);
  useEffect(() => {
    if (get_user_data) {
      setQuestion(get_user_data?.results[question_no].question);
      setAll_ans([
        ...get_user_data?.results[question_no].incorrect_answers,
        get_user_data?.results[question_no].correct_answer,
      ]);
      console.log(get_user_data?.results[question_no].incorrect_answers);
    }
  }, [get_user_data, question_no]);
  return (
    <div className="App">
      <div className="  bg-slate-100 ">
        <div className="p-10 grid  gap-5 md:grid-cols-2 text-center justify-center"></div>
        <Total_result />
        {start ? (
          <Start setStart={setStart} />
        ) : ans_flag ? (
          <Result setAns_flag={setAns_flag} ans_flag={ans_flag} score={score} />
        ) : (
          <Q_and_ans
            difficulty={get_user_data?.results[question_no].difficulty}
            question={question}
            setQuestion_no={setQuestion_no}
            question_no={question_no}
            score={score}
            setScore={setScore}
            setAns_flag={setAns_flag}
            ans_flag={ans_flag}
            all_ans={all_ans}
            category={get_user_data?.results[question_no].category}
            correct_answer={get_user_data?.results[question_no].correct_answer}
          />
        )}
      </div>
    </div>
  );
}

export default App;
