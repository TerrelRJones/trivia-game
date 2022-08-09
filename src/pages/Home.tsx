import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';

const StyledLandingPageContainer = styled.div`
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

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <StyledLandingPageContainer>
      <Header data-testid="title">Trivia Fighter</Header>
      <StyledBtnContainer>
        <ButtonContainter>
          <Button
            testID="easy-btn"
            buttonType={ButtonType.EASY}
            onClick={() => navigate('game')}
          >
            Easy
          </Button>
        </ButtonContainter>
        <ButtonContainter>
          <Button
            buttonType={ButtonType.MEDIUM}
            onClick={() => navigate('game')}
          >
            Medium
          </Button>
        </ButtonContainter>
        <ButtonContainter>
          <Button buttonType={ButtonType.SETH} onClick={() => navigate('game')}>
            Seth
          </Button>
        </ButtonContainter>
      </StyledBtnContainer>
    </StyledLandingPageContainer>
  );
};

export default Home;
