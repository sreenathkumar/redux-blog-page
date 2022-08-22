import {
  FILTER_BY_AUTHOR,
  FILTER_BY_CATEGORY,
  FILTER_BY_SEARCH,
} from "./actionTypes";

//Action for Category filter
export const filterByCategory = (category) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category,
  };
};

//Action for Author filter
export const filterByAuthor = (author) => {
  return {
    type: FILTER_BY_AUTHOR,
    payload: author,
  };
};

//Action for Search filter
export const filterBySearch = (query) => {
  return {
    type: FILTER_BY_SEARCH,
    payload: query,
  };
};
