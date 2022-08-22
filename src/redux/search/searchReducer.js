// import { SEARCH } from "./actionTypes";
// import postData from "../../assets/post_data";

// const initialState = postData;

// const searchReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SEARCH:
//       if (action.payload !== "") {
//         let filteredArray = state.filter((item) => {
//           return item.title.includes(action.payload) !== false && item;
//         });

//         return filteredArray;
//       } else {
//         return initialState;
//       }
//     default:
//       return initialState;
//   }
// };
// export default searchReducer;
