import { renderHookWithProviders } from 'testHelpers';
import { useGameRound, useGameStatus } from 'store/game/game.hooks';
import { act } from '@testing-library/react';
import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';
import { GameStatus } from 'models';

describe('Game State Hooks', () => {
  describe('useGameRound', () => {
    it('should return the current round', () => {
      const { result } = renderHookWithProviders(() => useGameRound(), {
        preloadedState: MOCK_APP_STATE,
      });
      const [currentRound] = result.current;

      expect(currentRound).toEqual(MOCK_APP_STATE.game.round);
    });

    it('incrementRound should increase the round by 1', () => {
      const { result } = renderHookWithProviders(() => useGameRound());
      let [currentRound, { incrementRound }] = result.current;

      expect(currentRound).toEqual(1);

      act(() => {
        incrementRound();
      });

      [currentRound] = result.current;
      expect(currentRound).toEqual(2);
    });

    it('shoud return gameStatus of playing', () => {
      const { result } = renderHookWithProviders(() => useGameStatus());
      const getGameStatus = result.current;

      expect(getGameStatus()).toEqual(GameStatus.PLAYING);
    });
  });
});
