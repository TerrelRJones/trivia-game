import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import Victory from '../Victory';

describe('Victory Page', () => {
  it('should render all Victory page ui to screen. Header that displays VICTORY, play again btn, and victory Fox Avatar.', () => {
    renderWithProviders(<Victory />);

    expect(screen.getByTestId('header')).toHaveTextContent('VICTORY');
    expect(screen.getByTestId('play-again-btn')).toBeInTheDocument();
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(screen.getByTestId('avatar')).toHaveAttribute(
      'src',
      'fox-knight_victory.svg'
    );
  });
});
