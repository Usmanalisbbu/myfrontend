import {
  COSTCENTER_GET_LIST,
  COSTCENTER_GET_LIST_SUCCESS,
  COSTCENTER_GET_LIST_ERROR,
  COSTCENTER_ADD_ITEM,
  COSTCENTER_ADD_ITEM_SUCCESS,
  COSTCENTER_ADD_ITEM_ERROR,
  COSTCENTER_DELETE_ITEM,
  COSTCENTER_DELETE_SUCCESS,
  COSTCENTER_DELETE_ITEM_ERROR,
  COSTCENTER_UPDATE_ITEM,
  COSTCENTER_UPDATE_ITEM_SUCCESS,
  COSTCENTER_UPDATE_ITEM_ERROR,
  COSTCENTER_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  costcenterItems: null,
  costcentererror: "",
  costcenterloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case COSTCENTER_GET_LIST:
      return { ...state, costcenterloading: false };

    case COSTCENTER_GET_LIST_SUCCESS:
      return {
        ...state,
        costcenterloading: true,
        costcenterItems: action.payload,
      };

    case COSTCENTER_GET_LIST_ERROR:
      return {
        ...state,
        costcenterloading: true,
        costcentererror: action.payload,
      };

    case COSTCENTER_ADD_ITEM:
      return { ...state, costcenterloading: false };
    case COSTCENTER_ADD_ITEM_SUCCESS:
      let items = state.costcenterItems;
      let item = [];
      item.id = action.payload.id;
      item.costcenter_name_eng = action.payload.costcenter_name_eng;
      item.costcenter_name_arab = action.payload.costcenter_name_arab;
      item.costcenter_status = action.payload.costcenter_status;
      // item.store_cc = action.payload.store_cc;
      items.splice(0, 0, item);
      return {
        ...state,
        costcenterloading: true,
        costcenterItems: items,
      };

    case COSTCENTER_ADD_ITEM_ERROR:
      return {
        ...state,
        costcenterloading: true,
        costcentererror: action.payload,
      };

    case COSTCENTER_DELETE_ITEM:
      return {
        ...state,
        costcenterloading: false,
      };
    case COSTCENTER_DELETE_CHECK:
      return {
        ...state,
        costcenterloading: true,
      };

    case COSTCENTER_DELETE_SUCCESS:
      const data = state.costcenterItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        costcenterloading: true,
        costcenterItems: data,
      };

    case COSTCENTER_DELETE_ITEM_ERROR:
      return {
        ...state,
        costcenterloading: true,
        costcentererror: action.payload,
      };

    case COSTCENTER_UPDATE_ITEM:
      return {
        ...state,
        costcenterloading: false,
      };
    case COSTCENTER_UPDATE_ITEM_SUCCESS:
      const con = state.costcenterItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            costcenter_name_arab: action.payload.costcenter_name_arab,
            costcenter_name_eng: action.payload.costcenter_name_eng,
            costcenter_status: action.payload.costcenter_status,
            //store_cc : action.payload.store_cc,
          };
        }
        return item;
      });
      return {
        ...state,
        costcenterloading: true,
        costcenterItems: con,
      };
    case COSTCENTER_UPDATE_ITEM_ERROR:
      return {
        ...state,
        costcenterloading: true,
        costcentererror: action.payload,
      };

    default:
      return { ...state };
  }
};
