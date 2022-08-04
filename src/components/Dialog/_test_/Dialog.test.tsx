import { screen } from '@testing-library/react';
import Dialog from 'components/Dialog';

import ActionDialog from 'components/ActionDialog';
import AttackDialog from 'components/AttackDialog';
import QuestionDialog from 'components/QuestionDialog';

import { renderWithProviders } from 'testHelpers';

describe('Dialog Component', () => {
  it('should render Dialog component to DOM', () => {
    renderWithProviders(
      <Dialog testID="Dialog" message="test" dialog={<ActionDialog />} />
    );
    expect(screen.getByTestId('Dialog')).toBeInTheDocument();
  });

  it('should render Easy Attack as title', () => {
    renderWithProviders(
      <Dialog message="Easy Attack" dialog={<AttackDialog />} />
    );

    expect(screen.getByTestId('title')).toHaveTextContent('Easy Attack');
  });
});
