import { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';

import correctCheckmark from 'assets/images/correct.svg';
import incorrectX from 'assets/images/incorrect.svg';
import sword from 'assets/images/sword.svg';
import shield from 'assets/images/shield.svg';

export enum ButtonType {
  EASY = 'easy',
  MEDIUM = 'medium',
  SETH = 'seth',
  SELECTED = 'selected',
  SECONDARY = 'secondary',
  ATTACK = 'attack',
}

export interface ButtonProps {
  attack?: boolean;
  block?: boolean;
  attackIcon?: string[];
  buttonType?: ButtonType;
  className?: string;
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
const getMaxWidth = ({ buttonType }: StyledButtonProps): string => {
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

// Styled components

const ButtonContainer = styled.div<StyledButtonProps>`
  height: ${getMaxHeight};
  /* height: 100%; */
  width: ${getMaxWidth};
  /* width: 100%; */
  box-shadow: 0 0 0 0.25em ${getBoxShadowColor};
  border-radius: ${getBorderRadius};
  /* margin-bottom: 40px; */

  &:hover {
    box-shadow: 0 0 9px 8px ${getBoxShadowColor};
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
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
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  @media (max-width: 400px) {
    min-width: 100%;
  }
`;

const StyledIcon = styled.img`
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
  attack,
  block,
  attackIcon,
  buttonType,
  children,
  className,
  correct,
  incorrect,
  disabled,
  testId,
  selected,
  onClick,
}) => {
  return (
    <ButtonContainer
      buttonType={buttonType}
      className={className}
      correct={correct}
      incorrect={incorrect}
      disabled={disabled}
      onClick={onClick}
      selected={selected}
      data-testid="btn-container"
    >
      <StyledButton
        buttonType={buttonType}
        className={className}
        correct={correct}
        incorrect={incorrect}
        disabled={disabled}
        data-testid={testId}
        onClick={onClick}
        selected={selected}
      >
        {attack && <StyledIcon src={sword} alt="Sword Attack Icon" />}
        {block && <StyledIcon src={shield} alt="Shield Block Icon" />}
        {attackIcon && (
          <AttackIconContainer>
            {attackIcon.map((icon, index) => (
              <StyledAttackIcon key={index} src={icon} alt="Sword Icon" />
            ))}
          </AttackIconContainer>
        )}
        {correct && (
          <StyledIcon
            data-testid="checkmark-icon"
            src={correctCheckmark}
            alt="Correct Checkmark"
          />
        )}
        {incorrect && (
          <StyledIcon
            data-testid="incorrect-icon"
            className="incorrect"
            src={incorrectX}
            alt="Incorrect X"
          />
        )}
        {children}
      </StyledButton>
    </ButtonContainer>
  );
};
