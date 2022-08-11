import Button from 'components/Button';
import styled from 'styled-components';

import { ButtonType } from 'components/Button/Button';

import sword from 'assets/images/sword.svg';
import {
  useAttackPower,
  useAttackStrength,
  useGetQuestion,
} from 'store/game/game.hooks';
import { AttackPower, AttackStrengthType } from 'models';

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
  const attackStrength = useAttackStrength();
  const getQuestion = useGetQuestion();
  const attackPower = useAttackPower();

  return (
    <AttackDialogContainer data-testid={testID}>
      <AttackButtonContainer>
        <Button
          testID="light-attack"
          buttonType={ButtonType.ATTACK}
          attackIcon={[sword]}
          onClick={() => {
            attackStrength(AttackStrengthType.EASY);
            getQuestion(AttackStrengthType.EASY);
            attackPower(AttackPower.LIGHT);
          }}
        >
          Light Attack
        </Button>
      </AttackButtonContainer>
      <AttackButtonContainer>
        <Button
          testID="medium-attack"
          buttonType={ButtonType.ATTACK}
          attackIcon={[sword, sword]}
          onClick={() => {
            attackStrength(AttackStrengthType.MEDIUM);
            getQuestion(AttackStrengthType.MEDIUM);
            attackPower(AttackPower.MEDIUM);
          }}
        >
          Medium Attack
        </Button>
      </AttackButtonContainer>
      <AttackButtonContainer>
        <Button
          testID="heavy-attack"
          buttonType={ButtonType.ATTACK}
          attackIcon={[sword, sword, sword]}
          onClick={() => {
            attackStrength(AttackStrengthType.HARD);
            getQuestion(AttackStrengthType.HARD);
            attackPower(AttackPower.HEAVY);
          }}
        >
          Heavy Attack
        </Button>
      </AttackButtonContainer>
    </AttackDialogContainer>
  );
};
