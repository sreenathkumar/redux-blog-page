import searchImage from "../assets/search.svg";
import { filterBySearch } from "../redux/filter/actions";
import { useDispatch } from "react-redux";

function Search() {
  const dispatch = useDispatch();

  //handling the search
  const updatedDeboundcedText = dbounce((text) => {
    dispatch(filterBySearch(text.toLowerCase()));
  });

  //Debounce function
  function dbounce(fn, delay = 1000) {
    let timeOut;
    return function (...args) {
      timeOut && clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  return (
    // <!-- search -->
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        id="search-input"
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        onChange={(e) => {
          updatedDeboundcedText(e.target.value);
        }}
        placeholder="Search"
      />
      <img
        className="inline h-6 cursor-pointer"
        src={searchImage}
        alt="Search"
      />
    </div>
  );
}

export default Search;
