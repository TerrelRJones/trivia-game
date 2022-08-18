import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import Defeat from '../Defeat';

describe('Defeat Page', () => {
  it('should render all Defeat page ui to screen. Header that displays Game Over, play again btn, and defeated Fox Avatar.', () => {
    renderWithProviders(<Defeat />);

    expect(screen.getByTestId('header')).toHaveTextContent('GAME OVER');
    expect(screen.getByTestId('play-again-btn')).toBeInTheDocument();
    expect(screen.getByTestId('avatar')).toBeInTheDocument();
    expect(screen.getByTestId('avatar')).toHaveAttribute(
      'src',
      'fox-knight_defeated.svg'
    );
  });
});
