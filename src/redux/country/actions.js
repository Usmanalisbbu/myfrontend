import {
  COUNTRY_GET_LIST,
  COUNTRY_GET_LIST_SUCCESS,
  COUNTRY_GET_LIST_ERROR,
  COUNTRY_ADD_ITEM,
  COUNTRY_ADD_ITEM_SUCCESS,
  COUNTRY_ADD_ITEM_ERROR,
  COUNTRY_DELETE_ITEM,
  COUNTRY_DELETE_SUCCESS,
  COUNTRY_DELETE_ITEM_ERROR,
  COUNTRY_UPDATE_ITEM,
  COUNTRY_UPDATE_ITEM_SUCCESS,
  COUNTRY_UPDATE_ITEM_ERROR,
  COUNTRY_DELETE_CHECK,
} from "../actions";

export const getCountryList = () => ({
  type: COUNTRY_GET_LIST,
});

export const getCountryListSuccess = (items) => ({
  type: COUNTRY_GET_LIST_SUCCESS,
  payload: items,
});

export const getCountryListError = (error) => ({
  type: COUNTRY_GET_LIST_ERROR,
  payload: error,
});

export const addCountryItem = (item) => ({
  type: COUNTRY_ADD_ITEM,
  payload: item,
});
export const addCountryItemSuccess = (items) => ({
  type: COUNTRY_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addCountryItemError = (error) => ({
  type: COUNTRY_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteCountryItem = (item) => ({
  type: COUNTRY_DELETE_ITEM,
  payload: item,
});
export const deleteCountryItemSuccess = (items) => ({
  type: COUNTRY_DELETE_SUCCESS,
  payload: items,
});
export const deleteCountryItemCheck = (items) => ({
  type: COUNTRY_DELETE_CHECK,
  payload: items,
});
export const deleteCountryItemError = (error) => ({
  type: COUNTRY_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateCountryItem = (item) => ({
  type: COUNTRY_UPDATE_ITEM,
  payload: item,
});
export const updateCountryItemSuccess = (items) => ({
  type: COUNTRY_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateCountryItemError = (error) => ({
  type: COUNTRY_UPDATE_ITEM_ERROR,
  payload: error,
});
