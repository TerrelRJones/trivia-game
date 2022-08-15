import { ActionStateType, AttackStrengthType, DialogStageType } from 'models';
import { GameState } from 'store/game/game.slice';

export const MOCK_GAME_STATE: GameState = {
  round: 2,
  dialogStage: DialogStageType.ATTACKING,
  action: ActionStateType.BLOCK,
  attackStrength: AttackStrengthType.EASY,
};
