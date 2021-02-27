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

const INIT_STATE = {
  evaluationtypeItems: null,
  evaluationtypeerror: "",
  evaluationtypeloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EVALUATIONTYPE_GET_LIST:
      return { ...state, evaluationtypeloading: false };

    case EVALUATIONTYPE_GET_LIST_SUCCESS:
      return {
        ...state,
        evaluationtypeloading: true,
        evaluationtypeItems: action.payload,
      };

    case EVALUATIONTYPE_GET_LIST_ERROR:
      return { ...state, evaluationtypeloading: true, evaluationtypeerror: action.payload };

    case EVALUATIONTYPE_ADD_ITEM:
      return { ...state, evaluationtypeloading: false };
    case EVALUATIONTYPE_ADD_ITEM_SUCCESS:
      let items = state.evaluationtypeItems;
      let item = [];
      item.id = action.payload.id;
      item.evaluation_type_desc_eng = action.payload.evaluation_type_desc_eng;
      item.evaluation_type_desc_arab = action.payload.evaluation_type_desc_arab;
      items.splice(0, 0, item);
      return {
        ...state,
        evaluationtypeloading: true,
        evaluationtypeItems: items,
      };

    case EVALUATIONTYPE_ADD_ITEM_ERROR:
      return { ...state, evaluationtypeloading: true, evaluationtypeerror: action.payload };

    case EVALUATIONTYPE_DELETE_ITEM:
      return {
        ...state,
        evaluationtypeloading: false,
      };
    case EVALUATIONTYPE_DELETE_CHECK:
      return {
        ...state,
        evaluationtypeloading: true,
      };

    case EVALUATIONTYPE_DELETE_SUCCESS:
      const data = state.evaluationtypeItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        evaluationtypeloading: true,
        evaluationtypeItems: data,
      };

    case EVALUATIONTYPE_DELETE_ITEM_ERROR:
      return { ...state, evaluationtypeloading: true, evaluationtypeerror: action.payload };

    case EVALUATIONTYPE_UPDATE_ITEM:
      return {
        ...state,
        evaluationtypeloading: false,
      };
    case EVALUATIONTYPE_UPDATE_ITEM_SUCCESS:
      const con = state.evaluationtypeItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            evaluation_type_desc_arab: action.payload.evaluation_type_desc_arab,
            evaluation_type_desc_eng: action.payload.evaluation_type_desc_eng,
            
          };
        }
        return item;
      });
      return {
        ...state,
        evaluationtypeloading: true,
        evaluationtypeItems: con,
      };
    case EVALUATIONTYPE_UPDATE_ITEM_ERROR:
      return { ...state, evaluationtypeloading: true, evaluationtypeerror: action.payload };

    default:
      return { ...state };
  }
};
