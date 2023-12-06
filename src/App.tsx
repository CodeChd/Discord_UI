function App() {

    return (
        <main className="flex text-white h-screen">
            <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll">
                {
                    [...Array(40)].map((_, i) => (
                        <div key={i}
                             className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center">{i}</div>
                    ))
                }
            </div>
            <div className="bg-gray-700 w-60 flex flex-col ">
                <div className="px-3 h-12 flex items-center shadow-md flex-shrink-0">Tailwind CSS</div>

                <div className="p-3 flex-1 space-y-2 overflow-y-scroll">
                    {
                        [...Array(40)].map((_, i) => (
                            <div key={i}
                            >channel</div>
                        ))
                    }
                </div>
            </div>

            <div className="bg-gray-600 flex-1 flex flex-col">
                <div className="px-3 h-12 flex items-center shadow-md">general</div>
                <div className="p-3 flex-1 space-y-2 overflow-y-scroll">
                    {
                        [...Array(40)].map((_, i) => (
                            <p key={i}
                            >Message {i}. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quibusdam.</p>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default App
