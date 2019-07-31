import { createReducer, on } from "@ngrx/store";
import { selectClient, reset } from "../actions/client.actions";

export const initialState = {};

export const clientReducer = createReducer(
  initialState,
  on(selectClient, (state, { client }) => {
    return client;
  }),
  on(reset, state => undefined)
);
