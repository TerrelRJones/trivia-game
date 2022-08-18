import { all, call, put, takeEvery } from 'redux-saga/effects';
import { BASE_QUESTION_URL } from 'const/Urls';

import {
  getQuestion,
  GetQuestionPayloadAction,
  getQuestionSuccess,
  QuestionData,
} from './game.slice';

import { QuestionStatus } from 'models';
import { shuffleArray } from 'helper/shuffleArray';

export function* getQuestionFetch(action: GetQuestionPayloadAction): any {
  try {
    const { difficulty } = action.payload;
    const questionData = yield call(
      fetch,
      `${BASE_QUESTION_URL}amount=1&category=21&difficulty=${difficulty}&type=multiple`
    );

    const res = yield questionData.json();
    const { question, correct_answer, incorrect_answers } = res.results[0];

    const formattedQuestion: QuestionData = {
      status: QuestionStatus.IDLE,
      text: question,
      answer: correct_answer,
      choices: shuffleArray([...incorrect_answers, correct_answer]),
    };

    yield put(getQuestionSuccess(formattedQuestion));
  } catch (e: any) {
    console.error(e.message);
  }
}

function* questionSaga() {
  yield takeEvery(getQuestion.type, getQuestionFetch);
}

export function* gameSagas() {
  yield all([questionSaga()]);
}
