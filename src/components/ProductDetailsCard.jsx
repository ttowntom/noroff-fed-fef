import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import discountCalculator from '../util/discountCalculator';
import priceFormatter from '../util/priceFormatter';
import { useCartStore } from '../store';

import Button from './Button';
import CategoryTag from './CategoryTag';
import RatingStar from './RatingStar';
import ReviewsRenderer from './ReviewsRenderer';

export default function ProductDetailsCard({ product }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    const productObj = {
      id: product.id,
      title: product.title,
      price: product.discountedPrice,
      image: product.image.url,
    };
    addToCart(productObj);
    setAddedToCart(true);
  };

  const discount = discountCalculator(product);

  return (
    <>
      <section
        id="product-details"
        className="mx-auto flex w-full max-w-screen-lg flex-col px-4 pb-4 sm:flex-row"
      >
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
          <Button onClick={handleAddToCart} style="primary" grow="true">
            Add to Cart
          </Button>
          {addedToCart && (
            <p className="text-center text-success">
              The product was added to your{' '}
              <NavLink className="font-semibold underline" to="/cart">
                cart
              </NavLink>
              !
            </p>
          )}
          <div>
            <p className="mb-2 text-sm">Tags</p>
            <div className="flex gap-2 text-sm">
              {product.tags.map((tag) => (
                <CategoryTag key={tag} category={tag} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="reviews" className="bg-cat">
        <div className="mx-auto w-full max-w-screen-lg px-4 py-24">
          <h2 className="my-4 py-0 text-4xl font-medium text-navy">
            Customer Reviews
          </h2>
          <p className="mb-12">
            Don't take it from us - here's what our customers say about this
            product.
          </p>
          <ReviewsRenderer reviewsArr={product.reviews} />
        </div>
      </section>
      <section id="continue-shopping" className="bg-navy">
        <div className="mx-auto w-full max-w-screen-lg px-4 py-24 text-center">
          <h2 className="my-4 py-0 text-4xl font-semibold text-cat">
            Continue Shopping for More Deals
          </h2>
          <p className="mb-12 text-white">
            Explore our wide selection of products and find exactly what you
            need today!
          </p>

          <NavLink to="/#shop">
            <Button inverse="true">Shop Now</Button>
          </NavLink>
        </div>
      </section>
    </>
  );
}

export function ProductDetailsSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-screen-lg flex-col px-4 pb-4 sm:flex-row">
      <div className="w-full p-6 sm:w-1/2">
        <div className="h-[400px] animate-pulse rounded-md bg-gray-300"></div>
      </div>
      <div className="flex w-full flex-col gap-6 p-6 sm:w-1/2">
        <div className="h-12 w-3/4 animate-pulse rounded-md bg-gray-300"></div>
        <div className="h-8 w-1/3 animate-pulse rounded-md bg-gray-300"></div>
        <div className="mt-6 h-6 w-full animate-pulse rounded-md bg-gray-200"></div>
        <div className="-mt-2 h-6 w-full animate-pulse rounded-md bg-gray-200"></div>
        <div className="-mt-2 h-6 w-2/3 animate-pulse rounded-md bg-gray-200"></div>
        <div className="mt-4 h-12 w-3/4 animate-pulse rounded-md bg-gray-300"></div>
      </div>
    </div>
  );
}
