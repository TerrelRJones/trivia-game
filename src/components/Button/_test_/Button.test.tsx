import { render, screen } from '@testing-library/react';
import Button from 'components/Button';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme.styled';

describe('Button Component', () => {
  it('should render children content', () => {
    render(<Button testId="button">Test Contents</Button>);

    expect(screen.getByTestId('button')).toHaveTextContent('Test Contents');
  });

  it.only('should render HELLO as content', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button testId="button-2">HELLO</Button>)
      </ThemeProvider>
    );
    expect(screen.getByTestId('button-2')).toHaveTextContent('HELLO');
  });
});
