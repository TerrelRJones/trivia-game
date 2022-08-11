import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import QuestionDialog from '.';

import { questionOne } from './mockQuestionData';
const { text, choices, answer } = questionOne;

export default {
  title: 'QuestionDialog',
  component: QuestionDialog,
} as ComponentMeta<typeof QuestionDialog>;

const Template: ComponentStory<typeof QuestionDialog> = (args) => (
  <StoriesBackgroundContainer>
    <QuestionDialog {...args} />
  </StoriesBackgroundContainer>
);

export const Default = Template.bind({});
Default.args = {
  question: text,
  options: choices,
  answer,
};
