import { screen } from '@testing-library/react';
import WizardPig from 'components/WizardPig';

import { renderWithProviders } from 'testHelpers';

describe('WizardPig Component', () => {
  it('should render WizardPig component to DOM', () => {
    renderWithProviders(<WizardPig animation={false} testID="WizardPig" />);
    expect(screen.getByTestId('WizardPig')).toBeInTheDocument();
  });
});
