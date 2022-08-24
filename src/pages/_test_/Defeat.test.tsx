import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import Defeat from '../Defeat';
import { useNavigate } from 'react-router-dom';

// jest mock runs before EVERYTHING!!!!
jest.mock('react-router-dom', () => {
  const mockNavigate = jest.fn();

  const module = jest.requireActual('react-router-dom');
  return {
    __esModule: true,
    ...module,
    useNavigate: () => {
      return mockNavigate;
    },
  };
});

describe('Defeat Page', () => {
  it('should render all Defeat page ui to screen. Header that displays Game Over, play again btn, and defeated Fox Avatar.', () => {
    renderWithProviders(<Defeat />);

    expect(screen.getByTestId('header')).toHaveTextContent('GAME OVER');
    expect(screen.getByTestId('play-again-btn')).toBeInTheDocument();
  });

  it.only('should call naviagte() after clicking play again button.', () => {
    renderWithProviders(<Defeat />);

    const mockNavigateFN = useNavigate();
    expect(mockNavigateFN).not.toHaveBeenCalled();

    const playAgainButton = screen.getByTestId('play-again-btn');
    fireEvent.click(playAgainButton);

    expect(mockNavigateFN).toHaveBeenLastCalledWith('/');
    expect(mockNavigateFN).toHaveBeenCalledTimes(1);
  });
});
