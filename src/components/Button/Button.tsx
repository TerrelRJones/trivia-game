import { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components/macro';

import correctCheckmark from 'assets/images/correct.svg';
import incorrectX from 'assets/images/incorrect.svg';

export enum ButtonType {
  EASY = 'easy',
  MEDIUM = 'medium',
  SETH = 'seth',
  SELECTED = 'selected',
  SECONDARY = 'secondary',
  ATTACK = 'attack',
}

export interface ButtonProps {
  attackIcon?: string[];
  buttonType?: ButtonType;
  correct?: boolean;
  disabled?: boolean;
  incorrect?: boolean;
  selected?: boolean;
  testId?: string;
  theme?: any;
  onClick?: () => void;
}

type StyledButtonProps = Pick<
  ButtonProps,
  'buttonType' | 'disabled' | 'correct' | 'incorrect' | 'selected' | 'theme'
>;

const getBoxShadowColor = ({
  buttonType,
  disabled,
  correct,
  incorrect,
  selected,
  theme: { colors },
}: StyledButtonProps): string => {
  if (disabled) return '#D7D7D7';
  if (selected) return '#0056DB';
  if (buttonType === ButtonType.EASY || correct) return '#00E412';
  if (buttonType === ButtonType.MEDIUM) return '#FF9B00';
  if (buttonType === ButtonType.SETH || incorrect) return '#FF0000';
  return colors.selected;
};

const getBackgroundColor = ({
  buttonType,
  disabled,
  correct,
  incorrect,
  selected,
  theme: { colors },
}: StyledButtonProps): string => {
  if (disabled) return `${colors.disabledBtnGradient}`;
  if (selected) return `${colors.selectedBtnGradient}`;
  if (buttonType === ButtonType.EASY || correct)
    return `${colors.easyBtnGradient}`;
  if (buttonType === ButtonType.MEDIUM) return `${colors.mediumBtnGradient}`;
  if (buttonType === ButtonType.SETH || incorrect)
    return `${colors.sethBtnGradient}`;
  return `${colors.defaultBtnGradient}`;
};

const getBorderColor = ({
  buttonType,
  disabled,
  correct,
  incorrect,
  selected,
  theme: { colors },
}: StyledButtonProps): string => {
  if (disabled) return `${colors.disabledGray}`;
  if (selected) return `${colors.selectedBlue}`;

  if (buttonType === ButtonType.EASY || correct) return `${colors.easyGreen}`;
  if (buttonType === ButtonType.MEDIUM) return `${colors.mediumOrange}`;
  if (buttonType === ButtonType.SETH || incorrect) return `${colors.sethRed}`;
  return '#038dc1';
};

const getBorderRadius = ({ buttonType }: StyledButtonProps): string => {
  if (!buttonType) return '9px';
  if (buttonType === ButtonType.SECONDARY) return '8px';
  return '15px';
};

const getLetterSpacing = ({ buttonType }: StyledButtonProps): string => {
  if (!buttonType) return '-0.89px';
  if (buttonType === ButtonType.SECONDARY) return '-0.64px';
  return '-1.25px';
};

const getLineHeight = ({ buttonType }: StyledButtonProps): string => {
  if (!buttonType) return '30px';
  if (buttonType === ButtonType.SECONDARY) return '22px';
  return '42px';
};
const getMaxHeight = ({ buttonType }: StyledButtonProps): string => {
  if (!buttonType) return '53px';
  if (buttonType === ButtonType.SECONDARY || buttonType === ButtonType.ATTACK)
    return '43px';
  return '70px';
};
const getMinWidth = ({ buttonType }: StyledButtonProps): string => {
  if (!buttonType) return '200px';
  if (buttonType === ButtonType.SECONDARY) return '373px';
  if (buttonType === ButtonType.ATTACK) return '300px';
  return '350px';
};

const getFontSize = ({ buttonType }: StyledButtonProps): string => {
  if (!buttonType) return '25px';
  if (buttonType === ButtonType.SECONDARY) return '18px';
  if (buttonType === ButtonType.ATTACK) return '18px';
  return '35px';
};

const getActiveState = ({
  disabled,
  correct,
  incorrect,
  theme: { colors },
}: StyledButtonProps): string | undefined => {
  if (disabled || correct || incorrect) return;

  return `  &:active {
    background: ${colors.selectedBtnGradient};
    box-shadow: 0 0 0 0.25em #0056db;
    border: 3px solid ${colors.selectedBlue};
  }`;
};

// Styled components
const ButtonContainer = styled.div<StyledButtonProps>`
  height: ${getMaxHeight};
  width: ${getMinWidth};
  box-shadow: 0 0 0 0.25em ${getBoxShadowColor};
  border-radius: ${getBorderRadius};

  &:not(.disabledContainer):hover {
    box-shadow: 0 0 9px 8px ${getBoxShadowColor};
  }

  &:active {
    box-shadow: none;
  }
`;

const GameButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  font-family: 'Lato';
  font-weight: 900;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0 0 0 0.25em ${getBoxShadowColor};
  background: ${getBackgroundColor};
  border: 3px solid ${getBorderColor};
  border-radius: ${getBorderRadius};
  letter-spacing: ${getLetterSpacing};
  line-height: ${getLineHeight};
  font-size: ${getFontSize};

  &:hover {
    cursor: ${({ disabled, correct, incorrect }) =>
      disabled || correct || incorrect ? 'not-allowed' : 'pointer'};
  }

  ${getActiveState}

  @media (max-width: 400px) {
    min-width: 100%;
  }
`;

const Icon = styled.img`
  margin-right: 15px;
  width: 26.05px;

  &.incorrect {
    width: 22px;
  }
`;

const AttackIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const StyledAttackIcon = styled.img`
  width: 23px;
`;

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  attackIcon,
  buttonType,
  children,
  correct,
  incorrect,
  disabled,
  testId,
  selected,
  onClick,
}) => {
  return (
    <ButtonContainer
      className={
        disabled || correct || incorrect ? 'disabledContainer' : undefined
      }
      buttonType={buttonType}
      correct={correct}
      incorrect={incorrect}
      disabled={disabled}
      onClick={onClick}
      selected={selected}
      data-testid="btn-container"
    >
      <GameButton
        buttonType={buttonType}
        correct={correct}
        incorrect={incorrect}
        disabled={disabled}
        data-testid={testId}
        onClick={onClick}
      >
        {attackIcon && (
          <AttackIconContainer>
            {attackIcon.map((icon, index) => (
              <StyledAttackIcon key={index} src={icon} alt="Sword Icon" />
            ))}
          </AttackIconContainer>
        )}
        {correct && (
          <Icon
            data-testid="checkmark-icon"
            src={correctCheckmark}
            alt="Correct Checkmark"
          />
        )}
        {incorrect && (
          <Icon
            data-testid="incorrect-icon"
            className="incorrect"
            src={incorrectX}
            alt="Incorrect X"
          />
        )}
        {children}
      </GameButton>
    </ButtonContainer>
  );
};
