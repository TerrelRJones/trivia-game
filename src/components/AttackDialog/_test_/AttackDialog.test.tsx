import { screen } from '@testing-library/react';
import AttackDialog from 'components/AttackDialog';

import { renderWithProviders } from 'testHelpers';

describe('AttackDialog Component', () => {
  it('should render AttackDialog component to DOM, and all buttons light, medium, and heavy attack', () => {
    renderWithProviders(<AttackDialog testID="AttackDialog" />);
    expect(screen.getByTestId('AttackDialog')).toBeInTheDocument();
    expect(screen.getByTestId('heavy-attack')).toBeInTheDocument();
    expect(screen.getByTestId('light-attack')).toBeInTheDocument();
    expect(screen.getByTestId('medium-attack')).toBeInTheDocument();
  });
});
