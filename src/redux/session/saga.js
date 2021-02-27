import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  SESSION_GET_LIST,
  SESSION_ADD_ITEM,
  SESSION_DELETE_ITEM,
  SESSION_UPDATE_ITEM,
} from "../actions";
import {
  getSessionListSuccess,
  getSessionListError,
  addSessionItemSuccess,
  addSessionItemError,
  deleteSessionItemError,
  deleteSessionItemSuccess,
  updateSessionItemSuccess,
  updateSessionItemError,
  deleteSessionItemCheck,
} from "./actions";
import {
  requestDeleteSession,
  requestGetSession,
  requestPostSession,
  requestUpdateSession,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getsessionListItems() {
  try {
    const response = yield call(requestGetSession);
    yield put(getSessionListSuccess(response.data.data));
  } catch (error) {
    yield put(getSessionListError(error.message));
  }
}

function* addsessionItem({ payload }) {
  try {
  const result = yield call(requestPostSession, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addSessionItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addSessionItemError(error.message));
  }
}

function* deletesessionItem(payload) {
  try {
    const response = yield call(requestDeleteSession, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteSessionItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteSessionItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteSessionItemError(error.message));
  }
}
function* updatesessionItem({ payload }) {
  try {
    const result = yield call(requestUpdateSession, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateSessionItemSuccess(result.data));
  } catch (error) {
    yield put(updateSessionItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(SESSION_GET_LIST, getsessionListItems);
}

export function* watchAddItem() {
  yield takeEvery(SESSION_ADD_ITEM, addsessionItem);
}
export function* watchDeleteItem() {
  yield takeEvery(SESSION_DELETE_ITEM, deletesessionItem);
}

export function* watchUpdateItem() {
  yield takeEvery(SESSION_UPDATE_ITEM, updatesessionItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
