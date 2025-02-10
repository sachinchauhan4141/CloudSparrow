import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: [],
  reducers: {
    setJobs: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setJobs } = jobSlice.actions;

export default jobSlice.reducer;
