import Button from 'components/Button';
import styled from 'styled-components';

import { ButtonType } from 'components/Button/Button';

interface QuestionDialogProps {
  testID?: string;
}

const StyledQuestionDialogContainer = styled.div``;

const Question = styled.h3`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: 'Lato';
  font-size: 19px;
  letter-spacing: -0.68px;
  line-height: 23px;
`;

const AnswerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
const AnswerButtonContainer = styled.div``;

export const QuestionDialog = ({ testID }: QuestionDialogProps) => {
  return (
    <StyledQuestionDialogContainer data-testid={testID}>
      <Question>
        Which best selling toy of 1983 caused hysteria, resulting in riots
        breaking out in stores?
      </Question>
      <AnswerContainer>
        <AnswerButtonContainer>
          <Button buttonType={ButtonType.SECONDARY}>Transformers</Button>
        </AnswerButtonContainer>
        <AnswerButtonContainer>
          <Button buttonType={ButtonType.SECONDARY} selected>
            Cabbage Patch Kids
          </Button>
        </AnswerButtonContainer>
        <AnswerButtonContainer>
          <Button buttonType={ButtonType.SECONDARY}>Rubik's Cube</Button>
        </AnswerButtonContainer>
        <AnswerButtonContainer>
          <Button buttonType={ButtonType.SECONDARY}>Care Bears</Button>
        </AnswerButtonContainer>
      </AnswerContainer>
    </StyledQuestionDialogContainer>
  );
};
