import styled from 'styled-components/macro';

import swordIcon from 'assets/images/sword.svg';
import shieldIcon from 'assets/images/shield.svg';
import { BodyText } from 'styles/styledElements';

export enum ActionState {
  NONE = 'none',
  BLOCK = 'block',
  ATTACK = 'attack',
}

interface ActionProps {
  isReversed?: boolean;
  actionState: ActionState;
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

const ScreenReaderOnly = styled.p`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;

  &:active,
  &:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto;
  }
`;

export const Action = ({
  isReversed,
  actionState,
  attackValue,
  testID,
}: ActionProps) => {
  return (
    <AttackContainer data-testid={testID} isReversed={isReversed}>
      <ScreenReaderOnly>Currently attacking for {attackValue}</ScreenReaderOnly>
      {actionState === ActionState.ATTACK && (
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
      {actionState === ActionState.BLOCK && (
        <Icon data-testid="shield-icon" src={shieldIcon} alt="Shield Icon" />
      )}
    </AttackContainer>
  );
};
