import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from 'store';

import { StoriesBackgroundContainer } from 'styles/styledElements';
import ActionDialog from '.';

export default {
  title: 'ActionDialog',
  component: ActionDialog,
} as ComponentMeta<typeof ActionDialog>;

const Template: ComponentStory<typeof ActionDialog> = (args) => (
  <StoriesBackgroundContainer>
    <Provider store={store}>
      <ActionDialog {...args} />
    </Provider>
  </StoriesBackgroundContainer>
);

export const Default = Template.bind({});
Default.args = {};
