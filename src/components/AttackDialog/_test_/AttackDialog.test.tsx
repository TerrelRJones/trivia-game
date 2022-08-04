import { screen } from '@testing-library/react';
import AttackDialog from 'components/AttackDialog';

import { renderWithProviders } from 'testHelpers';

describe('AttackDialog Component', () => {
  it('should render AttackDialog component to DOM', () => {
    renderWithProviders(<AttackDialog testID="AttackDialog" />);
    expect(screen.getByTestId('AttackDialog')).toBeInTheDocument();
  });

  it('should render Light Attack button to DOM', () => {
    renderWithProviders(<AttackDialog testID="AttackDialog" />);
    expect(screen.getByTestId('light-attack')).toBeInTheDocument();
  });
  it('should render Medium Attack button to DOM', () => {
    renderWithProviders(<AttackDialog testID="AttackDialog" />);
    expect(screen.getByTestId('medium-attack')).toBeInTheDocument();
  });
  it('should render Heavy Attack button to DOM', () => {
    renderWithProviders(<AttackDialog testID="AttackDialog" />);
    expect(screen.getByTestId('heavy-attack')).toBeInTheDocument();
  });
});
