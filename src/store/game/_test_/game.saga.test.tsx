import { AttackStrengthType } from 'models';
import { getQuestionFetch } from '../game.saga';
import { getQuestion, getQuestionSuccess } from '../game.slice';
import { call, put } from 'redux-saga/effects';
import { BASE_QUESTION_URL } from 'const/Urls';
import { QuestionStatus } from 'models';
import * as ShuffleHelper from 'helper/shuffleArray';

describe('getQuestionsFetchSaga', () => {
  it('should call api to fetch hard question, and store in redux on success.', () => {
    const shuffleArraySpy = jest.spyOn(ShuffleHelper, 'shuffleArray');

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

    const { question, correct_answer, incorrect_answers } = mockData.results[0];
    const mockChoices = [correct_answer, ...incorrect_answers];
    shuffleArraySpy.mockReturnValue(mockChoices);

    const expectedQuestion = {
      status: QuestionStatus.IDLE,
      text: question,
      answer: correct_answer,
      choices: mockChoices,
    };

    expect(iterator.next(mockData).value).toEqual(
      put(getQuestionSuccess(expectedQuestion))
    );

    expect(iterator.next().done).toBe(true);
  });

  it('should log error on failure.', () => {
    const action = getQuestion({ difficulty: AttackStrengthType.EASY });
    const iterator = getQuestionFetch(action);

    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockReturnValue(undefined);

    expect(iterator.next().value).toEqual(
      call(
        fetch,
        `${BASE_QUESTION_URL}amount=1&category=21&difficulty=${AttackStrengthType.EASY}&type=multiple`
      )
    );

    iterator.throw(new Error('api failure'));

    expect(consoleSpy).toHaveBeenCalledWith('api failure');

    expect(iterator.next().done).toBe(true);
  });
});
