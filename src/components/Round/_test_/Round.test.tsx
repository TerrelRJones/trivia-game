import { screen } from '@testing-library/react';
import Round from 'components/Round';

import { renderWithProviders } from 'testHelpers';

describe('Button Component', () => {
  it('should render Round 1 as content', () => {
    renderWithProviders(<Round testID="round-title" round={1} />);
    expect(screen.getByTestId('round-title')).toHaveTextContent('Round: 1');
  });
});
