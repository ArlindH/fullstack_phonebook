import { all } from 'redux-saga/effects';
import peopleSagas from './people/saga';

export default function* rootSaga() {
    yield all([
        peopleSagas(),
    ]);
}
