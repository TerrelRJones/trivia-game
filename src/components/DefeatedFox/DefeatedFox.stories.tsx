import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import DefeatedFox from '.';

export default {
  title: 'Characters',
  component: DefeatedFox,
} as ComponentMeta<typeof DefeatedFox>;

const Template: ComponentStory<typeof DefeatedFox> = (args) => (
  <StoriesBackgroundContainer>
    <DefeatedFox {...args} />
  </StoriesBackgroundContainer>
);

export const FoxDefeated = Template.bind({});
FoxDefeated.args = {};
