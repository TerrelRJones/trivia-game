import { screen } from '@testing-library/react';
import GameAvatar from 'components/GameAvatar';

import { renderWithProviders } from 'testHelpers';

describe('GameAvatar Component', () => {
  it('should render GameAvatar component to DOM', () => {
    renderWithProviders(<GameAvatar avatar="dragon" testID="GameAvatar" />);

    expect(screen.getByTestId('GameAvatar')).toBeInTheDocument();
  });
});
