import "./App.css";
import React, { useEffect, useState } from "react";
import "animate.css";
import useGetData from "./hooks/useGetData";
import Start from "./screen/Start";
import Q_and_ans from "./screen/q_and_ans";
import Result from "./screen/result";
import Total_result from "./screen/Total_result";
import WOW from "wowjs";

function App() {
  const [start, setStart] = useState(true);
  const [all_ans, setAll_ans] = useState([]);
  const [question_content, setQuestion_content] = useState();
  const [question_no, setQuestion_no] = useState(0);
  const [score, setScore] = useState([]);
  const [ans_flag, setAns_flag] = useState(false);
  const [get_user_data] = useGetData(`https://opentdb.com/api.php?amount=10`);
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  useEffect(() => {
    if (get_user_data) {
      setQuestion_content(get_user_data?.results[question_no]);
      setAll_ans([
        ...get_user_data?.results[question_no]?.incorrect_answers,
        get_user_data?.results[question_no]?.correct_answer,
      ]);
      // console.log(get_user_data?.results[question_no].incorrect_answers);
    }
  }, [get_user_data, question_no]);
  return (
    <div className="App">
      <div className=" h-screen bg-slate-100 ">
        <div className="p-10 grid  gap-5 md:grid-cols-2 text-center justify-center"></div>

        {start ? (
          <Start setStart={setStart} />
        ) : ans_flag ? (
          <Result setAns_flag={setAns_flag} ans_flag={ans_flag} score={score} />
        ) : (
          <Q_and_ans
            question_content={question_content}
            setQuestion_no={setQuestion_no}
            question_no={question_no}
            score={score}
            setScore={setScore}
            setAns_flag={setAns_flag}
            ans_flag={ans_flag}
            all_ans={all_ans}
          />
        )}
        {/* <Total_result /> */}
      </div>
    </div>
  );
}

export default App;
