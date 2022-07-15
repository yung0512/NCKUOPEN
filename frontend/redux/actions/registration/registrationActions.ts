import { RootState } from "@redux/reducers/combinedReducer"
import {
  actions as registerActions,
  RegisterStatus,
} from "@redux/slices/registrationSlice"
import { Dispatch } from "@redux/store"
import { nestedToRbCase } from "util/helper"

export const registerUser = async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const user = getState().registration.user

  const res = await window.frontend.nextFetch.post("sign_up", user)
  const { auth_token } = res.data

  dispatch(
    registerActions.setUser({ isRegistered: true, authToken: auth_token })
  )
  dispatch(registerActions.setCurrentRegisterStatus(RegisterStatus.REGISTERED))
}

export const createOrder = async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const registration = getState().registration
  const { orderGames, user } = registration
  const res = await window.frontend.nextFetch.post("orders", {
    order_games: nestedToRbCase(orderGames),
    auth_token: user.authToken,
  })

  // dispatch reset redux state
}

export const testBackendConnection = async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const res = await window.frontend.nextFetch.get("/")
  // dispatch reset redux state
}
