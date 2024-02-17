import Image from 'next/image';
import { Dispatch , SetStateAction , RefObject } from "react";

type PropsType = {
    setOffsetValue: Dispatch<SetStateAction<number>>,
    setLimitValue: Dispatch<SetStateAction<number>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    offsetValue: number,
    limitValue: number,
    referencia: RefObject<HTMLDivElement>
};

const Paginacion = (data: PropsType): JSX.Element => {
    const { offsetValue , setOffsetValue , limitValue , setLoading , referencia } = data;

    const cargarPokemons = (nuevoOffset: number) => {
        setLoading(true);
        setOffsetValue(nuevoOffset);

        if(referencia.current) {
            referencia.current.scrollIntoView({ behavior: 'smooth' , block: 'start' });
        }
    };

    return (
        <div className='my-10'>
            <div className="flex justify-between mb-3">
                { offsetValue == 0 ? <p></p> 
                    :  
                    <button 
                        onClick={() => cargarPokemons(offsetValue - limitValue)}
                        className="bg-red-400 py-3 px-6 rounded-lg font-bold hover:bg-red-300 flex gap-3 items-center"
                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>Anterior</button> 
                }
                <button 
                    onClick={() => cargarPokemons(offsetValue + limitValue)}
                    className="bg-red-400 py-3 px-6 rounded-lg font-bold hover:bg-red-300 flex gap-3 items-center"
                >Siguiente 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </button>
            </div>
            <p className='text-end font-bold'>Pagina: {(offsetValue / limitValue) + 1}</p>
        </div>
    );
}

export default Paginacion;