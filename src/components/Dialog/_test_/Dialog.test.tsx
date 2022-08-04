import { screen } from '@testing-library/react';
import Dialog from 'components/Dialog';

import { renderWithProviders } from 'testHelpers';

describe('Dialog Component', () => {
  it('should render Dialog component to DOM', () => {
    renderWithProviders(<Dialog testID="Dialog" message="test" />);
    expect(screen.getByTestId('Dialog')).toBeInTheDocument();
  });

  it('should render Easy Attack as title', () => {
    renderWithProviders(<Dialog message="Easy Attack" />);

    expect(screen.getByTestId('title')).toHaveTextContent('Easy Attack');
  });
});
