import Button from 'components/Button';
import styled from 'styled-components';

import defeatedFoxKnight from 'assets/images/fox-knight_defeated.svg';
import shadow from 'assets/images/shadow.svg';
import { BodyText } from 'styles/styledElements';
import { useNavigate } from 'react-router-dom';
import { useOpponentDetails } from 'store/opponent/opponent.hooks';
import { useGameReset } from 'store/game/game.hooks';
import DefeatedFox from 'components/DefeatedFox';

const DefeatPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.h1`
  font-family: Impact;
  font-size: 99px;
  letter-spacing: 0;
  line-height: 121px;
  text-transform: uppercase;
  margin: 0;

  @media (max-width: 400px) {
    font-size: 80px;
    line-height: 80px;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DefeatText = styled(BodyText)`
  font-size: 30px;
  margin: 0;
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
`;

const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 477px;
  max-height: 500px;
  margin-top: 104px;
`;

const Avatar = styled.div`
  z-index: 1;
  width: 100%;
`;

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
  const navigate = useNavigate();

  return (
    <DefeatPageContainer>
      <HeroContainer>
        <Header data-testid="header">GAME OVER</Header>
        <DefeatText>You lost to {name}</DefeatText>
        <ButtonContainer>
          <Button
            testID="play-again-btn"
            onClick={() => {
              resetGame();
              navigate('/');
            }}
          >
            Play Again
          </Button>
        </ButtonContainer>
      </HeroContainer>
      <AvatarContainer>
        <Avatar>
          <DefeatedFox />
        </Avatar>
        <Shadow src={shadow} />
      </AvatarContainer>
    </DefeatPageContainer>
  );
};

export default Defeat;
