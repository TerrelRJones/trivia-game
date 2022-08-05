import styled from 'styled-components/macro';
import Avatar from '.';

import foxAvatar from 'assets/images/fox-knight.svg';
import wizardPigAvatar from 'assets/images/wizard-pig.svg';

export default {
  title: 'Avatar',
  component: Avatar,
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
    <Avatar {...args} />
  </Background>
);

export const Fox = Template.bind({});
Fox.args = {
  name: 'Terrel',
  avatar: foxAvatar,
};

export const WizardPig = Template.bind({});
WizardPig.args = {
  name: 'Wizard Pig',
  avatar: wizardPigAvatar,
};
