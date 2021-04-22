import './App.css';
import SearchMovie from './components/SearchMovie/SerachMovie';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Movie Search API</h1>
        <SearchMovie></SearchMovie>
      </header>
    </div>
  );
}

export default App;
