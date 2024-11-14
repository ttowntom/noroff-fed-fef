import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <header>
      <nav>
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
              className={({ isActive }) => (isActive ? 'underline' : undefined)}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
