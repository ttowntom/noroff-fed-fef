import Review from './Review';

export default function ReviewsRenderer({ reviewsArr }) {
  let content;

  if (reviewsArr.length === 0) {
    content = (
      <div>
        <p className="font-semibold">Gosh darn!</p>
        <p>There are no reviews for this product yet.</p>
      </div>
    );
  } else {
    content = (
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {reviewsArr.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    );
  }

  return content;
}
