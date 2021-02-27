import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  PERCENTAGE_GET_LIST,
  PERCENTAGE_ADD_ITEM,
  PERCENTAGE_DELETE_ITEM,
  PERCENTAGE_UPDATE_ITEM,
} from "../actions";
import {
  getPercentageListSuccess,
  getPercentageListError,
  addPercentageItemSuccess,
  addPercentageItemError,
  deletePercentageItemError,
  deletePercentageItemSuccess,
  updatePercentageItemSuccess,
  updatePercentageItemError,
  deletePercentageItemCheck,
} from "./actions";
import {
  requestDeletePercentage,
  requestGetPercentage,
  requestPostPercentage,
  requestUpdatePercentage,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getpercentageListItems() {
  try {
    const response = yield call(requestGetPercentage);
    yield put(getPercentageListSuccess(response.data.data));
  } catch (error) {
    yield put(getPercentageListError(error.message));
  }
}

function* addpercentageItem({ payload }) {
  try {
  const result = yield call(requestPostPercentage, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addPercentageItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addPercentageItemError(error.message));
  }
}

function* deletepercentageItem(payload) {
  try {
    const response = yield call(requestDeletePercentage, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deletePercentageItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deletePercentageItemSuccess(payload));
    }
  } catch (error) {
    yield put(deletePercentageItemError(error.message));
  }
}
function* updatepercentageItem({ payload }) {
  try {
    const result = yield call(requestUpdatePercentage, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updatePercentageItemSuccess(result.data));
  } catch (error) {
    yield put(updatePercentageItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(PERCENTAGE_GET_LIST, getpercentageListItems);
}

export function* watchAddItem() {
  yield takeEvery(PERCENTAGE_ADD_ITEM, addpercentageItem);
}
export function* watchDeleteItem() {
  yield takeEvery(PERCENTAGE_DELETE_ITEM, deletepercentageItem);
}

export function* watchUpdateItem() {
  yield takeEvery(PERCENTAGE_UPDATE_ITEM, updatepercentageItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
