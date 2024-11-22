// src/pages/Error.jsx
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-8d12afa6e5/icons';
import Button from '../components/Button';

export default function Error() {
  return (
    <section className="mx-auto mt-12 flex flex-col items-center gap-6">
      <FontAwesomeIcon
        icon={byPrefixAndName.fas['circle-xmark']}
        className="text-9xl text-error"
      />
      <h3 className="text-4xl font-semibold text-navy">Page Not Found</h3>
      <p className="mb-6 max-w-[45ch] text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/#shop">
        <Button style="primary">Go Back to Shopping</Button>
      </Link>
    </section>
  );
}
