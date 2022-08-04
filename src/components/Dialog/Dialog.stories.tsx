import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import Dialog from '.';

import ActionDialog from 'components/ActionDialog';
import AttackDialog from 'components/AttackDialog';
import QuestionDialog from 'components/QuestionDialog';

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

const arr = [
  'Transformers',
  'Cabbage Patch Kids',
  "Rubik's Cube",
  'Care Bears',
];

export const Action = Template.bind({});
Action.args = {
  message: 'Choose an action',
  dialog: <ActionDialog />,
};

export const Attack = Template.bind({});
Attack.args = {
  message: 'Choose an attack',
  dialog: <AttackDialog />,
};

export const EasyAttack = Template.bind({});
EasyAttack.args = {
  message: 'Easy Attack',
  dialog: (
    <QuestionDialog
      question="Which best selling toy of 1983 caused hysteria, resulting in riots
      breaking out in stores?"
      options={arr}
      answer="Cabbage Patch Kids"
    />
  ),
};
