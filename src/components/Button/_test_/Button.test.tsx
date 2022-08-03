import { screen } from '@testing-library/react';
import Button from 'components/Button';
import { ButtonType } from '../Button';
import { renderWithProviders } from 'testHelpers';

describe('Button Component', () => {
  it('should render children content', () => {
    renderWithProviders(<Button testId="button">Test Contents</Button>);
    expect(screen.getByTestId('button')).toHaveTextContent('Test Contents');
  });

  it('should render "Start" as content', () => {
    renderWithProviders(<Button testId="button-2">Start</Button>);
    expect(screen.getByTestId('button-2')).toHaveTextContent('Start');
  });

  it('should render checkmark icon if answer correct', () => {
    renderWithProviders(
      <Button testId="button-3" correct>
        Correct
      </Button>
    );
    expect(screen.getByTestId('button-3')).toContainElement(
      screen.getByTestId('checkmark-icon')
    );
  });

  it('should render incorrect icon if answer is incorrect', () => {
    renderWithProviders(
      <Button testId="button-3" incorrect>
        Incorrect
      </Button>
    );
    expect(screen.getByTestId('button-3')).toContainElement(
      screen.getByTestId('incorrect-icon')
    );
  });

  it('should render background color correctly if disabled', () => {
    renderWithProviders(
      <Button testId="button-disabled" disabled>
        Disabled
      </Button>
    );
    expect(screen.getByTestId('button-disabled')).toHaveStyle(
      'background: linear-gradient(0deg, #9F9F9F 0%, #D7D7D7 100%);'
    );
  });

  it('should render min-width: 373px; as secondary btn', () => {
    renderWithProviders(
      <Button buttonType={ButtonType.SECONDARY}>Secondary Button</Button>
    );
    expect(screen.getByTestId('btn-container')).toHaveStyle('min-width: 373px');
  });

  it('should render min-width: 200px; as default btn (undefined)', () => {
    renderWithProviders(<Button>Default Button</Button>);
    expect(screen.getByTestId('btn-container')).toHaveStyle('min-width: 200px');
  });
});
