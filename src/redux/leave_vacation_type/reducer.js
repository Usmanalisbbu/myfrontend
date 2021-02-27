import {
  LEAVEVACATIONTYPE_GET_LIST,
  LEAVEVACATIONTYPE_GET_LIST_SUCCESS,
  LEAVEVACATIONTYPE_GET_LIST_ERROR,
  LEAVEVACATIONTYPE_ADD_ITEM,
  LEAVEVACATIONTYPE_ADD_ITEM_SUCCESS,
  LEAVEVACATIONTYPE_ADD_ITEM_ERROR,
  LEAVEVACATIONTYPE_DELETE_ITEM,
  LEAVEVACATIONTYPE_DELETE_SUCCESS,
  LEAVEVACATIONTYPE_DELETE_ITEM_ERROR,
  LEAVEVACATIONTYPE_UPDATE_ITEM,
  LEAVEVACATIONTYPE_UPDATE_ITEM_SUCCESS,
  LEAVEVACATIONTYPE_UPDATE_ITEM_ERROR,
  LEAVEVACATIONTYPE_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  leavevacationtypeItems: null,
  leavevacationtypeerror: "",
  leavevacationtypeloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LEAVEVACATIONTYPE_GET_LIST:
      return { ...state, leavevacationtypeloading: false };

    case LEAVEVACATIONTYPE_GET_LIST_SUCCESS:
      return {
        ...state,
        leavevacationtypeloading: true,
        leavevacationtypeItems: action.payload,
      };

    case LEAVEVACATIONTYPE_GET_LIST_ERROR:
      return {
        ...state,
        leavevacationtypeloading: true,
        leavevacationtypeerror: action.payload,
      };

    case LEAVEVACATIONTYPE_ADD_ITEM:
      return { ...state, leavevacationtypeloading: false };
    case LEAVEVACATIONTYPE_ADD_ITEM_SUCCESS:
      let items = state.leavevacationtypeItems;
      let item = [];
      item.id = action.payload.id;
      item.leave_desc_eng = action.payload.leave_desc_eng;
      item.leave_desc_arab = action.payload.leave_desc_arab;
      item.status = action.payload.status;
      item.with_pay = action.payload.with_pay;
      item.settlement = action.payload.settlement;
      item.extra_leave_calc = action.payload.extra_leave_calc;
      item.request = action.payload.request;
      item.require_visa = action.payload.require_visa;
      item.leave_duration = action.payload.leave_duration;
      items.splice(0, 0, item);
      return {
        ...state,
        leavevacationtypeloading: true,
        leavevacationtypeItems: items,
      };

    case LEAVEVACATIONTYPE_ADD_ITEM_ERROR:
      return {
        ...state,
        leavevacationtypeloading: true,
        leavevacationtypeerror: action.payload,
      };

    case LEAVEVACATIONTYPE_DELETE_ITEM:
      return {
        ...state,
        leavevacationtypeloading: false,
      };
    case LEAVEVACATIONTYPE_DELETE_CHECK:
      return {
        ...state,
        leavevacationtypeloading: true,
      };

    case LEAVEVACATIONTYPE_DELETE_SUCCESS:
      const data = state.leavevacationtypeItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        leavevacationtypeloading: true,
        leavevacationtypeItems: data,
      };

    case LEAVEVACATIONTYPE_DELETE_ITEM_ERROR:
      return {
        ...state,
        leavevacationtypeloading: true,
        leavevacationtypeerror: action.payload,
      };

    case LEAVEVACATIONTYPE_UPDATE_ITEM:
      return {
        ...state,
        leavevacationtypeloading: false,
      };
    case LEAVEVACATIONTYPE_UPDATE_ITEM_SUCCESS:
      const con = state.leavevacationtypeItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            leave_desc_arab: action.payload.leave_desc_arab,
            leave_desc_eng: action.payload.leave_desc_eng,
            status: action.payload.status,
            with_pay: action.payload.with_pay,
            settlement: action.payload.settlement,
            extra_leave_calc: action.payload.extra_leave_calc,
            request: action.payload.request,
            require_visa: action.payload.require_visa,
            leave_duration: action.payload.leave_duration,
          };
        }
        return item;
      });
      return {
        ...state,
        leavevacationtypeloading: true,
        leavevacationtypeItems: con,
      };
    case LEAVEVACATIONTYPE_UPDATE_ITEM_ERROR:
      return {
        ...state,
        leavevacationtypeloading: true,
        leavevacationtypeerror: action.payload,
      };

    default:
      return { ...state };
  }
};
