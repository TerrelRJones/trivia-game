import { screen } from '@testing-library/react';
import ActionDialog from 'components/ActionDialog';

import { renderWithProviders } from 'testHelpers';

describe('ActionDialog Component', () => {
  it('should render ActionDialog component to DOM, with correct buttons Attack, and Block', () => {
    renderWithProviders(<ActionDialog testID="ActionDialog" />);
    expect(screen.getByTestId('ActionDialog')).toBeInTheDocument();
    expect(screen.getByTestId('attack')).toBeInTheDocument();
    expect(screen.getByTestId('block')).toBeInTheDocument();
  });
});
