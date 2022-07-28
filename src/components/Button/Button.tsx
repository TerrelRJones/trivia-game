import { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Colors } from 'styles/colors';

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
  disabled?: boolean;
  testId?: string;
  onClick?: () => void;
}

const StyledButton = styled.button<
  Pick<ButtonProps, 'buttonType' | 'disabled'>
>`
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Lato';
  font-weight: 900;
  color: ${Colors.white};
  text-align: center;

  box-shadow: 0 0 0 0.25em
      ${({ buttonType, disabled }) => {
        if (disabled) return '#D7D7D7';
        if (buttonType === ButtonType.EASY) return '#00E412';
        if (buttonType === ButtonType.MEDIUM) return '#FF9B00';
        if (buttonType === ButtonType.SETH) return '#FF0000';
        return Colors.selected;
      }},
    0 5px 9px 0 rgba(42, 42, 42, 0.5);

  background: ${({ buttonType, disabled }) => {
    if (disabled) return 'linear-gradient(0deg, #9F9F9F 0%, #D7D7D7 100%)';

    if (buttonType === ButtonType.EASY)
      return 'linear-gradient(180deg, #00E412 0%, #004D03 100%);';
    if (buttonType === ButtonType.MEDIUM)
      return 'linear-gradient(180deg, #FF9B00 0%, #AE2F00 100%);';
    if (buttonType === ButtonType.SETH)
      return 'linear-gradient(180deg, #FF0000 0%, #6B0000 100%);';

    return 'linear-gradient(180deg, #02f3fe 0%, #7f2eff 100%)';
  }};

  border: 3px solid
    ${({ buttonType, disabled }) => {
      if (disabled) return '#ABABAB';
      if (buttonType === 'easy') return '#008221';
      if (buttonType === 'medium') return '#BE3B01';
      if (buttonType === 'seth') return '#A30000';
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
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  buttonType,
  children,
  className,
  disabled,
  testId,
  onClick,
}) => {
  return (
    <StyledButton
      buttonType={buttonType}
      className={className}
      disabled={disabled}
      data-testid={testId}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
