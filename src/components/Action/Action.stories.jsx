import styled from 'styled-components';
import Action from '.';
import { ActionState } from './Action';

export default {
  title: 'Action',
  component: Action,
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, #000e5d 0%, #010024 100%);
`;

const Template = (args) => (
  <Background>
    <Action {...args} />
  </Background>
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
