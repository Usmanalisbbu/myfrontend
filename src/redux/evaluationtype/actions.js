import {
  EVALUATIONTYPE_GET_LIST,
  EVALUATIONTYPE_GET_LIST_SUCCESS,
  EVALUATIONTYPE_GET_LIST_ERROR,
  EVALUATIONTYPE_ADD_ITEM,
  EVALUATIONTYPE_ADD_ITEM_SUCCESS,
  EVALUATIONTYPE_ADD_ITEM_ERROR,
  EVALUATIONTYPE_DELETE_ITEM,
  EVALUATIONTYPE_DELETE_SUCCESS,
  EVALUATIONTYPE_DELETE_ITEM_ERROR,
  EVALUATIONTYPE_UPDATE_ITEM,
  EVALUATIONTYPE_UPDATE_ITEM_SUCCESS,
  EVALUATIONTYPE_UPDATE_ITEM_ERROR,
  EVALUATIONTYPE_DELETE_CHECK,
} from "../actions";

export const getEvaluationTypeList = () => ({
  type: EVALUATIONTYPE_GET_LIST,
});

export const getEvaluationTypeListSuccess = (items) => ({
  type: EVALUATIONTYPE_GET_LIST_SUCCESS,
  payload: items,
});

export const getEvaluationTypeListError = (error) => ({
  type: EVALUATIONTYPE_GET_LIST_ERROR,
  payload: error,
});

export const addEvaluationTypeItem = (item) => ({
  type: EVALUATIONTYPE_ADD_ITEM,
  payload: item,
});
export const addEvaluationTypeItemSuccess = (items) => ({
  type: EVALUATIONTYPE_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addEvaluationTypeItemError = (error) => ({
  type: EVALUATIONTYPE_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteEvaluationTypeItem = (item) => ({
  type: EVALUATIONTYPE_DELETE_ITEM,
  payload: item,
});
export const deleteEvaluationTypeItemSuccess = (items) => ({
  type: EVALUATIONTYPE_DELETE_SUCCESS,
  payload: items,
});
export const deleteEvaluationTypeItemCheck = (items) => ({
  type: EVALUATIONTYPE_DELETE_CHECK,
  payload: items,
});
export const deleteEvaluationTypeItemError = (error) => ({
  type: EVALUATIONTYPE_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateEvaluationTypeItem = (item) => ({
  type: EVALUATIONTYPE_UPDATE_ITEM,
  payload: item,
});
export const updateEvaluationTypeItemSuccess = (items) => ({
  type: EVALUATIONTYPE_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateEvaluationTypeItemError = (error) => ({
  type: EVALUATIONTYPE_UPDATE_ITEM_ERROR,
  payload: error,
});
