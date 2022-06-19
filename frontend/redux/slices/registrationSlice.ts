import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Moment } from "moment"

export enum GameType {
  SINGLE = "single",
  DOUBLE = "double",
  GROUP = "group",
}

// @TODO: fixed gametypedetail first, need to fetch gametypedetail from server later
export enum GameTypeDetail {
  NORMAL_MEN_SINGLE = "normal_men_single",
  NORMAL_MEN_DOUBLE = "normal_men_double",
  NORMAL_WOMEN_SINGLE = "normal_women_single",
  NORMAL_WOMEN_DOUBLE = "normal_women_double",
  NORMAL_MIX_DOUBLE = "normal_mix_double",
}

export enum RegisterStatus {
  NOT_REGISTER = "not_register", // user not register yet
  REGISTERED = "registered",
  CREATE_SINGLE = "create_single", // 單打建檔
  CREATE_DOUBLE = "create_double", // 雙打建檔
  CREATE_GROUP = "create_group", // 團體建檔
}

export type User = {
  name: string
  email: string
  mobile: string
  isRegistered: boolean
  affiliatedUnit?: string
}

export type Player = {
  name: string
  identificationCode: string
  birthDate: Moment
}

export type OrderGame = {
  gameTypeDetail: GameTypeDetail // 組別細項
  gameType: GameType // 組別：單打 雙打 團體
  affiliatedUnit: string
  player: Player[]
}

export interface State {
  user: User
  orderGames: OrderGame[]
  currentRegisterStatus: RegisterStatus
}

const initialState: State = {
  user: {
    name: "",
    email: "",
    mobile: "",
    affiliatedUnit: "",
    isRegistered: false,
  },
  orderGames: [],
  currentRegisterStatus: RegisterStatus.NOT_REGISTER,
}

export type CaseReducer = {
  setUser: (state: State, action: PayloadAction<Partial<User>>) => void
  setOrderGames: (
    state: State,
    action: PayloadAction<Partial<OrderGame>>
  ) => void
  setCurrentRegisterStatus: (
    state: State,
    action: PayloadAction<RegisterStatus>
  ) => void
}

const registrationSlice = createSlice<State, CaseReducer>({
  name: "registration",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<User>>) => {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      }
    },
    setOrderGames: (state, action: PayloadAction<Partial<OrderGame>>) => {
      return {
        ...state,
        orderGames: [...state.orderGames, action.payload],
      }
    },
    setCurrentRegisterStatus: (
      state,
      action: PayloadAction<RegisterStatus>
    ) => {
      return {
        ...state,
        currentRegisterStatus: action.payload,
      }
    },
  },
})

export const { actions, reducer } = registrationSlice
export default reducer
