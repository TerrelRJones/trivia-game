import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import DragonSeth from '.';

export default {
  title: 'Characters',
  component: DragonSeth,
} as ComponentMeta<typeof DragonSeth>;

const Template: ComponentStory<typeof DragonSeth> = (args) => (
  <StoriesBackgroundContainer>
    <DragonSeth {...args} />
  </StoriesBackgroundContainer>
);

export const SethDragon = Template.bind({});
SethDragon.args = {};
