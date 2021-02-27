import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  EDUCATION_GET_LIST,
  EDUCATION_ADD_ITEM,
  EDUCATION_DELETE_ITEM,
  EDUCATION_UPDATE_ITEM,
} from "../actions";
import {
  getEducationListSuccess,
  getEducationListError,
  addEducationItemSuccess,
  addEducationItemError,
  deleteEducationItemError,
  deleteEducationItemSuccess,
  updateEducationItemSuccess,
  updateEducationItemError,
  deleteEducationItemCheck,
} from "./actions";
import {
  requestDeleteEducationTraingType,
  requestGetEducationTraingType,
  requestPostEducationTraingType,
  requestUpdateEducationTraingType,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* geteducationListItems() {
  try {
    const response = yield call(requestGetEducationTraingType);
    yield put(getEducationListSuccess(response.data.data));
  } catch (error) {
    yield put(getEducationListError(error.message));
  }
}

function* addeducationItem({ payload }) {
  try {
    console.log(payload);
    const result = yield call(requestPostEducationTraingType, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addEducationItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addEducationItemError(error.message));
  }
}

function* deleteeducationItem(payload) {
  try {
    const response = yield call(requestDeleteEducationTraingType, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteEducationItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteEducationItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteEducationItemError(error.message));
  }
}
function* updateeducationItem({ payload }) {
  try {
    const result = yield call(requestUpdateEducationTraingType, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateEducationItemSuccess(result.data));
  } catch (error) {
    yield put(updateEducationItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(EDUCATION_GET_LIST, geteducationListItems);
}

export function* watchAddItem() {
  yield takeEvery(EDUCATION_ADD_ITEM, addeducationItem);
}
export function* watchDeleteItem() {
  yield takeEvery(EDUCATION_DELETE_ITEM, deleteeducationItem);
}

export function* watchUpdateItem() {
  yield takeEvery(EDUCATION_UPDATE_ITEM, updateeducationItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
