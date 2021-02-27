import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  COMPANYSCHEDULE_GET_LIST,
  COMPANYSCHEDULE_ADD_ITEM,
  COMPANYSCHEDULE_DELETE_ITEM,
  COMPANYSCHEDULE_UPDATE_ITEM,
} from "../actions";
import {
  getCompanyScheduleListSuccess,
  getCompanyScheduleListError,
  addCompanyScheduleItemSuccess,
  addCompanyScheduleItemError,
  deleteCompanyScheduleItemError,
  deleteCompanyScheduleItemSuccess,
  updateCompanyScheduleItemSuccess,
  updateCompanyScheduleItemError,
  deleteCompanyScheduleItemCheck,
} from "./actions";
import {
  requestDeleteCompanySchedule,
  requestGetCompanySchedule,
  requestPostCompanySchedule,
  requestUpdateCompanySchedule,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getcompanyscheduleListItems() {
  try {
    const response = yield call(requestGetCompanySchedule);
    yield put(getCompanyScheduleListSuccess(response.data.data));
  } catch (error) {
    yield put(getCompanyScheduleListError(error.message));
  }
}

function* addcompanyscheduleItem({ payload }) {
  try {
  const result = yield call(requestPostCompanySchedule, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addCompanyScheduleItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addCompanyScheduleItemError(error.message));
  }
}

function* deletecompanyscheduleItem(payload) {
  try {
    const response = yield call(requestDeleteCompanySchedule, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteCompanyScheduleItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteCompanyScheduleItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteCompanyScheduleItemError(error.message));
  }
}
function* updatecompanyscheduleItem({ payload }) {
  try {
    const result = yield call(requestUpdateCompanySchedule, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateCompanyScheduleItemSuccess(result.data));
  } catch (error) {
    yield put(updateCompanyScheduleItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(COMPANYSCHEDULE_GET_LIST, getcompanyscheduleListItems);
}

export function* watchAddItem() {
  yield takeEvery(COMPANYSCHEDULE_ADD_ITEM, addcompanyscheduleItem);
}
export function* watchDeleteItem() {
  yield takeEvery(COMPANYSCHEDULE_DELETE_ITEM, deletecompanyscheduleItem);
}

export function* watchUpdateItem() {
  yield takeEvery(COMPANYSCHEDULE_UPDATE_ITEM, updatecompanyscheduleItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
