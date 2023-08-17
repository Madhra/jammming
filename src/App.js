import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import PlayList from './components/PlayList/PlayList';

function App() {

  return (
    <>
      <header><h1>ja<span>mmm</span>ing</h1> </header>
      <SearchBar />
      <section>
          <SearchResults />
          <PlayList />
      </section>
    </>
  );
}

export default App;
