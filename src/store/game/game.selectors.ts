import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';

export const gameSelector = (state: RootState) => state.game;

// createSelector is maybe overkill here, but providing as an example
export const gameRoundSelector = createSelector(
  gameSelector,
  (gameState): number => gameState.round
);

export const gameDialogSelector = createSelector(
  gameSelector,
  (gameState): string => gameState.dialogStage
);

export const gameAttackStrengthSelector = createSelector(
  gameSelector,
  (gameState): string => gameState.attackStrength
);
