import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-8d12afa6e5/icons';

export default function Review({ review }) {
  const { username: name, rating, description } = review;

  const maxStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex flex-col gap-4">
      <div>
        {[...Array(filledStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={byPrefixAndName.fas['star']}
            className="text-navy"
          />
        ))}
        {hasHalfStar && (
          <FontAwesomeIcon
            icon={byPrefixAndName.fas['star-half-alt']}
            className="text-navy"
          />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={byPrefixAndName.far['star']}
            className="text-navy"
          />
        ))}
      </div>
      <p className="font-semibold">"{description}"</p>
      <div className="flex gap-4">
        <img
          src="https://api.multiavatar.com/random.svg"
          alt={name}
          className="h-12 w-12"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p>Verified Buyer</p>
        </div>
      </div>
    </div>
  );
}
