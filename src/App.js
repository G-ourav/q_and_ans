import "./App.css";
import React, { useEffect, useState } from "react";
import "animate.css";
import useGetData from "./hooks/useGetData";
import { BrowserRouter } from "react-router-dom";
import App_stack from "./navigation/app_stack";
import Auth_stack from "./navigation/auth_stack";
import Skeleton from "./screen/skeleton";
import { useSelector, useDispatch } from "react-redux";
import { setAll_ans, setQuestion_content } from "./redux/Q_and_ansReducer";
import WOW from "wowjs";

function App() {
  const dispatch = useDispatch();

  const { question_no, total_no_question } = useSelector((state) => state.Q_and_ans);
  const [get_user_data] = useGetData(`https://opentdb.com/api.php?amount=${1 || 0}`);

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  useEffect(() => {
    if (get_user_data && question_no < get_user_data?.results.length) {
      console.log(get_user_data);
      dispatch(setQuestion_content(get_user_data?.results[question_no]));
      dispatch(
        setAll_ans([
          ...get_user_data?.results[question_no]?.incorrect_answers,
          get_user_data?.results[question_no]?.correct_answer,
        ])
      );
    }
  }, [get_user_data, question_no]);

  return (
    <div className="App">
      <BrowserRouter>{get_user_data ? <App_stack /> : <Skeleton />}</BrowserRouter>
    </div>
  );
}

export default App;
