import { screen } from '@testing-library/react';
import Action from 'components/Action';
import { ActionState } from 'components/Action/Action';

import { renderWithProviders } from 'testHelpers';

describe('Button Component', () => {
  it('should render sword icon if action state is ATTACK', () => {
    renderWithProviders(
      <Action actionState={ActionState.ATTACK} attackValue={10} />
    );
    expect(screen.getByTestId('sword-icon')).toHaveAttribute(
      'src',
      'sword.svg'
    );
  });

  it('should not render sword icon if action state is BLOCK', () => {
    renderWithProviders(
      <Action actionState={ActionState.BLOCK} attackValue={10} />
    );
    expect(screen.queryByTestId('sword-icon')).not.toBeInTheDocument();
  });

  it('should render shield icon if action state is BLOCK', () => {
    renderWithProviders(
      <Action actionState={ActionState.BLOCK} attackValue={10} />
    );
    expect(screen.getByTestId('shield-icon')).toHaveAttribute(
      'src',
      'shield.svg'
    );
  });

  it('should not render block icon if action state is ATTACK', () => {
    renderWithProviders(
      <Action actionState={ActionState.ATTACK} attackValue={10} />
    );
    expect(screen.queryByTestId('shield-icon')).not.toBeInTheDocument();
  });

  it('should render attack value as 10', () => {
    renderWithProviders(
      <Action
        testID="action-btn"
        actionState={ActionState.ATTACK}
        attackValue={10}
      />
    );
    expect(screen.getByTestId('attack-value')).toHaveTextContent('10');
  });
});
