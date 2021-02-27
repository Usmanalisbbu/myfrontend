import {
  PERCENTAGE_GET_LIST,
  PERCENTAGE_GET_LIST_SUCCESS,
  PERCENTAGE_GET_LIST_ERROR,
  PERCENTAGE_ADD_ITEM,
  PERCENTAGE_ADD_ITEM_SUCCESS,
  PERCENTAGE_ADD_ITEM_ERROR,
  PERCENTAGE_DELETE_ITEM,
  PERCENTAGE_DELETE_SUCCESS,
  PERCENTAGE_DELETE_ITEM_ERROR,
  PERCENTAGE_UPDATE_ITEM,
  PERCENTAGE_UPDATE_ITEM_SUCCESS,
  PERCENTAGE_UPDATE_ITEM_ERROR,
  PERCENTAGE_DELETE_CHECK,
} from "../actions";

export const getPercentageList = () => ({
  type: PERCENTAGE_GET_LIST,
});

export const getPercentageListSuccess = (items) => ({
  type: PERCENTAGE_GET_LIST_SUCCESS,
  payload: items,
});

export const getPercentageListError = (error) => ({
  type: PERCENTAGE_GET_LIST_ERROR,
  payload: error,
});

export const addPercentageItem = (item) => ({
  type: PERCENTAGE_ADD_ITEM,
  payload: item,
});
export const addPercentageItemSuccess = (items) => ({
  type: PERCENTAGE_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addPercentageItemError = (error) => ({
  type: PERCENTAGE_ADD_ITEM_ERROR,
  payload: error,
});

export const deletePercentageItem = (item) => ({
  type: PERCENTAGE_DELETE_ITEM,
  payload: item,
});
export const deletePercentageItemSuccess = (items) => ({
  type: PERCENTAGE_DELETE_SUCCESS,
  payload: items,
});
export const deletePercentageItemCheck = (items) => ({
  type: PERCENTAGE_DELETE_CHECK,
  payload: items,
});
export const deletePercentageItemError = (error) => ({
  type: PERCENTAGE_DELETE_ITEM_ERROR,
  payload: error,
});

export const updatePercentageItem = (item) => ({
  type: PERCENTAGE_UPDATE_ITEM,
  payload: item,
});
export const updatePercentageItemSuccess = (items) => ({
  type: PERCENTAGE_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updatePercentageItemError = (error) => ({
  type: PERCENTAGE_UPDATE_ITEM_ERROR,
  payload: error,
});
