import { screen } from '@testing-library/react';
import DefeatedFox from 'components/DefeatedFox';

import { renderWithProviders } from 'testHelpers';

describe('DefeatedFox Component', () => {
  it('should render DefeatedFox component to DOM', () => {
    renderWithProviders(<DefeatedFox testID="DefeatedFox"/>);
    expect(screen.getByTestId('DefeatedFox')).toBeInTheDocument();
  });
});
