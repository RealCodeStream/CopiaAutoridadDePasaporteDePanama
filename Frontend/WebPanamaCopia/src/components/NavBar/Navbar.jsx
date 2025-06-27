import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, User, BotMessageSquareIcon } from 'lucide-react';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/quienessomos", label: "Quienes Somos" },
    { to: "/tramites", label: "Tramites" },
    { to: "/transparencia", label: "Transparencia" },
    { to: "/preguntasfrecuentes", label: "Preguntas Frecuentes" },
    { to: "/notiblog", label: "NotiBlog" },
    { to: "/iso", label: "ISO 9001:2015" }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', searchTerm);
  };

  return (
    <nav className="bg-blue-900 text-shadow-gray-950 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-neutral-50 text-shadow-gray-950 placeholder-gray-400 px-7 py-3 border border-b-black focus:outline-none  focus:ring-offset-zinc-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
            >
              🔍
            </button>
          </form>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden sm:flex space-x-7 px-25 py-3">
            {navItems.map((item) => (
              <div key={item.to} className="relative">
                <Link 
                  to={item.to} 
                  className={`
                    font-bold transition-all duration-300 ease-in-out
                    ${location.pathname === item.to 
                      ? 'text-white border-b-2 border-white pb-1' 
                      : 'text-gray-400 hover:text-white hover:border-b-2 hover:border-white hover:pb-1'
                    }
                  `}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
    </nav>
  );
};
export default NavBar;