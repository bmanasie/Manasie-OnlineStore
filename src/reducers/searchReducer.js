import { SEARCH_PRODUCT, FETCH_PRODUCT } from "../actions/types";

const initialState = {
  text: "",
  products: [],
  loading: false,
  product: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
