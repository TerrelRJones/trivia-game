import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import Avatar from '.';

import foxAvatar from 'assets/images/fox-knight.svg';
import wizardPigAvatar from 'assets/images/wizard-pig.svg';

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
  avatar: foxAvatar,
};

export const WizardPig = Template.bind({});
WizardPig.args = {
  name: 'Wizard Pig',
  avatar: wizardPigAvatar,
};
