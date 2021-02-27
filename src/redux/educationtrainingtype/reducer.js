import {
  EDUCATION_GET_LIST,
  EDUCATION_GET_LIST_SUCCESS,
  EDUCATION_GET_LIST_ERROR,
  EDUCATION_ADD_ITEM,
  EDUCATION_ADD_ITEM_SUCCESS,
  EDUCATION_ADD_ITEM_ERROR,
  EDUCATION_DELETE_ITEM,
  EDUCATION_DELETE_SUCCESS,
  EDUCATION_DELETE_ITEM_ERROR,
  EDUCATION_UPDATE_ITEM,
  EDUCATION_UPDATE_ITEM_SUCCESS,
  EDUCATION_UPDATE_ITEM_ERROR,
  EDUCATION_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  educationItems: null,
  educationerror: "",
  educationloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EDUCATION_GET_LIST:
      return { ...state, educationloading: false };

    case EDUCATION_GET_LIST_SUCCESS:
      return {
        ...state,
        educationloading: true,
        educationItems: action.payload,
      };

    case EDUCATION_GET_LIST_ERROR:
      return { ...state, educationloading: true, educationerror: action.payload };

    case EDUCATION_ADD_ITEM:
      return { ...state, educationloading: false };
    case EDUCATION_ADD_ITEM_SUCCESS:
      let items = state.educationItems;
      let item = [];
      item.id = action.payload.id;
      item.education_desc_eng = action.payload.education_desc_eng;
      item.education_desc_arab = action.payload.education_desc_arab;
      items.splice(0, 0, item);
      return {
        ...state,
        educationloading: true,
        educationItems: items,
      };

    case EDUCATION_ADD_ITEM_ERROR:
      return { ...state, educationloading: true, educationerror: action.payload };

    case EDUCATION_DELETE_ITEM:
      return {
        ...state,
        educationloading: false,
      };
    case EDUCATION_DELETE_CHECK:
      return {
        ...state,
        educationloading: true,
      };

    case EDUCATION_DELETE_SUCCESS:
      const data = state.educationItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        educationloading: true,
        educationItems: data,
      };

    case EDUCATION_DELETE_ITEM_ERROR:
      return { ...state, educationloading: true, educationerror: action.payload };

    case EDUCATION_UPDATE_ITEM:
      return {
        ...state,
        educationloading: false,
      };
    case EDUCATION_UPDATE_ITEM_SUCCESS:
      const con = state.educationItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            education_desc_arab: action.payload.education_desc_arab,
            education_desc_eng: action.payload.education_desc_eng,
            
          };
        }
        return item;
      });
      return {
        ...state,
        educationloading: true,
        educationItems: con,
      };
    case EDUCATION_UPDATE_ITEM_ERROR:
      return { ...state, educationloading: true, educationerror: action.payload };

    default:
      return { ...state };
  }
};
