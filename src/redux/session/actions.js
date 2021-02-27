import {
  SESSION_GET_LIST,
  SESSION_GET_LIST_SUCCESS,
  SESSION_GET_LIST_ERROR,
  SESSION_ADD_ITEM,
  SESSION_ADD_ITEM_SUCCESS,
  SESSION_ADD_ITEM_ERROR,
  SESSION_DELETE_ITEM,
  SESSION_DELETE_SUCCESS,
  SESSION_DELETE_ITEM_ERROR,
  SESSION_UPDATE_ITEM,
  SESSION_UPDATE_ITEM_SUCCESS,
  SESSION_UPDATE_ITEM_ERROR,
  SESSION_DELETE_CHECK,
} from "../actions";

export const getSessionList = () => ({
  type: SESSION_GET_LIST,
});

export const getSessionListSuccess = (items) => ({
  type: SESSION_GET_LIST_SUCCESS,
  payload: items,
});

export const getSessionListError = (error) => ({
  type: SESSION_GET_LIST_ERROR,
  payload: error,
});

export const addSessionItem = (item) => ({
  type: SESSION_ADD_ITEM,
  payload: item,
});
export const addSessionItemSuccess = (items) => ({
  type: SESSION_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addSessionItemError = (error) => ({
  type: SESSION_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteSessionItem = (item) => ({
  type: SESSION_DELETE_ITEM,
  payload: item,
});
export const deleteSessionItemSuccess = (items) => ({
  type: SESSION_DELETE_SUCCESS,
  payload: items,
});
export const deleteSessionItemCheck = (items) => ({
  type: SESSION_DELETE_CHECK,
  payload: items,
});
export const deleteSessionItemError = (error) => ({
  type: SESSION_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateSessionItem = (item) => ({
  type: SESSION_UPDATE_ITEM,
  payload: item,
});
export const updateSessionItemSuccess = (items) => ({
  type: SESSION_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateSessionItemError = (error) => ({
  type: SESSION_UPDATE_ITEM_ERROR,
  payload: error,
});
