import {
  EARNINGSBENEFITS_GET_LIST,
  EARNINGSBENEFITS_GET_LIST_SUCCESS,
  EARNINGSBENEFITS_GET_LIST_ERROR,
  EARNINGSBENEFITS_ADD_ITEM,
  EARNINGSBENEFITS_ADD_ITEM_SUCCESS,
  EARNINGSBENEFITS_ADD_ITEM_ERROR,
  EARNINGSBENEFITS_DELETE_ITEM,
  EARNINGSBENEFITS_DELETE_SUCCESS,
  EARNINGSBENEFITS_DELETE_ITEM_ERROR,
  EARNINGSBENEFITS_UPDATE_ITEM,
  EARNINGSBENEFITS_UPDATE_ITEM_SUCCESS,
  EARNINGSBENEFITS_UPDATE_ITEM_ERROR,
  EARNINGSBENEFITS_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  earningsbenefitsItems: null,
  earningsbenefitserror: "",
  earningsbenefitsloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EARNINGSBENEFITS_GET_LIST:
      return { ...state, earningsbenefitsloading: false };

    case EARNINGSBENEFITS_GET_LIST_SUCCESS:
      return {
        ...state,
        earningsbenefitsloading: true,
        earningsbenefitsItems: action.payload,
      };

    case EARNINGSBENEFITS_GET_LIST_ERROR:
      return {
        ...state,
        earningsbenefitsloading: true,
        earningsbenefitserror: action.payload,
      };

    case EARNINGSBENEFITS_ADD_ITEM:
      return { ...state, earningsbenefitsloading: false };
    case EARNINGSBENEFITS_ADD_ITEM_SUCCESS:
      let items = state.earningsbenefitsItems;
      let item = [];
      item.id = action.payload.id;
      item.benefit_desc_eng = action.payload.benefit_desc_eng;
      item.benefit_desc_arab = action.payload.benefit_desc_arab;
      item.money_value_flag = action.payload.money_value_flag;
      item.printable = action.payload.printable;
      item.show_in_report = action.payload.show_in_report;
      item.mulfactor = action.payload.mulfactor;
      item.parcent_frsalary = action.payload.parcent_frsalary;
      item.mb = action.payload.mb;
      item.parentbenefit = action.payload.parentbenefit;
      item.modify_flag = action.payload.modify_flag;
      item.gl_id = action.payload.gl_id;
      item.credit_gl_id = action.payload.credit_gl_id;
      item.holiday_flag = action.payload.holiday_flag;
      item.final_set_flag = action.payload.final_set_flag;
      items.splice(0, 0, item);
      return {
        ...state,
        earningsbenefitsloading: true,
        earningsbenefitsItems: items,
      };

    case EARNINGSBENEFITS_ADD_ITEM_ERROR:
      return {
        ...state,
        earningsbenefitsloading: true,
        earningsbenefitserror: action.payload,
      };

    case EARNINGSBENEFITS_DELETE_ITEM:
      return {
        ...state,
        earningsbenefitsloading: false,
      };
    case EARNINGSBENEFITS_DELETE_CHECK:
      return {
        ...state,
        earningsbenefitsloading: true,
      };

    case EARNINGSBENEFITS_DELETE_SUCCESS:
      const data = state.earningsbenefitsItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        earningsbenefitsloading: true,
        earningsbenefitsItems: data,
      };

    case EARNINGSBENEFITS_DELETE_ITEM_ERROR:
      return {
        ...state,
        earningsbenefitsloading: true,
        earningsbenefitserror: action.payload,
      };

    case EARNINGSBENEFITS_UPDATE_ITEM:
      return {
        ...state,
        earningsbenefitsloading: false,
      };
    case EARNINGSBENEFITS_UPDATE_ITEM_SUCCESS:
      const con = state.earningsbenefitsItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            benefit_desc_arab: action.payload.benefit_desc_arab,
            benefit_desc_eng: action.payload.benefit_desc_eng,
            money_value_flag: action.payload.money_value_flag,
            printable: action.payload.printable,
            show_in_report: action.payload.show_in_report,
            mulfactor: action.payload.mulfactor,
            parcent_frsalary: action.payload.parcent_frsalary,
            mb: action.payload.mb,
            parentbenefit: action.payload.parentbenefit,
            modify_flag: action.payload.modify_flag,
            gl_id: action.payload.gl_id,
            credit_gl_id: action.payload.credit_gl_id,
            holiday_flag: action.payload.holiday_flag,
            final_set_flag: action.payload.final_set_flag,
          };
        }
        return item;
      });
      return {
        ...state,
        earningsbenefitsloading: true,
        earningsbenefitsItems: con,
      };
    case EARNINGSBENEFITS_UPDATE_ITEM_ERROR:
      return {
        ...state,
        earningsbenefitsloading: true,
        earningsbenefitserror: action.payload,
      };

    default:
      return { ...state };
  }
};
