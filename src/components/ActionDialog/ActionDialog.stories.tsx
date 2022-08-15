import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import ActionDialog from '.';

export default {
  title: 'ActionDialog',
  component: ActionDialog,
} as ComponentMeta<typeof ActionDialog>;

const Template: ComponentStory<typeof ActionDialog> = (args) => (
  <StoriesBackgroundContainer>
    <ActionDialog {...args} />
  </StoriesBackgroundContainer>
);

export const Default = Template.bind({});
Default.args = {};
