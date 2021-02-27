import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  RELIGION_GET_LIST,
  RELIGION_ADD_ITEM,
  RELIGION_DELETE_ITEM,
  RELIGION_UPDATE_ITEM,
} from "../actions";
import {
  getReligionListSuccess,
  getReligionListError,
  addReligionItemSuccess,
  addReligionItemError,
  deleteReligionItemError,
  deleteReligionItemSuccess,
  updateReligionItemSuccess,
  updateReligionItemError,
  deleteReligionItemCheck,
} from "./actions";
import {
  requestDeleteReligion,
  requestGetReligion,
  requestPostReligion,
  requestUpdateReligion,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getreligionListItems() {
  try {
    const response = yield call(requestGetReligion);
    yield put(getReligionListSuccess(response.data.data));
  } catch (error) {
    yield put(getReligionListError(error.message));
  }
}

function* addreligionItem({ payload }) {
  try {
  const result = yield call(requestPostReligion, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addReligionItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addReligionItemError(error.message));
  }
}

function* deletereligionItem(payload) {
  try {
    const response = yield call(requestDeleteReligion, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteReligionItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteReligionItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteReligionItemError(error.message));
  }
}
function* updatereligionItem({ payload }) {
  try {
    const result = yield call(requestUpdateReligion, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateReligionItemSuccess(result.data));
  } catch (error) {
    yield put(updateReligionItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(RELIGION_GET_LIST, getreligionListItems);
}

export function* watchAddItem() {
  yield takeEvery(RELIGION_ADD_ITEM, addreligionItem);
}
export function* watchDeleteItem() {
  yield takeEvery(RELIGION_DELETE_ITEM, deletereligionItem);
}

export function* watchUpdateItem() {
  yield takeEvery(RELIGION_UPDATE_ITEM, updatereligionItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
