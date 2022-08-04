import { screen } from '@testing-library/react';
import QuestionDialog from 'components/QuestionDialog';

import { renderWithProviders } from 'testHelpers';

const arr = [
  'Transformers',
  'Cabbage Patch Kids',
  "Rubik's Cube",
  'Care Bears',
];

const question =
  'Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?';

describe('QuestionDialog Component', () => {
  it('should render QuestionDialog component to DOM', () => {
    renderWithProviders(
      <QuestionDialog
        testID="question-dialog"
        question={question}
        options={arr}
        answer={arr[1]}
      />
    );
    expect(screen.getByTestId('question-dialog')).toBeInTheDocument();
  });

  it(`should render ${question} as the question.`, () => {
    renderWithProviders(
      <QuestionDialog
        testID="question-dialog"
        question={question}
        options={arr}
        answer={arr[1]}
      />
    );
    expect(screen.getByTestId('question-text')).toHaveTextContent(question);
  });

  it(`should render ${arr[2]} as button text`, () => {
    renderWithProviders(
      <QuestionDialog
        testID="question-dialog"
        question={question}
        options={arr}
        answer={arr[1]}
      />
    );
    expect(screen.getByTestId('button-2')).toHaveTextContent(arr[2]);
  });
});
