import { combineReducers, Reducer } from "@reduxjs/toolkit"
import registrationReducer, {
  State as RegistrationState,
} from "@redux/slices/registrationSlice"
import adminOrderReducer, {
  State as adminOrderState,
} from "@redux/slices/admin/orderSlice"

export type AdminState = {
  order: adminOrderState
}

const adminReducer: Reducer<AdminState> = combineReducers<AdminState>({
  order: adminOrderReducer,
})

export type RootState = {
  registration: RegistrationState
  admin: AdminState
}

const rootReducer: Reducer<RootState> = combineReducers({
  registration: registrationReducer,
  admin: adminReducer,
})

export default rootReducer
