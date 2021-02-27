import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  LEAVEVACATIONTYPE_GET_LIST,
  LEAVEVACATIONTYPE_ADD_ITEM,
  LEAVEVACATIONTYPE_DELETE_ITEM,
  LEAVEVACATIONTYPE_UPDATE_ITEM,
} from "../actions";
import {
  getLeaveVacationTypeListSuccess,
  getLeaveVacationTypeListError,
  addLeaveVacationTypeItemSuccess,
  addLeaveVacationTypeItemError,
  deleteLeaveVacationTypeItemError,
  deleteLeaveVacationTypeItemSuccess,
  updateLeaveVacationTypeItemSuccess,
  updateLeaveVacationTypeItemError,
  deleteLeaveVacationTypeItemCheck,
} from "./actions";
import {
  requestDeleteLeaveVacationType,
  requestGetLeaveVacationType,
  requestPostLeaveVacationType,
  requestUpdateLeaveVacationType,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getleavevacationtypeListItems() {
  try {
    const response = yield call(requestGetLeaveVacationType);
    yield put(getLeaveVacationTypeListSuccess(response.data.data));
  } catch (error) {
    yield put(getLeaveVacationTypeListError(error.message));
  }
}

function* addleavevacationtypeItem({ payload }) {
  try {
  const result = yield call(requestPostLeaveVacationType, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addLeaveVacationTypeItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addLeaveVacationTypeItemError(error.message));
  }
}

function* deleteleavevacationtypeItem(payload) {
  try {
    const response = yield call(requestDeleteLeaveVacationType, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteLeaveVacationTypeItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteLeaveVacationTypeItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteLeaveVacationTypeItemError(error.message));
  }
}
function* updateleavevacationtypeItem({ payload }) {
  try {
    const result = yield call(requestUpdateLeaveVacationType, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateLeaveVacationTypeItemSuccess(result.data));
  } catch (error) {
    yield put(updateLeaveVacationTypeItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(LEAVEVACATIONTYPE_GET_LIST, getleavevacationtypeListItems);
}

export function* watchAddItem() {
  yield takeEvery(LEAVEVACATIONTYPE_ADD_ITEM, addleavevacationtypeItem);
}
export function* watchDeleteItem() {
  yield takeEvery(LEAVEVACATIONTYPE_DELETE_ITEM, deleteleavevacationtypeItem);
}

export function* watchUpdateItem() {
  yield takeEvery(LEAVEVACATIONTYPE_UPDATE_ITEM, updateleavevacationtypeItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
