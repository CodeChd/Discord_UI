function Home() {
    return (
        <>
            <div className="bg-gray-700 w-60 flex flex-col ">
                <div className="px-3 h-12 flex items-center shadow-sm flex-shrink-0 font-title font-medium text-[15px]">Dashboard
                </div>

                <div className="p-3 text-gray-300 flex-1 space-y-2 overflow-y-auto scrollbar font-medium">
                    <p className="text-white">Friends</p>
                </div>
            </div>

            <div className="bg-gray-600 flex-1 flex flex-col">
                <div className="px-3 h-12 flex items-center shadow-sm flex-shrink-0 ">general</div>
            </div>

        </>
    );
}

export default Home;
