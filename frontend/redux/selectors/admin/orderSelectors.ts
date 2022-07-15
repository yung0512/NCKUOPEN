import { createSelector } from "reselect"
import { RootState } from "@redux/reducers/combinedReducer"

export const adminOrderSelector = (store: RootState) => {
  return store.admin.order
}
