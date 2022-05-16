import { useEffect, useState } from 'react';
import './App.css';
import { getPoke } from './services/fetch-utils';

function App() {
  const [poke, setPoke] = useState([]);
  const [query, setQuery] = useState('chu');

  async function load() {
    const data = await getPoke(query);

    setPoke(data.data.results);
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
      <header className="app-header">
        {poke.map((x, i) => (
          <div key={x.pokemon + i}>
            <h2>{x.pokemon}</h2>
            <p>{x.attack}</p>
            <p>{x.defense}</p>
            <img src={x.url_image} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
