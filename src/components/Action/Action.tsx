import styled from 'styled-components';

import swordIcon from 'assets/images/sword.svg';
import shieldIcon from 'assets/images/shield.svg';

export enum ActionState {
  NONE = 'none',
  BLOCK = 'block',
  ATTACK = 'attack',
}

interface AcrtionProps {
  isReversed?: boolean;
  actionState: ActionState;
  attackValue: number;
  testID?: string;
}

const AttackContainer = styled.div<Pick<AcrtionProps, 'isReversed'>>`
  display: flex;
  width: 50px;
  flex-direction: column;
  align-items: ${({ isReversed }) => (isReversed ? 'flex-end' : 'flex-start')};
`;

const StyledAttackPoints = styled.p`
  color: ${({ theme: { colors } }) => colors.white};
  font-family: 'Lato';
  font-size: 25px;
  letter-spacing: -0.89px;
  line-height: 30px;
  text-align: center;
  margin: 0;
`;

const StyledIcon = styled.img<Pick<AcrtionProps, 'isReversed'>>`
  width: 38px;
  color: ${({ theme: { colors } }) => colors.white};
  transform: ${({ isReversed }) => isReversed && 'scaleX(-1)'};
`;

export const Action = ({
  isReversed,
  actionState,
  attackValue,
  testID,
}: AcrtionProps) => {
  return (
    <AttackContainer data-testid={testID} isReversed={isReversed}>
      {actionState === ActionState.ATTACK && (
        <>
          <StyledAttackPoints data-testid="attack-value">
            {attackValue}
          </StyledAttackPoints>
          <StyledIcon
            data-testid="sword-icon"
            isReversed={isReversed}
            src={swordIcon}
            alt="Sword Icon"
          />
        </>
      )}
      {actionState === ActionState.BLOCK && (
        <StyledIcon
          data-testid="shield-icon"
          src={shieldIcon}
          alt="Shield Icon"
        />
      )}
    </AttackContainer>
  );
};
