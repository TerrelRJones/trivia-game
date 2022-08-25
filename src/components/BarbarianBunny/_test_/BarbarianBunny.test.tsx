import { screen } from '@testing-library/react';
import BarbarianBunny from 'components/BarbarianBunny';

import { renderWithProviders } from 'testHelpers';

describe('BarbarianBunny Component', () => {
  it('should render BarbarianBunny component to DOM', () => {
    renderWithProviders(<BarbarianBunny testID="BarbarianBunny"/>);
    expect(screen.getByTestId('BarbarianBunny')).toBeInTheDocument();
  });
});
