import {
 MODIFICATIONTYPE_GET_LIST,
 MODIFICATIONTYPE_GET_LIST_SUCCESS,
 MODIFICATIONTYPE_GET_LIST_ERROR,
 MODIFICATIONTYPE_ADD_ITEM,
 MODIFICATIONTYPE_ADD_ITEM_SUCCESS,
 MODIFICATIONTYPE_ADD_ITEM_ERROR,
 MODIFICATIONTYPE_DELETE_ITEM,
 MODIFICATIONTYPE_DELETE_SUCCESS,
 MODIFICATIONTYPE_DELETE_ITEM_ERROR,
 MODIFICATIONTYPE_UPDATE_ITEM,
 MODIFICATIONTYPE_UPDATE_ITEM_SUCCESS,
 MODIFICATIONTYPE_UPDATE_ITEM_ERROR,
 MODIFICATIONTYPE_DELETE_CHECK,
} from "../actions";

export const getModificationTypeList = () => ({
  type:MODIFICATIONTYPE_GET_LIST,
});

export const getModificationTypeListSuccess = (items) => ({
  type:MODIFICATIONTYPE_GET_LIST_SUCCESS,
  payload: items,
});

export const getModificationTypeListError = (error) => ({
  type:MODIFICATIONTYPE_GET_LIST_ERROR,
  payload: error,
});

export const addModificationTypeItem = (item) => ({
  type:MODIFICATIONTYPE_ADD_ITEM,
  payload: item,
});
export const addModificationTypeItemSuccess = (items) => ({
  type:MODIFICATIONTYPE_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addModificationTypeItemError = (error) => ({
  type:MODIFICATIONTYPE_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteModificationTypeItem = (item) => ({
  type:MODIFICATIONTYPE_DELETE_ITEM,
  payload: item,
});
export const deleteModificationTypeItemSuccess = (items) => ({
  type:MODIFICATIONTYPE_DELETE_SUCCESS,
  payload: items,
});
export const deleteModificationTypeItemCheck = (items) => ({
  type:MODIFICATIONTYPE_DELETE_CHECK,
  payload: items,
});
export const deleteModificationTypeItemError = (error) => ({
  type:MODIFICATIONTYPE_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateModificationTypeItem = (item) => ({
  type:MODIFICATIONTYPE_UPDATE_ITEM,
  payload: item,
});
export const updateModificationTypeItemSuccess = (items) => ({
  type:MODIFICATIONTYPE_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateModificationTypeItemError = (error) => ({
  type:MODIFICATIONTYPE_UPDATE_ITEM_ERROR,
  payload: error,
});
