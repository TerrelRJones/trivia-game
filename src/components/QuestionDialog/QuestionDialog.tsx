import Button from 'components/Button';
import styled from 'styled-components';

import { ButtonType } from 'components/Button/Button';
import { useAnswered, useUserAnswer } from 'store/game/game.hooks';
import { useAppSelector } from 'store/hooks';
import { gameUserAnswerSelector } from 'store/game/game.selectors';
import { useHeroAttack } from 'store/hero/hero.hooks';
import { useOpponentAttack } from 'store/opponent/opponent.hooks';

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

  return (
    <div data-testid={testID}>
      <Question data-testid="question-text">{question}</Question>
      <AnswerContainer>
        {options.map((potentialAnswer, index) => {
          return (
            <Button
              key={index}
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
              {potentialAnswer}
            </Button>
          );
        })}
      </AnswerContainer>
    </div>
  );
};
