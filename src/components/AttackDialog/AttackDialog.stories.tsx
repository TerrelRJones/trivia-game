import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import AttackDialog from '.';

export default {
  title: 'AttackDialog',
  component: AttackDialog,
} as ComponentMeta<typeof AttackDialog>;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, #000e5d 0%, #010024 100%);
`;

const Template: ComponentStory<typeof AttackDialog> = (args) => (
  <Background>
    <AttackDialog {...args} />
  </Background>
);

export const Default = Template.bind({});
Default.args = {
};
