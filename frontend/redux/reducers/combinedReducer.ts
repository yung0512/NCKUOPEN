import { combineReducers, Reducer } from "@reduxjs/toolkit"
import registrationReducer, {
  State as RegistrationState,
} from "../slices/registrationSlice"

export type RootState = {
  registration: RegistrationState
}

const rootReducer: Reducer<RootState> = combineReducers({
  registration: registrationReducer,
})

export default rootReducer
