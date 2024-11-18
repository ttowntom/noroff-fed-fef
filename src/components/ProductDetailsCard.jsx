import discountCalculator from '../util/discountCalculator';
import priceFormatter from '../util/priceFormatter';

import Button from './Button';
import CategoryTag from './CategoryTag';
import RatingStar from './RatingStar';

export default function ProductDetailsCard({ product }) {
  const discount = discountCalculator(product);

  return (
    <div className="mx-auto flex w-full max-w-screen-lg flex-col px-4 pb-4 sm:flex-row">
      <div className="w-full p-6 sm:w-1/2">
        <img
          src={product.image.url}
          alt={product.name}
          className="w-full rounded-md"
        />
      </div>
      <div className="flex w-full flex-col gap-6 p-6 sm:w-1/2">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex items-center gap-4 pr-6 lg:border-r-[1px] lg:border-navy">
            <p className="text-xl font-bold">
              {priceFormatter(product.discountedPrice)}
            </p>
            {discount > 0 && (
              <div>
                <p className="text-sm text-gray-500 line-through">
                  {priceFormatter(product.price)}
                </p>
                <p className="text-sm text-green-500">
                  Save {priceFormatter(discount)}
                </p>
              </div>
            )}
          </div>
          <RatingStar product={product} />
        </div>
        <p className="text-lg">{product.description}</p>
        <Button style="primary">Add to Cart</Button>
        <div>
          <p className="mb-2 text-sm">Tags</p>
          <div className="flex gap-2 text-sm">
            {product.tags.map((tag) => (
              <CategoryTag key={tag} category={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
