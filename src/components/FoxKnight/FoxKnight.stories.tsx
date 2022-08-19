import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import FoxKnight from '.';

export default {
  title: 'Characters',
  component: FoxKnight,
} as ComponentMeta<typeof FoxKnight>;

const Template: ComponentStory<typeof FoxKnight> = (args) => (
  <StoriesBackgroundContainer>
    <FoxKnight {...args} />
  </StoriesBackgroundContainer>
);

export const Fox = Template.bind({});
Fox.args = {};
