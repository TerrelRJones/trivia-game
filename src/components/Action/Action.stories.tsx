import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';

import Action from '.';
import { ActionState } from './Action';

export default {
  title: 'Action',
  component: Action,
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => (
  <StoriesBackgroundContainer>
    <Action {...args} />
  </StoriesBackgroundContainer>
);

export const Attack = Template.bind({});
Attack.args = {
  attackValue: 10,
  actionState: ActionState.ATTACK,
};

export const AttackReversed = Template.bind({});
AttackReversed.args = {
  attackValue: 10,
  actionState: ActionState.ATTACK,
  isReversed: true,
};

export const Block = Template.bind({});
Block.args = {
  attackValue: 10,
  actionState: ActionState.BLOCK,
};

export const BlockReversed = Template.bind({});
BlockReversed.args = {
  attackValue: 10,
  actionState: ActionState.BLOCK,
  isReversed: true,
};
