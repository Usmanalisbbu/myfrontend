import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  SECTION_GET_LIST,
  SECTION_ADD_ITEM,
  SECTION_DELETE_ITEM,
  SECTION_UPDATE_ITEM,
} from "../actions";
import {
  getSectionListSuccess,
  getSectionListError,
  addSectionItemSuccess,
  addSectionItemError,
  deleteSectionItemError,
  deleteSectionItemSuccess,
  updateSectionItemSuccess,
  updateSectionItemError,
  deleteSectionItemCheck,
} from "./actions";
import {
  requestDeleteSection,
  requestGetSection,
  requestPostSection,
  requestUpdateSection,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getreligionListItems() {
  try {
    const response = yield call(requestGetSection);
    yield put(getSectionListSuccess(response.data.data));
  } catch (error) {
    yield put(getSectionListError(error.message));
  }
}

function* addreligionItem({ payload }) {
  try {
  const result = yield call(requestPostSection, payload);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(addSectionItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addSectionItemError(error.message));
  }
}

function* deletereligionItem(payload) {
  try {
    const response = yield call(requestDeleteSection, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteSectionItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteSectionItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteSectionItemError(error.message));
  }
}
function* updatereligionItem({ payload }) {
  try {
    const result = yield call(requestUpdateSection, payload);
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateSectionItemSuccess(result.data));
  } catch (error) {
    yield put(updateSectionItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(SECTION_GET_LIST, getreligionListItems);
}

export function* watchAddItem() {
  yield takeEvery(SECTION_ADD_ITEM, addreligionItem);
}
export function* watchDeleteItem() {
  yield takeEvery(SECTION_DELETE_ITEM, deletereligionItem);
}

export function* watchUpdateItem() {
  yield takeEvery(SECTION_UPDATE_ITEM, updatereligionItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
