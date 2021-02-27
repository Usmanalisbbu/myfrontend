import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  EVALUATIONCOMPENTENCIES_GET_LIST,
  EVALUATIONCOMPENTENCIES_ADD_ITEM,
  EVALUATIONCOMPENTENCIES_DELETE_ITEM,
  EVALUATIONCOMPENTENCIES_UPDATE_ITEM,
} from "../actions";
import {
  getEvaluationcompentenciesListSuccess,
  getEvaluationcompentenciesListError,
  addEvaluationcompentenciesItemSuccess,
  addEvaluationcompentenciesItemError,
  deleteEvaluationcompentenciesItemError,
  deleteEvaluationcompentenciesItemSuccess,
  updateEvaluationcompentenciesItemSuccess,
  updateEvaluationcompentenciesItemError,
  deleteEvaluationcompentenciesItemCheck,
} from "./actions";
import {
  requestDeleteEvaluationcompentencies,
  requestGetEvaluationcompentencies,
  requestPostEvaluationcompentencies,
  requestUpdateEvaluationcompentencies,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getreligionListItems() {
  try {
    const response = yield call(requestGetEvaluationcompentencies);
    yield put(getEvaluationcompentenciesListSuccess(response.data));
  } catch (error) {
    yield put(getEvaluationcompentenciesListError(error.message));
  }
}

function* addreligionItem({ payload }) {
  try {
    const result = yield call(requestPostEvaluationcompentencies, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addEvaluationcompentenciesItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addEvaluationcompentenciesItemError(error.message));
  }
}

function* deletereligionItem(payload) {
  try {
    const response = yield call(requestDeleteEvaluationcompentencies, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteEvaluationcompentenciesItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteEvaluationcompentenciesItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteEvaluationcompentenciesItemError(error.message));
  }
}
function* updatereligionItem({ payload }) {
  try {
    const result = yield call(requestUpdateEvaluationcompentencies, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateEvaluationcompentenciesItemSuccess(result.data));
  } catch (error) {
    yield put(updateEvaluationcompentenciesItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(EVALUATIONCOMPENTENCIES_GET_LIST, getreligionListItems);
}

export function* watchAddItem() {
  yield takeEvery(EVALUATIONCOMPENTENCIES_ADD_ITEM, addreligionItem);
}
export function* watchDeleteItem() {
  yield takeEvery(EVALUATIONCOMPENTENCIES_DELETE_ITEM, deletereligionItem);
}

export function* watchUpdateItem() {
  yield takeEvery(EVALUATIONCOMPENTENCIES_UPDATE_ITEM, updatereligionItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
