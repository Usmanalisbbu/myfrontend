import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
 DEDUCTION_GET_LIST,
 DEDUCTION_ADD_ITEM,
 DEDUCTION_DELETE_ITEM,
 DEDUCTION_UPDATE_ITEM,
} from "../actions";
import {
  getDeductionListSuccess,
  getDeductionListError,
  addDeductionItemSuccess,
  addDeductionItemError,
  deleteDeductionItemError,
  deleteDeductionItemSuccess,
  updateDeductionItemSuccess,
  updateDeductionItemError,
  deleteDeductionItemCheck,
} from "./actions";
import {
  requestDeleteDeduction,
  requestGetDeduction,
  requestPostDeduction,
  requestUpdateDeduction,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getdeductionListItems() {
  try {
    const response = yield call(requestGetDeduction);
    yield put(getDeductionListSuccess(response.data.data));
  } catch (error) {
    yield put(getDeductionListError(error.message));
  }
}

function* adddeductionItem({ payload }) {
  try {
  const result = yield call(requestPostDeduction, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addDeductionItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addDeductionItemError(error.message));
  }
}

function* deletedeductionItem(payload) {
  try {
    const response = yield call(requestDeleteDeduction, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteDeductionItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteDeductionItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteDeductionItemError(error.message));
  }
}
function* updatedeductionItem({ payload }) {
  try {
    const result = yield call(requestUpdateDeduction, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateDeductionItemSuccess(result.data));
  } catch (error) {
    yield put(updateDeductionItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(DEDUCTION_GET_LIST, getdeductionListItems);
}

export function* watchAddItem() {
  yield takeEvery(DEDUCTION_ADD_ITEM, adddeductionItem);
}
export function* watchDeleteItem() {
  yield takeEvery(DEDUCTION_DELETE_ITEM, deletedeductionItem);
}

export function* watchUpdateItem() {
  yield takeEvery(DEDUCTION_UPDATE_ITEM, updatedeductionItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
