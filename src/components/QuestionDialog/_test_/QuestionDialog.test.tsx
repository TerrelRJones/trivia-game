import { screen } from '@testing-library/react';
import QuestionDialog from 'components/QuestionDialog';

import { renderWithProviders } from 'testHelpers';

import { questionOne } from '../mockQuestionData';
const { question, options, answer } = questionOne;

describe('QuestionDialog Component', () => {
  it('should render QuestionDialog component to DOM', () => {
    renderWithProviders(
      <QuestionDialog
        testID="question-dialog"
        question={question}
        options={options}
        answer={answer}
      />
    );
    expect(screen.getByTestId('question-dialog')).toBeInTheDocument();
  });

  it(`should render ${question} as the question.`, () => {
    renderWithProviders(
      <QuestionDialog
        testID="question-dialog"
        question={question}
        options={options}
        answer={answer}
      />
    );
    expect(screen.getByTestId('question-text')).toHaveTextContent(question);
  });

  it(`should render ${options[2]} as button text`, () => {
    renderWithProviders(
      <QuestionDialog
        testID="question-dialog"
        question={question}
        options={options}
        answer={answer}
      />
    );
    expect(screen.getByTestId('button-2')).toHaveTextContent(options[2]);
  });
});
