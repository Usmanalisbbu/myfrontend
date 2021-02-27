import {
  SPONSOR_GET_LIST,
  SPONSOR_GET_LIST_SUCCESS,
  SPONSOR_GET_LIST_ERROR,
  SPONSOR_ADD_ITEM,
  SPONSOR_ADD_ITEM_SUCCESS,
  SPONSOR_ADD_ITEM_ERROR,
  SPONSOR_DELETE_ITEM,
  SPONSOR_DELETE_SUCCESS,
  SPONSOR_DELETE_ITEM_ERROR,
  SPONSOR_UPDATE_ITEM,
  SPONSOR_UPDATE_ITEM_SUCCESS,
  SPONSOR_UPDATE_ITEM_ERROR,
  SPONSOR_DELETE_CHECK,
} from "../actions";

const INIT_STATE = {
  sponsorItems: null,
  sponsorerror: "",
  sponsorloading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SPONSOR_GET_LIST:
      return { ...state, sponsorloading: false };

    case SPONSOR_GET_LIST_SUCCESS:
      return {
        ...state,
        sponsorloading: true,
        sponsorItems: action.payload,
      };

    case SPONSOR_GET_LIST_ERROR:
      return { ...state, sponsorloading: true, sponsorerror: action.payload };

    case SPONSOR_ADD_ITEM:
      return { ...state, sponsorloading: false };
    case SPONSOR_ADD_ITEM_SUCCESS:
      let items = state.sponsorItems;
      let item = [];
      item.id = action.payload.id;
      item.sponsor_name_eng = action.payload.sponsor_name_eng;
      item.sponsor_name_arab = action.payload.sponsor_name_arab;
      item.sponsor_name_eng = action.payload.sponsor_name_eng;
      item.sponsor_name_arab = action.payload.sponsor_name_arab;
      item.sponsor_address = action.payload.sponsor_address;
      item.sponsor_telphone_no = action.payload.sponsor_telphone_no;
      item.contact_person_eng = action.payload.contact_person_eng;
      item.contact_person_arab = action.payload.contact_person_arab;
      item.sponsor_no = action.payload.sponsor_no;
      items.splice(0, 0, item);
      return {
        ...state,
        sponsorloading: true,
        sponsorItems: items,
      };

    case SPONSOR_ADD_ITEM_ERROR:
      return { ...state, sponsorloading: true, sponsorerror: action.payload };

    case SPONSOR_DELETE_ITEM:
      return {
        ...state,
        sponsorloading: false,
      };
    case SPONSOR_DELETE_CHECK:
      return {
        ...state,
        sponsorloading: true,
      };

    case SPONSOR_DELETE_SUCCESS:
      const data = state.sponsorItems.filter(
        (x) => x.id !== action.payload.payload
      );
      return {
        ...state,
        sponsorloading: true,
        sponsorItems: data,
      };

    case SPONSOR_DELETE_ITEM_ERROR:
      return { ...state, sponsorloading: true, sponsorerror: action.payload };

    case SPONSOR_UPDATE_ITEM:
      return {
        ...state,
        sponsorloading: false,
      };
    case SPONSOR_UPDATE_ITEM_SUCCESS:
      const con = state.sponsorItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            sponsor_name_arab: action.payload.sponsor_name_arab,
            sponsor_name_eng: action.payload.sponsor_name_eng,
            sponsor_name_eng: action.payload.sponsor_name_eng,
            sponsor_name_arab: action.payload.sponsor_name_arab,
            sponsor_name_eng: action.payload.sponsor_name_eng,
            sponsor_name_arab: action.payload.sponsor_name_arab,
            sponsor_address: action.payload.sponsor_address,
            sponsor_telphone_no: action.payload.sponsor_telphone_no,
            contact_person_eng: action.payload.contact_person_eng,
            contact_person_arab: action.payload.contact_person_arab,
            sponsor_no: action.payload.sponsor_no,
          };
        }
        return item;
      });
      return {
        ...state,
        sponsorloading: true,
        sponsorItems: con,
      };
    case SPONSOR_UPDATE_ITEM_ERROR:
      return { ...state, sponsorloading: true, sponsorerror: action.payload };

    default:
      return { ...state };
  }
};
