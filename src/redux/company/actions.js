import {
  COMPANY_GET_LIST,
  COMPANY_GET_LIST_SUCCESS,
  COMPANY_GET_LIST_ERROR,
  COMPANY_ADD_ITEM,
  COMPANY_ADD_ITEM_SUCCESS,
  COMPANY_ADD_ITEM_ERROR,
  COMPANY_DELETE_ITEM,
  COMPANY_DELETE_SUCCESS,
  COMPANY_DELETE_ITEM_ERROR,
  COMPANY_UPDATE_ITEM,
  COMPANY_UPDATE_ITEM_SUCCESS,
  COMPANY_UPDATE_ITEM_ERROR,
  COMPANY_DELETE_CHECK,
} from "../actions";

export const getCompanyList = () => ({
  type: COMPANY_GET_LIST,
});

export const getCompanyListSuccess = (items) => ({
  type: COMPANY_GET_LIST_SUCCESS,
  payload: items,
});

export const getCompanyListError = (error) => ({
  type: COMPANY_GET_LIST_ERROR,
  payload: error,
});

export const addCompanyItem = (item) => ({
  type: COMPANY_ADD_ITEM,
  payload: item,
});
export const addCompanyItemSuccess = (items) => ({
  type: COMPANY_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addCompanyItemError = (error) => ({
  type: COMPANY_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteCompanyItem = (item) => ({
  type: COMPANY_DELETE_ITEM,
  payload: item,
});
export const deleteCompanyItemSuccess = (items) => ({
  type: COMPANY_DELETE_SUCCESS,
  payload: items,
});
export const deleteCompanyItemCheck = (items) => ({
  type: COMPANY_DELETE_CHECK,
  payload: items,
});
export const deleteCompanyItemError = (error) => ({
  type: COMPANY_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateCompanyItem = (item) => ({
  type: COMPANY_UPDATE_ITEM,
  payload: item,
});
export const updateCompanyItemSuccess = (items) => ({
  type: COMPANY_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateCompanyItemError = (error) => ({
  type: COMPANY_UPDATE_ITEM_ERROR,
  payload: error,
});
