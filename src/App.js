import BlogList from "./components/blog-list";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Search from "./components/search";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Search />
      <BlogList />
      <Footer />
    </Provider>
  );
}

export default App;
