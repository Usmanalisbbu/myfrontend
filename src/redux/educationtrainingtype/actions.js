import {
  EDUCATION_GET_LIST,
  EDUCATION_GET_LIST_SUCCESS,
  EDUCATION_GET_LIST_ERROR,
  EDUCATION_ADD_ITEM,
  EDUCATION_ADD_ITEM_SUCCESS,
  EDUCATION_ADD_ITEM_ERROR,
  EDUCATION_DELETE_ITEM,
  EDUCATION_DELETE_SUCCESS,
  EDUCATION_DELETE_ITEM_ERROR,
  EDUCATION_UPDATE_ITEM,
  EDUCATION_UPDATE_ITEM_SUCCESS,
  EDUCATION_UPDATE_ITEM_ERROR,
  EDUCATION_DELETE_CHECK,
} from "../actions";

export const getEducationList = () => ({
  type: EDUCATION_GET_LIST,
});

export const getEducationListSuccess = (items) => ({
  type: EDUCATION_GET_LIST_SUCCESS,
  payload: items,
});

export const getEducationListError = (error) => ({
  type: EDUCATION_GET_LIST_ERROR,
  payload: error,
});

export const addEducationItem = (item) => ({
  type: EDUCATION_ADD_ITEM,
  payload: item,
});
export const addEducationItemSuccess = (items) => ({
  type: EDUCATION_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addEducationItemError = (error) => ({
  type: EDUCATION_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteEducationItem = (item) => ({
  type: EDUCATION_DELETE_ITEM,
  payload: item,
});
export const deleteEducationItemSuccess = (items) => ({
  type: EDUCATION_DELETE_SUCCESS,
  payload: items,
});
export const deleteEducationItemCheck = (items) => ({
  type: EDUCATION_DELETE_CHECK,
  payload: items,
});
export const deleteEducationItemError = (error) => ({
  type: EDUCATION_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateEducationItem = (item) => ({
  type: EDUCATION_UPDATE_ITEM,
  payload: item,
});
export const updateEducationItemSuccess = (items) => ({
  type: EDUCATION_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateEducationItemError = (error) => ({
  type: EDUCATION_UPDATE_ITEM_ERROR,
  payload: error,
});
