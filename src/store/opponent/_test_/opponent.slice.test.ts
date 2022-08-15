import opponentReducer, {
  initialState,
  setAttackValue,
} from 'store/opponent/opponent.slice';

import { MOCK_OPPONENT_STATE } from 'store/mocks/opponent.mocks';
import { DifficultyType } from 'models';

describe('Opponent Slice reducer', () => {
  it('should return the initial state when no previous state', () => {
    expect(opponentReducer(undefined, { type: undefined })).toEqual(
      initialState
    );
  });

  it('setAttackValue should set the opponentAttackValue to 5', () => {
    expect(opponentReducer(MOCK_OPPONENT_STATE, setAttackValue(5))).toEqual({
      maxHealth: 150,
      currentHealth: 150,
      attackValue: 5,
      difficulty: DifficultyType.EASY,
    });
  });
});
