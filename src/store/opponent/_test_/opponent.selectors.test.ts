import {
  opponentAttackValueSelector,
  opponentCurrentHealthSelector,
  opponentDifficultySelector,
  opponentMaxHealthSelector,
  opponentSelector,
} from 'store/opponent/opponent.selectors';

import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';

describe('Opponent Selectors', () => {
  describe('opponentSelector', () => {
    it('should return the opponent state', () => {
      expect(opponentSelector(MOCK_APP_STATE)).toEqual(MOCK_APP_STATE.opponent);
    });
  });

  describe('opponentMaxHealthSelector', () => {
    it('should return hero max health of 150', () => {
      expect(opponentMaxHealthSelector(MOCK_APP_STATE)).toEqual(
        MOCK_APP_STATE.opponent.maxHealth
      );
    });
  });

  describe('opponentCurrentHealthSelector', () => {
    it('should return hero current health of 150', () => {
      expect(opponentCurrentHealthSelector(MOCK_APP_STATE)).toEqual(
        MOCK_APP_STATE.opponent.currentHealth
      );
    });
  });

  describe('opponentAttackValueSelector', () => {
    it('should return attack value of 0', () => {
      expect(opponentAttackValueSelector(MOCK_APP_STATE)).toEqual(
        MOCK_APP_STATE.opponent.attackValue
      );
    });
  });

  describe('opponentDifficultySelector', () => {
    it('should return difficulty as easy', () => {
      expect(opponentDifficultySelector(MOCK_APP_STATE)).toEqual(
        MOCK_APP_STATE.opponent.difficulty
      );
    });
  });
});
