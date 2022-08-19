import { screen } from '@testing-library/react';
import FoxKnight from 'components/FoxKnight';

import { renderWithProviders } from 'testHelpers';

describe('FoxKnight Component', () => {
  it('should render FoxKnight component to DOM', () => {
    renderWithProviders(<FoxKnight testID="FoxKnight"/>);
    expect(screen.getByTestId('FoxKnight')).toBeInTheDocument();
  });
});
