import Action from 'components/Action';
import Avatar from 'components/Avatar';
import HealthBar from 'components/HealthBar';
import Round from 'components/Round';
import styled from 'styled-components';

import foxKnight from 'assets/images/fox-knight.svg';
import wizardPig from 'assets/images/wizard-pig.svg';

import { ActionState } from 'components/Action/Action';

const StyledGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 45px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 69px;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`;

const PlayerContainer = styled.div`
  position: relative;
  width: 350px;
  background-color: red;

  .action-container {
    position: absolute;
    right: 0;
  }
`;

const PlayerContainerTwo = styled.div`
  position: relative;
  width: 350px;
  background-color: red;

  .action-container {
    position: absolute;
  }
`;

const Game: React.FunctionComponent = () => (
  <StyledGameContainer>
    <TopContainer>
      <HealthBar maxHealth={150} currentHealth={90} />
      <Round round={1} />
      <HealthBar maxHealth={150} currentHealth={43} isReversed={true} />
    </TopContainer>
    <AvatarContainer>
      <PlayerContainer>
        <div className="action-container">
          <Action actionState={ActionState.BLOCK} attackValue={10} />
        </div>
        <Avatar name="Terrel" avatar={foxKnight} />
      </PlayerContainer>
      <PlayerContainerTwo>
        <div className="action-container">
          <Action
            actionState={ActionState.ATTACK}
            attackValue={23}
            isReversed={true}
          />
        </div>
        <Avatar name="Terrel" avatar={wizardPig} />
      </PlayerContainerTwo>
    </AvatarContainer>
  </StyledGameContainer>
);

export default Game;
