import styled from 'styled-components';
import Round from '.';

export default {
  title: 'RoundTitle',
  component: Round,
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
    <Round {...args} />
  </Background>
);

export const Default = Template.bind({});
Default.args = {
  round: 1,
};
