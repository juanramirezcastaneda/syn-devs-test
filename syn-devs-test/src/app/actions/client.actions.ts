import { createAction, props } from "@ngrx/store";
import { Client } from "../client.model";

export const selectClient = createAction(
  "[Clients Component] Select",
  props<{ client: Client }>()
);
export const reset = createAction("[Clients Component] Reset");
