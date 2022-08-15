import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import Dialog from '.';

import ActionDialog from 'components/ActionDialog';
import AttackDialog from 'components/AttackDialog';
import QuestionDialog from 'components/QuestionDialog';

export default {
  title: 'Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <StoriesBackgroundContainer>
    <Dialog {...args} />
  </StoriesBackgroundContainer>
);

const questionArr = [
  'Transformers',
  'Cabbage Patch Kids',
  "Rubik's Cube",
  'Care Bears',
];

export const Action = Template.bind({});
Action.args = {
  message: 'Choose an action',
  children: <ActionDialog />,
};

export const Attack = Template.bind({});
Attack.args = {
  message: 'Choose an attack',
  children: <AttackDialog />,
};

export const EasyAttack = Template.bind({});
EasyAttack.args = {
  message: 'Easy Attack',
  children: (
    <QuestionDialog
      question="Which best selling toy of 1983 caused hysteria, resulting in riots
      breaking out in stores?"
      options={questionArr}
      answer="Cabbage Patch Kids"
    />
  ),
};
