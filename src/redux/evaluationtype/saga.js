import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  EVALUATIONTYPE_GET_LIST,
  EVALUATIONTYPE_ADD_ITEM,
  EVALUATIONTYPE_DELETE_ITEM,
  EVALUATIONTYPE_UPDATE_ITEM,
} from "../actions";
import {
  getEvaluationTypeListSuccess,
  getEvaluationTypeListError,
  addEvaluationTypeItemSuccess,
  addEvaluationTypeItemError,
  deleteEvaluationTypeItemError,
  deleteEvaluationTypeItemSuccess,
  updateEvaluationTypeItemSuccess,
  updateEvaluationTypeItemError,
  deleteEvaluationTypeItemCheck,
} from "./actions";
import {
  requestDeleteEvaluationType,
  requestGetEvaluationType,
  requestPostEvaluationType,
  requestUpdateEvaluationType,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getevaluationtypeListItems() {
  try {
    const response = yield call(requestGetEvaluationType);
    yield put(getEvaluationTypeListSuccess(response.data.data));
  } catch (error) {
    yield put(getEvaluationTypeListError(error.message));
  }
}

function* addevaluationtypeItem({ payload }) {
  try {
  const result = yield call(requestPostEvaluationType, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addEvaluationTypeItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addEvaluationTypeItemError(error.message));
  }
}

function* deleteevaluationtypeItem(payload) {
  try {
    const response = yield call(requestDeleteEvaluationType, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteEvaluationTypeItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteEvaluationTypeItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteEvaluationTypeItemError(error.message));
  }
}
function* updateevaluationtypeItem({ payload }) {
  try {
    const result = yield call(requestUpdateEvaluationType, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateEvaluationTypeItemSuccess(result.data));
  } catch (error) {
    yield put(updateEvaluationTypeItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(EVALUATIONTYPE_GET_LIST, getevaluationtypeListItems);
}

export function* watchAddItem() {
  yield takeEvery(EVALUATIONTYPE_ADD_ITEM, addevaluationtypeItem);
}
export function* watchDeleteItem() {
  yield takeEvery(EVALUATIONTYPE_DELETE_ITEM, deleteevaluationtypeItem);
}

export function* watchUpdateItem() {
  yield takeEvery(EVALUATIONTYPE_UPDATE_ITEM, updateevaluationtypeItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
