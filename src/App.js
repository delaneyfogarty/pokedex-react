import { useEffect, useState } from 'react';
import './App.css';
import { getPoke } from './services/fetch-utils';
import Spinner from './Spinner';
import Pokemon from './Pokemon';

function App() {
  const [poke, setPoke] = useState([]);
  const [query, setQuery] = useState('char');
  const [isLoading, setIsLoading] = useState(false);

  async function load() {
    setIsLoading(true);
    const {
      data: { results },
    } = await getPoke(query);
    setIsLoading(false);
    setPoke(results);
  }

  useEffect(() => {
    load();
  }, []); //eslint-disable-line

  async function handleSearch(e) {
    e.preventDefault();
    load();
  }

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input onChange={(e) => setQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <header className="app-header">{isLoading ? <Spinner /> : <Pokemon poke={poke} />}</header>
    </div>
  );
}

export default App;
