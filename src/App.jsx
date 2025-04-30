import Message from "./components/Message";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Message />
    </Provider>
  );
}

export default App;
