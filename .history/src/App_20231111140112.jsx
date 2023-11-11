import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import "./App.css";
import Book from "./components/Book";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <section>
        <Book />
      </section>
    </Provider>
  );
}

export default App;
