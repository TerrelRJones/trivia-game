import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';
import { DialogStageType } from 'models';
import { useAnsweredVerify } from 'store/game/game.hooks';
import {
  gameDialogSelector,
  gameQuestionSelector,
  gameUserAnswerSelector,
} from 'store/game/game.selectors';
import { useHeroAttack } from 'store/hero/hero.hooks';
import { useAppSelector } from 'store/hooks';
import { useOpponentAttack } from 'store/opponent/opponent.hooks';
import styled from 'styled-components';
import { BodyText } from 'styles/styledElements';

interface DialogProps {
  message: string;
  testID?: string;
  children: React.ReactElement;
  answered?: boolean;
}

const StyledDialogContainer = styled.div<Pick<DialogProps, 'answered'>>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ answered }) => answered && 'margin-top: 50px;'}
`;

const NextButtonContainer = styled.div`
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
`;

const Message = styled(BodyText)`
  margin: 0;
  margin-bottom: 20px;
  font-size: 25px;
  letter-spacing: -0.89px;
  line-height: 30px;
  text-align: center;

  .next-message {
    margin: 0;
    margin-bottom: 24px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 900px;
  width: 100%;
  min-height: 219px;
  border: 1px solid ${({ theme: { colors } }) => colors.white};
  border-radius: 1px;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const Dialog = ({ testID, message, children }: DialogProps) => {
  const dialogStage = useAppSelector(gameDialogSelector);
  const { answer } = useAppSelector(gameQuestionSelector);
  const userAnswer = useAppSelector(gameUserAnswerSelector);
  const answerVerify = useAnsweredVerify();
  const heroAttack = useHeroAttack();
  const opponentAttack = useOpponentAttack();

  const answeredStage = dialogStage === DialogStageType.ANSWERED;
  const isUserAnswerCorrect = userAnswer === answer;

  return (
    <StyledDialogContainer answered={answeredStage} data-testid={testID}>
      {answeredStage ? (
        <NextButtonContainer>
          <Message className="next-message">
            {isUserAnswerCorrect ? 'Correct!' : 'Incorrect'}
          </Message>
          <Button
            buttonType={ButtonType.NEXT}
            onClick={() => {
              answerVerify(isUserAnswerCorrect);
              heroAttack(isUserAnswerCorrect);
              opponentAttack(isUserAnswerCorrect);
            }}
          >
            Next
          </Button>
        </NextButtonContainer>
      ) : (
        <Message data-testid="title">{message}</Message>
      )}
      <Box>{children}</Box>
    </StyledDialogContainer>
  );
};
