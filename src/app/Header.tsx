const Header = (): JSX.Element => {
    return (
        <header className="bg-red-600">
            <div className="w-11/12 lg:w-4/5 mx-auto py-6 flex justify-between items-center">
                <div className="w-12 h-12 rounded-full">
                    <p 
                        className="w-12 h-6 rounded-t-full bg-red-700 border-4 border-b-2 border-black"
                    ></p>
                    <p 
                        className="w-12 h-6 rounded-b-full bg-white border-4 border-t-2 border-black"
                    ></p>
                </div>
                <h1 className="flex items-end text-2xl lg:text-4xl font-bold">Pokedex<p className="text-lg lg:text-2xl font-medium">by Tony Barquera</p></h1>
            </div>
        </header>
    );
}

export default Header;