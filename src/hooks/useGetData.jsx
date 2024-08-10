import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

function useGetData(url) {
  // const dispatch = useDispatch();
  const [get_user_data, setget_user_data] = useState(null);
  const [Get_error, setGet_error] = useState(null);

  useEffect(() => {
    const get_user_data = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          console.log("API is not working");
          throw new Error("Network response was not ok");
        }
        const get_res = await res.json();
        // const Data = JSON.stringify(get_res);
        setget_user_data(get_res);
        // console.log(Data, get_res, res);
        console.log(res, get_res);
        // dispatch(setalert_({ message_: get_res.message, status_: get_res.status }));
      } catch (error) {
        setGet_error(error);
        console.error("An error occurred:", error);
      }
    };
    get_user_data();
  }, [url]);

  return [get_user_data, Get_error];
}

export default useGetData;
