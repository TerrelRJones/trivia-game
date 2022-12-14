import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ScreenReaderOnly } from 'styles/styledElements';

import Action from 'components/Action';
import Avatar from 'components/Avatar';
import HealthBar from 'components/HealthBar';
import Round from 'components/Round';
import Dialog from 'components/Dialog';
import ActionDialog from 'components/ActionDialog';
import QuestionDialog from 'components/QuestionDialog';
import AttackDialog from 'components/AttackDialog';
import FoxKnight from 'components/FoxKnight';
import GameAvatar from 'components/GameAvatar';

import {
  gameDialogSelector,
  gameRoundSelector,
  gameQuestionSelector,
  gameActionSelector,
  gameAttackPowerSelector,
  gameQuestionStatusSelector,
} from 'store/game/game.selectors';

import { useAppSelector } from 'store/hooks';
import { useOpponentDetails } from 'store/opponent/opponent.hooks';
import { useGameStatus } from 'store/game/game.hooks';
import { useHeroAttack } from 'store/hero/hero.hooks';

import {
  ActionStateType,
  AttackPower,
  DialogStageType,
  GameStatus,
  QuestionStatus,
} from 'models';

import {
  heroAttackValueSelector,
  heroCurrentHealthSelector,
  heroMaxHealthSelector,
} from 'store/hero/hero.selectors';

import {
  opponentAttackValueSelector,
  opponentCurrentHealthSelector,
  opponentMaxHealthSelector,
} from 'store/opponent/opponent.selectors';

import { InitialTransition } from 'components/InitialTransition/InitialTransition';
import { motion } from 'framer-motion';

interface GameTypes {
  testID?: string;
}

const StyledGameContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const TopContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 69px;
`;

const StyledPlayerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const PlayerContainer = styled(motion.div)`
  width: 100%;
`;

const ActionContainer = styled(motion.div)`
  position: relative;
  display: flex;
  gap: 192px;
