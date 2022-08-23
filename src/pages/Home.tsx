import styled from 'styled-components';

import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useSetDifficulty } from 'store/game/game.hooks';
import { DialogStageType, DifficultyType } from 'models';
import { useOpponentDetails } from 'store/opponent/opponent.hooks';

const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 400px) {
    padding: 0 30px;
  }
`;

const Header = styled.h1`
  font-family: Impact;
  font-size: 99px;
  letter-spacing: 0;
  line-height: 121px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 400px) {
    font-size: 80px;
    line-height: 80px;
  }
`;

const StyledBtnContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const ButtonContainter = styled.div`
  margin-bottom: 40px;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const setDifficulty = useSetDifficulty();

  return (
    <LandingPageContainer>
      <Header data-testid="title">Trivia Fighter</Header>
      <StyledBtnContainer>
        <ButtonContainter>
          <Button
            testID="easy-btn"
            buttonType={ButtonType.EASY}
            onClick={() => {
              setDifficulty(DifficultyType.EASY);
              navigate('/game');
            }}
          >
            Easy
          </Button>
        </ButtonContainter>
        <ButtonContainter>
          <Button
            buttonType={ButtonType.MEDIUM}
            onClick={() => {
              setDifficulty(DifficultyType.MEDIUM);
              navigate('/game');
            }}
          >
            Medium
          </Button>
        </ButtonContainter>
        <ButtonContainter>
          <Button
            buttonType={ButtonType.SETH}
            onClick={() => {
              setDifficulty(DifficultyType.SETH);
              navigate('/game');
            }}
          >
            Seth
          </Button>
        </ButtonContainter>
      </StyledBtnContainer>
    </LandingPageContainer>
  );
};

export default Home;
