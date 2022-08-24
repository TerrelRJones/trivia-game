import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import GameAvatar from '.';

export default {
  title: 'GameAvatar',
  component: GameAvatar,
} as ComponentMeta<typeof GameAvatar>;

const Template: ComponentStory<typeof GameAvatar> = (args) => (
  <StoriesBackgroundContainer>
    <GameAvatar {...args} />
  </StoriesBackgroundContainer>
);

export const Default = Template.bind({});
Default.args = {
};
