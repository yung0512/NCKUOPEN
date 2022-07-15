import { RootState } from "@redux/reducers/combinedReducer"
import { actions as adminOrderActions } from "@redux/slices/admin/orderSlice"
import { Dispatch } from "@redux/store"
import nextFetch from "api"
import { nestedToJsCase, nestedToRbCase } from "util/helper"

export const fetchOrders =
  (page: number, per: number) =>
  async (dispatch: Dispatch, getState: () => RootState) => {
    const res = await nextFetch.get("admin/orders", {
      params: {
        page,
        per,
      },
    })

    const { orders } = res.data

    dispatch(adminOrderActions.setOrders(nestedToJsCase(orders)))
  }
