import {
  COMPANY_GET_LIST,
  COMPANY_GET_LIST_SUCCESS,
  COMPANY_GET_LIST_ERROR,
  COMPANY_ADD_ITEM,
  COMPANY_ADD_ITEM_SUCCESS,
  COMPANY_ADD_ITEM_ERROR,
  COMPANY_DELETE_ITEM,
  COMPANY_DELETE_SUCCESS,
  COMPANY_DELETE_ITEM_ERROR,
  COMPANY_UPDATE_ITEM,
  COMPANY_UPDATE_ITEM_SUCCESS,
  COMPANY_UPDATE_ITEM_ERROR,
  COMPANY_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  companyItems: null,
  companyerror: "",
  companyloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case COMPANY_GET_LIST:
      return { ...state, companyloading: false };

    case COMPANY_GET_LIST_SUCCESS:
      return {
        ...state,
        companyloading: true,
        companyItems: action.payload,
      };

    case COMPANY_GET_LIST_ERROR:
      return { ...state, companyloading: true, companyerror: action.payload };

    case COMPANY_ADD_ITEM:
      return { ...state, companyloading: false };
    case COMPANY_ADD_ITEM_SUCCESS:
      let items = state.companyItems;
      let item = [];
      item.id = action.payload.id;
      item.company_name_eng = action.payload.company_name_eng;
      item.company_name_arab = action.payload.company_name_arab;
      item.company_name_reg_eng = action.payload.company_name_reg_eng;
      item.company_name_reg_arab = action.payload.company_name_reg_arab;
      item.incorporation_date = action.payload.incorporation_date;
      item.incorporation_date_hijri = action.payload.incorporation_date_hijri;
      item.type_of_business_eng = action.payload.type_of_business_eng;
      item.type_of_business_arab = action.payload.type_of_business_arab;
      item.no_br = action.payload.no_br;
      items.splice(0, 0, item);
      return {
        ...state,
        companyloading: true,
        companyItems: items,
      };

    case COMPANY_ADD_ITEM_ERROR:
      return { ...state, companyloading: true, companyerror: action.payload };

    case COMPANY_DELETE_ITEM:
      return {
        ...state,
        companyloading: false,
      };
    case COMPANY_DELETE_CHECK:
      return {
        ...state,
        companyloading: true,
      };

    case COMPANY_DELETE_SUCCESS:
      const data = state.companyItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        companyloading: true,
        companyItems: data,
      };

    case COMPANY_DELETE_ITEM_ERROR:
      return { ...state, companyloading: true, companyerror: action.payload };

    case COMPANY_UPDATE_ITEM:
      return {
        ...state,
        companyloading: false,
      };
    case COMPANY_UPDATE_ITEM_SUCCESS:
      const con = state.companyItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            company_name_arab: action.payload.company_name_arab,
            company_name_eng: action.payload.company_name_eng,
            company_name_reg_eng : action.payload.company_name_reg_eng,
            company_name_reg_arab : action.payload.company_name_reg_arab,
            incorporation_date : action.payload.incorporation_date,
            incorporation_date_hijri : action.payload.incorporation_date_hijri,
            type_of_business_eng : action.payload.type_of_business_eng,
            type_of_business_arab : action.payload.type_of_business_arab,
            no_br : action.payload.no_br,
          };
        }
        return item;
      });
      return {
        ...state,
        companyloading: true,
        companyItems: con,
      };
    case COMPANY_UPDATE_ITEM_ERROR:
      return { ...state, companyloading: true, companyerror: action.payload };

    default:
      return { ...state };
  }
};
