import {
  FILTER_BY_AUTHOR,
  FILTER_BY_CATEGORY,
  FILTER_BY_SEARCH,
} from "./actionTypes";

export const filterByCategory = (category) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category,
  };
};
export const filterByAuthor = (author) => {
  return {
    type: FILTER_BY_AUTHOR,
    payload: author,
  };
};
export const filterBySearch = (query) => {
  return {
    type: FILTER_BY_SEARCH,
    payload: query,
  };
};
