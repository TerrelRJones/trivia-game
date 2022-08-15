import { screen } from '@testing-library/react';
import QuestionDialog from 'components/QuestionDialog';

import { renderWithProviders } from 'testHelpers';

import { questionOne } from '../mockQuestionData';
const { text, choices, answer } = questionOne;

describe('QuestionDialog Component', () => {
  it('should render QuestionDialog component to DOM', () => {
    renderWithProviders(
      <QuestionDialog
        testID="question-dialog"
        question={text}
        options={choices}
        answer={answer}
      />
    );
    expect(screen.getByTestId('question-dialog')).toBeInTheDocument();
  });

  it(`should render ${text} as the question.`, () => {
    renderWithProviders(
      <QuestionDialog
        testID="question-dialog"
        question={text}
        options={choices}
        answer={answer}
      />
    );
    expect(screen.getByTestId('question-text')).toHaveTextContent(text);
  });

  it(`should render ${choices[2]} as button text`, () => {
    renderWithProviders(
      <QuestionDialog
        testID="question-dialog"
        question={text}
        options={choices}
        answer={answer}
      />
    );
    expect(screen.getByTestId('button-2')).toHaveTextContent(choices[2]);
  });
});
