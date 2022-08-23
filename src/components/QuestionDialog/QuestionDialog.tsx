import Button from 'components/Button';
import styled from 'styled-components';

import { ButtonType } from 'components/Button/Button';
import { useAnswered, useUserAnswer } from 'store/game/game.hooks';
import { useAppSelector } from 'store/hooks';
import { gameUserAnswerSelector } from 'store/game/game.selectors';

interface QuestionDialogProps {
  testID?: string;
  question: string;
  answer: string;
  options: string[];
}

const Container = styled.div`
  max-width: 800px;
`;

const Question = styled.h3`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: 'Lato';
  font-size: 19px;
  font-weight: 300;
  letter-spacing: -0.68px;
  line-height: 23px;
  margin: 0;
  margin-top: 23px;
  margin-bottom: 30px;
`;

const AnswerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .btn-0 {
    margin-right: 45px;
    margin-bottom: 30px;
  }

  .btn-2 {
    margin-right: 45px;
    margin-bottom: 34px;
  }
`;

const ButtonContainer = styled.div``;

export const QuestionDialog = ({
  testID,
  question,
  options,
  answer,
}: QuestionDialogProps) => {
  const answered = useAnswered();
  const userAnswer = useAppSelector(gameUserAnswerSelector);
  const setUserAnswer = useUserAnswer();

  const isCorrectAnswer = (potentialAnswer: string): boolean => {
    return Boolean(
      (userAnswer === answer && potentialAnswer === answer) ||
        (userAnswer && userAnswer !== answer && potentialAnswer === answer)
    );
  };

  const isIncorrectAnswer = (potentialAnswer: string): boolean => {
    return userAnswer === potentialAnswer && potentialAnswer !== answer;
  };

  const isButtonDisabled = (potentialAnswer: string): boolean => {
    return Boolean(
      userAnswer && userAnswer !== potentialAnswer && answer !== potentialAnswer
    );
  };

  const questionHtmlStringToText = (text: string) => {
    return new DOMParser().parseFromString(text, 'text/html').documentElement
      .textContent;
  };

  return (
    <Container data-testid={testID}>
      <Question data-testid="question-text">
        {questionHtmlStringToText(question)}
      </Question>
      <AnswerContainer>
        {options.map((potentialAnswer, index) => {
          return (
            <ButtonContainer key={index} className={`btn-${index}`}>
              <Button
                testID={`button-${index}`}
                buttonType={ButtonType.SECONDARY}
                onClick={() => {
                  answered();
                  setUserAnswer(potentialAnswer);
                }}
                correct={isCorrectAnswer(potentialAnswer)}
                incorrect={isIncorrectAnswer(potentialAnswer)}
                disabled={isButtonDisabled(potentialAnswer)}
              >
                {questionHtmlStringToText(potentialAnswer)}
              </Button>
            </ButtonContainer>
          );
        })}
      </AnswerContainer>
    </Container>
  );
};
