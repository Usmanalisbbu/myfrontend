import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import React from "react";
import {
  CITY_GET_LIST,
  CITY_ADD_ITEM,
  CITY_DELETE_ITEM,
  CITY_UPDATE_ITEM,
} from "../actions";
import {
  getCityListSuccess,
  getCityListError,
  addCityItemSuccess,
  addCityItemError,
  deleteCityItemError,
  deleteCityItemSuccess,
  updateCityItemSuccess,
  updateCityItemError,
  deleteCityItemCheck,
} from "./actions";
import {
  requestDeleteCity,
  requestGetCity,
  requestPostCity,
  requestUpdateCity,
} from "../../Api/api";
import IntlMessages from "../../helpers/IntlMessages";
import { NotificationManager } from "../../components/common/react-notifications";

function* getcityListItems() {
  try {
    const response = yield call(requestGetCity);
    yield put(getCityListSuccess(response.data.data));
  } catch (error) {
    yield put(getCityListError(error.message));
  }
}

function* addcityItem({ payload }) {
  try {
    const cityItem = {
      country_id: payload.country.value,
      city_name_eng: payload.city_name_eng,
      city_name_arab: payload.city_name_arab,
      region: payload.region,
      ticket_value: payload.ticket_value,
      is_capital: payload.is_capital,
    };
    const result = yield call(requestPostCity, cityItem);
    if (result.status === 201) {
      NotificationManager.success(
        "This is a notification!",
        "Primary Notification",
        3000,
        null,
        null,
        "succes filled"
      );
      result.data["country"] = payload.country;
      yield put(addCityItemSuccess(result.data));
    }
  } catch (error) {
    yield put(addCityItemError(error.message));
  }
}

function* deletecityItem(payload) {
  try {
    const response = yield call(requestDeleteCity, payload);

    if (response.data.success === false) {
      NotificationManager.warning(
        "",
        response.data.message,
        3000,
        null,
        null,
        "warning filled"
      );
      yield put(deleteCityItemCheck(payload));
    } else {
      NotificationManager.success(
        "",
        <IntlMessages id="general.delete.success" />,
        3000,
        null,
        null,
        "succes filled"
      );
      yield put(deleteCityItemSuccess(payload));
    }
  } catch (error) {
    yield put(deleteCityItemError(error.message));
  }
}
function* updatecityItem({ payload }) {
  console.log(payload);
  try {
    const cityupdateItem = {
      country_id: payload.country.value,
      city_name_eng: payload.city_name_eng,
      city_name_arab: payload.city_name_arab,
      region: payload.region,
      ticket_value: payload.ticket_value,
      is_capital: payload.is_capital,
      id: payload.id,
    };
    const result = yield call(requestUpdateCity, cityupdateItem);
    result.data["country"] = payload.country;
    NotificationManager.success(
      "This is a notification!",
      "Update",
      3000,
      null,
      null,
      "succes filled"
    );

    yield put(updateCityItemSuccess(result.data));
  } catch (error) {
    yield put(updateCityItemError(error.message));
  }
}
export function* watchGetList() {
  yield takeEvery(CITY_GET_LIST, getcityListItems);
}

export function* watchAddItem() {
  yield takeEvery(CITY_ADD_ITEM, addcityItem);
}
export function* watchDeleteItem() {
  yield takeEvery(CITY_DELETE_ITEM, deletecityItem);
}

export function* watchUpdateItem() {
  yield takeEvery(CITY_UPDATE_ITEM, updatecityItem);
}

export default function* rootSaga() {
  yield all([
    fork(watchGetList),
    fork(watchAddItem),
    fork(watchDeleteItem),
    fork(watchUpdateItem),
  ]);
}