`;

const FinishThemButton = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 40px;
  width: 60%;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme: { colors } }) => colors.sethRed};
  color: ${({ theme: { colors } }) => colors.white};
  font-family: 'Lato';
  font-weight: 900;
  animation: blinker 0.5s linear infinite;
  @keyframes blinker {
    25% {
      opacity: 0.5;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  max-width: 200px;
  margin: 20px auto;

  div {
    background: ${({ theme: { colors } }) => colors.defaultBtnGradient};
    border: 2px solid #038dc1;
    padding: 5px 10px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    font-family: 'Lato';
    font-size: 18px;
    font-weight: 900;
    text-align: center;
    box-shadow: 0 0 0 0.25em #00c6f3;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Game: React.FC<GameTypes> = ({ testID }) => {
  const [playAnimation, setPlayAnimation] = useState(false);

  const gameDialog = useAppSelector(gameDialogSelector);
  const gameRound = useAppSelector(gameRoundSelector);
  const question = useAppSelector(gameQuestionSelector);
  const action = useAppSelector(gameActionSelector);
  const attackPower = useAppSelector(gameAttackPowerSelector);
  const questionStatus = useAppSelector(gameQuestionStatusSelector);
  // hero
  const heroMaxHealth = useAppSelector(heroMaxHealthSelector);
  const heroCurrentHealth = useAppSelector(heroCurrentHealthSelector);
  const heroAttackValue = useAppSelector(heroAttackValueSelector);
  // opponent
  const opponentMaxHealth = useAppSelector(opponentMaxHealthSelector);
  const opponentCurrentHealth = useAppSelector(opponentCurrentHealthSelector);
  const opponentAttackValue = useAppSelector(opponentAttackValueSelector);

  const [{ avatar, displayName }, setOpponent] = useOpponentDetails();
  const gameStatus = useGameStatus();
  const [finishThem] = useHeroAttack();

  const { text, answer, choices } = question;
  const navigate = useNavigate();

  const getActionStateType = (): ActionStateType => {
    if (action === ActionStateType.NONE) return ActionStateType.NONE;
    if (action === ActionStateType.BLOCK) return ActionStateType.BLOCK;
    return ActionStateType.ATTACK;
  };

  const getQuestionDialogMessage = () => {
    if (action === ActionStateType.BLOCK) return 'Blocking';
    if (attackPower === AttackPower.LIGHT) return 'Light attack...';
    if (attackPower === AttackPower.MEDIUM) return 'Medium attack...';
    return 'Heavy attack...';
  };

  useEffect(() => {
    if (gameDialog === DialogStageType.DIFFICULTY) {
      return navigate('/');
    }
  }, [gameDialog, navigate]);

  useEffect(() => {
    setOpponent();
    // only want setOpponent to run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (gameStatus === GameStatus.DEFEAT) {
      return navigate('/defeat');
    }
    if (gameStatus === GameStatus.VICTORY) {
      return navigate('/victory');
    }
  }, [gameStatus, navigate]);

  return (
    <>
      <InitialTransition />
      <StyledGameContainer>
        <ScreenReaderOnly aria-label="polite">{`You are at ${heroCurrentHealth} of ${heroMaxHealth} health. Your opponent is at ${opponentCurrentHealth} of ${opponentMaxHealth}, starting Round ${gameRound}`}</ScreenReaderOnly>
        <TopContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <HealthBar
            testID="health-bar-1"
            currentHealth={heroCurrentHealth}
            maxHealth={heroMaxHealth}
            animation={playAnimation}
          />
          <motion.div
            initial={{ translateY: '-100px' }}
            animate={{ translateY: 0 }}
            transition={{ delay: 3, duration: 0.5 }}
          >
            <Round testID="round" round={gameRound} />
          </motion.div>
          <HealthBar
            testID="health-bar-2"
            isReversed
            currentHealth={opponentCurrentHealth}
            maxHealth={opponentMaxHealth}
            animation={playAnimation}
          />
        </TopContainer>
        <StyledPlayerContainer>
          <PlayerContainer
            initial={{ translateX: '-150px' }}
            animate={{ translateX: 0 }}
            transition={{ delay: 2, duration: 0.25 }}
          >
            <Avatar
              testID="player-1"
              avatar={<FoxKnight animation={playAnimation} />}
              name="Fox Knight"
            />
          </PlayerContainer>
          <ActionContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <Action
              testID="hero-action"
              actionState={getActionStateType()}
              attackValue={heroAttackValue}
            />
            {heroAttackValue >= opponentCurrentHealth && (
              <FinishThemButton onClick={() => finishThem()}>
                FINISH THEM
              </FinishThemButton>
            )}

            <Action
              isReversed
              actionState={ActionStateType.ATTACK}
              attackValue={opponentAttackValue}
            />
          </ActionContainer>
          <PlayerContainer
            initial={{ translateX: '150px' }}
            animate={{ translateX: 0 }}
            transition={{ delay: 2, duration: 0.25 }}
          >
            <Avatar
              testID="player-2"
              avatar={
                <GameAvatar
                  avatar={avatar}
                  animation={playAnimation}
                  damage={opponentCurrentHealth < 50}
                />
              }
              name={displayName}
            />
          </PlayerContainer>
        </StyledPlayerContainer>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          {gameDialog === DialogStageType.ACTION && (
            <Dialog testID="dialog" message="Choose an action">
              <ActionDialog />
            </Dialog>
          )}

          {gameDialog === DialogStageType.ATTACKING && (
            <Dialog testID="dialog" message="Choose an attack">
              <AttackDialog />
            </Dialog>
          )}

          {(gameDialog === DialogStageType.ANSWERING ||
            gameDialog === DialogStageType.ANSWERED) && (
            <Dialog testID="dialog" message={getQuestionDialogMessage()}>
              {questionStatus === QuestionStatus.LOADING ? (
                <h1>HANG TIGHT...</h1>
              ) : (
                <QuestionDialog
                  question={text}
                  options={choices}
                  answer={answer}
                />
              )}
            </Dialog>
          )}
          <ButtonContainer>
            <div onClick={() => setPlayAnimation((prevVal) => !prevVal)}>
              {playAnimation ? 'PLAY ANIMATION' : 'STOP ANIMATION'}
            </div>
          </ButtonContainer>
        </motion.div>
      </StyledGameContainer>
    </>
  );
};

export default Game;
