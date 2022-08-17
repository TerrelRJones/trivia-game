import { ActionStateType, AttackPower } from 'models';
import { useCallback } from 'react';
import {
  gameActionSelector,
  gameAttackPowerSelector,
} from 'store/game/game.selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { opponentCurrentHealthSelector } from 'store/opponent/opponent.selectors';
import { setOpponentCurrentHealth } from 'store/opponent/opponent.slice';
import { heroAttackValueSelector } from './hero.selectors';
import { setHeroAttackValue } from './hero.slice';

enum AttackPowerValue {
  LIGHT = 5,
  MEDIUM = 10,
  HEAVY = 15,
}

export const useHeroAttackValue = () => {
  const currentHeroAttackValue = useAppSelector(heroAttackValueSelector);
  const gameAction = useAppSelector(gameActionSelector);
  const attackPower = useAppSelector(gameAttackPowerSelector);
  const opponentHealth = useAppSelector(opponentCurrentHealthSelector);
  const dispatch = useAppDispatch();

  const getAttackPowerVal = useCallback(
    (userAnswer: boolean) => {
      if (userAnswer) {
        if (
          attackPower === AttackPower.LIGHT &&
          gameAction === ActionStateType.ATTACK
        )
          return AttackPowerValue.LIGHT;
        if (
          attackPower === AttackPower.MEDIUM &&
          gameAction === ActionStateType.ATTACK
        )
          return AttackPowerValue.MEDIUM;
        if (
          attackPower === AttackPower.HEAVY &&
          gameAction === ActionStateType.ATTACK
        )
          return AttackPowerValue.HEAVY;
      }

      if (!userAnswer) {
        dispatch(
          setOpponentCurrentHealth(opponentHealth - currentHeroAttackValue)
        );
      }

      return 0;
    },
    [attackPower, gameAction, dispatch, opponentHealth, currentHeroAttackValue]
  );

  const incrementHeroAttackValue = useCallback(
    (userAnswer: boolean) => {
      dispatch(
        setHeroAttackValue(
          userAnswer
            ? currentHeroAttackValue + getAttackPowerVal(userAnswer)
            : getAttackPowerVal(userAnswer)
        )
      );
    },
    [currentHeroAttackValue, dispatch, getAttackPowerVal]
  );

  return incrementHeroAttackValue;
};
