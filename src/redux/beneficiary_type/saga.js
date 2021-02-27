import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  BENEFICIARY_TYPE_GET_LIST,
  BENEFICIARY_TYPE_ADD_ITEM,
  BENEFICIARY_TYPE_DELETE_ITEM,
  BENEFICIARY_TYPE_UPDATE_ITEM,
} from "../actions";
import {
  getBeneficiary_typeListSuccess,
  getBeneficiary_typeListError,
  addBeneficiary_typeItemSuccess,
  addBeneficiary_typeItemError,
  deleteBeneficiary_typeItemError,
  deleteBeneficiary_typeItemSuccess,
  updateBeneficiary_typeItemSuccess,
  updateBeneficiary_typeItemError,
  deleteBeneficiary_typeItemCheck,
} from "./actions";
import {
  requestDeleteBeneficiary_type,
  requestGetBeneficiary_type,
  requestPostBeneficiary_type,
  requestUpdateBeneficiary_type,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getbeneficiary_typeListItems() {
  try {
    const response = yield call(requestGetBeneficiary_type);
    yield put(getBeneficiary_typeListSuccess(response.data.data));
  } catch (error) {
    yield put(getBeneficiary_typeListError(error.message));
  }
}

function* addbeneficiary_typeItem({ payload }) {
  try {
    const result = yield call(requestPostBeneficiary_type, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addBeneficiary_typeItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addBeneficiary_typeItemError(error.message));
  }
}

function* deletebeneficiary_typeItem(payload) {
  try {
    const response = yield call(requestDeleteBeneficiary_type, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteBeneficiary_typeItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteBeneficiary_typeItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteBeneficiary_typeItemError(error.message));
  }
}
function* updatebeneficiary_typeItem({ payload }) {
  console.log(payload);
  try {
    const result = yield call(requestUpdateBeneficiary_type, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateBeneficiary_typeItemSuccess(result.data));
  } catch (error) {
    yield put(updateBeneficiary_typeItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(BENEFICIARY_TYPE_GET_LIST, getbeneficiary_typeListItems);
}

export function* watchAddItem() {
  yield takeEvery(BENEFICIARY_TYPE_ADD_ITEM, addbeneficiary_typeItem);
}
export function* watchDeleteItem() {
  yield takeEvery(BENEFICIARY_TYPE_DELETE_ITEM, deletebeneficiary_typeItem);
}

export function* watchUpdateItem() {
  yield takeEvery(BENEFICIARY_TYPE_UPDATE_ITEM, updatebeneficiary_typeItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
