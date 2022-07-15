import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Moment } from "moment"

export type Order = {
  id: number
  orderGames: OrderGame[]
  userName: string
  createdAt: string
}

export type OrderGame = {
  groupType: string
  gameType: string
  players: Player[]
}

export type Player = {
  name: string
  email: string
  mobile: string
  birthday: Moment
}

export type State = {
  orders: Order[]
  page: number
  per: number
}

const initialState: State = {
  orders: [],
  page: 1,
  per: 10,
}

export type CaseReducer = {
  setOrders: (state: State, action: PayloadAction<Order[]>) => void
}

const orderSlice = createSlice<State, CaseReducer>({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state: State, action: PayloadAction<Order[]>) => {
      return { ...state, orders: action.payload }
    },
  },
})

export const { actions, reducer } = orderSlice

export default reducer
