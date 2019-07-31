import { createReducer, on } from "@ngrx/store";
import { selectClient, reset, endClientsLoad } from "../actions/client.actions";

export const initialState = {};

export const clientReducer = createReducer(
  initialState,
  on(selectClient, (state, { client }) => {
    let stateToReturn = { ...state, client };
    return stateToReturn;
  }),
  on(reset, state => {
    return { ...state, client: {} };
  }),
  on(endClientsLoad, (state, { clients }) => {
    let stateToReturn = { ...state, clients };
    return stateToReturn;
  })
);
