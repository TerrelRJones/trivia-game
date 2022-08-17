import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DifficultyType } from 'models';
import { number } from 'prop-types';

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
    setAttackValue: (state, action: PayloadAction<number>) => {
      state.attackValue = action.payload;
    },

    setOpponentCurrentHealth: (state, action: PayloadAction<number>) => {
      state.currentHealth = action.payload;
    },
  },
});

export const { setAttackValue, setOpponentCurrentHealth } =
  opponentSlice.actions;

export default opponentSlice.reducer;
