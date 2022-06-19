import { RootState } from "../../reducers/combinedReducer"
import {
  actions as registerActions,
  RegisterStatus,
} from "../../slices/registrationSlice"
import { Dispatch, PromiseAction, ThunkAction } from "../../store"

export const registerUser = async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  const user = getState().registration.user

  // window.frontend.nextFetch("register", user)

  dispatch(registerActions.setCurrentRegisterStatus(RegisterStatus.REGISTERED))
}
