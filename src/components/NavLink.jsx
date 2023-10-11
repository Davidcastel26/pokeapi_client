import { Link, useMatch, useResolvedPath } from "react-router-dom"

export const NavLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link 
                to={to} {...props}
                className={ 'block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' }  
            >
                {children}
            </Link>
        </li>
    )
}
