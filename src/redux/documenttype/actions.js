import {
  DOCUMENTTYPE_GET_LIST,
  DOCUMENTTYPE_GET_LIST_SUCCESS,
  DOCUMENTTYPE_GET_LIST_ERROR,
  DOCUMENTTYPE_ADD_ITEM,
  DOCUMENTTYPE_ADD_ITEM_SUCCESS,
  DOCUMENTTYPE_ADD_ITEM_ERROR,
  DOCUMENTTYPE_DELETE_ITEM,
  DOCUMENTTYPE_DELETE_SUCCESS,
  DOCUMENTTYPE_DELETE_ITEM_ERROR,
  DOCUMENTTYPE_UPDATE_ITEM,
  DOCUMENTTYPE_UPDATE_ITEM_SUCCESS,
  DOCUMENTTYPE_UPDATE_ITEM_ERROR,
  DOCUMENTTYPE_DELETE_CHECK,
} from "../actions";

export const getDocumenttypeList = () => ({
  type: DOCUMENTTYPE_GET_LIST,
});

export const getDocumenttypeListSuccess = (items) => ({
  type: DOCUMENTTYPE_GET_LIST_SUCCESS,
  payload: items,
});

export const getDocumenttypeListError = (error) => ({
  type: DOCUMENTTYPE_GET_LIST_ERROR,
  payload: error,
});

export const addDocumenttypeItem = (item) => ({
  type: DOCUMENTTYPE_ADD_ITEM,
  payload: item,
});
export const addDocumenttypeItemSuccess = (items) => ({
  type: DOCUMENTTYPE_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addDocumenttypeItemError = (error) => ({
  type: DOCUMENTTYPE_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteDocumenttypeItem = (item) => ({
  type: DOCUMENTTYPE_DELETE_ITEM,
  payload: item,
});
export const deleteDocumenttypeItemSuccess = (items) => ({
  type: DOCUMENTTYPE_DELETE_SUCCESS,
  payload: items,
});
export const deleteDocumenttypeItemCheck = (items) => ({
  type: DOCUMENTTYPE_DELETE_CHECK,
  payload: items,
});
export const deleteDocumenttypeItemError = (error) => ({
  type: DOCUMENTTYPE_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateDocumenttypeItem = (item) => ({
  type: DOCUMENTTYPE_UPDATE_ITEM,
  payload: item,
});
export const updateDocumenttypeItemSuccess = (items) => ({
  type: DOCUMENTTYPE_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateDocumenttypeItemError = (error) => ({
  type: DOCUMENTTYPE_UPDATE_ITEM_ERROR,
  payload: error,
});
