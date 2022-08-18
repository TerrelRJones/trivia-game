import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DifficultyType } from 'models';

export interface OpponentState {
  maxHealth: number;
  currentHealth: number;
  attackValue: number;
  difficulty: DifficultyType;
}

export const initialState: OpponentState = {
  maxHealth: 150,
  currentHealth: 150,
  attackValue: 0,
  difficulty: DifficultyType.EASY,
};

export const opponentSlice = createSlice({
  name: 'opponent',
  initialState,
  reducers: {
    setOpponentAttackValue: (state, action: PayloadAction<number>) => {
      state.attackValue = action.payload;
    },

    setOpponentCurrentHealth: (state, action: PayloadAction<number>) => {
      state.currentHealth = action.payload;
    },

    setOpponentMaxHealth: (state, action: PayloadAction<number>) => {
      state.currentHealth = action.payload;
      state.maxHealth = action.payload;
    },
    setOpponentDifficulty: (state, action: PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload;
    },
    resetOpponentState: (state) => {
      state.maxHealth = 100;
      state.currentHealth = 100;
      state.attackValue = 0;
      state.difficulty = DifficultyType.EASY;
    },
  },
});

export const {
  setOpponentAttackValue,
  setOpponentCurrentHealth,
  setOpponentMaxHealth,
  setOpponentDifficulty,
  resetOpponentState,
} = opponentSlice.actions;

export default opponentSlice.reducer;
