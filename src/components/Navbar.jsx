import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { NavLink } from './NavLink'
import { navInfoLinks } from '../utils/data'
import ToggleColorMode from './ui/btnColorMode'
import { MenuOverlay } from './ui/MenuOverlay'

export const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 p-4">
      <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-4">
        <Link to='/' className="text-2xl md:text-5xl text-white font-semibold">
          Pokemon
        </Link>
        <div className="mobile-menu block md:hidden">
        {
          !navbarOpen ? (
              <button 
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                  <Bars3Icon className="h-5 w-5"/>
              </button>
          ): (
              <button
                  onClick={() => setNavbarOpen(!navbarOpen)} 
                  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                  <XMarkIcon className="h-5 w-5"/>
              </button>
          )
        }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 m-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    
                    <NavLink to="/hero">Hero</NavLink>
                    <NavLink to="/types">Types</NavLink>
                    <ToggleColorMode />
                    
                </ul>
                
            </div>
        
      </div>
      {
        navbarOpen ? <MenuOverlay /> : null
      }
    </nav>
  )
}
