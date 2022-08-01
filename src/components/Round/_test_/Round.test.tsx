import { render, screen } from '@testing-library/react';
import Round from 'components/Round';

describe('Round component', () => {
  it('should render "ROUND 1"', () => {
    render(<Round testId="round-one" round={1} />);

    expect(screen.getByTestId('round-one')).toHaveTextContent('ROUND 1');
  });

  it('should render "ROUND 5"', () => {
    render(<Round testId="round-5" round={5} />);

    expect(screen.getByTestId('round-5')).toBeInTheDocument();
  });
});
