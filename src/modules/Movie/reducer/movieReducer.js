/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { movieActions } from "../constants";

const initialState = {
  status: "idle",
  data: {},
};

const movieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(movieActions.start, (state) => {
      state.status = "pending";
    })
    .addCase(movieActions.success, (state, action) => {
      state.data = action.payload;
      state.status = "idle";
    })
    .addCase(movieActions.error, (state, action) => {
      state.data = action;
      state.status = "error";
    });
});

export default movieReducer;
