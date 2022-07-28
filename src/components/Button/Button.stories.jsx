import styled from 'styled-components';
import Button from '.';
import { ButtonType } from './Button';

export default {
  title: 'Buttons',
  component: Button,
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
    <Button {...args} />
  </Background>
);

export const Default = Template.bind({});
Default.args = {
  onclick: console.log('clicked'),
  children: 'Play Again',
};

export const Easy = Template.bind({});
Easy.args = {
  buttonType: ButtonType.EASY,
  onclick: console.log('clicked'),
  children: 'Easy',
};
export const Medium = Template.bind({});
Medium.args = {
  buttonType: ButtonType.MEDIUM,
  onclick: console.log('clicked'),
  children: 'Medium',
};
export const Seth = Template.bind({});
Seth.args = {
  buttonType: ButtonType.SETH,
  onclick: console.log('clicked'),
  children: 'Seth',
};
export const Disabled = Template.bind({});
Disabled.args = {
  onclick: console.log('clicked'),
  children: 'Abraham Lincoln',
  disabled: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: ButtonType.SECONDARY,
  onclick: console.log('clicked'),
  children: 'Abraham Lincoln',
};
export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  buttonType: ButtonType.SECONDARY,
  onclick: console.log('clicked'),
  children: 'Abraham Lincoln',
  disabled: true,
};
