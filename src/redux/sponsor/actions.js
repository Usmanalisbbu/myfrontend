import {
 SPONSOR_GET_LIST,
 SPONSOR_GET_LIST_SUCCESS,
 SPONSOR_GET_LIST_ERROR,
 SPONSOR_ADD_ITEM,
 SPONSOR_ADD_ITEM_SUCCESS,
 SPONSOR_ADD_ITEM_ERROR,
 SPONSOR_DELETE_ITEM,
 SPONSOR_DELETE_SUCCESS,
 SPONSOR_DELETE_ITEM_ERROR,
 SPONSOR_UPDATE_ITEM,
 SPONSOR_UPDATE_ITEM_SUCCESS,
 SPONSOR_UPDATE_ITEM_ERROR,
 SPONSOR_DELETE_CHECK,
} from "../actions";

export const getSponsorList = () => ({
  type: SPONSOR_GET_LIST,
});

export const getSponsorListSuccess = (items) => ({
  type: SPONSOR_GET_LIST_SUCCESS,
  payload: items,
});

export const getSponsorListError = (error) => ({
  type: SPONSOR_GET_LIST_ERROR,
  payload: error,
});

export const addSponsorItem = (item) => ({
  type: SPONSOR_ADD_ITEM,
  payload: item,
});
export const addSponsorItemSuccess = (items) => ({
  type: SPONSOR_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addSponsorItemError = (error) => ({
  type: SPONSOR_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteSponsorItem = (item) => ({
  type: SPONSOR_DELETE_ITEM,
  payload: item,
});
export const deleteSponsorItemSuccess = (items) => ({
  type: SPONSOR_DELETE_SUCCESS,
  payload: items,
});
export const deleteSponsorItemCheck = (items) => ({
  type: SPONSOR_DELETE_CHECK,
  payload: items,
});
export const deleteSponsorItemError = (error) => ({
  type: SPONSOR_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateSponsorItem = (item) => ({
  type: SPONSOR_UPDATE_ITEM,
  payload: item,
});
export const updateSponsorItemSuccess = (items) => ({
  type: SPONSOR_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateSponsorItemError = (error) => ({
  type: SPONSOR_UPDATE_ITEM_ERROR,
  payload: error,
});
