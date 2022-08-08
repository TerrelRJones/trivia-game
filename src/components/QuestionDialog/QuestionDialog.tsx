import Button from 'components/Button';
import styled from 'styled-components';

import { ButtonType } from 'components/Button/Button';

interface QuestionDialogProps {
  testID?: string;
  question: string;
  answer: string;
  options: string[];
}

const Question = styled.h3`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: 'Lato';
  font-size: 19px;
  font-weight: 300;
  letter-spacing: -0.68px;
  line-height: 23px;
`;

const AnswerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
const AnswerButtonContainer = styled.div``;

export const QuestionDialog = ({
  testID,
  question,
  answer,
  options,
}: QuestionDialogProps) => {
  return (
    <div data-testid={testID}>
      <Question data-testid="question-text">{question}</Question>
      <AnswerContainer>
        {options.map((potentialAnswer, index) => (
          <AnswerButtonContainer key={index}>
            <Button
              testID={`button-${index}`}
              buttonType={ButtonType.SECONDARY}
            >
              {potentialAnswer}
            </Button>
          </AnswerButtonContainer>
        ))}
      </AnswerContainer>
    </div>
  );
};
