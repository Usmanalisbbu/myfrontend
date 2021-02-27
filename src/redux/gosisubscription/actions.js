import {
  GOSISUBSCRIPTION_GET_LIST,
  GOSISUBSCRIPTION_GET_LIST_SUCCESS,
  GOSISUBSCRIPTION_GET_LIST_ERROR,
  GOSISUBSCRIPTION_ADD_ITEM,
  GOSISUBSCRIPTION_ADD_ITEM_SUCCESS,
  GOSISUBSCRIPTION_ADD_ITEM_ERROR,
  GOSISUBSCRIPTION_DELETE_ITEM,
  GOSISUBSCRIPTION_DELETE_SUCCESS,
  GOSISUBSCRIPTION_DELETE_ITEM_ERROR,
  GOSISUBSCRIPTION_UPDATE_ITEM,
  GOSISUBSCRIPTION_UPDATE_ITEM_SUCCESS,
  GOSISUBSCRIPTION_UPDATE_ITEM_ERROR,
  GOSISUBSCRIPTION_DELETE_CHECK,
} from "../actions";

export const getGosiSubscriptionList = () => ({
  type: GOSISUBSCRIPTION_GET_LIST,
});

export const getGosiSubscriptionListSuccess = (items) => ({
  type: GOSISUBSCRIPTION_GET_LIST_SUCCESS,
  payload: items,
});

export const getGosiSubscriptionListError = (error) => ({
  type: GOSISUBSCRIPTION_GET_LIST_ERROR,
  payload: error,
});

export const addGosiSubscriptionItem = (item) => ({
  type: GOSISUBSCRIPTION_ADD_ITEM,
  payload: item,
});
export const addGosiSubscriptionItemSuccess = (items) => ({
  type: GOSISUBSCRIPTION_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addGosiSubscriptionItemError = (error) => ({
  type: GOSISUBSCRIPTION_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteGosiSubscriptionItem = (item) => ({
  type: GOSISUBSCRIPTION_DELETE_ITEM,
  payload: item,
});
export const deleteGosiSubscriptionItemSuccess = (items) => ({
  type: GOSISUBSCRIPTION_DELETE_SUCCESS,
  payload: items,
});
export const deleteGosiSubscriptionItemCheck = (items) => ({
  type: GOSISUBSCRIPTION_DELETE_CHECK,
  payload: items,
});
export const deleteGosiSubscriptionItemError = (error) => ({
  type: GOSISUBSCRIPTION_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateGosiSubscriptionItem = (item) => ({
  type: GOSISUBSCRIPTION_UPDATE_ITEM,
  payload: item,
});
export const updateGosiSubscriptionItemSuccess = (items) => ({
  type: GOSISUBSCRIPTION_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateGosiSubscriptionItemError = (error) => ({
  type: GOSISUBSCRIPTION_UPDATE_ITEM_ERROR,
  payload: error,
});
