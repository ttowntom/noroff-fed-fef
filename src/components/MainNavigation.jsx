import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <header className="border-navy my-4 border-b-[1px] pb-3">
      <nav className="flex w-full">
        <div className="flex flex-grow">
          <NavLink to="/" className="text-xl font-bold">
            Shoplyst
          </NavLink>
        </div>
        <ul className="flex gap-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'underline' : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'underline' : undefined)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? 'bg-cat text-navy rounded border-black px-3 py-2 font-normal'
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
