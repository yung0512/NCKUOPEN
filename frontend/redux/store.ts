import { Action, configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createWrapper } from "next-redux-wrapper"

import rootReducer, { RootState } from "@redux/reducers/combinedReducer"

export type GetState = () => RootState

export type ThunkAction<T = any> = (dispatch: Dispatch, getState: GetState) => T

export type PromiseAction<T = any> = ThunkAction<Promise<T>>

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any

// creating store
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

// assigning store to next wrapper
const makeStore = () => store

export const wrapper = createWrapper(makeStore)
