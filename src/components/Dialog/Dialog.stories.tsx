import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import Dialog from '.';

export default {
  title: 'Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, #000e5d 0%, #010024 100%);
`;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <Background>
    <Dialog {...args} />
  </Background>
);

export const Attack = Template.bind({});
Attack.args = {
  message: 'Choose an Attack',
};

export const EasyAttack = Template.bind({});
EasyAttack.args = {
  message: 'Easy Attack',
};
