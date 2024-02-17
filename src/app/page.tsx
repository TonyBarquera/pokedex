"use client"

import { useState , useEffect } from 'react';
import Pokemons from './Pokemons';
import Hero from './Hero';
import { getAllPokemons } from './api';

export default function Home() {
  // State que va manejar la paginacion
  const [ loading , setLoading ] = useState<boolean>(true);
  const [ pokemons , setPokemons ] = useState<PokemonInfo[]>();
  const [ offsetValue , setOffsetValue ] = useState<number>(0);
  const [ limitValue , setLimitValue ] = useState<number>(24);

  // Obtenemos los pokemons
  useEffect(() => {
      (async () => {
          const response = await getAllPokemons(offsetValue, limitValue);
          setPokemons(response);
          setLoading(false);
      })();
  }, [offsetValue, limitValue, loading, setLoading]);

  return (
    <div className='w-11/12 lg:w-4/5 mx-auto'>
      <Hero />
      {
        loading ? 
        <p>Cargando</p> 
        :
        <Pokemons 
          pokemons={pokemons}
          setOffsetValue={setOffsetValue}
          setLimitValue={setLimitValue}
          setLoading={setLoading}
          offsetValue={offsetValue}
          limitValue={limitValue}
        />
      }
    </div>
  );
}

// export default async function Home() {
//   // State que va manejar la paginacion
//   const [ offsetValue , setOffsetValue ] = useState<number>(0);
//   const [ limitValue , setLimitValue ] = useState<number>(24);

//   // Obtenemos los pokemons
//   const pokemons = await getAllPokemons(offsetValue, limitValue);

//   return (
//     <div className='w-11/12 lg:w-4/5 mx-auto'>
//       <h1>Hola Mundo!</h1>
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
//         {
//           pokemons.map(pokemon => (
//             <Pokemon key={pokemon.id} pokemon={pokemon} />
//           ))
//         }
//       </div> 
//     </div>
//   );
// }
