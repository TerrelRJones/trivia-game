import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import ActionDialog from '.';

export default {
  title: 'ActionDialog',
  component: ActionDialog,
} as ComponentMeta<typeof ActionDialog>;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, #000e5d 0%, #010024 100%);
`;

const Template: ComponentStory<typeof ActionDialog> = (args) => (
  <Background>
    <ActionDialog {...args} />
  </Background>
);

export const Default = Template.bind({});
Default.args = {};
