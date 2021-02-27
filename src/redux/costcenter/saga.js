import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  COSTCENTER_GET_LIST,
  COSTCENTER_ADD_ITEM,
  COSTCENTER_DELETE_ITEM,
  COSTCENTER_UPDATE_ITEM,
} from "../actions";
import {
  getCostCenterListSuccess,
  getCostCenterListError,
  addCostCenterItemSuccess,
  addCostCenterItemError,
  deleteCostCenterItemError,
  deleteCostCenterItemSuccess,
  updateCostCenterItemSuccess,
  updateCostCenterItemError,
  deleteCostCenterItemCheck,
} from "./actions";
import {
  requestDeleteCostCenter,
  requestGetCostCenter,
  requestPostCostCenter,
  requestUpdateCostCenter,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getcostcenterListItems() {
  try {
    const response = yield call(requestGetCostCenter);
    yield put(getCostCenterListSuccess(response.data.data));
  } catch (error) {
    yield put(getCostCenterListError(error.message));
  }
}

function* addcostcenterItem({ payload }) {
  try {
  const result = yield call(requestPostCostCenter, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addCostCenterItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addCostCenterItemError(error.message));
  }
}

function* deletecostcenterItem(payload) {
  try {
    const response = yield call(requestDeleteCostCenter, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteCostCenterItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteCostCenterItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteCostCenterItemError(error.message));
  }
}
function* updatecostcenterItem({ payload }) {
  try {
    const result = yield call(requestUpdateCostCenter, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateCostCenterItemSuccess(result.data));
  } catch (error) {
    yield put(updateCostCenterItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(COSTCENTER_GET_LIST, getcostcenterListItems);
}

export function* watchAddItem() {
  yield takeEvery(COSTCENTER_ADD_ITEM, addcostcenterItem);
}
export function* watchDeleteItem() {
  yield takeEvery(COSTCENTER_DELETE_ITEM, deletecostcenterItem);
}

export function* watchUpdateItem() {
  yield takeEvery(COSTCENTER_UPDATE_ITEM, updatecostcenterItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
