import { DifficultyType } from 'models';
import { OpponentState } from 'store/opponent/opponent.slice';

export const MOCK_OPPONENT_STATE: OpponentState = {
  maxHealth: 150,
  currentHealth: 150,
  attackValue: 0,
  difficulty: DifficultyType.EASY,
};
