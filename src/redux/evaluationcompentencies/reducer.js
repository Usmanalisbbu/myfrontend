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

const INIT_STATE = {
  evaluationcompentenciesItems: null,
  evaluationcompentencieserror: "",
  evaluationcompentenciesloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EVALUATIONCOMPENTENCIES_GET_LIST:
      return { ...state, evaluationcompentenciesloading: false };

    case EVALUATIONCOMPENTENCIES_GET_LIST_SUCCESS:
      return {
        ...state,
        evaluationcompentenciesloading: true,
        evaluationcompentenciesItems: action.payload,
      };

    case EVALUATIONCOMPENTENCIES_GET_LIST_ERROR:
      return {
        ...state,
        evaluationcompentenciesloading: true,
        evaluationcompentencieserror: action.payload,
      };

    case EVALUATIONCOMPENTENCIES_ADD_ITEM:
      return { ...state, evaluationcompentenciesloading: false };
    case EVALUATIONCOMPENTENCIES_ADD_ITEM_SUCCESS:
      let items = state.evaluationcompentenciesItems;
      let item = [];
      item.id = action.payload.id;
      item.evaluation_desc_eng = action.payload.evaluation_desc_eng;
      item.evaluation_desc_arab = action.payload.evaluation_desc_arab;
      items.splice(0, 0, item);
      return {
        ...state,
        evaluationcompentenciesloading: true,
        evaluationcompentenciesItems: items,
      };

    case EVALUATIONCOMPENTENCIES_ADD_ITEM_ERROR:
      return {
        ...state,
        evaluationcompentenciesloading: true,
        evaluationcompentencieserror: action.payload,
      };

    case EVALUATIONCOMPENTENCIES_DELETE_ITEM:
      return {
        ...state,
        evaluationcompentenciesloading: false,
      };
    case EVALUATIONCOMPENTENCIES_DELETE_CHECK:
      return {
        ...state,
        evaluationcompentenciesloading: true,
      };

    case EVALUATIONCOMPENTENCIES_DELETE_SUCCESS:
      const data = state.evaluationcompentenciesItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        evaluationcompentenciesloading: true,
        evaluationcompentenciesItems: data,
      };

    case EVALUATIONCOMPENTENCIES_DELETE_ITEM_ERROR:
      return {
        ...state,
        evaluationcompentenciesloading: true,
        evaluationcompentencieserror: action.payload,
      };

    case EVALUATIONCOMPENTENCIES_UPDATE_ITEM:
      return {
        ...state,
        evaluationcompentenciesloading: false,
      };
    case EVALUATIONCOMPENTENCIES_UPDATE_ITEM_SUCCESS:
      const con = state.evaluationcompentenciesItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            evaluation_desc_arab: action.payload.evaluation_desc_arab,
            evaluation_desc_eng: action.payload.evaluation_desc_eng,
          };
        }
        return item;
      });
      return {
        ...state,
        evaluationcompentenciesloading: true,
        evaluationcompentenciesItems: con,
      };
    case EVALUATIONCOMPENTENCIES_UPDATE_ITEM_ERROR:
      return {
        ...state,
        evaluationcompentenciesloading: true,
        evaluationcompentencieserror: action.payload,
      };

    default:
      return { ...state };
  }
};
