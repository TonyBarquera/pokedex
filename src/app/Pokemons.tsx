import { Dispatch , SetStateAction , useRef } from 'react';
import Pokemon from './pokemon';
import Paginacion from './Paginacion';

type PropsType = {
    pokemons: PokemonInfo[] | undefined,
    setOffsetValue: Dispatch<SetStateAction<number>>,
    setLimitValue: Dispatch<SetStateAction<number>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    offsetValue: number,
    limitValue: number
};

const Pokemons = (data: PropsType): JSX.Element => {
    const referencia = useRef<HTMLDivElement>(null);
    const { pokemons , setOffsetValue , setLimitValue , offsetValue , limitValue , setLoading } = data;

    return (
        <div ref={referencia}>
          <h2 className='text-center mb-6 text-2xl font-bold'>Pokemons</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
            {
              pokemons?.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
              ))
            }
          </div>
          <Paginacion 
            setOffsetValue={setOffsetValue} 
            setLimitValue={setLimitValue} 
            offsetValue={offsetValue} 
            limitValue={limitValue} 
            setLoading={setLoading}
            referencia={referencia}
        />
        </div>
    );
}

export default Pokemons;