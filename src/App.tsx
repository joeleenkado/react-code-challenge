import './App.css';
import OldProjectList from './components/OldProjectList';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <OldProjectList />
      <hr />
      <ProjectList />
    </div>
  );
}

export default App;
