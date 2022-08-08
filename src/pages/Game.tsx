import Action from 'components/Action';
import Avatar from 'components/Avatar';
import HealthBar from 'components/HealthBar';
import Round from 'components/Round';
import styled from 'styled-components';

import foxKnight from 'assets/images/fox-knight.svg';
import barbarianBunny from 'assets/images/barbarian-bunny.svg';

import { ActionState } from 'components/Action/Action';

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

const Game: React.FunctionComponent = () => (
  <StyledGameContainer>
    <TopContainer>
      <HealthBar currentHealth={100} maxHealth={150} />
      <Round round={1} />
      <HealthBar isReversed currentHealth={43} maxHealth={150} />
    </TopContainer>
    <StyledPlayerContainer>
      <PlayerContainer>
        <Avatar avatar={foxKnight} name="Terrel" />
      </PlayerContainer>
      <ActionContainer>
        <Action actionState={ActionState.BLOCK} attackValue={0} />
        <Action isReversed actionState={ActionState.ATTACK} attackValue={10} />
      </ActionContainer>
      <PlayerContainer>
        <Avatar avatar={barbarianBunny} name="Medium" />
      </PlayerContainer>
    </StyledPlayerContainer>
  </StyledGameContainer>
);

export default Game;
