import { screen } from '@testing-library/react';
import HealthBar from 'components/HealthBar';

import { renderWithProviders } from 'testHelpers';

describe('HealthBar Component', () => {
  it('should render Health Bar to screen', () => {
    renderWithProviders(
      <HealthBar testID="health-bar-1" currentHealth={50} maxHealth={150} />
    );
    expect(screen.getByTestId('health-bar-1')).toBeInTheDocument();
  });

  it('should render heart icon to screen', () => {
    renderWithProviders(
      <HealthBar testID="health-bar-1" currentHealth={100} maxHealth={150} />
    );
    expect(screen.getByTestId('health-bar-1')).toContainElement(
      screen.getByTestId('heart-icon')
    );
  });

  it('should render full health icon if health above 50%', () => {
    renderWithProviders(
      <HealthBar testID="health-bar-1" currentHealth={100} maxHealth={150} />
    );
    expect(screen.getByTestId('heart-icon')).toHaveAttribute(
      'src',
      'health-full.svg'
    );
  });

  it('should render health bar green if health above 50%', () => {
    renderWithProviders(
      <HealthBar testID="health-bar-1" currentHealth={100} maxHealth={150} />
    );
    expect(screen.getByTestId('health-bar')).toHaveStyle(
      'background: linear-gradient(270deg, #1CFF00 0%, #0F8C00 100%)'
    );
  });

  it('should render health bar red if health below/at 50%', () => {
    renderWithProviders(
      <HealthBar testID="health-bar-1" currentHealth={40} maxHealth={150} />
    );
    expect(screen.getByTestId('health-bar')).toHaveStyle(
      'background: linear-gradient(270deg, #FF0000 0%, #960000 100%)'
    );
  });

  it('should render low health icon if health below/at 50%', () => {
    renderWithProviders(
      <HealthBar testID="health-bar-1" currentHealth={50} maxHealth={150} />
    );
    expect(screen.getByTestId('heart-icon')).toHaveAttribute(
      'src',
      'health-low.svg'
    );
  });

  it('should render "50/150" as health text', () => {
    renderWithProviders(
      <HealthBar testID="health-bar-1" currentHealth={50} maxHealth={150} />
    );
    expect(screen.getByTestId('health-text')).toHaveTextContent('50/150');
  });
});
