import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import gameReducer from 'store/game/game.slice';

import { gameSagas } from 'store/game/game.saga';
import { all } from 'redux-saga/effects';

const saga = createSagaMiddleware();

export const rootReducer = combineReducers({
  game: gameReducer,
});

function* sagas() {
  yield all([gameSagas()]);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

saga.run(sagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
