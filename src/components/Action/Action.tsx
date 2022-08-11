import styled from 'styled-components/macro';

import swordIcon from 'assets/images/sword.svg';
import shieldIcon from 'assets/images/shield.svg';
import { BodyText, ScreenReaderOnly } from 'styles/styledElements';

export enum ActionState {
  NONE = 'none',
  BLOCK = 'block',
  ATTACK = 'attack',
}

interface ActionProps {
  isReversed?: boolean;
  actionState: ActionStateType;
  attackValue: number;
  testID?: string;
}

const AttackContainer = styled.div<Pick<ActionProps, 'isReversed'>>`
  display: flex;
  width: 50px;
  flex-direction: column;
  align-items: ${({ isReversed }) => (isReversed ? 'flex-end' : 'flex-start')};
`;

const AttackPoints = styled(BodyText)`
  font-size: 25px;
  letter-spacing: -0.89px;
  line-height: 30px;
  text-align: center;
  margin: 0;
`;

const Icon = styled.img<Pick<ActionProps, 'isReversed'>>`
  width: 38px;
  color: ${({ theme: { colors } }) => colors.white};
  transform: ${({ isReversed }) => isReversed && 'scaleX(-1)'};
`;

export const Action = ({
  isReversed,
  actionState,
  attackValue,
  testID,
}: ActionProps) => {
  const attacking = actionState === ActionState.ATTACK;
  const blocking = actionState === ActionState.BLOCK;

  return (
    <AttackContainer data-testid={testID} isReversed={isReversed}>
      <ScreenReaderOnly>
        {attacking && `Currently attacking for ${attackValue}`}
        {blocking && 'Currently blocking.'}
      </ScreenReaderOnly>
      {attacking && (
        <>
          <AttackPoints data-testid="attack-value">{attackValue}</AttackPoints>
          <Icon
            data-testid="sword-icon"
            isReversed={isReversed}
            src={swordIcon}
            alt="Sword Icon"
          />
        </>
      )}
      {blocking && (
        <Icon data-testid="shield-icon" src={shieldIcon} alt="Shield Icon" />
      )}
    </AttackContainer>
  );
};
