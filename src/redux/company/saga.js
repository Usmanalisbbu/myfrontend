import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  COMPANY_GET_LIST,
  COMPANY_ADD_ITEM,
  COMPANY_DELETE_ITEM,
  COMPANY_UPDATE_ITEM,
} from "../actions";
import {
  getCompanyListSuccess,
  getCompanyListError,
  addCompanyItemSuccess,
  addCompanyItemError,
  deleteCompanyItemError,
  deleteCompanyItemSuccess,
  updateCompanyItemSuccess,
  updateCompanyItemError,
  deleteCompanyItemCheck,
} from "./actions";
import {
  requestDeleteCompany,
  requestGetCompany,
  requestPostCompany,
  requestUpdateCompany,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getcompanyListItems() {
  try {
    const response = yield call(requestGetCompany);
    yield put(getCompanyListSuccess(response.data.data));
  } catch (error) {
    yield put(getCompanyListError(error.message));
  }
}

function* addcompanyItem({ payload }) {
  try {
  const result = yield call(requestPostCompany, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addCompanyItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addCompanyItemError(error.message));
  }
}

function* deletecompanyItem(payload) {
  try {
    const response = yield call(requestDeleteCompany, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteCompanyItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteCompanyItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteCompanyItemError(error.message));
  }
}
function* updatecompanyItem({ payload }) {
  try {
    const result = yield call(requestUpdateCompany, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateCompanyItemSuccess(result.data));
  } catch (error) {
    yield put(updateCompanyItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(COMPANY_GET_LIST, getcompanyListItems);
}

export function* watchAddItem() {
  yield takeEvery(COMPANY_ADD_ITEM, addcompanyItem);
}
export function* watchDeleteItem() {
  yield takeEvery(COMPANY_DELETE_ITEM, deletecompanyItem);
}

export function* watchUpdateItem() {
  yield takeEvery(COMPANY_UPDATE_ITEM, updatecompanyItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
