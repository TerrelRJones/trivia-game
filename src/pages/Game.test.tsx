import { screen } from '@testing-library/react';
import Game from 'pages/Game';

import { renderWithProviders } from 'testHelpers';

describe('Game Page', () => {
  it('should render all game ui to screen. Both healthBars, Round, & Players.', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('health-bar-1')).toBeInTheDocument();
    expect(screen.getByTestId('health-bar-2')).toBeInTheDocument();
    expect(screen.getByTestId('round')).toBeInTheDocument();
    expect(screen.getByTestId('player-1')).toBeInTheDocument();
    expect(screen.getByTestId('player-2')).toBeInTheDocument();
  });
});
