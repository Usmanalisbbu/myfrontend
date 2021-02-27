import {
  COUNTRY_GET_LIST,
  COUNTRY_GET_LIST_SUCCESS,
  COUNTRY_GET_LIST_ERROR,
  COUNTRY_ADD_ITEM,
  COUNTRY_ADD_ITEM_SUCCESS,
  COUNTRY_ADD_ITEM_ERROR,
  COUNTRY_DELETE_ITEM,
  COUNTRY_DELETE_SUCCESS,
  COUNTRY_DELETE_ITEM_ERROR,
  COUNTRY_UPDATE_ITEM,
  COUNTRY_UPDATE_ITEM_SUCCESS,
  COUNTRY_UPDATE_ITEM_ERROR,
  COUNTRY_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  countryItems: null,
  error: "",
  loading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case COUNTRY_GET_LIST:
      return { ...state, loading: false };

    case COUNTRY_GET_LIST_SUCCESS:
      return {
        ...state,
        loading: true,
        countryItems: action.payload,
      };

    case COUNTRY_GET_LIST_ERROR:
      return { ...state, loading: true, error: action.payload };

    case COUNTRY_ADD_ITEM:
      return { ...state, loading: false };
    case COUNTRY_ADD_ITEM_SUCCESS:
      let items = state.countryItems;
      let item = [];
      item.id = action.payload.id;
      item.country_name_arab = action.payload.country_name_arab;
      item.country_name_eng = action.payload.country_name_eng;
      item.nationality_arab = action.payload.nationality_arab;
      item.nationality_eng = action.payload.nationality_eng;
      item.capital_eng = "";
      item.capital_arab = "";
      items.splice(0, 0, item);
      return {
        ...state,
        loading: true,
        countryItems: items,
      };

    case COUNTRY_ADD_ITEM_ERROR:
      return { ...state, loading: true, error: action.payload };

    case COUNTRY_DELETE_ITEM:
      return {
        ...state,
        loading: false,
      };
    case COUNTRY_DELETE_CHECK:
      return {
        ...state,
        loading: true,
      };

    case COUNTRY_DELETE_SUCCESS:
      const data = state.countryItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        loading: true,
        countryItems: data,
      };

    case COUNTRY_DELETE_ITEM_ERROR:
      return { ...state, loading: true, error: action.payload };

    case COUNTRY_UPDATE_ITEM:
      return {
        ...state,
        loading: false,
      };
    case COUNTRY_UPDATE_ITEM_SUCCESS:
      const con = state.countryItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            country_name_arab: action.payload.country_name_arab,
            country_name_eng: action.payload.country_name_eng,
            nationality_arab: action.payload.nationality_arab,
            nationality_eng: action.payload.nationality_eng,
          };
        }
        return item;
      });
      return {
        ...state,
        loading: true,
        countryItems: con,
      };
    case COUNTRY_UPDATE_ITEM_ERROR:
      return { ...state, loading: true, error: action.payload };

    default:
      return { ...state };
  }
};
