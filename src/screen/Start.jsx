import React from "react";
import { setStart, setTotal_no_question } from "../redux/Q_and_ansReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total_no_question } = useSelector((state) => state.Q_and_ans);

  return (
    <div className="  p-10  ">
      <div
        className=" p-10  bg-slate-300  rounded-2xl
"
      >
        <p className=" bg-slate-800  text-white shadow-2xl shadow-black   px-3 py-1 rounded-xl  uppercase  text-lg">
          before starting the Quiz
        </p>
        <div className=" flex flex-col pt-4 gap-3  text-left">
          <p>
            <span className=" font-semibold">1 Start a Quiz:</span> Click on any
            quiz to begin playing. Select an Answer:
          </p>
          <p>
            <span className=" font-semibold">2 </span> Pick your answer by
            clicking on one of the options. Submit Your{" "}
          </p>
          <p>
            <span className=" font-semibold">3 Answer:</span> Hit Submit to see
            if you got it right. View the Result:{" "}
          </p>
          <p>
            <span className=" font-semibold">4 </span> Instantly see if your
            answer is correct or incorrect. Move to the Next{" "}
          </p>
          <p>
            <span className=" font-semibold">5 Question:</span> Click NEXT to go
            to the following question. Complete the{" "}
          </p>
          <p>
            <span className=" font-semibold">6 Quiz:</span> Answer all questions
            to view your final score. Review Your{" "}
          </p>
          <p>
            <span className=" font-semibold">7 Results:</span> Go over your
            answers and learn from the explanations.{" "}
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission behavior
            navigate("/q-and-ans"); // Ensure the route is correctly formatted
          }}
        >
          <div className="flex flex-col text-left gap-2 py-4">
            <p>No of Questions you want</p>
            {/* <input
              className="rounded-xl px-3 py-2"
              required
              type="number"
              max={100}
              min={1}
              value={total_no_question}
              onChange={(e) => {
                dispatch(setTotal_no_question(e.target.value));
              }}
            /> */}
            <button
              type="submit"
              className="bg-slate-800 text-white shadow-2xl shadow-black px-3 py-1 rounded-xl uppercase text-lg"
            >
              Start
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Start;
