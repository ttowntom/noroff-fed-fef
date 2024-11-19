import { Link } from 'react-router-dom';
import priceFormatter from '../util/priceFormatter';
import OnSaleTag from './OnSaleTag';

export default function ProductCard({ product }) {
  const discount = product.discountedPrice;
  const price = product.price;

  return (
    <div className="my-6 flex">
      <Link
        to={`/products/${product.id}`}
        className="group w-full overflow-hidden rounded-md shadow-md transition-colors duration-300 ease-in-out hover:border-b-2 hover:bg-gray-100 hover:shadow-lg"
      >
        <img
          src={product.image.url}
          alt={product.title}
          className="h-96 w-full transform rounded-md object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="my-4 flex items-center justify-between px-2">
          <div>
            <h3 className="font-semibold text-navy">{product.title}</h3>
            <p>{priceFormatter(discount)}</p>
          </div>
          {price > discount && <OnSaleTag />}
        </div>
      </Link>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="my-6 flex flex-col gap-4">
      <div className="h-72 w-full animate-pulse rounded-md bg-gray-300"></div>
      <div className="h-6 w-48 animate-pulse rounded-md bg-gray-400"></div>
      <div className="h-6 w-24 animate-pulse rounded-md bg-gray-300"></div>
    </div>
  );
}
