// component.tsx
exports.component = (name) => `import styled from 'styled-components';

interface ${name}Props {
  testID?: string;
};

const Styled${name}Container = styled.div\`\`

export const ${name} = ({testID}: ${name}Props) => {
  return <Styled${name}Container data-testid={testID}>Hello 👋, I am a ${name} component.</Styled${name}Container>;
};
`;

// stories.tsx
exports.story = (
  name
) => `import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import ${name} from '.';

export default {
  title: '${name}',
  component: ${name},
} as ComponentMeta<typeof ${name}>;

const Background = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, #000e5d 0%, #010024 100%);
\`;

const Template: ComponentStory<typeof ${name}> = (args) => (
  <Background>
    <${name} {...args} />
  </Background>
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
