import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <header className="border-navy my-4 border-b-[1px] shadow-md">
      <nav className="mx-auto flex w-full max-w-screen-lg px-4 pb-4">
        <div className="flex flex-grow">
          <NavLink to="/" className="text-xl font-bold">
            SHOPLYST
          </NavLink>
        </div>
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'font-bold' : undefined)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? 'bg-cat text-navy rounded border-black px-3 py-2 font-bold'
                  : 'bg-navy rounded border-black px-3 py-2 font-light text-white'
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
