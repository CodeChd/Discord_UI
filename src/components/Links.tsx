import {Link, useLocation} from "react-router-dom";

interface LinkProps {
    link: string
    children?: React.ReactNode
}
function NavLinks({link, children}: LinkProps) {
    const {pathname} = useLocation()
    return (
        <Link to={link}>

            <div className="relative group">

                {/* hover indicator */}
                <div className="absolute -left-3 h-full flex items-center">
                    <div
                        className={`bg-white opacity-100 w-1 rounded-tr rounded-br  ${pathname === link ? "opacity-100 h-10" : "opacity-100 h-5 group-hover:scale-100 scale-50 group-hover:opacity-100"}  transition-all   duration-200 origin-left`}>
                    </div>
                </div>

                <div
                    className={`${pathname === link ? "bg-brand rounded-2xl " : " bg-gray-700 text-gray-100 hover:rounded-2xl hover:bg-brand hover:text-white  rounded-3xl"} overflow-hidden  w-12 h-12  flex items-center justify-center  transition-all duration-200  group-active:translate-y-1  `}>{children}</div>
            </div>
        </Link>
    );
}

export default NavLinks;
