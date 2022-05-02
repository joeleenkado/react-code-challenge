import "./App.css";
import { Provider } from "react-redux";
import OldProjectList from "./components/OldProjectList";
import ProjectList from "./components/ProjectList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <OldProjectList />
        <hr />
        <ProjectList />
      </div>
    </Provider>
  );
}

export default App;
