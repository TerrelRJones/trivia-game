export enum DialogStageType {
  DIFFICULTY = 'difficulty',
  ACTION = 'action',
  ATTACKING = 'attacking',
  ANSWERING = 'answering',
  ANSWERED = 'answered',
}

export enum ActionStateType {
  NONE = 'none',
  BLOCK = 'block',
  ATTACK = 'attack',
}

export enum AttackStrengthType {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum QuestionStatus {
  IDLE = 'idle',
  LOADING = 'loading',
}

export enum AttackPower {
  LIGHT = 'light',
  MEDIUM = 'medium',
  HEAVY = 'heavy',
}
