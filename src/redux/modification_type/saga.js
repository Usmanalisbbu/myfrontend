import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  MODIFICATIONTYPE_GET_LIST,
  MODIFICATIONTYPE_ADD_ITEM,
  MODIFICATIONTYPE_DELETE_ITEM,
  MODIFICATIONTYPE_UPDATE_ITEM,
} from "../actions";
import {
  getModificationTypeListSuccess,
  getModificationTypeListError,
  addModificationTypeItemSuccess,
  addModificationTypeItemError,
  deleteModificationTypeItemError,
  deleteModificationTypeItemSuccess,
  updateModificationTypeItemSuccess,
  updateModificationTypeItemError,
  deleteModificationTypeItemCheck,
} from "./actions";
import {
  requestDeleteModificationType,
  requestGetModificationType,
  requestPostModificationType,
  requestUpdateModificationType,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getreligionListItems() {
  try {
    const response = yield call(requestGetModificationType);
    yield put(getModificationTypeListSuccess(response.data.data));
  } catch (error) {
    yield put(getModificationTypeListError(error.message));
  }
}

function* addreligionItem({ payload }) {
  try {
  const result = yield call(requestPostModificationType, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addModificationTypeItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addModificationTypeItemError(error.message));
  }
}

function* deletereligionItem(payload) {
  try {
    const response = yield call(requestDeleteModificationType, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteModificationTypeItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteModificationTypeItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteModificationTypeItemError(error.message));
  }
}
function* updatereligionItem({ payload }) {
  try {
    const result = yield call(requestUpdateModificationType, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateModificationTypeItemSuccess(result.data));
  } catch (error) {
    yield put(updateModificationTypeItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(MODIFICATIONTYPE_GET_LIST, getreligionListItems);
}

export function* watchAddItem() {
  yield takeEvery(MODIFICATIONTYPE_ADD_ITEM, addreligionItem);
}
export function* watchDeleteItem() {
  yield takeEvery(MODIFICATIONTYPE_DELETE_ITEM, deletereligionItem);
}

export function* watchUpdateItem() {
  yield takeEvery(MODIFICATIONTYPE_UPDATE_ITEM, updatereligionItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
