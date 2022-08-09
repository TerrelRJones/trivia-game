import { screen } from '@testing-library/react';

import { renderWithProviders } from 'testHelpers';
import Game from './Game';

describe('Game Page', () => {
  it('should render all game ui to screen. Both healthBars, Round, Players, and Dialog Box.', () => {
    renderWithProviders(<Game testID="game-ui" />);

    expect(screen.getByTestId('game-ui')).toBeInTheDocument();
    expect(screen.getByTestId('health-bar-1')).toBeInTheDocument();
    expect(screen.getByTestId('health-bar-2')).toBeInTheDocument();
    expect(screen.getByTestId('round')).toBeInTheDocument();
    expect(screen.getByTestId('player-1')).toBeInTheDocument();
    expect(screen.getByTestId('player-2')).toBeInTheDocument();
    expect(screen.getByTestId('dialog')).toBeInTheDocument();
  });
});
