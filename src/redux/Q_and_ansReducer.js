import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: true,
  all_ans: [],
  question_content: {},
  question_no: 0,
  score: [],
  ans_flag: false,
  total_no_question: 10,
};
export const Q_and_ansSlice = createSlice({
  name: "Q_and_ans",
  initialState,
  reducers: {
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setAll_ans: (state, action) => {
      state.all_ans = action.payload;
    },
    setQuestion_content: (state, action) => {
      state.question_content = action.payload;
    },
    setQuestion_no: (state, action) => {
      state.question_no = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setAns_flag: (state, action) => {
      state.ans_flag = action.payload;
    },
    setTotal_no_question: (state, action) => {
      state.total_no_question = action.payload;
    },
  },
});
export const {
  setStart,
  setAll_ans,
  setQuestion_content,
  setQuestion_no,
  setScore,
  setAns_flag,
  setTotal_no_question,
} = Q_and_ansSlice.actions;
export default Q_and_ansSlice.reducer;
