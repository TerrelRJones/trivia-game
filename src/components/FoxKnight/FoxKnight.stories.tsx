import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import { Provider } from 'react-redux';
import { store } from 'store';
import FoxKnight from '.';

export default {
  title: 'Characters',
  component: FoxKnight,
} as ComponentMeta<typeof FoxKnight>;

const Template: ComponentStory<typeof FoxKnight> = (args) => (
  <StoriesBackgroundContainer>
    <Provider store={store}>
      <FoxKnight {...args} />
    </Provider>
  </StoriesBackgroundContainer>
);

export const Fox = Template.bind({});
Fox.args = {};
