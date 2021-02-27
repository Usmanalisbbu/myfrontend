import {
 BENEFICIARY_TYPE_GET_LIST,
 BENEFICIARY_TYPE_GET_LIST_SUCCESS,
 BENEFICIARY_TYPE_GET_LIST_ERROR,
 BENEFICIARY_TYPE_ADD_ITEM,
 BENEFICIARY_TYPE_ADD_ITEM_SUCCESS,
 BENEFICIARY_TYPE_ADD_ITEM_ERROR,
 BENEFICIARY_TYPE_DELETE_ITEM,
 BENEFICIARY_TYPE_DELETE_SUCCESS,
 BENEFICIARY_TYPE_DELETE_ITEM_ERROR,
 BENEFICIARY_TYPE_UPDATE_ITEM,
 BENEFICIARY_TYPE_UPDATE_ITEM_SUCCESS,
 BENEFICIARY_TYPE_UPDATE_ITEM_ERROR,
 BENEFICIARY_TYPE_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  beneficiary_typeItems: null,
  beneficiary_typeerror: "",
  beneficiary_typeloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case BENEFICIARY_TYPE_GET_LIST:

      return { ...state, beneficiary_typeloading: false };

    case BENEFICIARY_TYPE_GET_LIST_SUCCESS:
      return {
        ...state,
        beneficiary_typeloading: true,
        beneficiary_typeItems: action.payload,
      };

    case BENEFICIARY_TYPE_GET_LIST_ERROR:
      return { ...state, beneficiary_typeloading: true, beneficiary_typeerror: action.payload };

    case BENEFICIARY_TYPE_ADD_ITEM:
      return { ...state, beneficiary_typeloading: false };
    case BENEFICIARY_TYPE_ADD_ITEM_SUCCESS:
      let items = state.beneficiary_typeItems;
      let item = [];
      item.id = action.payload.id;
      item.beneficiary_desc_eng = action.payload.beneficiary_desc_eng;
      item.beneficiary_desc_arab = action.payload.beneficiary_desc_arab;
      items.splice(0, 0, item);
      return {
        ...state,
        beneficiary_typeloading: true,
        beneficiary_typeItems: items,
      };

    case BENEFICIARY_TYPE_ADD_ITEM_ERROR:
      return { ...state, beneficiary_typeloading: true, beneficiary_typeerror: action.payload };

    case BENEFICIARY_TYPE_DELETE_ITEM:
      return {
        ...state,
        beneficiary_typeloading: false,
      };
    case BENEFICIARY_TYPE_DELETE_CHECK:
      return {
        ...state,
        beneficiary_typeloading: true,
      };

    case BENEFICIARY_TYPE_DELETE_SUCCESS:
      const data = state.beneficiary_typeItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        beneficiary_typeloading: true,
        beneficiary_typeItems: data,
      };

    case BENEFICIARY_TYPE_DELETE_ITEM_ERROR:
      return { ...state, beneficiary_typeloading: true, beneficiary_typeerror: action.payload };

    case BENEFICIARY_TYPE_UPDATE_ITEM:
      return {
        ...state,
        beneficiary_typeloading: false,
      };
    case BENEFICIARY_TYPE_UPDATE_ITEM_SUCCESS:
      const con = state.beneficiary_typeItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            beneficiary_desc_arab: action.payload.beneficiary_desc_arab,
            beneficiary_desc_eng: action.payload.beneficiary_desc_eng,
            
          };
        }
        return item;
      });
      return {
        ...state,
        beneficiary_typeloading: true,
        beneficiary_typeItems: con,
      };
    case BENEFICIARY_TYPE_UPDATE_ITEM_ERROR:
      return { ...state, beneficiary_typeloading: true, beneficiary_typeerror: action.payload };

    default:
      return { ...state };
  }
};
