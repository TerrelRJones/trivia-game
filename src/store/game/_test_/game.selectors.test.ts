import {
  gameSelector,
  gameRoundSelector,
  gameDialogSelector,
  gameAttackStrengthSelector,
} from 'store/game/game.selectors';

import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';

describe('Game Selectors', () => {
  describe('gameSelector', () => {
    it('should return the game state', () => {
      expect(gameSelector(MOCK_APP_STATE)).toEqual(MOCK_APP_STATE.game);
    });
  });

  describe('gameRoundSelector', () => {
    it('should return the current round', () => {
      expect(gameRoundSelector(MOCK_APP_STATE)).toEqual(
        MOCK_APP_STATE.game.round
      );
    });
  });

  describe('gameDialogSelector', () => {
    it('should return the current dialogState', () => {
      expect(gameDialogSelector(MOCK_APP_STATE)).toEqual(
        MOCK_APP_STATE.game.dialogStage
      );
    });
  });

  describe('gameAttackStrengthSelector', () => {
    it('should return the current attackStrength', () => {
      expect(gameAttackStrengthSelector(MOCK_APP_STATE)).toEqual(
        MOCK_APP_STATE.game.attackStrength
      );
    });
  });
});
