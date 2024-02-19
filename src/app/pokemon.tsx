import Image from 'next/image';

type Props = {
    pokemon: PokemonInfo
}

export default function Pokemon(props: Props) {
    const { pokemon } = props;
    const type: PokemonType = pokemon.types[0].type.name;
    const bgColor: string = POKEMON_TYPE_COLORS[type];

    const bgBar = (barValue: number): string => {
        let color: string;
        if(barValue <= 20) {
            color = "#ff003c";
        } else if(barValue <= 40) {
            color = "#ff8a00";
        } else if(barValue <= 60) {
            color = "#fabe28";
        } else if(barValue <= 80) {
            color = "#88c100";
        } else {
            color = "#00c176";
        }

        return color;
    }

    return (
        <div className='border rounded-2xl py-5 px-6' style={{ backgroundColor: bgColor }}>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-xl'>{pokemon.id}</p>
                <h1 className='capitalize font-bold text-ls'>{pokemon.name}</h1>
            </div>
            <Image 
                className='mx-auto my-5 object-cover transition-transform scale-100 hover:scale-125' 
                width={250} 
                height={250}
                loading='lazy'
                src={pokemon.sprites.other.home.front_default} 
                alt={pokemon.name}
            />

            <div className='bg-white px-3 py-3 rounded-2xl'>
                <h2 className='text-lg text-center font-bold'>Types</h2>
                <div className='flex gap-4 my-5 justify-center'>
                    {
                        pokemon.types.map(typePokemon => (
                            <p
                                key={`${pokemon.id}${typePokemon.slot}`}
                                className='px-5 py-1 rounded-3xl text-white capitalize font-bold border-2 border-gray-400'
                                style={{ backgroundColor: POKEMON_TYPE_COLORS[typePokemon.type.name] }}
                            >{typePokemon.type.name}</p>
                        ))
                    }
                </div>
              
                <h2 className='text-lg text-center font-bold'>Stats</h2>
                {
                    pokemon.stats.map(stat => (
                        <div key={`${pokemon.id}${stat.stat.name}`} className='mb-2 last-of-type:mb-0'>
                            <p className='capitalize mb-1 font-medium'>{stat.stat.name}</p>
                            <div className='bg-gray-300 rounded-full h-4'>
                                <p 
                                    className='rounded-full h-4' 
                                    style={{ 
                                        width: `${stat.base_stat > 100 ? 100 : stat.base_stat}%` , 
                                        backgroundColor: bgBar(stat.base_stat) 
                                    }}
                                ></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

const POKEMON_TYPE_COLORS = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#FA6C6C",
    water: "#6890F0",
    grass: "#48CFB2",
    electric: "#FFCE4B",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
};