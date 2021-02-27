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

const INIT_STATE = {
  positiondesignationItems: null,
  positiondesignationerror: "",
  positiondesignationloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case POSITIONDESIGNATION_GET_LIST:
      return { ...state, positiondesignationloading: false };

    case POSITIONDESIGNATION_GET_LIST_SUCCESS:
      return {
        ...state,
        positiondesignationloading: true,
        positiondesignationItems: action.payload,
      };

    case POSITIONDESIGNATION_GET_LIST_ERROR:
      return { ...state, positiondesignationloading: true, positiondesignationerror: action.payload };

    case POSITIONDESIGNATION_ADD_ITEM:
      return { ...state, positiondesignationloading: false };
    case POSITIONDESIGNATION_ADD_ITEM_SUCCESS:
      let items = state.positiondesignationItems;
      let item = [];
      item.id = action.payload.id;
      item.designation_desc_eng = action.payload.designation_desc_eng;
      item.designation_desc_arab = action.payload.designation_desc_arab;
      items.splice(0, 0, item);
      return {
        ...state,
        positiondesignationloading: true,
        positiondesignationItems: items,
      };

    case POSITIONDESIGNATION_ADD_ITEM_ERROR:
      return { ...state, positiondesignationloading: true, positiondesignationerror: action.payload };

    case POSITIONDESIGNATION_DELETE_ITEM:
      return {
        ...state,
        positiondesignationloading: false,
      };
    case POSITIONDESIGNATION_DELETE_CHECK:
      return {
        ...state,
        positiondesignationloading: true,
      };

    case POSITIONDESIGNATION_DELETE_SUCCESS:
      const data = state.positiondesignationItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        positiondesignationloading: true,
        positiondesignationItems: data,
      };

    case POSITIONDESIGNATION_DELETE_ITEM_ERROR:
      return { ...state, positiondesignationloading: true, positiondesignationerror: action.payload };

    case POSITIONDESIGNATION_UPDATE_ITEM:
      return {
        ...state,
        positiondesignationloading: false,
      };
    case POSITIONDESIGNATION_UPDATE_ITEM_SUCCESS:
      const con = state.positiondesignationItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            designation_desc_arab: action.payload.designation_desc_arab,
            designation_desc_eng: action.payload.designation_desc_eng,
            
          };
        }
        return item;
      });
      return {
        ...state,
        positiondesignationloading: true,
        positiondesignationItems: con,
      };
    case POSITIONDESIGNATION_UPDATE_ITEM_ERROR:
      return { ...state, positiondesignationloading: true, positiondesignationerror: action.payload };

    default:
      return { ...state };
  }
};
