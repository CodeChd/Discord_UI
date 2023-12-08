import {Link, Outlet, useLocation} from "react-router-dom";
import {DiscordIcon} from "./components/Icons";

function App() {
    const {pathname} = useLocation()
    return (
            <main className="flex text-white h-screen">

                <div className="bg-gray-800 p-3 space-y-2 overflow-y-scroll">

                    <Link to="/">
                        <div className="relative group">

                            {/* hover indicator */}
                            <div className="absolute  -left-3 h-full flex items-center">
                                <div
                                    className="bg-white w-1 h-5 rounded-tr rounded-br opacity-0 group-hover:opacity-100 transition-all scale-0 group-hover:scale-100 duration-200 origin-left">
                                </div>
                            </div>

                            <div
                                className="bg-gray-700 text-gray-100 w-12 h-12 rounded-3xl group-hover:rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-200  mb-2">
                                <DiscordIcon className="h-7 w-7"/></div>
                        </div>
                    </Link>

                    <Link to="/1/servers">

                        <div className="relative group">

                            {/* hover indicator */}
                            <div className="absolute -left-3 h-full flex items-center">
                                <div
                                    className={`bg-white opacity-100 w-1 rounded-tr rounded-br  ${pathname === '/1/servers' ? "opacity-100 h-10" : "opacity-100 h-5 group-hover:scale-100 scale-0 group-hover:opacity-100"} h-5 transition-all   duration-200 origin-left`}>
                                </div>
                            </div>

                            <div
                                className={`${pathname === '/1/servers' ? "bg-brand rounded-2xl " : " bg-gray-700 text-gray-100 hover:rounded-2xl hover:bg-brand hover:text-white  rounded-3xl"}  w-12 h-12  flex items-center justify-center  transition-all duration-200  group-active:translate-y-1  `}>
                                <DiscordIcon className="h-7 w-7"/></div>
                        </div>
                    </Link>
                </div>


            <Outlet/>

            </main>
    );
}

export default App


