import Button from 'components/Button';
import styled from 'styled-components';

import victoryFoxKnight from 'assets/images/fox-knight_victory.svg';
import shadow from 'assets/images/shadow.svg';
import shadowGradient from 'assets/images/shadow-gradient.svg';
import { BodyText } from 'styles/styledElements';
import { useNavigate } from 'react-router-dom';
import { useOpponentDetails } from 'store/opponent/opponent.hooks';
import { useGameReset } from 'store/game/game.hooks';

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

const Avatar = styled.img`
  z-index: 2;
  margin-left: 25%;
  max-height: 500px;
  height: 100%;
`;

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
  const navigate = useNavigate();

  return (
    <DefeatPageContainer>
      <HeroContainer>
        <Header data-testid="header">VICTORY</Header>
        <DefeatText>You beat the {name}</DefeatText>
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
        <Avatar data-testid="avatar" src={victoryFoxKnight} alt="Fox Knight" />
        <Shadow src={shadow} />
        <ShadowGradient src={shadowGradient} />
      </AvatarContainer>
    </DefeatPageContainer>
  );
};

export default Victory;
