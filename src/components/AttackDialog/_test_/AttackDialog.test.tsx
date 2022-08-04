import { screen } from '@testing-library/react';
import AttackDialog from 'components/AttackDialog';

import { renderWithProviders } from 'testHelpers';

describe('AttackDialog Component', () => {
  it('should render AttackDialog component to DOM', () => {
    renderWithProviders(<AttackDialog testID="AttackDialog"/>);
    expect(screen.getByTestId('AttackDialog')).toBeInTheDocument();
  });
});
