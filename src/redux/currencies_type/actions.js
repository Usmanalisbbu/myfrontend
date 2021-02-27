import {
  CURRENCIESTYPE_GET_LIST,
  CURRENCIESTYPE_GET_LIST_SUCCESS,
  CURRENCIESTYPE_GET_LIST_ERROR,
  CURRENCIESTYPE_ADD_ITEM,
  CURRENCIESTYPE_ADD_ITEM_SUCCESS,
  CURRENCIESTYPE_ADD_ITEM_ERROR,
  CURRENCIESTYPE_DELETE_ITEM,
  CURRENCIESTYPE_DELETE_SUCCESS,
  CURRENCIESTYPE_DELETE_ITEM_ERROR,
  CURRENCIESTYPE_UPDATE_ITEM,
  CURRENCIESTYPE_UPDATE_ITEM_SUCCESS,
  CURRENCIESTYPE_UPDATE_ITEM_ERROR,
  CURRENCIESTYPE_DELETE_CHECK,
} from "../actions";

export const getCurrenciesTypeList = () => ({
  type: CURRENCIESTYPE_GET_LIST,
});

export const getCurrenciesTypeListSuccess = (items) => ({
  type: CURRENCIESTYPE_GET_LIST_SUCCESS,
  payload: items,
});

export const getCurrenciesTypeListError = (error) => ({
  type: CURRENCIESTYPE_GET_LIST_ERROR,
  payload: error,
});

export const addCurrenciesTypeItem = (item) => ({
  type: CURRENCIESTYPE_ADD_ITEM,
  payload: item,
});
export const addCurrenciesTypeItemSuccess = (items) => ({
  type: CURRENCIESTYPE_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addCurrenciesTypeItemError = (error) => ({
  type: CURRENCIESTYPE_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteCurrenciesTypeItem = (item) => ({
  type: CURRENCIESTYPE_DELETE_ITEM,
  payload: item,
});
export const deleteCurrenciesTypeItemSuccess = (items) => ({
  type: CURRENCIESTYPE_DELETE_SUCCESS,
  payload: items,
});
export const deleteCurrenciesTypeItemCheck = (items) => ({
  type: CURRENCIESTYPE_DELETE_CHECK,
  payload: items,
});
export const deleteCurrenciesTypeItemError = (error) => ({
  type: CURRENCIESTYPE_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateCurrenciesTypeItem = (item) => ({
  type: CURRENCIESTYPE_UPDATE_ITEM,
  payload: item,
});
export const updateCurrenciesTypeItemSuccess = (items) => ({
  type: CURRENCIESTYPE_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateCurrenciesTypeItemError = (error) => ({
  type: CURRENCIESTYPE_UPDATE_ITEM_ERROR,
  payload: error,
});
