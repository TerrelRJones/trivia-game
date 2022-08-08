import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';

import Button from '.';
import { ButtonProps, ButtonType } from './Button';
import sword from 'assets/images/sword.svg';

export default {
  title: 'Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <StoriesBackgroundContainer>
    <Button {...args} />
  </StoriesBackgroundContainer>
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('clicked'),
  children: 'Play Again',
};

export const Easy = Template.bind({});
Easy.args = {
  buttonType: ButtonType.EASY,
  onClick: () => console.log('clicked'),
  children: 'Easy',
};
export const Medium = Template.bind({});
Medium.args = {
  buttonType: ButtonType.MEDIUM,
  onClick: () => console.log('clicked'),
  children: 'Medium',
};
export const Seth = Template.bind({});
Seth.args = {
  buttonType: ButtonType.SETH,
  onClick: () => console.log('clicked'),
  children: 'Seth',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: ButtonType.SECONDARY,
  onClick: () => console.log('clicked'),
  children: 'Abraham Lincoln',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  buttonType: ButtonType.SECONDARY,
  onClick: () => console.log('clicked'),
  children: 'Abraham Lincoln',
  disabled: true,
};

export const LightAttack = Template.bind({});
LightAttack.args = {
  attackIcon: [sword],
  buttonType: ButtonType.ATTACK,
  onClick: () => console.log('clicked'),
  children: 'Light Attack',
};

export const MediumAttack = Template.bind({});
MediumAttack.args = {
  attackIcon: [sword, sword],
  buttonType: ButtonType.ATTACK,
  onClick: () => console.log('clicked'),
  children: 'Medium Attack',
};

export const HeavyAttack = Template.bind({});
HeavyAttack.args = {
  attackIcon: [sword, sword, sword],
  buttonType: ButtonType.ATTACK,
  onClick: () => console.log('clicked'),
  children: 'Heavy Attack',
};

export const Correct = Template.bind({});
Correct.args = {
  buttonType: ButtonType.SECONDARY,
  correct: true,
  onClick: () => console.log('clicked'),
  children: 'Abraham Lincoln',
};

export const Inorrect = Template.bind({});
Inorrect.args = {
  buttonType: ButtonType.SECONDARY,
  incorrect: true,
  onClick: () => console.log('clicked'),
  children: 'Abraham Lincoln',
};

export const Attack = Template.bind({});
Attack.args = {
  onClick: () => console.log('clicked'),
  children: 'Attack',
  attack: true,
};

export const Block = Template.bind({});
Block.args = {
  onClick: () => console.log('clicked'),
  children: 'Block',
  block: true,
};
