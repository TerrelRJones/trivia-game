import ActionDialog from 'components/ActionDialog';
import AttackDialog from 'components/AttackDialog';
import QuestionDialog from 'components/QuestionDialog';
import styled from 'styled-components';

interface DialogProps {
  message: string;
  testID?: string;
}

const StyledDialogContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.p`
  margin: 0;
  margin-bottom: 20px;
  color: ${({ theme: { colors } }) => colors.white};
  font-family: 'Lato';
  font-size: 25px;
  letter-spacing: -0.89px;
  line-height: 30px;
  text-align: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 900px;
  width: 100%;
  min-height: 219px;
  border: 1px solid #ffffff;
  border-radius: 1px;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const Dialog = ({ testID, message }: DialogProps) => {
  return (
    <StyledDialogContainer data-testid={testID}>
      <Message data-testid="title">{message}</Message>
      <Box>
        {/* <ActionDialog /> */}
        {/* <AttackDialog /> */}
        <QuestionDialog />
      </Box>
    </StyledDialogContainer>
  );
};
