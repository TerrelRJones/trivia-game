import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import BarbarianBunny from '.';

export default {
  title: 'Characters',
  component: BarbarianBunny,
} as ComponentMeta<typeof BarbarianBunny>;

const Template: ComponentStory<typeof BarbarianBunny> = (args) => (
  <StoriesBackgroundContainer>
    <BarbarianBunny {...args} />
  </StoriesBackgroundContainer>
);

export const Bunny = Template.bind({});
Bunny.args = {};
