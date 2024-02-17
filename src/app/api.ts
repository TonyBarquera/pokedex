const getAllPokemons = async (offsetValue: number, limitValue: number): Promise<PokemonInfo[]> => {
    let allPokemons: Array<Promise<PokemonInfo>> = [];

    // Consulta de los 10 primeros pokemons de la pokedex
    const pokemonsList: PokemonsQuery = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offsetValue}&limit=${limitValue}`)
        .then(data => data.json())
        .then((response: PokemonsQuery) => response);
    
    // Consulta de los datos de cada uno de los pokemons
    allPokemons = pokemonsList.results.map(async (pokemon: PokemonQuery) => {
        const pokemonInformation: PokemonInfo = await fetch(pokemon.url)
            .then(data => data.json())
            .then((response: PokemonInfo) => response);

        // allPokemons.push(pokemonInformation);
        return pokemonInformation;
    });

    const result: Array<PokemonInfo> = await Promise.all(allPokemons);
    return result;
}

export {
    getAllPokemons,
}