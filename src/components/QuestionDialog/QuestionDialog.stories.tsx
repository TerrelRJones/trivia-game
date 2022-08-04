import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import QuestionDialog from '.';

export default {
  title: 'QuestionDialog',
  component: QuestionDialog,
} as ComponentMeta<typeof QuestionDialog>;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, #000e5d 0%, #010024 100%);
`;

const Template: ComponentStory<typeof QuestionDialog> = (args) => (
  <Background>
    <QuestionDialog {...args} />
  </Background>
);

export const Default = Template.bind({});
Default.args = {
};
