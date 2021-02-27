import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  DOCUMENTTYPE_GET_LIST,
  DOCUMENTTYPE_ADD_ITEM,
  DOCUMENTTYPE_DELETE_ITEM,
  DOCUMENTTYPE_UPDATE_ITEM,
} from "../actions";
import {
  getDocumenttypeListSuccess,
  getDocumenttypeListError,
  addDocumenttypeItemSuccess,
  addDocumenttypeItemError,
  deleteDocumenttypeItemError,
  deleteDocumenttypeItemSuccess,
  updateDocumenttypeItemSuccess,
  updateDocumenttypeItemError,
  deleteDocumenttypeItemCheck,
} from "./actions";
import {
  requestDeleteDocumenttype,
  requestGetDocumenttype,
  requestPostDocumenttype,
  requestUpdateDocumenttype,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getdocumenttypeListItems() {
  try {
    const response = yield call(requestGetDocumenttype);
    yield put(getDocumenttypeListSuccess(response.data.data));
  } catch (error) {
    yield put(getDocumenttypeListError(error.message));
  }
}

function* adddocumenttypeItem({ payload }) {
  try {
    const result = yield call(requestPostDocumenttype, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addDocumenttypeItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addDocumenttypeItemError(error.message));
  }
}

function* deletedocumenttypeItem(payload) {
  try {
    const response = yield call(requestDeleteDocumenttype, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteDocumenttypeItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteDocumenttypeItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteDocumenttypeItemError(error.message));
  }
}
function* updatedocumenttypeItem({ payload }) {
  try {
    const result = yield call(requestUpdateDocumenttype, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateDocumenttypeItemSuccess(result.data));
  } catch (error) {
    yield put(updateDocumenttypeItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(DOCUMENTTYPE_GET_LIST, getdocumenttypeListItems);
}

export function* watchAddItem() {
  yield takeEvery(DOCUMENTTYPE_ADD_ITEM, adddocumenttypeItem);
}
export function* watchDeleteItem() {
  yield takeEvery(DOCUMENTTYPE_DELETE_ITEM, deletedocumenttypeItem);
}

export function* watchUpdateItem() {
  yield takeEvery(DOCUMENTTYPE_UPDATE_ITEM, updatedocumenttypeItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
