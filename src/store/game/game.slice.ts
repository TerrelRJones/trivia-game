import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionStateType, DialogStageType, AttackStrengthType } from 'models';

export interface GameState {
  round: number;
  dialogStage: DialogStageType;
  action: ActionStateType;
  attackStrength: AttackStrengthType;
}

export const initialState: GameState = {
  round: 1,
  dialogStage: DialogStageType.ACTION,
  action: ActionStateType.NONE,
  attackStrength: AttackStrengthType.EASY,
};

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

    attackStrength: (state, action: PayloadAction<AttackStrengthType>) => {
      state.dialogStage = DialogStageType.ANSWERING;
      state.attackStrength = action.payload;
    },

    block: (state) => {
      state.dialogStage = DialogStageType.ANSWERING;
      state.action = ActionStateType.BLOCK;
    },

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
  attackStrength,
  block,
  answered,
  answeredVerify,
} = gameSlice.actions;

export default gameSlice.reducer;
