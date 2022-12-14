import {
  ActionStateType,
  AttackPower,
  AttackStrengthType,
  DialogStageType,
  DifficultyType,
  GameStatus,
} from 'models';
import { GameState } from 'store/game/game.slice';

import { questionOne } from 'components/QuestionDialog/mockQuestionData';
const { status, text, choices, answer } = questionOne;

export const MOCK_GAME_STATE: GameState = {
  round: 2,
  dialogStage: DialogStageType.ATTACKING,
  action: ActionStateType.BLOCK,
  attackStrength: AttackStrengthType.EASY,
  attackPower: AttackPower.LIGHT,
  difficulty: DifficultyType.EASY,
  gameStatus: GameStatus.PLAYING,
  userAnswer: '',
  question: {
    status,
    text,
    choices,
    answer,
  },
};
