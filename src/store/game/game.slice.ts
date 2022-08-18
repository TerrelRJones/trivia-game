import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ActionStateType,
  DialogStageType,
  AttackStrengthType,
  QuestionStatus,
  AttackPower,
  DifficultyType,
  GameStatus,
} from 'models';

export type QuestionData = {
  status: QuestionStatus;
  text: string;
  answer: string;
  choices: string[];
};

export interface GameState {
  round: number;
  dialogStage: DialogStageType;
  action: ActionStateType;
  attackStrength: AttackStrengthType;
  attackPower: AttackPower;
  difficulty: DifficultyType;
  gameStatus: GameStatus;
  userAnswer: string;
  question: QuestionData;
}

export const initialState: GameState = {
  round: 1,
  dialogStage: DialogStageType.DIFFICULTY,
  action: ActionStateType.NONE,
  attackStrength: AttackStrengthType.EASY,
  attackPower: AttackPower.LIGHT,
  difficulty: DifficultyType.EASY,
  gameStatus: GameStatus.PLAYING,
  userAnswer: '',
  question: {
    status: QuestionStatus.IDLE,
    text: '',
    answer: '',
    choices: [],
  },
};

export type GetQuestionPayloadAction = PayloadAction<{
  difficulty: AttackStrengthType;
}>;

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setRound: (state, action: PayloadAction<number>) => {
      state.round = action.payload;
    },

    setDifficulty: (state, action: PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload;
      state.dialogStage = DialogStageType.ACTION;
    },

    action: (state, action: PayloadAction<ActionStateType>) => {
      state.action = action.payload;
    },

    attack: (state) => {
      state.dialogStage = DialogStageType.ATTACKING;
      state.action = ActionStateType.ATTACK;
    },

    block: (state) => {
      state.dialogStage = DialogStageType.ANSWERING;
      state.action = ActionStateType.BLOCK;
    },

    attackPower: (state, action: PayloadAction<AttackPower>) => {
      state.attackPower = action.payload;
    },

    attackStrength: (state, action: PayloadAction<AttackStrengthType>) => {
      state.dialogStage = DialogStageType.ANSWERING;
      state.attackStrength = action.payload;

      if (action.payload === AttackStrengthType.EASY) {
        state.attackPower = AttackPower.LIGHT;
      } else if (action.payload === AttackStrengthType.MEDIUM) {
        state.attackPower = AttackPower.MEDIUM;
      } else {
        state.attackPower = AttackPower.HEAVY;
      }
    },

    getQuestionSuccess: (state, action: PayloadAction<QuestionData>) => {
      state.question.status = QuestionStatus.IDLE;
      state.question = action.payload;
    },

    getQuestion: (state, action: GetQuestionPayloadAction) => {
      state.question.status = QuestionStatus.LOADING;
      state.dialogStage = DialogStageType.ANSWERING;
      state.userAnswer = '';
    },

    answered: (state) => {
      state.dialogStage = DialogStageType.ANSWERED;
    },

    userAnswer: (state, action: PayloadAction<string>) => {
      state.userAnswer = action.payload;
    },

    answeredVerify: (state, action: PayloadAction<boolean>) => {
      if (state.action === ActionStateType.ATTACK && action.payload) {
        state.dialogStage = DialogStageType.ATTACKING;
      }
      if (state.action === ActionStateType.BLOCK && action.payload) {
        state.dialogStage = DialogStageType.ACTION;
        state.action = ActionStateType.NONE;
      }

      if (
        (state.action === ActionStateType.BLOCK ||
          state.action === ActionStateType.ATTACK) &&
        !action.payload
      ) {
        state.dialogStage = DialogStageType.ACTION;
        state.action = ActionStateType.NONE;
      }
    },
    setGameStatus: (state, action: PayloadAction<GameStatus>) => {
      state.gameStatus = action.payload;
    },

    resetGameState: (state) => {
      return initialState;
    },
  },
});

export const {
  setRound,
  action,
  setDifficulty,
  attack,
  attackPower,
  attackStrength,
  block,
  answered,
  userAnswer,
  answeredVerify,
  getQuestionSuccess,
  getQuestion,
  setGameStatus,
  resetGameState,
} = gameSlice.actions;

export default gameSlice.reducer;
