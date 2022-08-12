import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  ActionStateType,
  DialogStageType,
  AttackStrengthType,
  QuestionStatus,
  AttackPower,
} from 'models';

export type questionData = {
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
  question: questionData;
  attackPower: AttackPower;
}

export const initialState: GameState = {
  round: 1,
  dialogStage: DialogStageType.DIFFICULTY,
  action: ActionStateType.NONE,
  attackStrength: AttackStrengthType.EASY,
  attackPower: AttackPower.LIGHT,
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

    setDifficulty: (state, action: PayloadAction<DialogStageType>) => {
      state.dialogStage = action.payload;
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

      // redundant? vvv choose one way to handle. vvv attackPower or attackStrength? <---- 8.11.22
      if (action.payload === AttackStrengthType.EASY) {
        state.attackPower = AttackPower.LIGHT;
      } else if (action.payload === AttackStrengthType.MEDIUM) {
        state.attackPower = AttackPower.MEDIUM;
      } else {
        state.attackPower = AttackPower.HEAVY;
      }
    },

    getQuestionSuccess: (state, action: PayloadAction<questionData>) => {
      state.question = action.payload;
    },

    getQuestion: (state, action: GetQuestionPayloadAction) => {},

    answered: (state) => {
      state.dialogStage = DialogStageType.ANSWERED;
    },

    answeredVerify: (state, action: PayloadAction<boolean>) => {
      if (action.payload && state.action === ActionStateType.ATTACK) {
        state.dialogStage = DialogStageType.ATTACKING;
      }
      if (state.action === ActionStateType.BLOCK && action.payload) {
        state.dialogStage = DialogStageType.ACTION;
        state.action = ActionStateType.NONE;
      }

      if (
        (!action.payload && state.action === ActionStateType.BLOCK) ||
        state.action === ActionStateType.ATTACK
      ) {
        state.dialogStage = DialogStageType.ACTION;
        state.action = ActionStateType.NONE;
      }
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
  answeredVerify,
  getQuestionSuccess,
  getQuestion,
} = gameSlice.actions;

export default gameSlice.reducer;
