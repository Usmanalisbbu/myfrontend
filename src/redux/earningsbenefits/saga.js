import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  EARNINGSBENEFITS_GET_LIST,
  EARNINGSBENEFITS_ADD_ITEM,
  EARNINGSBENEFITS_DELETE_ITEM,
  EARNINGSBENEFITS_UPDATE_ITEM,
} from "../actions";
import {
  getEarningsBenefitsListSuccess,
  getEarningsBenefitsListError,
  addEarningsBenefitsItemSuccess,
  addEarningsBenefitsItemError,
  deleteEarningsBenefitsItemError,
  deleteEarningsBenefitsItemSuccess,
  updateEarningsBenefitsItemSuccess,
  updateEarningsBenefitsItemError,
  deleteEarningsBenefitsItemCheck,
} from "./actions";
import {
  requestDeleteEarningsBenefits,
  requestGetEarningsBenefits,
  requestPostEarningsBenefits,
  requestUpdateEarningsBenefits,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getearningsbenefitsListItems() {
  try {
    const response = yield call(requestGetEarningsBenefits);
    yield put(getEarningsBenefitsListSuccess(response.data.data));
  } catch (error) {
    yield put(getEarningsBenefitsListError(error.message));
  }
}

function* addearningsbenefitsItem({ payload }) {
  try {
  const result = yield call(requestPostEarningsBenefits, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addEarningsBenefitsItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addEarningsBenefitsItemError(error.message));
  }
}

function* deleteearningsbenefitsItem(payload) {
  try {
    const response = yield call(requestDeleteEarningsBenefits, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteEarningsBenefitsItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteEarningsBenefitsItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteEarningsBenefitsItemError(error.message));
  }
}
function* updateearningsbenefitsItem({ payload }) {
  try {
    const result = yield call(requestUpdateEarningsBenefits, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateEarningsBenefitsItemSuccess(result.data));
  } catch (error) {
    yield put(updateEarningsBenefitsItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(EARNINGSBENEFITS_GET_LIST, getearningsbenefitsListItems);
}

export function* watchAddItem() {
  yield takeEvery(EARNINGSBENEFITS_ADD_ITEM, addearningsbenefitsItem);
}
export function* watchDeleteItem() {
  yield takeEvery(EARNINGSBENEFITS_DELETE_ITEM, deleteearningsbenefitsItem);
}

export function* watchUpdateItem() {
  yield takeEvery(EARNINGSBENEFITS_UPDATE_ITEM, updateearningsbenefitsItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
