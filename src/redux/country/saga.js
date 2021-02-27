import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  COUNTRY_GET_LIST,
  COUNTRY_ADD_ITEM,
  COUNTRY_DELETE_ITEM,
  COUNTRY_UPDATE_ITEM,
} from "../actions";
import {
  getCountryListSuccess,
  getCountryListError,
  addCountryItemSuccess,
  addCountryItemError,
  deleteCountryItemError,
  deleteCountryItemSuccess,
  updateCountryItemSuccess,
  updateCountryItemError,
  deleteCountryItemCheck,
} from "./actions";
import {
  requestDeleteCountry,
  requestGetCountry,
  requestPostCountry,
  requestUpdateCountry,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getCountryListItems() {
  try {
    const response = yield call(requestGetCountry);
    yield put(getCountryListSuccess(response.data.data));
  } catch (error) {
    yield put(getCountryListError(error.message));
  }
}

function* addCountryItem({ payload }) {
  try {
    const result = yield call(requestPostCountry, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      // yield call(getCountryListItems);
      yield put(addCountryItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addCountryItemError(error.message));
  }
}

function* deleteCountryItem(payload) {
  try {
    const response = yield call(requestDeleteCountry, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        // <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteCountryItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteCountryItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteCountryItemError(error.message));
  }
}
function* updateCountryItem({ payload }) {
  try {
    const result = yield call(requestUpdateCountry, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateCountryItemSuccess(result.data));
  } catch (error) {
    yield put(updateCountryItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(COUNTRY_GET_LIST, getCountryListItems);
}

export function* watchAddItem() {
  yield takeEvery(COUNTRY_ADD_ITEM, addCountryItem);
}
export function* watchDeleteItem() {
  yield takeEvery(COUNTRY_DELETE_ITEM, deleteCountryItem);
}

export function* watchUpdateItem() {
  yield takeEvery(COUNTRY_UPDATE_ITEM, updateCountryItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
