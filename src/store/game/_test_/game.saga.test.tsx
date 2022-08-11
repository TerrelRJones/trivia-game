import { AttackStrengthType } from 'models';
import { getQuestionFetch } from '../game.saga';
import { getQuestion } from '../game.slice';
import { call } from 'redux-saga/effects';
import { BASE_QUESTION_URL } from 'const/Urls';

describe('getQuestionsFetchSaga', () => {
  it('should call api to fetch hard question, and store in redux on success.', () => {
    const action = getQuestion({ difficulty: AttackStrengthType.HARD });
    const iterator = getQuestionFetch(action);

    expect(iterator.next().value).toEqual(
      call(
        fetch,
        `${BASE_QUESTION_URL}amount=1&category=21&difficulty=${AttackStrengthType.HARD}&type=multiple`
      )
    );
    const mockData = {
      response_code: 0,
      results: [
        {
          category: 'Sports',
          type: 'multiple',
          difficulty: 'medium',
          question:
            'Which portuguese island is soccer player Cristiano Ronaldo from?',
          correct_answer: 'Madeira',
          incorrect_answers: ['Terceira', 'Santa Maria', 'Porto Santo'],
        },
      ],
    };

    const mockResponse = {
      json: () => {
        return mockData;
      },
    };

    iterator.next(mockResponse);
  });
});
