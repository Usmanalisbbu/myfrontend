import {
  PERCENTAGE_GET_LIST,
  PERCENTAGE_GET_LIST_SUCCESS,
  PERCENTAGE_GET_LIST_ERROR,
  PERCENTAGE_ADD_ITEM,
  PERCENTAGE_ADD_ITEM_SUCCESS,
  PERCENTAGE_ADD_ITEM_ERROR,
  PERCENTAGE_DELETE_ITEM,
  PERCENTAGE_DELETE_SUCCESS,
  PERCENTAGE_DELETE_ITEM_ERROR,
  PERCENTAGE_UPDATE_ITEM,
  PERCENTAGE_UPDATE_ITEM_SUCCESS,
  PERCENTAGE_UPDATE_ITEM_ERROR,
  PERCENTAGE_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  percentageItems: null,
  percentageerror: "",
  percentageloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case PERCENTAGE_GET_LIST:
      return { ...state, percentageloading: false };

    case PERCENTAGE_GET_LIST_SUCCESS:
      return {
        ...state,
        percentageloading: true,
        percentageItems: action.payload,
      };

    case PERCENTAGE_GET_LIST_ERROR:
      return { ...state, percentageloading: true, percentageerror: action.payload };

    case PERCENTAGE_ADD_ITEM:
      return { ...state, percentageloading: false };
    case PERCENTAGE_ADD_ITEM_SUCCESS:
      let items = state.percentageItems;
      let item = [];
      item.id = action.payload.id;
      item.percent_desc_eng = action.payload.percent_desc_eng;
      item.percent_desc_arab = action.payload.percent_desc_arab;
      item.percent_fr = action.payload.percent_fr;
      item.percent_to = action.payload.percent_to;
      item.percent_value = action.payload.percent_value;
      items.splice(0, 0, item);
      return {
        ...state,
        percentageloading: true,
        percentageItems: items,
      };

    case PERCENTAGE_ADD_ITEM_ERROR:
      return { ...state, percentageloading: true, percentageerror: action.payload };

    case PERCENTAGE_DELETE_ITEM:
      return {
        ...state,
        percentageloading: false,
      };
    case PERCENTAGE_DELETE_CHECK:
      return {
        ...state,
        percentageloading: true,
      };

    case PERCENTAGE_DELETE_SUCCESS:
      const data = state.percentageItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        percentageloading: true,
        percentageItems: data,
      };

    case PERCENTAGE_DELETE_ITEM_ERROR:
      return { ...state, percentageloading: true, percentageerror: action.payload };

    case PERCENTAGE_UPDATE_ITEM:
      return {
        ...state,
        percentageloading: false,
      };
    case PERCENTAGE_UPDATE_ITEM_SUCCESS:
      const con = state.percentageItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            percent_desc_arab: action.payload.percent_desc_arab,
            percent_desc_eng: action.payload.percent_desc_eng,
            percent_fr: action.payload.percent_fr,
            percent_to: action.payload.percent_to,
            percent_value: action.payload.percent_value,
            
          };
        }
        return item;
      });
      return {
        ...state,
        percentageloading: true,
        percentageItems: con,
      };
    case PERCENTAGE_UPDATE_ITEM_ERROR:
      return { ...state, percentageloading: true, percentageerror: action.payload };

    default:
      return { ...state };
  }
};
