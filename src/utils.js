export async function getPokemonList() {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0`
    ).then((res) => res.json());
    return data.results;
}

export async function getPokemonDescription() {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-species/1`
    ).then((res) => res.json());
    return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ");
}


