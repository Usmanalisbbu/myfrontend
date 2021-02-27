import {
  RELIGION_GET_LIST,
  RELIGION_GET_LIST_SUCCESS,
  RELIGION_GET_LIST_ERROR,
  RELIGION_ADD_ITEM,
  RELIGION_ADD_ITEM_SUCCESS,
  RELIGION_ADD_ITEM_ERROR,
  RELIGION_DELETE_ITEM,
  RELIGION_DELETE_SUCCESS,
  RELIGION_DELETE_ITEM_ERROR,
  RELIGION_UPDATE_ITEM,
  RELIGION_UPDATE_ITEM_SUCCESS,
  RELIGION_UPDATE_ITEM_ERROR,
  RELIGION_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  religionItems: null,
  religionerror: "",
  religionloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RELIGION_GET_LIST:
      return { ...state, religionloading: false };

    case RELIGION_GET_LIST_SUCCESS:
      return {
        ...state,
        religionloading: true,
        religionItems: action.payload,
      };

    case RELIGION_GET_LIST_ERROR:
      return { ...state, religionloading: true, religionerror: action.payload };

    case RELIGION_ADD_ITEM:
      return { ...state, religionloading: false };
    case RELIGION_ADD_ITEM_SUCCESS:
      let items = state.religionItems;
      let item = [];
      item.id = action.payload.id;
      item.religion_name_eng = action.payload.religion_name_eng;
      item.religion_name_arab = action.payload.religion_name_arab;
      items.splice(0, 0, item);
      return {
        ...state,
        religionloading: true,
        religionItems: items,
      };

    case RELIGION_ADD_ITEM_ERROR:
      return { ...state, religionloading: true, religionerror: action.payload };

    case RELIGION_DELETE_ITEM:
      return {
        ...state,
        religionloading: false,
      };
    case RELIGION_DELETE_CHECK:
      return {
        ...state,
        religionloading: true,
      };

    case RELIGION_DELETE_SUCCESS:
      const data = state.religionItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        religionloading: true,
        religionItems: data,
      };

    case RELIGION_DELETE_ITEM_ERROR:
      return { ...state, religionloading: true, religionerror: action.payload };

    case RELIGION_UPDATE_ITEM:
      return {
        ...state,
        religionloading: false,
      };
    case RELIGION_UPDATE_ITEM_SUCCESS:
      const con = state.religionItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            religion_name_arab: action.payload.religion_name_arab,
            religion_name_eng: action.payload.religion_name_eng,
            
          };
        }
        return item;
      });
      return {
        ...state,
        religionloading: true,
        religionItems: con,
      };
    case RELIGION_UPDATE_ITEM_ERROR:
      return { ...state, religionloading: true, religionerror: action.payload };

    default:
      return { ...state };
  }
};
