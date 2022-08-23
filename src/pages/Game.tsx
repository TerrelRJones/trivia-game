import styled from 'styled-components';
import {
  gameDialogSelector,
  gameRoundSelector,
  gameQuestionSelector,
  gameActionSelector,
  gameAttackPowerSelector,
  gameQuestionStatusSelector,
} from 'store/game/game.selectors';

import { useAppSelector } from 'store/hooks';

import Action from 'components/Action';
import Avatar from 'components/Avatar';
import HealthBar from 'components/HealthBar';
import Round from 'components/Round';
import Dialog from 'components/Dialog';
import QuestionDialog from 'components/QuestionDialog';
import AttackDialog from 'components/AttackDialog';

import FoxKnight from 'components/FoxKnight';
import WizardPig from 'components/WizardPig';
import BarbarianBunny from 'components/BarbarianBunny';
import DragonSeth from 'components/DragonSeth';

import {
  ActionStateType,
  AttackPower,
  DialogStageType,
  GameStatus,
  QuestionStatus,
} from 'models';
import ActionDialog from 'components/ActionDialog';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { ScreenReaderOnly } from 'styles/styledElements';
import { useOpponentDetails } from 'store/opponent/opponent.hooks';
import { useGameStatus } from 'store/game/game.hooks';
import { useHeroAttack } from 'store/hero/hero.hooks';

interface GameTypes {
  testID?: string;
}

const StyledGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const TopContainer = styled.div`
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

const PlayerContainer = styled.div`
  width: 100%;
`;

const ActionContainer = styled.div`
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

const Game: React.FC<GameTypes> = ({ testID }) => {
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

  const [{ displayName, avatar }, setOpponent] = useOpponentDetails();
  const getGameStatus = useGameStatus();
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

  const getCharacter = () => {
    if (avatar === 'wizard') return <WizardPig />;
    if (avatar === 'bunny') return <BarbarianBunny />;
    return <DragonSeth />;
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
    if (getGameStatus() === GameStatus.DEFEAT) {
      return navigate('/defeat');
    }
    if (getGameStatus() === GameStatus.VICTORY) {
      return navigate('/victory');
    }
  }, [getGameStatus, navigate]);

  return (
    <StyledGameContainer data-testid={testID}>
      <ScreenReaderOnly aria-label="polite">{`You are at ${heroCurrentHealth} of ${heroMaxHealth} health. Your opponent is at ${opponentCurrentHealth} of ${opponentMaxHealth}, starting Round ${gameRound}`}</ScreenReaderOnly>
      <TopContainer>
        <HealthBar
          testID="health-bar-1"
          currentHealth={heroCurrentHealth}
          maxHealth={heroMaxHealth}
        />
        <Round testID="round" round={gameRound} />
        <HealthBar
          testID="health-bar-2"
          isReversed
          currentHealth={opponentCurrentHealth}
          maxHealth={opponentMaxHealth}
        />
      </TopContainer>
      <StyledPlayerContainer>
        <PlayerContainer>
          <Avatar testID="player-1" avatar={<FoxKnight />} name="Terrel" />
        </PlayerContainer>
        <ActionContainer>
          <Action
            testID="hero-action"
            actionState={getActionStateType()}
            attackValue={heroAttackValue}
          />
          {heroAttackValue > opponentCurrentHealth && (
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
        <PlayerContainer>
          <Avatar
            testID="player-2"
            avatar={getCharacter()}
            name={displayName}
          />
        </PlayerContainer>
      </StyledPlayerContainer>

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
            <QuestionDialog question={text} options={choices} answer={answer} />
          )}
        </Dialog>
      )}
    </StyledGameContainer>
  );
};

export default Game;
