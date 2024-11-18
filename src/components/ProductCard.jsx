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
        className="group hover:border-b-2 hover:border-navy"
      >
        <img
          src={product.image.url}
          alt={product.title}
          className="h-96 w-full transform rounded-md object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="my-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold">{product.title}</h3>
            <p>{priceFormatter(discount)}</p>
          </div>
          {price > discount && <OnSaleTag />}
        </div>
      </Link>
    </div>
  );
}
