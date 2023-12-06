
function Message() {
    return (
        <div className="bg-gray-700 text-white min-h-screen flex items-center justify-center">

            <div className="max-w-lg">
                <div className="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
                    <img className="w-[180px] h-[40px] rounded-full mr-4" src="/images/cat.jpg" alt="profile"/>

                    <div className="">
                        <p className="flex items-baseline">
                            <span className="text-green-500 text-sm mr-2 font-medium">belugathecat</span>
                            <span className="text-xs text-gray-500">01/12/2001</span>
                        </p>
                        <p className="text-gray-300 ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur delectus dolorum
                            iure
                            iusto minus molestias praesentium repudiandae rerum totam. Commodi laborum minus, natus quis
                            quisquam ullam! Aliquam, distinctio, ipsam?
                        </p>
                    </div>

                </div>
                <div className="mt-2 hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
                    <p className="text-gray-300 pl-14">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus explicabo hic libero maxime
                        quidem, repellendus unde? Eaque laudantium libero maiores.
                    </p>
                </div>
                <div className="mt-2 hover:bg-gray-800 hover:bg-opacity-30 px-4  py-1">
                    <p className="text-gray-300 pl-14">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Message;
