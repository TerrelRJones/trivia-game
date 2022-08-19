import { screen } from '@testing-library/react';
import Avatar from 'components/Avatar';

import { renderWithProviders } from 'testHelpers';
import FoxKnight from 'components/FoxKnight';
import WizardPig from 'components/WizardPig';

describe('Avatar Component', () => {
  it('should render Fox Knight as avatar', () => {
    renderWithProviders(
      <Avatar testID="avatar-1" avatar={<FoxKnight />} name="Terrel" />
    );
    expect(screen.getByTestId('avatar-1')).toBeInTheDocument();
  });

  it('should render Wizard Pig as avatar', () => {
    renderWithProviders(
      <Avatar testID="avatar-1" avatar={<WizardPig />} name="Wizard Pig" />
    );
    expect(screen.getByTestId('avatar-1')).toBeInTheDocument();
  });

  it('should render Wizard Pig as name', () => {
    renderWithProviders(
      <Avatar testID="avatar-1" avatar={<WizardPig />} name="Wizard Pig" />
    );
    expect(screen.getByTestId('name')).toHaveTextContent('Wizard Pig');
  });
});
