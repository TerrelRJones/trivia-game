import Button from 'components/Button';
import styled from 'styled-components';

import { ButtonType } from 'components/Button/Button';

import sword from 'assets/images/sword.svg';

interface AttackDialogProps {
  testID?: string;
}

const StyledAttackDialogContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 750px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const AttackButtonContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 10px;
`;

export const AttackDialog = ({ testID }: AttackDialogProps) => {
  return (
    <StyledAttackDialogContainer data-testid={testID}>
      <AttackButtonContainer>
        <Button
          testId="light-attack"
          buttonType={ButtonType.ATTACK}
          attackIcon={[sword]}
        >
          Light Attack
        </Button>
      </AttackButtonContainer>
      <AttackButtonContainer>
        <Button
          testId="medium-attack"
          buttonType={ButtonType.ATTACK}
          attackIcon={[sword, sword]}
        >
          Medium Attack
        </Button>
      </AttackButtonContainer>
      <AttackButtonContainer>
        <Button
          testId="heavy-attack"
          buttonType={ButtonType.ATTACK}
          attackIcon={[sword, sword, sword]}
        >
          Heavy Attack
        </Button>
      </AttackButtonContainer>
    </StyledAttackDialogContainer>
  );
};
