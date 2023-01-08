import { createSlice } from "@reduxjs/toolkit"
import { StoreStates } from "../../pages/Play/Helpers/GameStates"

const initialState = {
  State: null,
  IsShopAvailable: StoreStates.CLOSED,
  IsClinicAvailable: StoreStates.CLOSED,
  PlayerStats: null,
  EnemyRoster: [],
  CurrentEnemy: null,
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // Game State
    updateGameState(state, { payload }) {
      state.State = payload
    },
    // Shop State
    updateShopState(state, { payload }) {
      state.IsShopAvailable = payload
    },
    // Clinic State
    updateClinicState(state, { payload }) {
      state.IsClinicAvailable = payload
    },
    // Player
    updatePlayerStats(state, { payload }) {
      state.PlayerStats = payload
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
  updateClinicState,
  updateGameState,
  updatePlayerStats,
  updateShopState,
} = gameSlice.actions
export const gameReducer = gameSlice.reducer