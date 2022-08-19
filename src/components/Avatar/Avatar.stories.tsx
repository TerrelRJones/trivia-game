import { ComponentStory, ComponentMeta } from '@storybook/react';
import FoxKnight from 'components/FoxKnight';
import WizardPig from 'components/WizardPig';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import Avatar from '.';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <StoriesBackgroundContainer>
    <Avatar {...args} />
  </StoriesBackgroundContainer>
);

export const Fox = Template.bind({});
Fox.args = {
  name: 'Terrel',
  avatar: <FoxKnight />,
};

export const Pig = Template.bind({});
Pig.args = {
  name: 'Wizard Pig',
  avatar: <WizardPig />,
};
