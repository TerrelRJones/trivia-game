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
  dialogStage: DialogStageType.DIFFICULTY,
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
} = gameSlice.actions;

export default gameSlice.reducer;
