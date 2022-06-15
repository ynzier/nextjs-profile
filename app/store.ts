import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import lookUpReducer from "features/lookup/lookupSlice";
import portfolioReducer from "features/portfolio/portfolioSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      lookup: lookUpReducer,
      portfolio: portfolioReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
