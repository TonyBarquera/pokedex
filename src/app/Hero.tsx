import { useEffect , useRef } from 'react';
// @ts-ignore
import Typed from 'typed.js';

const Hero = (): JSX.Element => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['¡ Bienvenido a esta Pokedex !','NextJS + ReactJS + TypeScript + Tailwind CSS'],
            typeSpeed: 200,
            loop: true,
            backDelay: 200,
            backSpeed: 100
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='flex my-24 lg:my-32 justify-center'>
            <p className='font-bold block text-2xl lg:text-4xl border-b-2 border-gray-400' ref={el}></p>
        </div>
    );
}

export default Hero;