import { screen } from '@testing-library/react';
import VictoryFox from 'components/VictoryFox';

import { renderWithProviders } from 'testHelpers';

describe('VictoryFox Component', () => {
  it('should render VictoryFox component to DOM', () => {
    renderWithProviders(<VictoryFox testID="VictoryFox"/>);
    expect(screen.getByTestId('VictoryFox')).toBeInTheDocument();
  });
});
