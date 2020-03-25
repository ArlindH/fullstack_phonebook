import { all, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';
import { api_url } from '../../api_config';
import { notification } from 'antd';

export function* getPeople(payload) {
    try {
        const response = yield axios.get(`${api_url}/people`, {params: payload.parameters});

        if (response.data.success) yield put({ type: actions.GET_PEOPLE_SUCCESS, people: response.data.people });
        else yield put({ type: actions.GET_PEOPLE_ERROR, error: response.data.error });
    } catch (e) {
        yield put({ type: actions.GET_PEOPLE_ERROR, error: e });
    }
}

export function* addPerson(payload) {
    try {
        const response = yield axios.post(`${api_url}/people`, { ...payload.data });

        if (response.data.success) {
            yield put({ type: actions.ADD_PERSON_SUCCESS, person: response.data.person });
            payload.clearForm();
            notification.open({message: 'Successfully added person'});
            // Take to first page
            yield put({ type: actions.GET_PEOPLE_REQUEST, parameters: { page: 1, pageSize: 10 } });
        }
        else {
            yield put({ type: actions.ADD_PERSON_ERROR, error: response.data.error });
            notification.open({message: 'Error', description: response.data.error.message});
        }
     } catch (e) {
        yield put({ type: actions.ADD_PERSON_ERROR, error: e });
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_PEOPLE_REQUEST, getPeople),
        yield takeEvery(actions.ADD_PERSON_REQUEST, addPerson),
    ])
}