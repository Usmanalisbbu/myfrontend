import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  POSITIONDESIGNATION_GET_LIST,
  POSITIONDESIGNATION_ADD_ITEM,
  POSITIONDESIGNATION_DELETE_ITEM,
  POSITIONDESIGNATION_UPDATE_ITEM,
} from "../actions";
import {
  getPositionDesignationListSuccess,
  getPositionDesignationListError,
  addPositionDesignationItemSuccess,
  addPositionDesignationItemError,
  deletePositionDesignationItemError,
  deletePositionDesignationItemSuccess,
  updatePositionDesignationItemSuccess,
  updatePositionDesignationItemError,
  deletePositionDesignationItemCheck,
} from "./actions";
import {
  requestDeletePositionDesignation,
  requestGetPositionDesignation,
  requestPostPositionDesignation,
  requestUpdatePositionDesignation,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getpositiondesignationListItems() {
  try {
    const response = yield call(requestGetPositionDesignation);
    yield put(getPositionDesignationListSuccess(response.data.data));
  } catch (error) {
    yield put(getPositionDesignationListError(error.message));
  }
}

function* addpositiondesignationItem({ payload }) {
  try {
  const result = yield call(requestPostPositionDesignation, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addPositionDesignationItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addPositionDesignationItemError(error.message));
  }
}

function* deletepositiondesignationItem(payload) {
  try {
    const response = yield call(requestDeletePositionDesignation, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deletePositionDesignationItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deletePositionDesignationItemSuccess(payload));
    }
  } catch (error) {
    yield put(deletePositionDesignationItemError(error.message));
  }
}
function* updatepositiondesignationItem({ payload }) {
  try {
    const result = yield call(requestUpdatePositionDesignation, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updatePositionDesignationItemSuccess(result.data));
  } catch (error) {
    yield put(updatePositionDesignationItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(POSITIONDESIGNATION_GET_LIST, getpositiondesignationListItems);
}

export function* watchAddItem() {
  yield takeEvery(POSITIONDESIGNATION_ADD_ITEM, addpositiondesignationItem);
}
export function* watchDeleteItem() {
  yield takeEvery(POSITIONDESIGNATION_DELETE_ITEM, deletepositiondesignationItem);
}

export function* watchUpdateItem() {
  yield takeEvery(POSITIONDESIGNATION_UPDATE_ITEM, updatepositiondesignationItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
