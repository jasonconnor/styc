import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  State: null
}

const gameSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateGameState(state, { payload }) {
      state.State = payload
    }
  },
  extraReducers: {}
})

export const {
  updateGameState,
} = gameSlice.actions
export const gameReducer = gameSlice.reducer