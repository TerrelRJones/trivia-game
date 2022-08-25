import { screen } from '@testing-library/react';
import DragonSeth from 'components/DragonSeth';

import { renderWithProviders } from 'testHelpers';

describe('DragonSeth Component', () => {
  it('should render DragonSeth component to DOM', () => {
    renderWithProviders(<DragonSeth testID="DragonSeth"/>);
    expect(screen.getByTestId('DragonSeth')).toBeInTheDocument();
  });
});
