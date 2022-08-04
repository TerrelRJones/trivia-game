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

const arr = [
  'Transformers',
  'Cabbage Patch Kids',
  "Rubik's Cube",
  'Care Bears',
];

export const Default = Template.bind({});
Default.args = {
  question:
    ' Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?',
  options: arr,
  answer: 'Cabbage Patch Kids',
};
