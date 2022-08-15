import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';

export const heroSelector = (state: RootState) => state.hero;

export const heroMaxHealthSelector = createSelector(
  heroSelector,
  (heroState): number => heroState.maxHealth
);

export const heroCurrentHealthSelector = createSelector(
  heroSelector,
  (heroState): number => heroState.currentHealth
);

export const heroAttackValueSelector = createSelector(
  heroSelector,
  (heroState): number => heroState.attackValue
);
