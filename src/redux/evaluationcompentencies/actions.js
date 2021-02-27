import {
  EVALUATIONCOMPENTENCIES_GET_LIST,
  EVALUATIONCOMPENTENCIES_GET_LIST_SUCCESS,
  EVALUATIONCOMPENTENCIES_GET_LIST_ERROR,
  EVALUATIONCOMPENTENCIES_ADD_ITEM,
  EVALUATIONCOMPENTENCIES_ADD_ITEM_SUCCESS,
  EVALUATIONCOMPENTENCIES_ADD_ITEM_ERROR,
  EVALUATIONCOMPENTENCIES_DELETE_ITEM,
  EVALUATIONCOMPENTENCIES_DELETE_SUCCESS,
  EVALUATIONCOMPENTENCIES_DELETE_ITEM_ERROR,
  EVALUATIONCOMPENTENCIES_UPDATE_ITEM,
  EVALUATIONCOMPENTENCIES_UPDATE_ITEM_SUCCESS,
  EVALUATIONCOMPENTENCIES_UPDATE_ITEM_ERROR,
  EVALUATIONCOMPENTENCIES_DELETE_CHECK,
} from "../actions";

export const getEvaluationcompentenciesList = () => ({
  type: EVALUATIONCOMPENTENCIES_GET_LIST,
});

export const getEvaluationcompentenciesListSuccess = (items) => ({
  type: EVALUATIONCOMPENTENCIES_GET_LIST_SUCCESS,
  payload: items,
});

export const getEvaluationcompentenciesListError = (error) => ({
  type: EVALUATIONCOMPENTENCIES_GET_LIST_ERROR,
  payload: error,
});

export const addEvaluationcompentenciesItem = (item) => ({
  type: EVALUATIONCOMPENTENCIES_ADD_ITEM,
  payload: item,
});
export const addEvaluationcompentenciesItemSuccess = (items) => ({
  type: EVALUATIONCOMPENTENCIES_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addEvaluationcompentenciesItemError = (error) => ({
  type: EVALUATIONCOMPENTENCIES_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteEvaluationcompentenciesItem = (item) => ({
  type: EVALUATIONCOMPENTENCIES_DELETE_ITEM,
  payload: item,
});
export const deleteEvaluationcompentenciesItemSuccess = (items) => ({
  type: EVALUATIONCOMPENTENCIES_DELETE_SUCCESS,
  payload: items,
});
export const deleteEvaluationcompentenciesItemCheck = (items) => ({
  type: EVALUATIONCOMPENTENCIES_DELETE_CHECK,
  payload: items,
});
export const deleteEvaluationcompentenciesItemError = (error) => ({
  type: EVALUATIONCOMPENTENCIES_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateEvaluationcompentenciesItem = (item) => ({
  type: EVALUATIONCOMPENTENCIES_UPDATE_ITEM,
  payload: item,
});
export const updateEvaluationcompentenciesItemSuccess = (items) => ({
  type: EVALUATIONCOMPENTENCIES_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateEvaluationcompentenciesItemError = (error) => ({
  type: EVALUATIONCOMPENTENCIES_UPDATE_ITEM_ERROR,
  payload: error,
});
