import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HeroState {
  maxHealth: number;
  currentHealth: number;
  attackValue: number;
}

export const initialState: HeroState = {
  maxHealth: 100,
  currentHealth: 100,
  attackValue: 0,
};

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    setHeroAttackValue: (state, action: PayloadAction<number>) => {
      state.attackValue = action.payload;
    },

    setHeroCurrentHealth: (state, action: PayloadAction<number>) => {
      state.currentHealth = action.payload;
    },
  },
});

export const { setHeroAttackValue, setHeroCurrentHealth } = heroSlice.actions;

export default heroSlice.reducer;
