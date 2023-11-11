import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}

export default App;
