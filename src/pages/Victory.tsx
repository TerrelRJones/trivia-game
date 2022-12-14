import Button from 'components/Button';
import styled from 'styled-components';
import VictoryFox from 'components/VictoryFox';
import shadow from 'assets/images/shadow.svg';
import shadowGradient from 'assets/images/shadow-gradient.svg';
import {
  Avatar,
  CompletedPageContainer,
  Header,
  HeroContainer,
  Text,
  ButtonContainer,
  AvatarContainer,
} from 'styles/styledElements';
import { useNavigate } from 'react-router-dom';
import { useOpponentDetails } from 'store/opponent/opponent.hooks';
import { useGameReset } from 'store/game/game.hooks';
import { InitialTransition } from 'components/InitialTransition/InitialTransition';

const ShadowGradient = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
`;

const Shadow = styled.img`
  z-index: 1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -15px;
`;

const Victory = () => {
  const [{ name }] = useOpponentDetails();
  const resetGame = useGameReset();
  const replace = useNavigate();

  return (
    <>
      <InitialTransition />
      <CompletedPageContainer>
        <HeroContainer>
          <Header data-testid="header">VICTORY</Header>
          <Text>You beat the {name}</Text>
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
          <Avatar>
            <VictoryFox />
          </Avatar>
          <Shadow src={shadow} />
          <ShadowGradient src={shadowGradient} />
        </AvatarContainer>
      </CompletedPageContainer>
    </>
  );
};

export default Victory;
