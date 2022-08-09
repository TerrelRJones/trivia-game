import Button from 'components/Button';
import styled from 'styled-components';

import { ButtonType } from 'components/Button/Button';

import sword from 'assets/images/sword.svg';
import { useAttackStrength } from 'store/game/game.hooks';
import { AttackStrengthType } from 'models';

interface AttackDialogProps {
  testID?: string;
}

const AttackDialogContainer = styled.div`
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
  const attackStrengthEasy = useAttackStrength(AttackStrengthType.EASY);
  const attackStrengthMedium = useAttackStrength(AttackStrengthType.MEDIUM);
  const attackStrengthHard = useAttackStrength(AttackStrengthType.HARD);
  return (
    <AttackDialogContainer data-testid={testID}>
      <AttackButtonContainer>
        <Button
          testID="light-attack"
          buttonType={ButtonType.ATTACK}
          attackIcon={[sword]}
          onClick={attackStrengthEasy}
        >
          Light Attack
        </Button>
      </AttackButtonContainer>
      <AttackButtonContainer>
        <Button
          testID="medium-attack"
          buttonType={ButtonType.ATTACK}
          attackIcon={[sword, sword]}
          onClick={attackStrengthMedium}
        >
          Medium Attack
        </Button>
      </AttackButtonContainer>
      <AttackButtonContainer>
        <Button
          testID="heavy-attack"
          buttonType={ButtonType.ATTACK}
          attackIcon={[sword, sword, sword]}
          onClick={attackStrengthHard}
        >
          Heavy Attack
        </Button>
      </AttackButtonContainer>
    </AttackDialogContainer>
  );
};
