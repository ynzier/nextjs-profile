import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { AppState } from "app/store";
type TSProject = {
  cardName: string;
  cardDetail: string;
  img: string;
  techStack: string[];
};
export interface PortState {
  status: "openTab" | "closeTab";
  portArray: TSProject[];
}

const initialState = {
  status: "closeTab",
  portArray: [],
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
  extraReducers(builder) {
    builder.addCase(fetchPorts.fulfilled, (state, action) => {
      state.portArray = action.payload;
    });
  },
});
export const fetchPorts = createAsyncThunk("getPort", async () => {
  const res = await fetch("/assets/portfolio/portfolio.json");
  return res.json();
});
export const getTabState = (state: AppState) => state.portfolio.status;

export const getAllPorts = (state: AppState) => state.portfolio.portArray;
export const { openTab, closeTab } = portfolioSlice.actions;
export default portfolioSlice.reducer;
