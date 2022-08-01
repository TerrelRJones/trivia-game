import styled from 'styled-components';
import { HealthBar } from './HealthBar';

export default {
  title: 'HealthBar',
  component: HealthBar,
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, #000e5d 0%, #010024 100%);
`;

const Template = (args) => (
  <Background>
    <HealthBar {...args} />
  </Background>
);

export const HighHealth = Template.bind({});
HighHealth.args = {
  maxHealth: 150,
  currentHealth: 150,
};

export const BadHealth = Template.bind({});
BadHealth.args = {
  maxHealth: 150,
  currentHealth: 40,
};

export const ReversedHighHealth = Template.bind({});
ReversedHighHealth.args = {
  maxHealth: 150,
  currentHealth: 150,
  isReversed: true,
};

export const ReversedBadHealth = Template.bind({});
ReversedBadHealth.args = {
  maxHealth: 150,
  currentHealth: 40,
  isReversed: true,
};
