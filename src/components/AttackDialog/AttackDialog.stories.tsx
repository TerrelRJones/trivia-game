import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import AttackDialog from '.';

export default {
  title: 'AttackDialog',
  component: AttackDialog,
} as ComponentMeta<typeof AttackDialog>;

const Template: ComponentStory<typeof AttackDialog> = (args) => (
  <StoriesBackgroundContainer>
    <AttackDialog {...args} />
  </StoriesBackgroundContainer>
);

export const Default = Template.bind({});
Default.args = {};
