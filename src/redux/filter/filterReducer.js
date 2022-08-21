import postData from "../../assets/post_data";
import { FILTER_BY_CATEGORY, FILTER_BY_AUTHOR } from "./actionTypes";

//The post data
const initialState = postData;

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY: {
      let filteredArray = state.filter(
        (item) => item.category === action.payload
      );
      return filteredArray;
    }
    case FILTER_BY_AUTHOR: {
      let filteredArray = state.filter(
        (item) => item.author === action.payload
      );
      return filteredArray;
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;
