import {
  COSTCENTER_GET_LIST,
  COSTCENTER_GET_LIST_SUCCESS,
  COSTCENTER_GET_LIST_ERROR,
  COSTCENTER_ADD_ITEM,
  COSTCENTER_ADD_ITEM_SUCCESS,
  COSTCENTER_ADD_ITEM_ERROR,
  COSTCENTER_DELETE_ITEM,
  COSTCENTER_DELETE_SUCCESS,
  COSTCENTER_DELETE_ITEM_ERROR,
  COSTCENTER_UPDATE_ITEM,
  COSTCENTER_UPDATE_ITEM_SUCCESS,
  COSTCENTER_UPDATE_ITEM_ERROR,
  COSTCENTER_DELETE_CHECK,
} from "../actions";

export const getCostCenterList = () => ({
  type: COSTCENTER_GET_LIST,
});

export const getCostCenterListSuccess = (items) => ({
  type: COSTCENTER_GET_LIST_SUCCESS,
  payload: items,
});

export const getCostCenterListError = (error) => ({
  type: COSTCENTER_GET_LIST_ERROR,
  payload: error,
});

export const addCostCenterItem = (item) => ({
  type: COSTCENTER_ADD_ITEM,
  payload: item,
});
export const addCostCenterItemSuccess = (items) => ({
  type: COSTCENTER_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addCostCenterItemError = (error) => ({
  type: COSTCENTER_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteCostCenterItem = (item) => ({
  type: COSTCENTER_DELETE_ITEM,
  payload: item,
});
export const deleteCostCenterItemSuccess = (items) => ({
  type: COSTCENTER_DELETE_SUCCESS,
  payload: items,
});
export const deleteCostCenterItemCheck = (items) => ({
  type: COSTCENTER_DELETE_CHECK,
  payload: items,
});
export const deleteCostCenterItemError = (error) => ({
  type: COSTCENTER_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateCostCenterItem = (item) => ({
  type: COSTCENTER_UPDATE_ITEM,
  payload: item,
});
export const updateCostCenterItemSuccess = (items) => ({
  type: COSTCENTER_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateCostCenterItemError = (error) => ({
  type: COSTCENTER_UPDATE_ITEM_ERROR,
  payload: error,
});
