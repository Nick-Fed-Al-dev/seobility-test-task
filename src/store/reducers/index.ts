import { combineReducers } from "redux";
import { formReducer } from "./form.reducer";


export const rootReducer = combineReducers({
  form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>