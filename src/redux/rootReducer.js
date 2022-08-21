import filterReducer from "./filter/filterReducer";
import searchReducer from "./search/searchReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filter: filterReducer,
  search: searchReducer,
});

export default rootReducer;
