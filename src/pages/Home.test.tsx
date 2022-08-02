import { screen, render, fireEvent } from '@testing-library/react';
import Home from 'pages/Home';
import * as GameHooks from 'store/game/game.hooks';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme.styled';

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
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Trivia Fighter');
  });

  it('should have label as "Easy"', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    expect(screen.getByTestId('easy-btn')).toHaveTextContent('Easy');
  });
});
