import Button from 'components/Button';
import { ButtonType } from 'components/Button/Button';
import styled from 'styled-components';

interface ActionDialogProps {
  testID?: string;
}

const StyledActionDialogContainer = styled.div`
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
  return (
    <StyledActionDialogContainer data-testid={testID}>
      <ActionButtonContainer>
        <Button attack>Attack</Button>
      </ActionButtonContainer>
      <ActionButtonContainer>
        <Button block>Block</Button>
      </ActionButtonContainer>
    </StyledActionDialogContainer>
  );
};
