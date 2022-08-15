import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import AttackDialog from '.';

export default {
  title: 'AttackDialog',
  component: AttackDialog,
} as ComponentMeta<typeof AttackDialog>;

const Template: ComponentStory<typeof AttackDialog> = (args) => (
  <StoriesBackgroundContainer>
    <Provider store={store}>
      <AttackDialog {...args} />
    </Provider>
  </StoriesBackgroundContainer>
);

export const Default = Template.bind({});
Default.args = {};
