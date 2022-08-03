import { screen } from '@testing-library/react';
import Avatar from 'components/Avatar';

import foxAvatar from 'assets/images/fox-knight.svg';
import wizardPigAvatar from 'assets/images/wizard-pig.svg';

import { renderWithProviders } from 'testHelpers';

describe('Button Component', () => {
  it('should render Fox Knight as avatar', () => {
    renderWithProviders(
      <Avatar testID="avatar-1" avatar={foxAvatar} name="Terrel" />
    );
    expect(screen.getByTestId('avatar-1')).toHaveAttribute(
      'src',
      'fox-knight.svg'
    );
  });

  it('should render Wizard Pig as avatar', () => {
    renderWithProviders(
      <Avatar testID="avatar-1" avatar={wizardPigAvatar} name="Wizard Pig" />
    );
    expect(screen.getByTestId('avatar-1')).toHaveAttribute(
      'src',
      'wizard-pig.svg'
    );
  });

  it('should render Wizard Pig as name', () => {
    renderWithProviders(
      <Avatar testID="avatar-1" avatar={wizardPigAvatar} name="Wizard Pig" />
    );
    expect(screen.getByTestId('name')).toHaveTextContent('Wizard Pig');
  });
});
