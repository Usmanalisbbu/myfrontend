import {
  EARNINGSBENEFITS_GET_LIST,
  EARNINGSBENEFITS_GET_LIST_SUCCESS,
  EARNINGSBENEFITS_GET_LIST_ERROR,
  EARNINGSBENEFITS_ADD_ITEM,
  EARNINGSBENEFITS_ADD_ITEM_SUCCESS,
  EARNINGSBENEFITS_ADD_ITEM_ERROR,
  EARNINGSBENEFITS_DELETE_ITEM,
  EARNINGSBENEFITS_DELETE_SUCCESS,
  EARNINGSBENEFITS_DELETE_ITEM_ERROR,
  EARNINGSBENEFITS_UPDATE_ITEM,
  EARNINGSBENEFITS_UPDATE_ITEM_SUCCESS,
  EARNINGSBENEFITS_UPDATE_ITEM_ERROR,
  EARNINGSBENEFITS_DELETE_CHECK,
} from "../actions";

export const getEarningsBenefitsList = () => ({
  type: EARNINGSBENEFITS_GET_LIST,
});

export const getEarningsBenefitsListSuccess = (items) => ({
  type: EARNINGSBENEFITS_GET_LIST_SUCCESS,
  payload: items,
});

export const getEarningsBenefitsListError = (error) => ({
  type: EARNINGSBENEFITS_GET_LIST_ERROR,
  payload: error,
});

export const addEarningsBenefitsItem = (item) => ({
  type: EARNINGSBENEFITS_ADD_ITEM,
  payload: item,
});
export const addEarningsBenefitsItemSuccess = (items) => ({
  type: EARNINGSBENEFITS_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addEarningsBenefitsItemError = (error) => ({
  type: EARNINGSBENEFITS_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteEarningsBenefitsItem = (item) => ({
  type: EARNINGSBENEFITS_DELETE_ITEM,
  payload: item,
});
export const deleteEarningsBenefitsItemSuccess = (items) => ({
  type: EARNINGSBENEFITS_DELETE_SUCCESS,
  payload: items,
});
export const deleteEarningsBenefitsItemCheck = (items) => ({
  type: EARNINGSBENEFITS_DELETE_CHECK,
  payload: items,
});
export const deleteEarningsBenefitsItemError = (error) => ({
  type: EARNINGSBENEFITS_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateEarningsBenefitsItem = (item) => ({
  type: EARNINGSBENEFITS_UPDATE_ITEM,
  payload: item,
});
export const updateEarningsBenefitsItemSuccess = (items) => ({
  type: EARNINGSBENEFITS_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateEarningsBenefitsItemError = (error) => ({
  type: EARNINGSBENEFITS_UPDATE_ITEM_ERROR,
  payload: error,
});
