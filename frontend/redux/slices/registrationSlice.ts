import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import moment, { Moment } from "moment"
import {
  OrderGameGroupOptionType,
  OrderGameTypeOptionType,
} from "types/registration"

export enum GameType {
  SINGLE = "single",
  DOUBLE = "double",
  GROUP = "group",
}

export enum RegisterStatus {
  NOT_REGISTER = "not_register", // user not register yet
  REGISTERED = "registered",
  CREATE_SINGLE = "single", // 單打建檔
  CREATE_DOUBLE = "double", // 雙打建檔
  CREATE_GROUP = "group", // 團體建檔
  GAMES_COUNT = "groups_count", // 統計組數
  COMPLETE_REGISTER = "complete_register", // 完成建檔
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
  birthDate: Date
}

export const defaultPlayer = {
  name: "",
  identificationCode: "",
  birthDate: moment(),
}

export type OrderGame = {
  groupType?: OrderGameGroupOptionType // 組別細項
  gameType?: OrderGameTypeOptionType // 組別：單打 雙打 團體
  affiliatedUnit?: string
  player: Player[]
}

export interface State {
  user: User
  orderGames: OrderGame[]
  editingOrderGame: OrderGame
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
  editingOrderGame: {
    affiliatedUnit: "",
    player: [],
  },
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
  setEditingOrderGame: (
    state: State,
    action: PayloadAction<Partial<OrderGame>>
  ) => void
  setEditingOrderGamePlayer: (
    state: State,
    action: PayloadAction<Player[]>
  ) => void
  resetEditingOrderGame: (state: State) => void
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
    setEditingOrderGame: (state, action: PayloadAction<Partial<OrderGame>>) => {
      return {
        ...state,
        editingOrderGame: {
          ...state.editingOrderGame,
          ...action.payload,
        },
      }
    },
    setEditingOrderGamePlayer: (state, action: PayloadAction<Player[]>) => {
      return {
        ...state,
        editingOrderGame: {
          ...state.editingOrderGame,
          player: action.payload,
        },
      }
    },
    resetEditingOrderGame: (state) => {
      return {
        ...state,
        editingOrderGame: {
          affiliatedUnit: "",
          player: [],
        },
      }
    },
  },
})

export const { actions, reducer } = registrationSlice
export default reducer
