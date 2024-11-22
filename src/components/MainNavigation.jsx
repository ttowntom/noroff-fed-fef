import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-8d12afa6e5/icons';

import { useCartStore } from '../store';

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const getTotalItems = useCartStore((state) => state.getTotalItems());

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="my-4 border-b-[1px] border-navy shadow-md shadow-gray-300">
      <nav
        ref={menuRef}
        className="mx-auto flex w-full max-w-screen-lg items-center px-4 pb-4"
      >
        {/* Logo */}
        <div className="flex flex-grow">
          <NavLink
            to="/"
            className="text-center font-pacifico text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            {' '}
            <span className="mr-2">
              <FontAwesomeIcon icon={byPrefixAndName.fas['store']} />
            </span>
            Shoplyst
          </NavLink>
        </div>

        {/* Hamburger Button */}
        <button
          className="ml-auto block sm:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <span>
            {isMenuOpen ? (
              <FontAwesomeIcon icon={byPrefixAndName.fas['x']} />
            ) : (
              <FontAwesomeIcon icon={byPrefixAndName.fas['bars']} />
            )}
          </span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute left-0 top-16 w-full rounded-md bg-white p-2 text-center shadow-lg sm:static sm:right-auto sm:top-auto sm:flex sm:w-auto sm:gap-6 sm:bg-transparent sm:shadow-none ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="h-full rounded border-b hover:bg-cat lg:border-none">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block px-4 py-2 font-bold lg:inline'
                  : 'block px-4 py-2 lg:inline'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="h-full rounded border-b hover:bg-cat lg:border-none">
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block px-4 py-2 font-bold lg:inline'
                  : 'block px-4 py-2 lg:inline'
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="my-2 sm:my-0">
            <NavLink
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block rounded border-black bg-cat px-4 py-2 font-bold text-navy lg:inline'
                  : 'block rounded border-black bg-navy px-4 py-2 font-light text-white hover:bg-cat hover:font-normal hover:text-black lg:inline'
              }
            >
              {`Cart (${getTotalItems})`}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
