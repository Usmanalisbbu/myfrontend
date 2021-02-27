import {
  CITY_GET_LIST,
  CITY_GET_LIST_SUCCESS,
  CITY_GET_LIST_ERROR,
  CITY_ADD_ITEM,
  CITY_ADD_ITEM_SUCCESS,
  CITY_ADD_ITEM_ERROR,
  CITY_DELETE_ITEM,
  CITY_DELETE_SUCCESS,
  CITY_DELETE_ITEM_ERROR,
  CITY_UPDATE_ITEM,
  CITY_UPDATE_ITEM_SUCCESS,
  CITY_UPDATE_ITEM_ERROR,
  CITY_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  cityItems: null,
  cityerror: "",
  cityloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CITY_GET_LIST:
      return { ...state, cityloading: false };

    case CITY_GET_LIST_SUCCESS:
      return {
        ...state,
        cityloading: true,
        cityItems: action.payload,
      };

    case CITY_GET_LIST_ERROR:
      return { ...state, cityloading: true, cityerror: action.payload };

    case CITY_ADD_ITEM:
      return { ...state, cityloading: false };
    case CITY_ADD_ITEM_SUCCESS:
      let items = state.cityItems;
      let item = [];
      var country = action.payload.country.label;
      const fields = country.split("/");
      item.id = action.payload.id;
      item.city_name_eng = action.payload.city_name_eng;
      item.city_name_arab = action.payload.city_name_arab;
      item.is_capital = action.payload.is_capital;
      item.region = action.payload.region;
      item.ticket_value = action.payload.ticket_value;
      item.country_name_arab = fields[1];
      item.country_name_eng = fields[0];
      items.splice(0, 0, item);
      return {
        ...state,
        cityloading: true,
        cityItems: items,
      };

    case CITY_ADD_ITEM_ERROR:
      return { ...state, cityloading: true, cityerror: action.payload };

    case CITY_DELETE_ITEM:
      return {
        ...state,
        cityloading: false,
      };
    case CITY_DELETE_CHECK:
      return {
        ...state,
        cityloading: true,
      };

    case CITY_DELETE_SUCCESS:
      const data = state.cityItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        cityloading: true,
        cityItems: data,
      };

    case CITY_DELETE_ITEM_ERROR:
      return { ...state, cityloading: true, cityerror: action.payload };

    case CITY_UPDATE_ITEM:
      return {
        ...state,
        cityloading: false,
      };
    case CITY_UPDATE_ITEM_SUCCESS:
      var country = action.payload.country.label;
      const updatefields = country.split("/");
      const con = state.cityItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            city_name_arab: action.payload.city_name_arab,
            city_name_eng: action.payload.city_name_eng,
            region: action.payload.region,
            ticket_value: action.payload.ticket_value,
            country_name_arab: updatefields[1],
            country_name_eng: updatefields[0],
            is_capital: action.payload.is_capital,
          };
        }
        return item;
      });
      return {
        ...state,
        cityloading: true,
        cityItems: con,
      };
    case CITY_UPDATE_ITEM_ERROR:
      return { ...state, cityloading: true, cityerror: action.payload };

    default:
      return { ...state };
  }
};
