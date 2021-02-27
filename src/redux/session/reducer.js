import {
  SESSION_GET_LIST,
  SESSION_GET_LIST_SUCCESS,
  SESSION_GET_LIST_ERROR,
  SESSION_ADD_ITEM,
  SESSION_ADD_ITEM_SUCCESS,
  SESSION_ADD_ITEM_ERROR,
  SESSION_DELETE_ITEM,
  SESSION_DELETE_SUCCESS,
  SESSION_DELETE_ITEM_ERROR,
  SESSION_UPDATE_ITEM,
  SESSION_UPDATE_ITEM_SUCCESS,
  SESSION_UPDATE_ITEM_ERROR,
  SESSION_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  sessionItems: null,
  sessionerror: "",
  sessionloading: false,
};

export default (state = INIT_STATE, action) => {
  
  switch (action.type) {
    case SESSION_GET_LIST:
      return { ...state, sessionloading: false };

    case SESSION_GET_LIST_SUCCESS:
      
      return {
        ...state,
        sessionloading: true,
        sessionItems: action.payload,
      };

    case SESSION_GET_LIST_ERROR:
      return { ...state, sessionloading: true, sessionerror: action.payload };

    case SESSION_ADD_ITEM:
      return { ...state, sessionloading: false };
    case SESSION_ADD_ITEM_SUCCESS:
      let items = state.sessionItems;
      let item = [];
      item.id = action.payload.id;
      item.sched_name_eng = action.payload.sched_name_eng;
      item.sched_name_arab = action.payload.sched_name_arab;
      item.start_time = action.payload.start_time;
      item.end_time = action.payload.end_time;
      item.late_minutes = action.payload.late_minutes;
      item.early_minutes = action.payload.early_minutes;
      item.check_in = action.payload.check_in;
      item.check_out = action.payload.check_out;
      item.overtime = action.payload.overtime;
      item.flex_time = action.payload.flex_time;
      item.hpd = action.payload.hpd;
      item.day_off = action.payload.day_off;
      item.ignore_aw = action.payload.ignore_aw;
      item.absent_factor = action.payload.absent_factor;
      item.in_begin = action.payload.in_begin;
      item.out_begin = action.payload.out_begin;
      item.in_end = action.payload.in_end;
      item.out_end = action.payload.out_end;
      item.extra_mins_overtime= action.payload.extra_mins_overtime;
      item.no_log_penality= action.payload.no_log_penality;
      item.monthly_grace_period= action.payload.monthly_grace_period;
      item.no_late= action.payload.no_late;
      item.no_absent= action.payload.no_absent;
      item.no_ot= action.payload.no_ot;

      items.splice(0, 0, item);
      return {
        ...state,
        sessionloading: true,
        sessionItems: items,
      };

    case SESSION_ADD_ITEM_ERROR:
      return { ...state, sessionloading: true, sessionerror: action.payload };

    case SESSION_DELETE_ITEM:
      return {
        ...state,
        sessionloading: false,
      };
    case SESSION_DELETE_CHECK:
      return {
        ...state,
        sessionloading: true,
      };

    case SESSION_DELETE_SUCCESS:
      const data = state.sessionItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        sessionloading: true,
        sessionItems: data,
      };

    case SESSION_DELETE_ITEM_ERROR:
      return { ...state, sessionloading: true, sessionerror: action.payload };

    case SESSION_UPDATE_ITEM:
      return {
        ...state,
        sessionloading: false,
      };
    case SESSION_UPDATE_ITEM_SUCCESS:
      const con = state.sessionItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            sched_name_arab: action.payload.sched_name_arab,
            sched_name_eng: action.payload.sched_name_eng,
            start_time  :  action.payload.start_time,
            end_time  :  action.payload.end_time,
            late_minutes  :  action.payload.late_minutes,
            early_minutes  :  action.payload.early_minutes,
            check_in  :  action.payload.check_in,
            check_out  :  action.payload.check_out,
            overtime  :  action.payload.overtime,
            flex_time  :  action.payload.flex_time,
            hpd  :  action.payload.hpd,
            day_off  :  action.payload.day_off,
            ignore_aw  :  action.payload.ignore_aw,
            absent_factor  :  action.payload.absent_factor,
            in_begin  :  action.payload.in_begin,
            out_begin  :  action.payload.out_begin,
            in_end  :  action.payload.in_end,
            out_end  :  action.payload.out_end,
            extra_mins_overtime :  action.payload.extra_mins_overtime,
            no_log_penality :  action.payload.no_log_penality,
            monthly_grace_period :  action.payload.monthly_grace_period,
            no_late :  action.payload.no_late,
            no_absent :  action.payload.no_absent,
            no_ot :  action.payload.no_ot,
          };
        }
        return item;
      });
      return {
        ...state,
        sessionloading: true,
        sessionItems: con,
      };
    case SESSION_UPDATE_ITEM_ERROR:
      return { ...state, sessionloading: true, sessionerror: action.payload };

    default:
      return { ...state };
  }
};
