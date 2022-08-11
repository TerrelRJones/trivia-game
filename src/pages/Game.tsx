import styled from 'styled-components';
import {
  gameDialogSelector,
  gameRoundSelector,
  gameQuestionSelector,
} from 'store/game/game.selectors';

import { useAppSelector } from 'store/hooks';

import Action from 'components/Action';
import Avatar from 'components/Avatar';
import HealthBar from 'components/HealthBar';
import Round from 'components/Round';
import Dialog from 'components/Dialog';
import QuestionDialog from 'components/QuestionDialog';
import AttackDialog from 'components/AttackDialog';

import foxKnight from 'assets/images/fox-knight.svg';
import barbarianBunny from 'assets/images/barbarian-bunny.svg';

import { ActionStateType, DialogStageType } from 'models';
import ActionDialog from 'components/ActionDialog';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  display: flex;
  gap: 192px;
`;

const Game: React.FC<GameTypes> = ({ testID }) => {
  const gameDialog = useAppSelector(gameDialogSelector);
  const gameRound = useAppSelector(gameRoundSelector);
  const question = useAppSelector(gameQuestionSelector);
  const { text, answer, choices } = question;
  const navigate = useNavigate();

  useEffect(() => {
    if (gameDialog === DialogStageType.DIFFICULTY) {
      return navigate('home');
    }
  }, [gameDialog]);

  return (
    <StyledGameContainer data-testid={testID}>
      <TopContainer>
        <HealthBar testID="health-bar-1" currentHealth={100} maxHealth={150} />
        <Round testID="round" round={gameRound} />
        <HealthBar
          testID="health-bar-2"
          isReversed
          currentHealth={43}
          maxHealth={150}
        />
      </TopContainer>
      <StyledPlayerContainer>
        <PlayerContainer>
          <Avatar testID="player-1" avatar={foxKnight} name="Terrel" />
        </PlayerContainer>
        <ActionContainer>
          <Action actionState={ActionStateType.BLOCK} attackValue={0} />
          <Action
            isReversed
            actionState={ActionStateType.ATTACK}
            attackValue={10}
          />
        </ActionContainer>
        <PlayerContainer>
          <Avatar testID="player-2" avatar={barbarianBunny} name="Medium" />
        </PlayerContainer>
      </StyledPlayerContainer>

      {gameDialog === DialogStageType.ACTION && (
        <Dialog testID="dialog" message="Choose an attack">
          <ActionDialog />
        </Dialog>
      )}

      {gameDialog === DialogStageType.ATTACKING && (
        <Dialog testID="dialog" message="Attack strength">
          <AttackDialog />
        </Dialog>
      )}

      {gameDialog === DialogStageType.ANSWERING && (
        <Dialog testID="dialog" message="Choose wisely...">
          <QuestionDialog question={text} options={choices} answer={answer} />
        </Dialog>
      )}
    </StyledGameContainer>
  );
};

export default Game;
