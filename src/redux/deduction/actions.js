import {
  DEDUCTION_GET_LIST,
  DEDUCTION_GET_LIST_SUCCESS,
  DEDUCTION_GET_LIST_ERROR,
  DEDUCTION_ADD_ITEM,
  DEDUCTION_ADD_ITEM_SUCCESS,
  DEDUCTION_ADD_ITEM_ERROR,
  DEDUCTION_DELETE_ITEM,
  DEDUCTION_DELETE_SUCCESS,
  DEDUCTION_DELETE_ITEM_ERROR,
  DEDUCTION_UPDATE_ITEM,
  DEDUCTION_UPDATE_ITEM_SUCCESS,
  DEDUCTION_UPDATE_ITEM_ERROR,
  DEDUCTION_DELETE_CHECK,
} from "../actions";

export const getDeductionList = () => ({
  type: DEDUCTION_GET_LIST,
});

export const getDeductionListSuccess = (items) => ({
  type: DEDUCTION_GET_LIST_SUCCESS,
  payload: items,
});

export const getDeductionListError = (error) => ({
  type: DEDUCTION_GET_LIST_ERROR,
  payload: error,
});

export const addDeductionItem = (item) => ({
  type: DEDUCTION_ADD_ITEM,
  payload: item,
});
export const addDeductionItemSuccess = (items) => ({
  type: DEDUCTION_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addDeductionItemError = (error) => ({
  type: DEDUCTION_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteDeductionItem = (item) => ({
  type: DEDUCTION_DELETE_ITEM,
  payload: item,
});
export const deleteDeductionItemSuccess = (items) => ({
  type: DEDUCTION_DELETE_SUCCESS,
  payload: items,
});
export const deleteDeductionItemCheck = (items) => ({
  type: DEDUCTION_DELETE_CHECK,
  payload: items,
});
export const deleteDeductionItemError = (error) => ({
  type: DEDUCTION_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateDeductionItem = (item) => ({
  type: DEDUCTION_UPDATE_ITEM,
  payload: item,
});
export const updateDeductionItemSuccess = (items) => ({
  type: DEDUCTION_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateDeductionItemError = (error) => ({
  type: DEDUCTION_UPDATE_ITEM_ERROR,
  payload: error,
});
