import styled from 'styled-components';
import {
  gameDialogSelector,
  gameRoundSelector,
} from 'store/game/game.selectors';
import { useAppSelector } from 'store/hooks';

import Action from 'components/Action';
import Avatar from 'components/Avatar';
import HealthBar from 'components/HealthBar';
import Round from 'components/Round';
import Dialog from 'components/Dialog';
import QuestionDialog from 'components/QuestionDialog';

import foxKnight from 'assets/images/fox-knight.svg';
import barbarianBunny from 'assets/images/barbarian-bunny.svg';

import { ActionStateType } from 'models';
import { questionOne } from 'components/QuestionDialog/mockQuestionData';

const { question, options, answer } = questionOne;

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

const Game: React.FunctionComponent = () => {
  // const gameDialog = useAppSelector(gameDialogSelector);
  const gameRound = useAppSelector(gameRoundSelector);

  return (
    <StyledGameContainer>
      <TopContainer>
        <HealthBar currentHealth={100} maxHealth={150} />
        <Round round={gameRound} />
        <HealthBar isReversed currentHealth={43} maxHealth={150} />
      </TopContainer>
      <StyledPlayerContainer>
        <PlayerContainer>
          <Avatar avatar={foxKnight} name="Terrel" />
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
          <Avatar avatar={barbarianBunny} name="Medium" />
        </PlayerContainer>
      </StyledPlayerContainer>
      <Dialog message="Choose an attack">
        <QuestionDialog question={question} options={options} answer={answer} />
      </Dialog>
    </StyledGameContainer>
  );
};

export default Game;
