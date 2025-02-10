import { createSlice } from "@reduxjs/toolkit";

const enquirySlice = createSlice({
  name: "enquiry",
  initialState: [],
  reducers: {
    setEnquiries: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setEnquiries } = enquirySlice.actions;

export default enquirySlice.reducer;
