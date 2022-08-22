import postData from "../../assets/post_data";
import {
  FILTER_BY_CATEGORY,
  FILTER_BY_AUTHOR,
  FILTER_BY_SEARCH,
} from "./actionTypes";

//The post data
const initialState = postData;

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY: {
      let filteredArray = initialState.filter(
        (item) => item.category === action.payload
      );

      return filteredArray;
    }
    case FILTER_BY_AUTHOR: {
      let filteredArray = initialState.filter(
        (item) => item.author === action.payload
      );

      return filteredArray;
    }
    case FILTER_BY_SEARCH:
      if (action.payload !== "") {
        let filteredArray = initialState.filter((item) => {
          return (
            item.title.toLowerCase().includes(action.payload) !== false && item
          );
        });

        return filteredArray;
      } else {
        return initialState;
      }
    default: {
      return state;
    }
  }
};

export default filterReducer;
