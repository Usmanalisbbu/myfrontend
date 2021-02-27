import {
  MODIFICATIONTYPE_GET_LIST,
  MODIFICATIONTYPE_GET_LIST_SUCCESS,
  MODIFICATIONTYPE_GET_LIST_ERROR,
  MODIFICATIONTYPE_ADD_ITEM,
  MODIFICATIONTYPE_ADD_ITEM_SUCCESS,
  MODIFICATIONTYPE_ADD_ITEM_ERROR,
  MODIFICATIONTYPE_DELETE_ITEM,
  MODIFICATIONTYPE_DELETE_SUCCESS,
  MODIFICATIONTYPE_DELETE_ITEM_ERROR,
  MODIFICATIONTYPE_UPDATE_ITEM,
  MODIFICATIONTYPE_UPDATE_ITEM_SUCCESS,
  MODIFICATIONTYPE_UPDATE_ITEM_ERROR,
  MODIFICATIONTYPE_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  modificationtypeItems: null,
  modificationtypeerror: "",
  modificationtypeloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case MODIFICATIONTYPE_GET_LIST:
      return { ...state, modificationtypeloading: false };

    case MODIFICATIONTYPE_GET_LIST_SUCCESS:
      return {
        ...state,
        modificationtypeloading: true,
        modificationtypeItems: action.payload,
      };

    case MODIFICATIONTYPE_GET_LIST_ERROR:
      return { ...state, modificationtypeloading: true, modificationtypeerror: action.payload };

    case MODIFICATIONTYPE_ADD_ITEM:
      return { ...state, modificationtypeloading: false };
    case MODIFICATIONTYPE_ADD_ITEM_SUCCESS:
      let items = state.modificationtypeItems;
      let item = [];
      item.id = action.payload.id;
      item.modification_desc_eng = action.payload.modification_desc_eng;
      item.modification_desc_arab = action.payload.modification_desc_arab;
      item.flag = action.payload.flag;
      items.splice(0, 0, item);
      return {
        ...state,
        modificationtypeloading: true,
        modificationtypeItems: items,
      };

    case MODIFICATIONTYPE_ADD_ITEM_ERROR:
      return { ...state, modificationtypeloading: true, modificationtypeerror: action.payload };

    case MODIFICATIONTYPE_DELETE_ITEM:
      return {
        ...state,
        modificationtypeloading: false,
      };
    case MODIFICATIONTYPE_DELETE_CHECK:
      return {
        ...state,
        modificationtypeloading: true,
      };

    case MODIFICATIONTYPE_DELETE_SUCCESS:
      const data = state.modificationtypeItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        modificationtypeloading: true,
        modificationtypeItems: data,
      };

    case MODIFICATIONTYPE_DELETE_ITEM_ERROR:
      return { ...state, modificationtypeloading: true, modificationtypeerror: action.payload };

    case MODIFICATIONTYPE_UPDATE_ITEM:
      return {
        ...state,
        modificationtypeloading: false,
      };
    case MODIFICATIONTYPE_UPDATE_ITEM_SUCCESS:
      const con = state.modificationtypeItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            modification_desc_arab: action.payload.modification_desc_arab,
            modification_desc_eng: action.payload.modification_desc_eng,
            flag: action.payload.flag,
            
          };
        }
        return item;
      });
      return {
        ...state,
        modificationtypeloading: true,
        modificationtypeItems: con,
      };
    case MODIFICATIONTYPE_UPDATE_ITEM_ERROR:
      return { ...state, modificationtypeloading: true, modificationtypeerror: action.payload };

    default:
      return { ...state };
  }
};
