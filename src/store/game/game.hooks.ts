import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { gameRoundSelector } from 'store/game/game.selectors';
import { setRound, attack, block, attackStrength } from 'store/game/game.slice';
import { AttackStrengthType } from 'models';

export type UseGameRoundResult = [number, { incrementRound: () => void }];

export const useGameRound = (): UseGameRoundResult => {
  const currentRound = useAppSelector(gameRoundSelector);
  const dispatch = useAppDispatch();

  const incrementRound = useCallback(() => {
    dispatch(setRound(currentRound + 1));
  }, [currentRound, dispatch]);

  return [currentRound, { incrementRound }];
};

export const useAttack = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(attack());
};

export const useBlock = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(block());
};

export const useAttackStrength = (strength: AttackStrengthType) => {
  const dispatch = useAppDispatch();
  return () => dispatch(attackStrength(strength));
};
