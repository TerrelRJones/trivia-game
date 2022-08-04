import { screen } from '@testing-library/react';
import ActionDialog from 'components/ActionDialog';

import { renderWithProviders } from 'testHelpers';

describe('ActionDialog Component', () => {
  it('should render ActionDialog component to DOM', () => {
    renderWithProviders(<ActionDialog testID="ActionDialog"/>);
    expect(screen.getByTestId('ActionDialog')).toBeInTheDocument();
  });
});
