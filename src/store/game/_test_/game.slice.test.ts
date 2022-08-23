import gameReducer, {
  initialState,
  setRound,
  action,
  setDifficulty,
  attack,
  attackStrength,
  block,
  answered,
  answeredVerify,
} from 'store/game/game.slice';

import { MOCK_GAME_STATE } from 'store/mocks/game.mocks';
import { questionOne } from 'components/QuestionDialog/mockQuestionData';
import {
  ActionStateType,
  AttackStrengthType,
  DialogStageType,
  AttackPower,
  DifficultyType,
} from 'models';

const { status, text, choices, answer } = questionOne;

describe('Game Slice reducer', () => {
  it('should return the initial state when no previous state', () => {
    expect(gameReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('setRound should set the current round', () => {
    expect(gameReducer(MOCK_GAME_STATE, setRound(4))).toEqual({
      round: 4,
      dialogStage: DialogStageType.ATTACKING,
      action: ActionStateType.BLOCK,
      attackStrength: AttackStrengthType.EASY,
      attackPower: AttackPower.LIGHT,
      difficulty: DifficultyType.EASY,
      userAnswer: '',
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('ActionState.NONE should set action to "none"', () => {
    expect(gameReducer(MOCK_GAME_STATE, action(ActionStateType.NONE))).toEqual({
      round: 2,
      dialogStage: DialogStageType.ATTACKING,
      action: ActionStateType.NONE,
      attackStrength: AttackStrengthType.EASY,
      attackPower: AttackPower.LIGHT,
      difficulty: DifficultyType.EASY,
      userAnswer: '',
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('should set difficulty to SETH, and dialogStage to action if setDifficulty(DialogStageType.SETH) is called', () => {
    expect(
      gameReducer(MOCK_GAME_STATE, setDifficulty(DifficultyType.SETH))
    ).toEqual({
      round: 2,
      dialogStage: DialogStageType.ACTION,
      action: ActionStateType.BLOCK,
      attackStrength: AttackStrengthType.EASY,
      attackPower: AttackPower.LIGHT,
      difficulty: DifficultyType.SETH,
      userAnswer: '',
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('should set dialogStage to attacking, and action to attack', () => {
    expect(gameReducer(MOCK_GAME_STATE, attack())).toEqual({
      round: 2,
      dialogStage: DialogStageType.ATTACKING,
      action: ActionStateType.ATTACK,
      attackStrength: AttackStrengthType.EASY,
      attackPower: AttackPower.LIGHT,
      difficulty: DifficultyType.EASY,
      userAnswer: '',
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('should set attackStrength to hard, dialogStage to answering, and attackPower to heavy', () => {
    expect(
      gameReducer(MOCK_GAME_STATE, attackStrength(AttackStrengthType.HARD))
    ).toEqual({
      round: 2,
      dialogStage: DialogStageType.ANSWERING,
      action: ActionStateType.BLOCK,
      attackStrength: AttackStrengthType.HARD,
      attackPower: AttackPower.HEAVY,
      difficulty: DifficultyType.EASY,
      userAnswer: '',
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('should set attackStrength to medium, dialogStage to answering, and attackPower to medium', () => {
    expect(
      gameReducer(MOCK_GAME_STATE, attackStrength(AttackStrengthType.MEDIUM))
    ).toEqual({
      round: 2,
      dialogStage: DialogStageType.ANSWERING,
      action: ActionStateType.BLOCK,
      attackStrength: AttackStrengthType.MEDIUM,
      attackPower: AttackPower.MEDIUM,
      difficulty: DifficultyType.EASY,
      userAnswer: '',
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('should set attackStrength to easy, dialogStage to answering, and attackPower to light', () => {
    expect(
      gameReducer(MOCK_GAME_STATE, attackStrength(AttackStrengthType.EASY))
    ).toEqual({
      round: 2,
      dialogStage: DialogStageType.ANSWERING,
      action: ActionStateType.BLOCK,
      attackStrength: AttackStrengthType.EASY,
      attackPower: AttackPower.LIGHT,
      difficulty: DifficultyType.EASY,
      userAnswer: '',
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('should set dialogStage to answering, and action to block', () => {
    expect(gameReducer(MOCK_GAME_STATE, block())).toEqual({
      round: 2,
      dialogStage: DialogStageType.ANSWERING,
      action: ActionStateType.BLOCK,
      attackStrength: AttackStrengthType.EASY,
      attackPower: AttackPower.LIGHT,
      difficulty: DifficultyType.EASY,
      userAnswer: '',
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('should set dialogStage to answered if user selected an answer.', () => {
    expect(gameReducer(MOCK_GAME_STATE, answered())).toEqual({
      round: 2,
      dialogStage: DialogStageType.ANSWERED,
      action: ActionStateType.BLOCK,
      attackStrength: AttackStrengthType.EASY,
      attackPower: AttackPower.LIGHT,
      difficulty: DifficultyType.EASY,
      userAnswer: '',
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('should set dialogStage to action, and action to none if answer is incorrect.', () => {
    const mockStateRes = {
      round: 2,
      dialogStage: DialogStageType.ACTION,
      action: ActionStateType.NONE,
      attackStrength: AttackStrengthType.EASY,
      attackPower: AttackPower.LIGHT,
      difficulty: DifficultyType.EASY,
      userAnswer: '',
      question: {
        status,
        text,
        choices,
        answer,
      },
    };

    expect(gameReducer(MOCK_GAME_STATE, answeredVerify(false))).toEqual(
      mockStateRes
    );
  });
});
