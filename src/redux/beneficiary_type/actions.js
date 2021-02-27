import {
  BENEFICIARY_TYPE_GET_LIST,
  BENEFICIARY_TYPE_GET_LIST_SUCCESS,
  BENEFICIARY_TYPE_GET_LIST_ERROR,
  BENEFICIARY_TYPE_ADD_ITEM,
  BENEFICIARY_TYPE_ADD_ITEM_SUCCESS,
  BENEFICIARY_TYPE_ADD_ITEM_ERROR,
  BENEFICIARY_TYPE_DELETE_ITEM,
  BENEFICIARY_TYPE_DELETE_SUCCESS,
  BENEFICIARY_TYPE_DELETE_ITEM_ERROR,
  BENEFICIARY_TYPE_UPDATE_ITEM,
  BENEFICIARY_TYPE_UPDATE_ITEM_SUCCESS,
  BENEFICIARY_TYPE_UPDATE_ITEM_ERROR,
  BENEFICIARY_TYPE_DELETE_CHECK,
} from "../actions";

export const getBeneficiary_typeList = () => ({
  type: BENEFICIARY_TYPE_GET_LIST,
});

export const getBeneficiary_typeListSuccess = (items) => ({
  type: BENEFICIARY_TYPE_GET_LIST_SUCCESS,
  payload: items,
});

export const getBeneficiary_typeListError = (error) => ({
  type: BENEFICIARY_TYPE_GET_LIST_ERROR,
  payload: error,
});

export const addBeneficiary_typeItem = (item) => ({
  type: BENEFICIARY_TYPE_ADD_ITEM,
  payload: item,
});
export const addBeneficiary_typeItemSuccess = (items) => ({
  type: BENEFICIARY_TYPE_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addBeneficiary_typeItemError = (error) => ({
  type: BENEFICIARY_TYPE_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteBeneficiary_typeItem = (item) => ({
  type: BENEFICIARY_TYPE_DELETE_ITEM,
  payload: item,
});
export const deleteBeneficiary_typeItemSuccess = (items) => ({
  type: BENEFICIARY_TYPE_DELETE_SUCCESS,
  payload: items,
});
export const deleteBeneficiary_typeItemCheck = (items) => ({
  type: BENEFICIARY_TYPE_DELETE_CHECK,
  payload: items,
});
export const deleteBeneficiary_typeItemError = (error) => ({
  type: BENEFICIARY_TYPE_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateBeneficiary_typeItem = (item) => ({
  type: BENEFICIARY_TYPE_UPDATE_ITEM,
  payload: item,
});
export const updateBeneficiary_typeItemSuccess = (items) => ({
  type: BENEFICIARY_TYPE_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateBeneficiary_typeItemError = (error) => ({
  type: BENEFICIARY_TYPE_UPDATE_ITEM_ERROR,
  payload: error,
});
