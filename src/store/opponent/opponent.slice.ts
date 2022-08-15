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
    setAttackValue: (state, action: PayloadAction<number>) => {
      state.attackValue = action.payload;
    },
  },
});

export const { setAttackValue } = opponentSlice.actions;

export default opponentSlice.reducer;
