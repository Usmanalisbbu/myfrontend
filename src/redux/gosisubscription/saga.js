import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  GOSISUBSCRIPTION_GET_LIST,
  GOSISUBSCRIPTION_ADD_ITEM,
  GOSISUBSCRIPTION_DELETE_ITEM,
  GOSISUBSCRIPTION_UPDATE_ITEM,
} from "../actions";
import {
  getGosiSubscriptionListSuccess,
  getGosiSubscriptionListError,
  addGosiSubscriptionItemSuccess,
  addGosiSubscriptionItemError,
  deleteGosiSubscriptionItemError,
  deleteGosiSubscriptionItemSuccess,
  updateGosiSubscriptionItemSuccess,
  updateGosiSubscriptionItemError,
  deleteGosiSubscriptionItemCheck,
} from "./actions";
import {
  requestDeleteGosiSubscription,
  requestGetGosiSubscription,
  requestPostGosiSubscription,
  requestUpdateGosiSubscription,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getgosisubscriptionListItems() {
  try {
    const response = yield call(requestGetGosiSubscription);
    yield put(getGosiSubscriptionListSuccess(response.data.data));
  } catch (error) {
    yield put(getGosiSubscriptionListError(error.message));
  }
}

function* addgosisubscriptionItem({ payload }) {
  try {
  const result = yield call(requestPostGosiSubscription, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addGosiSubscriptionItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addGosiSubscriptionItemError(error.message));
  }
}

function* deletegosisubscriptionItem(payload) {
  try {
    const response = yield call(requestDeleteGosiSubscription, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteGosiSubscriptionItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteGosiSubscriptionItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteGosiSubscriptionItemError(error.message));
  }
}
function* updategosisubscriptionItem({ payload }) {
  try {
    const result = yield call(requestUpdateGosiSubscription, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateGosiSubscriptionItemSuccess(result.data));
  } catch (error) {
    yield put(updateGosiSubscriptionItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(GOSISUBSCRIPTION_GET_LIST, getgosisubscriptionListItems);
}

export function* watchAddItem() {
  yield takeEvery(GOSISUBSCRIPTION_ADD_ITEM, addgosisubscriptionItem);
}
export function* watchDeleteItem() {
  yield takeEvery(GOSISUBSCRIPTION_DELETE_ITEM, deletegosisubscriptionItem);
}

export function* watchUpdateItem() {
  yield takeEvery(GOSISUBSCRIPTION_UPDATE_ITEM, updategosisubscriptionItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
