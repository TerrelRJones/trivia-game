import { screen } from '@testing-library/react';
import Home from 'pages/Home';
import * as GameHooks from 'store/game/game.hooks';

import { renderWithProviders } from 'testHelpers';

describe('Home Page', () => {
  let useGameRoundSpy: jest.SpyInstance;
  let incrementRoundSpy: jest.Mock;

  beforeEach(() => {
    incrementRoundSpy = jest.fn();
    useGameRoundSpy = jest.spyOn(GameHooks, 'useGameRound');
    useGameRoundSpy.mockReturnValue([2, { incrementRound: incrementRoundSpy }]);
  });

  afterEach(() => {
    useGameRoundSpy.mockRestore();
  });

  it('should title as TRIVIA FIGHTER', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('title')).toHaveTextContent('Trivia Fighter');
  });

  it('should display label as "Easy"', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('easy-btn')).toHaveTextContent('Easy');
  });
});
