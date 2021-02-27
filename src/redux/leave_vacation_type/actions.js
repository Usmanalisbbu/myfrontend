import {
  LEAVEVACATIONTYPE_GET_LIST,
  LEAVEVACATIONTYPE_GET_LIST_SUCCESS,
  LEAVEVACATIONTYPE_GET_LIST_ERROR,
  LEAVEVACATIONTYPE_ADD_ITEM,
  LEAVEVACATIONTYPE_ADD_ITEM_SUCCESS,
  LEAVEVACATIONTYPE_ADD_ITEM_ERROR,
  LEAVEVACATIONTYPE_DELETE_ITEM,
  LEAVEVACATIONTYPE_DELETE_SUCCESS,
  LEAVEVACATIONTYPE_DELETE_ITEM_ERROR,
  LEAVEVACATIONTYPE_UPDATE_ITEM,
  LEAVEVACATIONTYPE_UPDATE_ITEM_SUCCESS,
  LEAVEVACATIONTYPE_UPDATE_ITEM_ERROR,
  LEAVEVACATIONTYPE_DELETE_CHECK,
} from "../actions";

export const getLeaveVacationTypeList = () => ({
  type: LEAVEVACATIONTYPE_GET_LIST,
});

export const getLeaveVacationTypeListSuccess = (items) => ({
  type: LEAVEVACATIONTYPE_GET_LIST_SUCCESS,
  payload: items,
});

export const getLeaveVacationTypeListError = (error) => ({
  type: LEAVEVACATIONTYPE_GET_LIST_ERROR,
  payload: error,
});

export const addLeaveVacationTypeItem = (item) => ({
  type: LEAVEVACATIONTYPE_ADD_ITEM,
  payload: item,
});
export const addLeaveVacationTypeItemSuccess = (items) => ({
  type: LEAVEVACATIONTYPE_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addLeaveVacationTypeItemError = (error) => ({
  type: LEAVEVACATIONTYPE_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteLeaveVacationTypeItem = (item) => ({
  type: LEAVEVACATIONTYPE_DELETE_ITEM,
  payload: item,
});
export const deleteLeaveVacationTypeItemSuccess = (items) => ({
  type: LEAVEVACATIONTYPE_DELETE_SUCCESS,
  payload: items,
});
export const deleteLeaveVacationTypeItemCheck = (items) => ({
  type: LEAVEVACATIONTYPE_DELETE_CHECK,
  payload: items,
});
export const deleteLeaveVacationTypeItemError = (error) => ({
  type: LEAVEVACATIONTYPE_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateLeaveVacationTypeItem = (item) => ({
  type: LEAVEVACATIONTYPE_UPDATE_ITEM,
  payload: item,
});
export const updateLeaveVacationTypeItemSuccess = (items) => ({
  type: LEAVEVACATIONTYPE_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateLeaveVacationTypeItemError = (error) => ({
  type: LEAVEVACATIONTYPE_UPDATE_ITEM_ERROR,
  payload: error,
});
