import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import Round from '.';

export default {
  title: 'RoundTitle',
  component: Round,
} as ComponentMeta<typeof Round>;

const Template: ComponentStory<typeof Round> = (args) => (
  <StoriesBackgroundContainer>
    <Round {...args} />
  </StoriesBackgroundContainer>
);

export const Default = Template.bind({});
Default.args = {
  round: 1,
};
