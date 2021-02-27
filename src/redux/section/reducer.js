import {
  SECTION_GET_LIST,
  SECTION_GET_LIST_SUCCESS,
  SECTION_GET_LIST_ERROR,
  SECTION_ADD_ITEM,
  SECTION_ADD_ITEM_SUCCESS,
  SECTION_ADD_ITEM_ERROR,
  SECTION_DELETE_ITEM,
  SECTION_DELETE_SUCCESS,
  SECTION_DELETE_ITEM_ERROR,
  SECTION_UPDATE_ITEM,
  SECTION_UPDATE_ITEM_SUCCESS,
  SECTION_UPDATE_ITEM_ERROR,
  SECTION_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  sectionItems: null,
  sectionerror: "",
  sectionloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SECTION_GET_LIST:
      return { ...state, sectionloading: false };

    case SECTION_GET_LIST_SUCCESS:
      return {
        ...state,
        sectionloading: true,
        sectionItems: action.payload,
      };

    case SECTION_GET_LIST_ERROR:
      return { ...state, sectionloading: true, sectionerror: action.payload };

    case SECTION_ADD_ITEM:
      return { ...state, sectionloading: false };
    case SECTION_ADD_ITEM_SUCCESS:
      let items = state.sectionItems;
      let item = [];
      item.id = action.payload.id;
      item.section_desc_eng = action.payload.section_desc_eng;
      item.section_desc_arab = action.payload.section_desc_arab;
      item.exchange_rate = action.payload.exchange_rate;
      items.splice(0, 0, item);
      return {
        ...state,
        sectionloading: true,
        sectionItems: items,
      };

    case SECTION_ADD_ITEM_ERROR:
      return { ...state, sectionloading: true, sectionerror: action.payload };

    case SECTION_DELETE_ITEM:
      return {
        ...state,
        sectionloading: false,
      };
    case SECTION_DELETE_CHECK:
      return {
        ...state,
        sectionloading: true,
      };

    case SECTION_DELETE_SUCCESS:
      const data = state.sectionItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        sectionloading: true,
        sectionItems: data,
      };

    case SECTION_DELETE_ITEM_ERROR:
      return { ...state, sectionloading: true, sectionerror: action.payload };

    case SECTION_UPDATE_ITEM:
      return {
        ...state,
        sectionloading: false,
      };
    case SECTION_UPDATE_ITEM_SUCCESS:
      const con = state.sectionItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            section_desc_arab: action.payload.section_desc_arab,
            section_desc_eng: action.payload.section_desc_eng,
            exchange_rate: action.payload.exchange_rate,
            
          };
        }
        return item;
      });
      return {
        ...state,
        sectionloading: true,
        sectionItems: con,
      };
    case SECTION_UPDATE_ITEM_ERROR:
      return { ...state, sectionloading: true, sectionerror: action.payload };

    default:
      return { ...state };
  }
};
