import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-8d12afa6e5/icons';

export default function Feature({ icon, title, desc }) {
  const useIcon = byPrefixAndName.fas[`${icon}`];

  return (
    <div className="flex flex-col items-center gap-4 text-center sm:w-1/3">
      <div className="bg-primary flex items-center justify-center text-2xl">
        <FontAwesomeIcon className="text-cat" icon={useIcon} />
      </div>
      <h3 className="text-2xl font-medium">{title}</h3>
      <p className="text-center">{desc}</p>
    </div>
  );
}
