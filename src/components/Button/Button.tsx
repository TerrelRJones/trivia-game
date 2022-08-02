import { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';

import correctCheckmark from 'assets/images/correct.svg';
import incorrectX from 'assets/images/incorrect.svg';

export enum ButtonType {
  EASY = 'easy',
  MEDIUM = 'medium',
  SETH = 'seth',
  SELECTED = 'selected',
  SECONDARY = 'secondary',
}

export interface ButtonProps {
  buttonType?: ButtonType;
  className?: string;
  correct?: boolean;
  disabled?: boolean;
  incorrect?: boolean;
  selected?: boolean;
  testId?: string;
  onClick?: () => void;
}

const StyledButton = styled.button<
  Pick<
    ButtonProps,
    'buttonType' | 'disabled' | 'correct' | 'incorrect' | 'selected'
  >
>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Lato';
  font-weight: 900;
  text-align: center;
  margin-bottom: 40px;
  color: white;

  box-shadow: 0 0 0 0.25em
      ${({
        buttonType,
        disabled,
        correct,
        incorrect,
        selected,
        theme: { colors },
      }) => {
        if (disabled) return '#D7D7D7';
        if (selected) return '#0056DB';
        if (buttonType === ButtonType.EASY || correct) return '#00E412';
        if (buttonType === ButtonType.MEDIUM) return '#FF9B00';
        if (buttonType === ButtonType.SETH || incorrect) return '#FF0000';
        return colors.selected;
      }},
    0 5px 9px 0 rgba(42, 42, 42, 0.5);

  background: ${({
    buttonType,
    disabled,
    correct,
    incorrect,
    selected,
    theme: { colors },
  }) => {
    if (disabled) return `${colors.disabledBtnGradient}`;
    if (selected) return `${colors.selectedBtnGradient}`;
    if (buttonType === ButtonType.EASY || correct)
      return `${colors.easyBtnGradient}`;
    if (buttonType === ButtonType.MEDIUM) return `${colors.mediumBtnGradient}`;
    if (buttonType === ButtonType.SETH || incorrect)
      return `${colors.sethBtnGradient}`;
    return `${colors.defaultBtnGradient}`;
  }};

  border: 3px solid
    ${({
      buttonType,
      disabled,
      correct,
      incorrect,
      selected,
      theme: { colors },
    }) => {
      if (disabled) return `${colors.disabledGray}`;
      if (selected) return `${colors.selectedBlue}`;

      if (buttonType === ButtonType.EASY || correct)
        return `${colors.easyGreen}`;
      if (buttonType === ButtonType.MEDIUM) return `${colors.mediumOrange}`;
      if (buttonType === ButtonType.SETH || incorrect)
        return `${colors.sethRed}`;
      return '#038dc1';
    }};

  border-radius: ${({ buttonType }) => {
    if (!buttonType) return '9px';
    if (buttonType === ButtonType.SECONDARY) return '8px';
    return '15px';
  }};

  letter-spacing: ${({ buttonType }) => {
    if (!buttonType) return '-0.89px';
    if (buttonType === ButtonType.SECONDARY) return '-0.64px';
    return '-1.25px';
  }};

  line-height: ${({ buttonType }) => {
    if (!buttonType) return '30px';
    if (buttonType === ButtonType.SECONDARY) return '22px';
    return '42px';
  }};

  min-height: ${({ buttonType }) => {
    if (!buttonType) return '53px';
    if (buttonType === ButtonType.SECONDARY) return '43px';
    return '70px';
  }};

  min-width: ${({ buttonType }) => {
    if (!buttonType) return '200px';
    if (buttonType === ButtonType.SECONDARY) return '373px';
    return '350px';
  }};

  font-size: ${({ buttonType }) => {
    if (!buttonType) return '25px';
    if (buttonType === ButtonType.SECONDARY) return '18px';
    return '35px';
  }};

  &:hover {
    ${({ buttonType, disabled }) =>
      !buttonType && !disabled && 'box-shadow: 0 0 9px 4px #038dc1;'};

    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  @media (max-width: 400px) {
    min-width: 100%;
  }
`;

const StyledIcon = styled.img`
  margin-right: 15px;
  width: 26.05px;

  .incorrect {
    width: 22px;
  }
`;

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
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
      {correct && <StyledIcon src={correctCheckmark} alt="Correct Checkmark" />}
      {incorrect && (
        <StyledIcon className="incorrect" src={incorrectX} alt="Incorrect X" />
      )}
      {children}
    </StyledButton>
  );
};
