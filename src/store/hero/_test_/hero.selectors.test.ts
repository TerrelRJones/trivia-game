import {
  heroMaxHealthSelector,
  heroCurrentHealthSelector,
  heroAttackValueSelector,
  heroSelector,
} from '../hero.selectors';

import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';

describe('Hero Selectors', () => {
  describe('heroSelector', () => {
    it('should return the hero state', () => {
      expect(heroSelector(MOCK_APP_STATE)).toEqual(MOCK_APP_STATE.hero);
    });
  });

  describe('heroMaxHealthSelector', () => {
    it('should return hero max health of 150', () => {
      expect(heroMaxHealthSelector(MOCK_APP_STATE)).toEqual(
        MOCK_APP_STATE.hero.maxHealth
      );
    });
  });

  describe('heroCurrentHealthSelector', () => {
    it('should return hero current health of 100', () => {
      expect(heroCurrentHealthSelector(MOCK_APP_STATE)).toEqual(
        MOCK_APP_STATE.hero.currentHealth
      );
    });
  });

  describe('heroAttackValueSelector', () => {
    it('should return attack value of 10', () => {
      expect(heroAttackValueSelector(MOCK_APP_STATE)).toEqual(
        MOCK_APP_STATE.hero.attackValue
      );
    });
  });
});
