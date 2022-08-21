import { SEARCH } from "./actionTypes";
import postData from "../../assets/post_data";

const initialState = postData;

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      let filteredArray = state.filter(
        (item) => item.title.search(action.payload) && item
      );
      if (filteredArray) {
        return filteredArray;
      } else {
        return state;
      }
    default:
      return state;
  }
};
export default searchReducer;
