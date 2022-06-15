import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "app/store";

export interface PortState {
  status: "openTab" | "closeTab";
}

const initialState = {
  status: "closeTab",
};
export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    openTab: (state) => {
      state.status = "openTab";
    },
    closeTab: (state) => {
      state.status = "closeTab";
    },
  },
});
export const getTabState = (state: AppState) => state.portfolio.status;

export const { openTab, closeTab } = portfolioSlice.actions;
export default portfolioSlice.reducer;
