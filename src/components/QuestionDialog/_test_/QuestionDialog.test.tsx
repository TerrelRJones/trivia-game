import { screen } from '@testing-library/react';
import QuestionDialog from 'components/QuestionDialog';

import { renderWithProviders } from 'testHelpers';

describe('QuestionDialog Component', () => {
  it('should render QuestionDialog component to DOM', () => {
    renderWithProviders(<QuestionDialog testID="QuestionDialog"/>);
    expect(screen.getByTestId('QuestionDialog')).toBeInTheDocument();
  });
});
