import { SEARCH_PRODUCT, FETCH_PRODUCT } from "./types";
import axios from "axios";

export const searchProduct = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_PRODUCT,
    payload: text,
  });
};

export const fetchProducts = (text) => (dispatch) => {
  axios
    .get(`/api/products/${text}`)
    .then((response) =>
      dispatch({
        type: FETCH_PRODUCT,
        payload: response.data,
      }).then((response) => response.json())
    )
    .catch((err) => console.log(err));
};
