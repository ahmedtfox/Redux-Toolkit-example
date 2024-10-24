import { Container } from "react-bootstrap";
import Counter from "./components/counter/Counter";
import InputText from "./components/InputText";
import { store } from "./store";
import { Provider } from "react-redux";
import OutText from "./components/OutText";
import Post from "./components/Post/Post";
function App() {
  // Redux Toolkit
  return (
    <Provider store={store}>
      <Container>
        <Counter />
        <InputText />
        <OutText />
        <Post />
      </Container>
    </Provider>
  );
}

export default App;
