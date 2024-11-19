import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-8d12afa6e5/icons';

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-screen-lg flex-col justify-center px-4 pb-4 pt-12">
      <p className="mb-10 text-center font-pacifico text-xl">
        <span className="mr-2">
          <FontAwesomeIcon icon={byPrefixAndName.fas['store']} />
        </span>
        Shoplyst
      </p>
      <ul className="gap-6 text-center font-medium sm:mb-4 sm:flex sm:flex-row sm:justify-center">
        <li className="hover:underline">
          <Link to="/">Shop Now</Link>
        </li>
        <li className="hover:underline">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="hover:underline">
          <Link to="/">About Us</Link>
        </li>
        <li className="hover:underline">
          <Link to="/">FAQs</Link>
        </li>
        <li className="hover:underline">
          <Link to="/">Gift Cards</Link>
        </li>
      </ul>
      <span className="my-8 h-1 w-full border-b border-navy"></span>
      <div className="flex flex-col-reverse justify-between text-center text-sm sm:mb-6 sm:flex-row">
        <p className="my-6 sm:my-0">
          &copy; 2024 Shoplyst. All rights reserved.
        </p>
        <ul className="flex flex-col gap-4 sm:flex-row">
          <li className="underline hover:no-underline">
            <Link to="/">Privacy Policy</Link>
          </li>
          <li className="underline hover:no-underline">
            <Link to="/">Terms of Use</Link>
          </li>
          <li className="underline hover:no-underline">
            <Link to="/">Cookie Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
