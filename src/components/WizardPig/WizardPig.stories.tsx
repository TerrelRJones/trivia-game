import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import WizardPig from '.';

export default {
  title: 'Characters',
  component: WizardPig,
} as ComponentMeta<typeof WizardPig>;

const Template: ComponentStory<typeof WizardPig> = (args) => (
  <StoriesBackgroundContainer>
    <WizardPig {...args} />
  </StoriesBackgroundContainer>
);

export const Pig = Template.bind({});
Pig.args = {};
