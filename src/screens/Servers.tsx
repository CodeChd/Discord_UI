function Servers() {

    return (
        <>
            <div className="bg-gray-700 w-60 flex flex-col ">
                <button
                    className="px-4 h-12 flex items-center  flex-shrink-0 font-title font-medium border-b-gray-900 shadow-sm gap-2 text-[15px] hover:bg-gray-550/[0.16] transition">
                    <img src="/icons/verified.png" alt="verified-icon" className="inline-block w-4 h-4 "/>
                    Study Group
                    <img src="/icons/chevron.svg" alt="chevron" className="h-4 w-4 ml-auto   opacity-80"/>
                </button>

                <div className="text-gray-300 flex-1  overflow-y-auto scrollbar font-medium">
                    <div
                        className="flex items-center text-gray-300 px-2 mx-2 rounded py-1 mt-[17px] hover:bg-gray-550/[0.16] cursor-pointer hover:text-gray-100 group">
                        <img src="/icons/book.svg" alt="book-icon" className="h-5 w-5 mr-1.5"/>
                        welcome
                        <img src="/icons/user-plus.svg" alt="user-plus-icon" className="opacity-0 group-hover:opacity-100 transition h-4 w-4 ml-auto"/>
                    </div>

                    <div
                        className="flex items-center text-gray-300 px-2 mx-2 rounded py-1 mt-[17px] hover:bg-gray-550/[0.16] cursor-pointer hover:text-gray-100 group">
                        <img src="/icons/megaphone.svg" alt="book-icon" className="h-5 w-5 mr-1.5"/>
                        announcements
                        <img src="/icons/user-plus.svg" alt="user-plus-icon" className="opacity-0 group-hover:opacity-100 transition h-4 w-4 ml-auto"/>
                    </div>
                </div>
            </div>

            <div className="bg-gray-600 flex-1 flex flex-col">
                <div className="px-3 h-12 flex items-center flex-shrink-0 shadow-sm">general</div>
                <div className="p-3 flex-1 space-y-4 overflow-y-auto scrollbar">
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

export default Servers;
