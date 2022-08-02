import styled from 'styled-components';
import Avatar from '.';

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
};

export const FoxDefeated = Template.bind({});
FoxDefeated.args = {
  name: 'Terrel',
};
