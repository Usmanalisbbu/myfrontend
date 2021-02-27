import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  CURRENCIESTYPE_GET_LIST,
  CURRENCIESTYPE_ADD_ITEM,
  CURRENCIESTYPE_DELETE_ITEM,
  CURRENCIESTYPE_UPDATE_ITEM,
} from "../actions";
import {
  getCurrenciesTypeListSuccess,
  getCurrenciesTypeListError,
  addCurrenciesTypeItemSuccess,
  addCurrenciesTypeItemError,
  deleteCurrenciesTypeItemError,
  deleteCurrenciesTypeItemSuccess,
  updateCurrenciesTypeItemSuccess,
  updateCurrenciesTypeItemError,
  deleteCurrenciesTypeItemCheck,
} from "./actions";
import {
  requestDeleteCurrenciesType,
  requestGetCurrenciesType,
  requestPostCurrenciesType,
  requestUpdateCurrenciesType,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getcurrenciestypeListItems() {
  try {
    const response = yield call(requestGetCurrenciesType);
    yield put(getCurrenciesTypeListSuccess(response.data.data));
  } catch (error) {
    yield put(getCurrenciesTypeListError(error.message));
  }
}

function* addcurrenciestypeItem({ payload }) {
  try {
  const result = yield call(requestPostCurrenciesType, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addCurrenciesTypeItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addCurrenciesTypeItemError(error.message));
  }
}

function* deletecurrenciestypeItem(payload) {
  try {
    const response = yield call(requestDeleteCurrenciesType, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteCurrenciesTypeItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteCurrenciesTypeItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteCurrenciesTypeItemError(error.message));
  }
}
function* updatecurrenciestypeItem({ payload }) {
  try {
    const result = yield call(requestUpdateCurrenciesType, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateCurrenciesTypeItemSuccess(result.data));
  } catch (error) {
    yield put(updateCurrenciesTypeItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(CURRENCIESTYPE_GET_LIST, getcurrenciestypeListItems);
}

export function* watchAddItem() {
  yield takeEvery(CURRENCIESTYPE_ADD_ITEM, addcurrenciestypeItem);
}
export function* watchDeleteItem() {
  yield takeEvery(CURRENCIESTYPE_DELETE_ITEM, deletecurrenciestypeItem);
}

export function* watchUpdateItem() {
  yield takeEvery(CURRENCIESTYPE_UPDATE_ITEM, updatecurrenciestypeItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
