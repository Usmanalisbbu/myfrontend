import {
  GOSISUBSCRIPTION_GET_LIST,
  GOSISUBSCRIPTION_GET_LIST_SUCCESS,
  GOSISUBSCRIPTION_GET_LIST_ERROR,
  GOSISUBSCRIPTION_ADD_ITEM,
  GOSISUBSCRIPTION_ADD_ITEM_SUCCESS,
  GOSISUBSCRIPTION_ADD_ITEM_ERROR,
  GOSISUBSCRIPTION_DELETE_ITEM,
  GOSISUBSCRIPTION_DELETE_SUCCESS,
  GOSISUBSCRIPTION_DELETE_ITEM_ERROR,
  GOSISUBSCRIPTION_UPDATE_ITEM,
  GOSISUBSCRIPTION_UPDATE_ITEM_SUCCESS,
  GOSISUBSCRIPTION_UPDATE_ITEM_ERROR,
  GOSISUBSCRIPTION_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  gosisubscriptionItems: null,
  gosisubscriptionerror: "",
  gosisubscriptionloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GOSISUBSCRIPTION_GET_LIST:
      return { ...state, gosisubscriptionloading: false };

    case GOSISUBSCRIPTION_GET_LIST_SUCCESS:
      return {
        ...state,
        gosisubscriptionloading: true,
        gosisubscriptionItems: action.payload,
      };

    case GOSISUBSCRIPTION_GET_LIST_ERROR:
      return { ...state, gosisubscriptionloading: true, gosisubscriptionerror: action.payload };

    case GOSISUBSCRIPTION_ADD_ITEM:
      return { ...state, gosisubscriptionloading: false };
    case GOSISUBSCRIPTION_ADD_ITEM_SUCCESS:
      let items = state.gosisubscriptionItems;
      let item = [];
      item.id = action.payload.id;
      item.yearmonth_id_gr = action.payload.yearmonth_id_gr;
      item.yearmonth_id_hi = action.payload.yearmonth_id_hi;
      item.gosi_saudi_employee = action.payload.gosi_saudi_employee;
      item.gosi_nonsaudi_employee = action.payload.gosi_nonsaudi_employee;
      item.gosi_saudi_company = action.payload.gosi_saudi_company;
      item.gosi_nonsaudi_company = action.payload.gosi_nonsaudi_company;
      item.current_flag = action.payload.current_flag;
      item.comments = action.payload.comments;
      items.splice(0, 0, item);
      return {
        ...state,
        gosisubscriptionloading: true,
        gosisubscriptionItems: items,
      };

    case GOSISUBSCRIPTION_ADD_ITEM_ERROR:
      return { ...state, gosisubscriptionloading: true, gosisubscriptionerror: action.payload };

    case GOSISUBSCRIPTION_DELETE_ITEM:
      return {
        ...state,
        gosisubscriptionloading: false,
      };
    case GOSISUBSCRIPTION_DELETE_CHECK:
      return {
        ...state,
        gosisubscriptionloading: true,
      };

    case GOSISUBSCRIPTION_DELETE_SUCCESS:
      const data = state.gosisubscriptionItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        gosisubscriptionloading: true,
        gosisubscriptionItems: data,
      };

    case GOSISUBSCRIPTION_DELETE_ITEM_ERROR:
      return { ...state, gosisubscriptionloading: true, gosisubscriptionerror: action.payload };

    case GOSISUBSCRIPTION_UPDATE_ITEM:
      return {
        ...state,
        gosisubscriptionloading: false,
      };
    case GOSISUBSCRIPTION_UPDATE_ITEM_SUCCESS:
      const con = state.gosisubscriptionItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            yearmonth_id_gr : action.payload.yearmonth_id_gr,
            yearmonth_id_hi : action.payload.yearmonth_id_hi,
            gosi_saudi_employee : action.payload.gosi_saudi_employee,
            gosi_nonsaudi_employee : action.payload.gosi_nonsaudi_employee,
            gosi_saudi_company : action.payload.gosi_saudi_company,
            gosi_nonsaudi_company : action.payload.gosi_nonsaudi_company,
            current_flag : action.payload.current_flag,
            comments : action.payload.comments,
            
          };
        }
        return item;
      });
      return {
        ...state,
        gosisubscriptionloading: true,
        gosisubscriptionItems: con,
      };
    case GOSISUBSCRIPTION_UPDATE_ITEM_ERROR:
      return { ...state, gosisubscriptionloading: true, gosisubscriptionerror: action.payload };

    default:
      return { ...state };
  }
};
