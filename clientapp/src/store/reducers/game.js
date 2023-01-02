import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  State: null,
  CurrentEnemy: null,
}

const gameSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Game State
    updateGameState(state, { payload }) {
      state.State = payload
    },
    // Enemy
    updateEnemy(state, { payload }) {
      state.CurrentEnemy = payload
    },
    clearEnemy(state) {
      state.CurrentEnemy = null
    },
  },
  extraReducers: {}
})

export const {
  clearEnemy,
  updateEnemy,
  updateGameState,
} = gameSlice.actions
export const gameReducer = gameSlice.reducer