import styled from 'styled-components';
import Button from 'components/Button';

import { useAttack, useBlock, useGetQuestion } from 'store/game/game.hooks';
import { AttackStrengthType } from 'models';

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
`;

export const ActionDialog = ({ testID }: ActionDialogProps) => {
  const attack = useAttack();
  const block = useBlock();
  const getQuestion = useGetQuestion();

  return (
    <ActionDialogContainer data-testid={testID}>
      <ActionButtonContainer>
        <Button testID="attack" onClick={attack} attack>
          Attack
        </Button>
      </ActionButtonContainer>
      <ActionButtonContainer>
        <Button
          testID="block"
          onClick={() => {
            getQuestion(AttackStrengthType.EASY);
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
