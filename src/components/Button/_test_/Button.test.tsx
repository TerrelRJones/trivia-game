import { render, screen } from '@testing-library/react';
import Button from 'components/Button';

describe('Button Component', () => {
  it('should render children content', () => {
    render(<Button testId="button">Test Contents</Button>);

    expect(screen.getByTestId('button')).toHaveTextContent('Test Contents');
  });

  it('should render HELLO as content', () => {
    render(<Button testId="button-2">HELLO</Button>);

    expect(screen.getByTestId('button-2')).toHaveTextContent('HELLO');
  });
});
