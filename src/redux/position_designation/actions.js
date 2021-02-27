import {
  POSITIONDESIGNATION_GET_LIST,
  POSITIONDESIGNATION_GET_LIST_SUCCESS,
  POSITIONDESIGNATION_GET_LIST_ERROR,
  POSITIONDESIGNATION_ADD_ITEM,
  POSITIONDESIGNATION_ADD_ITEM_SUCCESS,
  POSITIONDESIGNATION_ADD_ITEM_ERROR,
  POSITIONDESIGNATION_DELETE_ITEM,
  POSITIONDESIGNATION_DELETE_SUCCESS,
  POSITIONDESIGNATION_DELETE_ITEM_ERROR,
  POSITIONDESIGNATION_UPDATE_ITEM,
  POSITIONDESIGNATION_UPDATE_ITEM_SUCCESS,
  POSITIONDESIGNATION_UPDATE_ITEM_ERROR,
  POSITIONDESIGNATION_DELETE_CHECK,
} from "../actions";

export const getPositionDesignationList = () => ({
  type: POSITIONDESIGNATION_GET_LIST,
});

export const getPositionDesignationListSuccess = (items) => ({
  type: POSITIONDESIGNATION_GET_LIST_SUCCESS,
  payload: items,
});

export const getPositionDesignationListError = (error) => ({
  type: POSITIONDESIGNATION_GET_LIST_ERROR,
  payload: error,
});

export const addPositionDesignationItem = (item) => ({
  type: POSITIONDESIGNATION_ADD_ITEM,
  payload: item,
});
export const addPositionDesignationItemSuccess = (items) => ({
  type: POSITIONDESIGNATION_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addPositionDesignationItemError = (error) => ({
  type: POSITIONDESIGNATION_ADD_ITEM_ERROR,
  payload: error,
});

export const deletePositionDesignationItem = (item) => ({
  type: POSITIONDESIGNATION_DELETE_ITEM,
  payload: item,
});
export const deletePositionDesignationItemSuccess = (items) => ({
  type: POSITIONDESIGNATION_DELETE_SUCCESS,
  payload: items,
});
export const deletePositionDesignationItemCheck = (items) => ({
  type: POSITIONDESIGNATION_DELETE_CHECK,
  payload: items,
});
export const deletePositionDesignationItemError = (error) => ({
  type: POSITIONDESIGNATION_DELETE_ITEM_ERROR,
  payload: error,
});

export const updatePositionDesignationItem = (item) => ({
  type: POSITIONDESIGNATION_UPDATE_ITEM,
  payload: item,
});
export const updatePositionDesignationItemSuccess = (items) => ({
  type: POSITIONDESIGNATION_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updatePositionDesignationItemError = (error) => ({
  type: POSITIONDESIGNATION_UPDATE_ITEM_ERROR,
  payload: error,
});
