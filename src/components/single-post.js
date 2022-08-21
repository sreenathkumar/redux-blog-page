import { filterByAuthor, filterByCategory } from "../redux/filter/actions";
import { useDispatch } from "react-redux";

function SinglePost({ post }) {
  const { title, category, author } = post;
  const { post_image, author_image } = post.images;
  const { datetime, read } = post.meta_data;

  //Calling the dispatch function
  const dispatch = useDispatch();

  //Handling click on the author
  const handleAuthorClick = (author) => {
    dispatch(filterByAuthor(author));
  };

  //Handling click on the category
  const handleCategoryClick = (category) => {
    dispatch(filterByCategory(category));
  };

  return (
    // <!-- single card  -->
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={post_image} alt="" />
      </div>

      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <span
              onClick={() => {
                handleCategoryClick(category);
              }}
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
            >
              {category}
            </span>
          </p>
          <a href="/" className="block mt-1">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img
              onClick={() => {
                handleAuthorClick(author);
              }}
              className="h-10 w-10 rounded-full cursor-pointer"
              src={author_image}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p
              onClick={() => {
                handleAuthorClick(author);
              }}
              className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
            >
              {author}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">{datetime}</time>
              <span aria-hidden="true">&middot;</span>
              <span> {read} min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
