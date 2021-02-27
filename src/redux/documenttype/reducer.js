import {
  DOCUMENTTYPE_GET_LIST,
  DOCUMENTTYPE_GET_LIST_SUCCESS,
  DOCUMENTTYPE_GET_LIST_ERROR,
  DOCUMENTTYPE_ADD_ITEM,
  DOCUMENTTYPE_ADD_ITEM_SUCCESS,
  DOCUMENTTYPE_ADD_ITEM_ERROR,
  DOCUMENTTYPE_DELETE_ITEM,
  DOCUMENTTYPE_DELETE_SUCCESS,
  DOCUMENTTYPE_DELETE_ITEM_ERROR,
  DOCUMENTTYPE_UPDATE_ITEM,
  DOCUMENTTYPE_UPDATE_ITEM_SUCCESS,
  DOCUMENTTYPE_UPDATE_ITEM_ERROR,
  DOCUMENTTYPE_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  documenttypeItems: null,
  documenttypeerror: "",
  documenttypeloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case DOCUMENTTYPE_GET_LIST:
      return { ...state, documenttypeloading: false };

    case DOCUMENTTYPE_GET_LIST_SUCCESS:
      return {
        ...state,
        documenttypeloading: true,
        documenttypeItems: action.payload,
      };

    case DOCUMENTTYPE_GET_LIST_ERROR:
      return {
        ...state,
        documenttypeloading: true,
        documenttypeerror: action.payload,
      };

    case DOCUMENTTYPE_ADD_ITEM:
      return { ...state, documenttypeloading: false };
    case DOCUMENTTYPE_ADD_ITEM_SUCCESS:
      let items = state.documenttypeItems;
      let item = [];
      item.id = action.payload.id;
      item.document_desc_eng = action.payload.document_desc_eng;
      item.document_desc_arab = action.payload.document_desc_arab;
      item.renew_flag = action.payload.renew_flag;
      item.is_company = action.payload.is_company;
      item.hijriflag = action.payload.hijriflag;
      item.substitution = action.payload.substitution;
      item.days_to_expire = action.payload.days_to_expire;
      items.splice(0, 0, item);
      return {
        ...state,
        documenttypeloading: true,
        documenttypeItems: items,
      };

    case DOCUMENTTYPE_ADD_ITEM_ERROR:
      return {
        ...state,
        documenttypeloading: true,
        documenttypeerror: action.payload,
      };

    case DOCUMENTTYPE_DELETE_ITEM:
      return {
        ...state,
        documenttypeloading: false,
      };
    case DOCUMENTTYPE_DELETE_CHECK:
      return {
        ...state,
        documenttypeloading: true,
      };

    case DOCUMENTTYPE_DELETE_SUCCESS:
      const data = state.documenttypeItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        documenttypeloading: true,
        documenttypeItems: data,
      };

    case DOCUMENTTYPE_DELETE_ITEM_ERROR:
      return {
        ...state,
        documenttypeloading: true,
        documenttypeerror: action.payload,
      };

    case DOCUMENTTYPE_UPDATE_ITEM:
      return {
        ...state,
        documenttypeloading: false,
      };
    case DOCUMENTTYPE_UPDATE_ITEM_SUCCESS:
      const con = state.documenttypeItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            document_desc_arab: action.payload.document_desc_arab,
            document_desc_eng: action.payload.document_desc_eng,
            document_desc_eng: action.payload.document_desc_eng,
            document_desc_arab: action.payload.document_desc_arab,
            renew_flag: action.payload.renew_flag,
            is_company: action.payload.is_company,
            hijriflag: action.payload.hijriflag,
            substitution: action.payload.substitution,
            days_to_expire: action.payload.days_to_expire,
          };
        }
        return item;
      });
      return {
        ...state,
        documenttypeloading: true,
        documenttypeItems: con,
      };
    case DOCUMENTTYPE_UPDATE_ITEM_ERROR:
      return {
        ...state,
        documenttypeloading: true,
        documenttypeerror: action.payload,
      };

    default:
      return { ...state };
  }
};
