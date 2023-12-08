function Home() {
    return (
        <>
            <div className="bg-gray-700 w-60 flex flex-col ">
                <div className="px-3 h-12 flex items-center shadow-md flex-shrink-0 font-title font-medium">Tailwind
                    CSS
                </div>

                <div className="p-3 text-gray-300 flex-1 space-y-2 overflow-y-scroll font-medium">
                    <p className="text-white">general</p>
                    {

                        [...Array(40)].map((_, i) => (
                            <div key={i}
                            >channel</div>
                        ))
                    }
                </div>
            </div>

            <div className="bg-gray-600 flex-1 flex flex-col">
                <div className="px-3 h-12 flex items-center shadow-md flex-shrink-0 ">general</div>
                <div className="p-3 flex-1 space-y-4 overflow-y-scroll ">
                    {
                        [...Array(40)].map((_, i) => (
                            <p key={i}
                            >Message {i}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
                                quibusdam.</p>
                        ))
                    }
                </div>
            </div>

        </>
    );
}

export default Home;
