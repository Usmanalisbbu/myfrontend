import {
  COMPANYSCHEDULE_GET_LIST,
  COMPANYSCHEDULE_GET_LIST_SUCCESS,
  COMPANYSCHEDULE_GET_LIST_ERROR,
  COMPANYSCHEDULE_ADD_ITEM,
  COMPANYSCHEDULE_ADD_ITEM_SUCCESS,
  COMPANYSCHEDULE_ADD_ITEM_ERROR,
  COMPANYSCHEDULE_DELETE_ITEM,
  COMPANYSCHEDULE_DELETE_SUCCESS,
  COMPANYSCHEDULE_DELETE_ITEM_ERROR,
  COMPANYSCHEDULE_UPDATE_ITEM,
  COMPANYSCHEDULE_UPDATE_ITEM_SUCCESS,
  COMPANYSCHEDULE_UPDATE_ITEM_ERROR,
  COMPANYSCHEDULE_DELETE_CHECK,
} from "../actions";

export const getCompanyScheduleList = () => ({
  type: COMPANYSCHEDULE_GET_LIST,
});

export const getCompanyScheduleListSuccess = (items) => ({
  type: COMPANYSCHEDULE_GET_LIST_SUCCESS,
  payload: items,
});

export const getCompanyScheduleListError = (error) => ({
  type: COMPANYSCHEDULE_GET_LIST_ERROR,
  payload: error,
});

export const addCompanyScheduleItem = (item) => ({
  type: COMPANYSCHEDULE_ADD_ITEM,
  payload: item,
});
export const addCompanyScheduleItemSuccess = (items) => ({
  type: COMPANYSCHEDULE_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addCompanyScheduleItemError = (error) => ({
  type: COMPANYSCHEDULE_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteCompanyScheduleItem = (item) => ({
  type: COMPANYSCHEDULE_DELETE_ITEM,
  payload: item,
});
export const deleteCompanyScheduleItemSuccess = (items) => ({
  type: COMPANYSCHEDULE_DELETE_SUCCESS,
  payload: items,
});
export const deleteCompanyScheduleItemCheck = (items) => ({
  type: COMPANYSCHEDULE_DELETE_CHECK,
  payload: items,
});
export const deleteCompanyScheduleItemError = (error) => ({
  type: COMPANYSCHEDULE_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateCompanyScheduleItem = (item) => ({
  type: COMPANYSCHEDULE_UPDATE_ITEM,
  payload: item,
});
export const updateCompanyScheduleItemSuccess = (items) => ({
  type: COMPANYSCHEDULE_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateCompanyScheduleItemError = (error) => ({
  type: COMPANYSCHEDULE_UPDATE_ITEM_ERROR,
  payload: error,
});
