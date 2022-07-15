import { Action, configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"

import rootReducer, { RootState } from "@redux/reducers/combinedReducer"
import { useDispatch } from "react-redux"

export type GetState = () => RootState

export type ThunkAction<T = any> = (dispatch: Dispatch, getState: GetState) => T

export type PromiseAction<T = any> = ThunkAction<Promise<T>>

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any

export const useAppDispatch: () => Dispatch = useDispatch

// creating store
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

// assigning store to next wrapper
const makeStore = () => store

export const wrapper = createWrapper(makeStore)
