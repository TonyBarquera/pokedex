type PokemonQuery = {
    name: string
    url: string
};

type PokemonsQuery = {
    count: number
    next: string
    previous: string | null
    results: Array<PokemonQuery>  
};

type PokemonInfo = {
    abilities: Array<{
        ability: {
            name: string
        }
    }> 
    id: number
    name: string
    sprites: {
        other: {
            home: {
                front_default: string
            }
        }
    }
    stats: Array<{
        base_stat: number
        stat: {
            name: string
        }
    }>
    types: Array<{
        slot: number,
        type: {
            name: PokemonType
        }
    }>
};

type PokemonType =
    "normal" |
    "fighting" |
    "flying" |
    "poison" |
    "ground" |
    "rock" |
    "bug" |
    "ghost" |
    "steel" |
    "fire" |
    "water" |
    "grass" |
    "electric" |
    "psychic" |
    "ice" |
    "dragon" |
    "dark" |
    "fairy";