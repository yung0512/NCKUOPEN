import { RootState } from "@redux/reducers/combinedReducer"
import {
  actions as registerActions,
  RegisterStatus,
} from "@redux/slices/registrationSlice"
import { Dispatch, PromiseAction, ThunkAction } from "@redux/store"
import { nestedToRbCase } from "util/helper"

export const registerUser = async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const user = getState().registration.user

  // window.frontend.nextFetch("register", user)

  dispatch(registerActions.setCurrentRegisterStatus(RegisterStatus.REGISTERED))
}

export const createOrder = async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const orderGames = getState().registration.orderGames

  const res = await window.frontend.nextFetch.post(
    "create_order",
    nestedToRbCase(orderGames)
  )
  // dispatch reset redux state
}
