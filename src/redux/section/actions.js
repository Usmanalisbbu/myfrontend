import {
 SECTION_GET_LIST,
 SECTION_GET_LIST_SUCCESS,
 SECTION_GET_LIST_ERROR,
 SECTION_ADD_ITEM,
 SECTION_ADD_ITEM_SUCCESS,
 SECTION_ADD_ITEM_ERROR,
 SECTION_DELETE_ITEM,
 SECTION_DELETE_SUCCESS,
 SECTION_DELETE_ITEM_ERROR,
 SECTION_UPDATE_ITEM,
 SECTION_UPDATE_ITEM_SUCCESS,
 SECTION_UPDATE_ITEM_ERROR,
 SECTION_DELETE_CHECK,
} from "../actions";

export const getSectionList = () => ({
  type:SECTION_GET_LIST,
});

export const getSectionListSuccess = (items) => ({
  type:SECTION_GET_LIST_SUCCESS,
  payload: items,
});

export const getSectionListError = (error) => ({
  type:SECTION_GET_LIST_ERROR,
  payload: error,
});

export const addSectionItem = (item) => ({
  type:SECTION_ADD_ITEM,
  payload: item,
});
export const addSectionItemSuccess = (items) => ({
  type:SECTION_ADD_ITEM_SUCCESS,
  payload: items,
});

export const addSectionItemError = (error) => ({
  type:SECTION_ADD_ITEM_ERROR,
  payload: error,
});

export const deleteSectionItem = (item) => ({
  type:SECTION_DELETE_ITEM,
  payload: item,
});
export const deleteSectionItemSuccess = (items) => ({
  type:SECTION_DELETE_SUCCESS,
  payload: items,
});
export const deleteSectionItemCheck = (items) => ({
  type:SECTION_DELETE_CHECK,
  payload: items,
});
export const deleteSectionItemError = (error) => ({
  type:SECTION_DELETE_ITEM_ERROR,
  payload: error,
});

export const updateSectionItem = (item) => ({
  type:SECTION_UPDATE_ITEM,
  payload: item,
});
export const updateSectionItemSuccess = (items) => ({
  type:SECTION_UPDATE_ITEM_SUCCESS,
  payload: items,
});
export const updateSectionItemError = (error) => ({
  type:SECTION_UPDATE_ITEM_ERROR,
  payload: error,
});
