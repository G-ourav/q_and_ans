import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const Total_result = () => {
  const { score } = useSelector((state) => state.Q_and_ans);
  const data = {
    labels: ["Total Incorrect", "Total Correct"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          score?.length - score[score?.length - 1]?.user_score,
          score[score?.length - 1]?.user_score,
        ],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="  p-10  ">
      <div
        className=" p-10  bg-slate-300  rounded-2xl
 "
      >
        <div className="md:flex  pb-5 justify-between ">
          <p
            className=" text-3xl pb-5  flex "
            data-wow-duration="2s"
            data-wow-delay="1s"
          >
            Thank You for Taking Our Quiz! 🎉
            <p className="  wow animate__animated animate__heartBeat  ">👏</p>
          </p>
        </div>
        <div>
          <p className=" text-lg">
            We appreciate you taking the time to complete our quiz. Your
            responses help us tailor our content and services to better meet
            your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="md:col-span-1 md:flex justify-center">
            <Pie data={data} />
          </div>
          <div className="col-span-1    ">
            <div className="rounded-2xl text-left bg-slate-300  p-5">
              <h1 className="  text-lg text-blue  pt-5 ">
                Total Questions Served : {score?.length}{" "}
              </h1>
              <h1 className="  text-lg  text-blue  py-1 ">
                Total Correct Questions :{" "}
                {score[score?.length - 1]?.user_score || 0}
              </h1>
              <h1 className="  text-lg  text-blue  py-1 ">
                Total Incorrect Questions :{" "}
                {score?.length - score[score?.length - 1]?.user_score || 0}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total_result;
