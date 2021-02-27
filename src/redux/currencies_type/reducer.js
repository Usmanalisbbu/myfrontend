import {
  CURRENCIESTYPE_GET_LIST,
  CURRENCIESTYPE_GET_LIST_SUCCESS,
  CURRENCIESTYPE_GET_LIST_ERROR,
  CURRENCIESTYPE_ADD_ITEM,
  CURRENCIESTYPE_ADD_ITEM_SUCCESS,
  CURRENCIESTYPE_ADD_ITEM_ERROR,
  CURRENCIESTYPE_DELETE_ITEM,
  CURRENCIESTYPE_DELETE_SUCCESS,
  CURRENCIESTYPE_DELETE_ITEM_ERROR,
  CURRENCIESTYPE_UPDATE_ITEM,
  CURRENCIESTYPE_UPDATE_ITEM_SUCCESS,
  CURRENCIESTYPE_UPDATE_ITEM_ERROR,
  CURRENCIESTYPE_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  currenciestypeItems: null,
  currenciestypeerror: "",
  currenciestypeloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CURRENCIESTYPE_GET_LIST:
      return { ...state, currenciestypeloading: false };

    case CURRENCIESTYPE_GET_LIST_SUCCESS:
      return {
        ...state,
        currenciestypeloading: true,
        currenciestypeItems: action.payload,
      };

    case CURRENCIESTYPE_GET_LIST_ERROR:
      return {
        ...state,
        currenciestypeloading: true,
        currenciestypeerror: action.payload,
      };

    case CURRENCIESTYPE_ADD_ITEM:
      return { ...state, currenciestypeloading: false };
    case CURRENCIESTYPE_ADD_ITEM_SUCCESS:
      let items = state.currenciestypeItems;
      let item = [];
      item.id = action.payload.id;
      item.currency_name_eng = action.payload.currency_name_eng;
      item.currency_name_arab = action.payload.currency_name_arab;
      items.splice(0, 0, item);
      return {
        ...state,
        currenciestypeloading: true,
        currenciestypeItems: items,
      };

    case CURRENCIESTYPE_ADD_ITEM_ERROR:
      return {
        ...state,
        currenciestypeloading: true,
        currenciestypeerror: action.payload,
      };

    case CURRENCIESTYPE_DELETE_ITEM:
      return {
        ...state,
        currenciestypeloading: false,
      };
    case CURRENCIESTYPE_DELETE_CHECK:
      return {
        ...state,
        currenciestypeloading: true,
      };

    case CURRENCIESTYPE_DELETE_SUCCESS:
      const data = state.currenciestypeItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        currenciestypeloading: true,
        currenciestypeItems: data,
      };

    case CURRENCIESTYPE_DELETE_ITEM_ERROR:
      return {
        ...state,
        currenciestypeloading: true,
        currenciestypeerror: action.payload,
      };

    case CURRENCIESTYPE_UPDATE_ITEM:
      return {
        ...state,
        currenciestypeloading: false,
      };
    case CURRENCIESTYPE_UPDATE_ITEM_SUCCESS:
      const con = state.currenciestypeItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            currency_name_arab: action.payload.currency_name_arab,
            currency_name_eng: action.payload.currency_name_eng,
          };
        }
        return item;
      });
      return {
        ...state,
        currenciestypeloading: true,
        currenciestypeItems: con,
      };
    case CURRENCIESTYPE_UPDATE_ITEM_ERROR:
      return {
        ...state,
        currenciestypeloading: true,
        currenciestypeerror: action.payload,
      };

    default:
      return { ...state };
  }
};
