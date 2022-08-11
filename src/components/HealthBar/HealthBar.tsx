import styled from 'styled-components';
import healthBarFull from 'assets/images/health-full.svg';
import healthBarLow from 'assets/images/health-low.svg';
import { ScreenReaderOnly } from 'styles/styledElements';

interface HealthBarProps {
  isReversed?: boolean;
  maxHealth: number;
  currentHealth: number;
  testID?: string;
}

const Container = styled.div<Pick<HealthBarProps, 'isReversed'>>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isReversed }) => (isReversed ? 'flex-end' : 'flex-start')};
  width: 100%;
  max-width: 300px;
  max-height: 50px;
`;

const HealthBarContainer = styled.div<Pick<HealthBarProps, 'isReversed'>>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: ${({ isReversed }) =>
    isReversed ? 'flex-end' : 'flex-start'};
  max-width: 283px;
  width: 100%;
  max-height: 25px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-bottom: 5px;
`;

const HealthBarMiddle = styled.div<
  Pick<HealthBarProps, 'maxHealth' | 'currentHealth'>
>`
  height: 25px;
  width: ${({ maxHealth, currentHealth }) =>
    (currentHealth / maxHealth) * 100}%;
  max-width: 283px;
  background: ${({ currentHealth, theme: { colors } }) => {
    if (currentHealth <= 50) return colors.healthRedGradient;
    return colors.healthGreenGradient;
  }};

  border-radius: ${({ currentHealth, maxHealth }) =>
    currentHealth === maxHealth && '5px'};
`;

const HeartImage = styled.img<Pick<HealthBarProps, 'isReversed'>>`
  z-index: 2;
  position: absolute;
  ${({ isReversed }) => (isReversed ? 'right: -60px' : 'left: -60px;')}
`;

const HealthText = styled.p<Pick<HealthBarProps, 'isReversed'>>`
  font-family: 'Lato';
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 15px;
  color: ${({ theme: { colors } }) => colors.white};
  margin: 0;
  ${({ isReversed }) =>
    isReversed ? 'margin-right: 15px;' : 'margin-left: 15px;'}
`;

export const HealthBar = ({
  isReversed,
  maxHealth,
  currentHealth,
  testID,
}: HealthBarProps) => {
  return (
    <Container data-testid={testID} isReversed={isReversed}>
      <ScreenReaderOnly>
        Health is {Math.floor((currentHealth / maxHealth) * 100)}%,
        {currentHealth} of {maxHealth}
      </ScreenReaderOnly>
      <HealthBarContainer isReversed={isReversed}>
        <HeartImage
          data-testid="heart-icon"
          isReversed={isReversed}
          src={currentHealth <= 50 ? healthBarLow : healthBarFull}
          alt={
            currentHealth <= 50
              ? 'Red Health Broken Heart Icon'
              : 'Green Health Heart Icon'
          }
        />
        <HealthBarMiddle
          data-testid="health-bar"
          maxHealth={maxHealth}
          currentHealth={currentHealth}
        />
      </HealthBarContainer>
      <HealthText data-testid="health-text" isReversed={isReversed}>
        {currentHealth}/{maxHealth}
      </HealthText>
    </Container>
  );
};
