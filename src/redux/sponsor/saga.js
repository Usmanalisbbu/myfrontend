import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  SPONSOR_GET_LIST,
  SPONSOR_ADD_ITEM,
  SPONSOR_DELETE_ITEM,
  SPONSOR_UPDATE_ITEM,
} from "../actions";
import {
  getSponsorListSuccess,
  getSponsorListError,
  addSponsorItemSuccess,
  addSponsorItemError,
  deleteSponsorItemError,
  deleteSponsorItemSuccess,
  updateSponsorItemSuccess,
  updateSponsorItemError,
  deleteSponsorItemCheck,
} from "./actions";
import {
  requestDeleteSponsor,
  requestGetSponsor,
  requestPostSponsor,
  requestUpdateSponsor,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getsponsorListItems() {
  try {
    const response = yield call(requestGetSponsor);
    yield put(getSponsorListSuccess(response.data.data));
  } catch (error) {
    yield put(getSponsorListError(error.message));
  }
}

function* addsponsorItem({ payload }) {
  try {
  const result = yield call(requestPostSponsor, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addSponsorItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addSponsorItemError(error.message));
  }
}

function* deletesponsorItem(payload) {
  try {
    const response = yield call(requestDeleteSponsor, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteSponsorItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteSponsorItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteSponsorItemError(error.message));
  }
}
function* updatesponsorItem({ payload }) {
  try {
    const result = yield call(requestUpdateSponsor, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateSponsorItemSuccess(result.data));
  } catch (error) {
    yield put(updateSponsorItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(SPONSOR_GET_LIST, getsponsorListItems);
}

export function* watchAddItem() {
  yield takeEvery(SPONSOR_ADD_ITEM, addsponsorItem);
}
export function* watchDeleteItem() {
  yield takeEvery(SPONSOR_DELETE_ITEM, deletesponsorItem);
}

export function* watchUpdateItem() {
  yield takeEvery(SPONSOR_UPDATE_ITEM, updatesponsorItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
