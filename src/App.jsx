import { Provider } from "react-redux";
import "./App.css";
import AppContainer from "./components/app-container/AppContainer";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
