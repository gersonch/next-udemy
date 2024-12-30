import { PokemonResponse } from "@/app/pokemon/interfaces/pokemon-response";
import { SimplePokemon } from "@/app/pokemon/interfaces/simple-pokemon";
import Image from "next/image";

const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemon = data.results.map((aPokemon) => ({
    id: aPokemon.url.split("/").at(-2)!,
    name: aPokemon.name,
  }));
  return pokemon;
};

export default async function PokemonPage() {
  const pokemon = await getPokemon(150);
  return (
    <>
      <h1>Pokemon page</h1>
      <section>
        <div className="flex flex-wrap justify-center items-center gap-4  p-16">
          {pokemon.map((aPokemon) => (
            <div
              key={aPokemon.id}
              className="p-8 bg-white flex flex-col items-center w-72 h-80 justify-around rounded-lg shadow-lg m-8"
            >
              <h2>
                {String(aPokemon.name).charAt(0).toUpperCase() +
                  String(aPokemon.name).slice(1)}
              </h2>
              <div>
                <Image
                  width={100}
                  height={100}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${aPokemon.id}.svg`}
                  alt="pokemon"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
