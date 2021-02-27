import {
  CITY_GET_LIST,
  CITY_GET_LIST_SUCCESS,
  CITY_GET_LIST_ERROR,
  CITY_ADD_ITEM,
  CITY_ADD_ITEM_SUCCESS,
  CITY_ADD_ITEM_ERROR,
  CITY_DELETE_ITEM,
  CITY_DELETE_SUCCESS,
  CITY_DELETE_ITEM_ERROR,
  CITY_UPDATE_ITEM,
  CITY_UPDATE_ITEM_SUCCESS,
  CITY_UPDATE_ITEM_ERROR,
  CITY_DELETE_CHECK,
} from "../actions";

export const getCityList = () => ({
  type: CITY_GET_LIST,
});

export const getCityListSuccess = (items) => ({
  type: CITY_GET_LIST_SUCCESS,
  payload: items,
});

export const getCityListError = (error) => ({
  type: CITY_GET_LIST_ERROR,
  payload: error,
});

export const addCityItem = (item) => ({
  type: CITY_ADD_ITEM,
  payload: item,
});
export const addCityItemSuccess = (items) => ({
  type: CITY_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addCityItemError = (error) => ({
  type: CITY_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteCityItem = (item) => ({
  type: CITY_DELETE_ITEM,
  payload: item,
});
export const deleteCityItemSuccess = (items) => ({
  type: CITY_DELETE_SUCCESS,
  payload: items,
});
export const deleteCityItemCheck = (items) => ({
  type: CITY_DELETE_CHECK,
  payload: items,
});
export const deleteCityItemError = (error) => ({
  type: CITY_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateCityItem = (item) => ({
  type: CITY_UPDATE_ITEM,
  payload: item,
});
export const updateCityItemSuccess = (items) => ({
  type: CITY_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateCityItemError = (error) => ({
  type: CITY_UPDATE_ITEM_ERROR,
  payload: error,
});
