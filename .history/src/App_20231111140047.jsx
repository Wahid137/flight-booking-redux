import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import "./App.css";
import Book from "./components/Book";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={store}>
      <Toaster>
        <Header />
        <section>
          <Book />
        </section>
      </Toaster>
    </Provider>
  );
}

export default App;
