import styled from 'styled-components';
import Button from 'components/Button';

import { useAttack, useBlock, useGetQuestion } from 'store/game/game.hooks';
import { AttackStrengthType } from 'models';
import { shuffleArray } from 'helper/shuffleArray';
import { ButtonType } from 'components/Button/Button';
import { useOpponentAttack } from 'store/opponent/opponent.hooks';
import { useEffect } from 'react';

interface ActionDialogProps {
  testID?: string;
}

const ActionDialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ActionButtonContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 36px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ActionDialog = ({ testID }: ActionDialogProps) => {
  const attack = useAttack();
  const block = useBlock();
  const getQuestion = useGetQuestion();
  const [blockQuestion] = shuffleArray([
    AttackStrengthType.EASY,
    AttackStrengthType.MEDIUM,
    AttackStrengthType.HARD,
  ]);
  const [setOpponentAttack] = useOpponentAttack();

  const randomDifficultyQuestion = () => getQuestion(blockQuestion);

  useEffect(() => {
    setOpponentAttack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ActionDialogContainer data-testid={testID}>
      <ActionButtonContainer>
        <Button
          testID="attack"
          buttonType={ButtonType.ACTION}
          onClick={() => {
            attack();
          }}
        >
          Attack
        </Button>
      </ActionButtonContainer>
      <ActionButtonContainer>
        <Button
          testID="block"
          buttonType={ButtonType.ACTION}
          onClick={() => {
            randomDifficultyQuestion();
            block();
          }}
          block
        >
          Block
        </Button>
      </ActionButtonContainer>
    </ActionDialogContainer>
  );
};
