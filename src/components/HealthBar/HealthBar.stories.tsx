import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';

import { HealthBar } from './HealthBar';

export default {
  title: 'HealthBar',
  component: HealthBar,
} as ComponentMeta<typeof HealthBar>;

const Template: ComponentStory<typeof HealthBar> = (args) => (
  <StoriesBackgroundContainer>
    <HealthBar {...args} />
  </StoriesBackgroundContainer>
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
