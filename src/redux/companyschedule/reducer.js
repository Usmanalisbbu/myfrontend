import {
  COMPANYSCHEDULE_GET_LIST,
  COMPANYSCHEDULE_GET_LIST_SUCCESS,
  COMPANYSCHEDULE_GET_LIST_ERROR,
  COMPANYSCHEDULE_ADD_ITEM,
  COMPANYSCHEDULE_ADD_ITEM_SUCCESS,
  COMPANYSCHEDULE_ADD_ITEM_ERROR,
  COMPANYSCHEDULE_DELETE_ITEM,
  COMPANYSCHEDULE_DELETE_SUCCESS,
  COMPANYSCHEDULE_DELETE_ITEM_ERROR,
  COMPANYSCHEDULE_UPDATE_ITEM,
  COMPANYSCHEDULE_UPDATE_ITEM_SUCCESS,
  COMPANYSCHEDULE_UPDATE_ITEM_ERROR,
  COMPANYSCHEDULE_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  companyscheduleItems: null,
  companyscheduleerror: "",
  companyscheduleloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case COMPANYSCHEDULE_GET_LIST:
      return { ...state, companyscheduleloading: false };

    case COMPANYSCHEDULE_GET_LIST_SUCCESS:
      return {
        ...state,
        companyscheduleloading: true,
        companyscheduleItems: action.payload,
      };

    case COMPANYSCHEDULE_GET_LIST_ERROR:
      return { ...state, companyscheduleloading: true, companyscheduleerror: action.payload };

    case COMPANYSCHEDULE_ADD_ITEM:
      return { ...state, companyscheduleloading: false };
    case COMPANYSCHEDULE_ADD_ITEM_SUCCESS:
      let items = state.companyscheduleItems;
      let item = [];
      item.id = action.payload.id;
      item.schedule_desc_eng = action.payload.schedule_desc_eng;
      item.schedule_desc_arab = action.payload.schedule_desc_arab;
      item.from_date = action.payload.from_date;
      item.from_date_h = action.payload.from_date_h;
      item.to_date = action.payload.to_date;
      item.to_date_h = action.payload.to_date_h;
      item.no_work = action.payload.no_work;
      item.for_schedule = action.payload.for_schedule;
      item.paid_overtime = action.payload.paid_overtime;
      items.splice(0, 0, item);
      return {
        ...state,
        companyscheduleloading: true,
        companyscheduleItems: items,
      };

    case COMPANYSCHEDULE_ADD_ITEM_ERROR:
      return { ...state, companyscheduleloading: true, companyscheduleerror: action.payload };

    case COMPANYSCHEDULE_DELETE_ITEM:
      return {
        ...state,
        companyscheduleloading: false,
      };
    case COMPANYSCHEDULE_DELETE_CHECK:
      return {
        ...state,
        companyscheduleloading: true,
      };

    case COMPANYSCHEDULE_DELETE_SUCCESS:
      const data = state.companyscheduleItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        companyscheduleloading: true,
        companyscheduleItems: data,
      };

    case COMPANYSCHEDULE_DELETE_ITEM_ERROR:
      return { ...state, companyscheduleloading: true, companyscheduleerror: action.payload };

    case COMPANYSCHEDULE_UPDATE_ITEM:
      return {
        ...state,
        companyscheduleloading: false,
      };
    case COMPANYSCHEDULE_UPDATE_ITEM_SUCCESS:
      const con = state.companyscheduleItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            schedule_desc_arab: action.payload.schedule_desc_arab,
            schedule_desc_eng: action.payload.schedule_desc_eng,
            from_date : action.payload.from_date,
            from_date_h : action.payload.from_date_h,
            to_date : action.payload.to_date,
            to_date_h : action.payload.to_date_h,
            no_work : action.payload.no_work,
            for_schedule : action.payload.for_schedule,
            paid_overtime : action.payload.paid_overtime,
          };
        }
        return item;
      });
      return {
        ...state,
        companyscheduleloading: true,
        companyscheduleItems: con,
      };
    case COMPANYSCHEDULE_UPDATE_ITEM_ERROR:
      return { ...state, companyscheduleloading: true, companyscheduleerror: action.payload };

    default:
      return { ...state };
  }
};
