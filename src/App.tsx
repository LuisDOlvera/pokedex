import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState<any>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=21")
      .then((response) => response.json())
      .then((response) => {
        setPokemons(response.results);
      });
  }, []);

  return (
    <>
      <main className="w-screen min-h-screen bg-stone-950 flex flex-col gap-20 p-10">
        <header className="w-screen flex justify-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="pokeapi"
          />
        </header>
        <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
          {pokemons.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.url}
                name={pokemon.name}
                url={pokemon.url}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
