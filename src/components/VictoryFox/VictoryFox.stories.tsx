import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import VictoryFox from '.';

export default {
  title: 'Characters',
  component: VictoryFox,
} as ComponentMeta<typeof VictoryFox>;

const Template: ComponentStory<typeof VictoryFox> = (args) => (
  <StoriesBackgroundContainer>
    <VictoryFox {...args} />
  </StoriesBackgroundContainer>
);

export const FoxVictory = Template.bind({});
FoxVictory.args = {};
