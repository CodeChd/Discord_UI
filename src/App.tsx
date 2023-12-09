import { Outlet} from "react-router-dom";
import {DiscordIcon} from "./components/Icons";
import NavLinks from "./components/Links.tsx";

function App() {
    return (
        <main className="flex text-white h-screen">

            <div className="bg-gray-800 p-3 overflow-y-auto scrollbar flex flex-col gap-1 space-y-2">
                <NavLinks link="/">
                    <DiscordIcon className="h-7 w-7"/>
                </NavLinks>

                <hr className="border-t-white/[.06]  border-t-2 rounded mx-2"/>

                {/* _INSERT_  dynamic data through map */}
                <NavLinks link="/1/servers">
                    <img src="/images/cat.jpg" alt="cat"/>
                </NavLinks>
            </div>

            {/* Channels & General */}
            <Outlet/>

        </main>
    );
}

export default App


