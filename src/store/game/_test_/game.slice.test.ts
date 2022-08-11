import gameReducer, {
  initialState,
  setRound,
  action,
  setDifficulty,
  attack,
  attackStrength,
  block,
  answered,
} from 'store/game/game.slice';

import { MOCK_GAME_STATE } from 'store/mocks/game.mocks';
import { questionOne } from 'components/QuestionDialog/mockQuestionData';
import {
  ActionStateType,
  AttackStrengthType,
  DialogStageType,
  AttackPower,
} from 'models';

const { status, text, choices, answer } = questionOne;

describe('Game Slice reducer', () => {
  it('should return the initial state when no previous state', () => {
    expect(gameReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('setRound should set the current round', () => {
    expect(gameReducer(MOCK_GAME_STATE, setRound(4))).toEqual({
      round: 4,
      dialogStage: 'attacking',
      action: 'block',
      attackStrength: 'easy',
      attackPower: AttackPower.LIGHT,
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
      dialogStage: 'attacking',
      action: 'none',
      attackStrength: 'easy',
      attackPower: AttackPower.LIGHT,
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('should set dialogStage to answering if setDifficulty(DialogStageTypeANSWERING) is called', () => {
    expect(
      gameReducer(MOCK_GAME_STATE, setDifficulty(DialogStageType.ANSWERING))
    ).toEqual({
      round: 2,
      dialogStage: 'answering',
      action: 'block',
      attackStrength: 'easy',
      attackPower: AttackPower.LIGHT,
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
      dialogStage: 'attacking',
      action: 'attack',
      attackStrength: 'easy',
      attackPower: AttackPower.LIGHT,
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('should set attackStrength to hard, and dialog to answering', () => {
    expect(
      gameReducer(MOCK_GAME_STATE, attackStrength(AttackStrengthType.HARD))
    ).toEqual({
      round: 2,
      dialogStage: 'answering',
      action: 'block',
      attackStrength: 'hard',
      attackPower: AttackPower.LIGHT,
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
      dialogStage: 'answering',
      action: 'block',
      attackStrength: 'easy',
      attackPower: AttackPower.LIGHT,
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });

  it('should set dialogStage to answered if answered function called', () => {
    expect(gameReducer(MOCK_GAME_STATE, answered('test'))).toEqual({
      round: 2,
      dialogStage: 'answered',
      action: 'block',
      attackStrength: 'easy',
      attackPower: AttackPower.LIGHT,
      question: {
        status,
        text,
        choices,
        answer,
      },
    });
  });
});
