import {
  RELIGION_GET_LIST,
  RELIGION_GET_LIST_SUCCESS,
  RELIGION_GET_LIST_ERROR,
  RELIGION_ADD_ITEM,
  RELIGION_ADD_ITEM_SUCCESS,
  RELIGION_ADD_ITEM_ERROR,
  RELIGION_DELETE_ITEM,
  RELIGION_DELETE_SUCCESS,
  RELIGION_DELETE_ITEM_ERROR,
  RELIGION_UPDATE_ITEM,
  RELIGION_UPDATE_ITEM_SUCCESS,
  RELIGION_UPDATE_ITEM_ERROR,
  RELIGION_DELETE_CHECK,
} from "../actions";

export const getReligionList = () => ({
  type: RELIGION_GET_LIST,
});

export const getReligionListSuccess = (items) => ({
  type: RELIGION_GET_LIST_SUCCESS,
  payload: items,
});

export const getReligionListError = (error) => ({
  type: RELIGION_GET_LIST_ERROR,
  payload: error,
});

export const addReligionItem = (item) => ({
  type: RELIGION_ADD_ITEM,
  payload: item,
});
export const addReligionItemSuccess = (items) => ({
  type: RELIGION_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addReligionItemError = (error) => ({
  type: RELIGION_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteReligionItem = (item) => ({
  type: RELIGION_DELETE_ITEM,
  payload: item,
});
export const deleteReligionItemSuccess = (items) => ({
  type: RELIGION_DELETE_SUCCESS,
  payload: items,
});
export const deleteReligionItemCheck = (items) => ({
  type: RELIGION_DELETE_CHECK,
  payload: items,
});
export const deleteReligionItemError = (error) => ({
  type: RELIGION_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateReligionItem = (item) => ({
  type: RELIGION_UPDATE_ITEM,
  payload: item,
});
export const updateReligionItemSuccess = (items) => ({
  type: RELIGION_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateReligionItemError = (error) => ({
  type: RELIGION_UPDATE_ITEM_ERROR,
  payload: error,
});
