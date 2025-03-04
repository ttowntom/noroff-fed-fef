import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-8d12afa6e5/icons';

export default function RatingStar({ product }) {
  const rating = product.rating;
  const reviews = product.reviews;
  const maxStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxStars - filledStars - (hasHalfStar ? 1 : 0);

  let content;

  if (reviews.length === 0) {
    content = (
      <div className="flex gap-2 text-sm">
        <div>
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={`star-${product.id}-position-${index + 1}`}
              className="text-yellow-500"
              icon={byPrefixAndName.far['star']}
            />
          ))}
        </div>
        <p>
          ({rating} stars) •{' '}
          <a href="#reviews" className="hover:underline">
            {reviews.length} reviews
          </a>
        </p>
      </div>
    );
  } else {
    content = (
      <div className="flex gap-2 text-sm">
        <div>
          {[...Array(filledStars)].map((_, index) => (
            <FontAwesomeIcon
              key={`star-${product.id}-filled-${filledStars - index}`}
              icon={byPrefixAndName.fas['star']}
              className="text-yellow-500"
            />
          ))}
          {hasHalfStar && (
            <FontAwesomeIcon
              key={`half-star-${product.id}`}
              icon={byPrefixAndName.fas['star-half-alt']}
              className="text-yellow-500"
            />
          )}
          {[...Array(emptyStars)].map((_, index) => (
            <FontAwesomeIcon
              key={`star-${product.id}-empty-${index + filledStars + (hasHalfStar ? 1 : 0)}`}
              icon={byPrefixAndName.far['star']}
              className="text-yellow-500"
            />
          ))}
        </div>
        <p>
          ({rating} stars) •{' '}
          <a href="#reviews" className="hover:underline">
            {reviews.length} reviews
          </a>
        </p>
      </div>
    );
  }

  return content;
}
