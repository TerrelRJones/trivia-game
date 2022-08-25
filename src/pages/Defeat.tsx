import Button from 'components/Button';
import styled from 'styled-components';

import defeatedFoxKnight from 'assets/images/fox-knight_defeated.svg';
import shadow from 'assets/images/shadow.svg';
import {
  CompletedPageContainer,
  HeroContainer,
  Header,
  Text,
  ButtonContainer,
  AvatarContainer,
  Avatar,
} from 'styles/styledElements';
import { useNavigate } from 'react-router-dom';
import { useOpponentDetails } from 'store/opponent/opponent.hooks';
import { useGameReset } from 'store/game/game.hooks';

const Shadow = styled.img`
  position: absolute;
  bottom: 30px;
  left: 150px;
  transform: translateX(-50%);
  width: 300px;
`;

const Defeat = () => {
  const [{ name }] = useOpponentDetails();
  const resetGame = useGameReset();
  const replace = useNavigate();

  return (
    <CompletedPageContainer>
      <HeroContainer>
        <Header data-testid="header">GAME OVER</Header>
        <Text>You lost to {name}</Text>
        <ButtonContainer>
          <Button
            testID="play-again-btn"
            onClick={() => {
              resetGame();
              replace('/');
            }}
          >
            Play Again
          </Button>
        </ButtonContainer>
      </HeroContainer>
      <AvatarContainer>
        <Avatar data-testid="avatar" src={defeatedFoxKnight} alt="Fox Knight" />
        <Shadow src={shadow} />
      </AvatarContainer>
    </CompletedPageContainer>
  );
};

export default Defeat;
