// component.tsx
exports.component = (name) => `import styled from 'styled-components';

interface ${name}Props {
  testID?: string;
};

const ${name}Container = styled.div\`\`

export const ${name} = ({testID}: ${name}Props) => {
  return <${name}Container data-testid={testID}>${name}</${name}Container>;
};
`;

// stories.tsx
exports.story = (
  name
) => `import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoriesBackgroundContainer } from 'styles/styledElements';
import ${name} from '.';

export default {
  title: '${name}',
  component: ${name},
} as ComponentMeta<typeof ${name}>;

const Template: ComponentStory<typeof ${name}> = (args) => (
  <StoriesBackgroundContainer>
    <${name} {...args} />
  </StoriesBackgroundContainer>
);

export const Default = Template.bind({});
Default.args = {
};
`;

// test.tsx
exports.test = (name) => `import { screen } from '@testing-library/react';
import ${name} from 'components/${name}';

import { renderWithProviders } from 'testHelpers';

describe('${name} Component', () => {
  it('should render ${name} component to DOM', () => {
    renderWithProviders(<${name} testID="${name}"/>);
    expect(screen.getByTestId('${name}')).toBeInTheDocument();
  });
});
`;

// index.tsx
exports.index = (name) => `import { ${name} } from './${name}';

export default ${name};
`;
