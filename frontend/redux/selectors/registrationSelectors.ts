import _ from "lodash"
import { createSelector } from "reselect"
import { RootState } from "../reducers/combinedReducer"

export const registrationSelector = (store: RootState) => {
  return store.registration
}

export const userSelector = createSelector(
  registrationSelector,
  ({ user }) => user
)

// export const isValidSelector = (store: RootState) => {
//   const user = store.registration.user

//   for (const [key, value] of Object.entries(user)) {
//     if (_.isEmpty(value)) {
//       return false
//     }
//   }
// }
