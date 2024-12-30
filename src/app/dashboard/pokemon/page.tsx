const getPokemon = async (limit = 20, offset = 0) => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  return data;
};

export default async function PokemonPage() {
  const { results } = await getPokemon(150);
  return (
    <>
      <h1>Pokemon page</h1>
      {JSON.stringify(results)}
    </>
  );
}
