import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "app/store";

export interface LookupState {
  status: "asking" | "looking" | "nope";
}

const initialState = {
  status: "asking",
};
export const lookupSlice = createSlice({
  name: "lookup",
  initialState,
  reducers: {
    answerYes: (state) => {
      state.status = "looking";
    },
    answerNope: (state) => {
      state.status = "nope";
    },
  },
});
export const getStatus = (state: AppState) => state.lookup.status;

export const { answerYes, answerNope } = lookupSlice.actions;
export default lookupSlice.reducer;
