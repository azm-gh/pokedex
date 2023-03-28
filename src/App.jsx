import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getPokemonDescription, getPokemonList } from './utils'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function getData(){
      const apiData = await getPokemonList();
      
      setPokemonList(apiData);
    }
    getData();
  },[]);
  

  async function logData() {
    const list = await getPokemonList();
    console.log(list);

    const pokemon = await getPokemonDescription();
    console.log(pokemon)

  }
  //logData();

  const pokemonNames = pokemonList.map((pokemon, idx) => {
    //console.log(pokemon.name);
    return (
      <option key={idx} value={pokemon.name}>{pokemon.name}</option>
    )

  })

  return (
    <div className="App">
      <div>
        <select>
          {pokemonNames}
        </select>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
