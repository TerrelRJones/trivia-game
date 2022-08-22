import heroReducer, {
  initialState,
  setHeroAttackValue,
} from 'store/hero/hero.slice';

import { MOCK_HERO_STATE } from 'store/mocks/hero.mocks';

describe('Hero Slice reducer', () => {
  it('should return the initial state when no previous state', () => {
    expect(heroReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('setAttackValue should set the heroAttackValue to 15', () => {
    expect(heroReducer(MOCK_HERO_STATE, setHeroAttackValue(15))).toEqual({
      maxHealth: 100,
      currentHealth: 100,
      attackValue: 15,
    });
  });
});
