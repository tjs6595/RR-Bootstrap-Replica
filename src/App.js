import './App.css';
import Background from './components/Background';
import TopBar from './components/TopBar'
import StoreListing from './components/StoreListing'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
    </div>
  );
}

export default App;
