import { useQuery } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-8d12afa6e5/icons';

import { getProducts } from '../util/http';

import Button from '../components/Button';
import Callout from '../components/Callout';
import Feature from '../components/Feature';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return (
    <div className="w-full">
      <section
        id="hero"
        className="mx-auto flex w-full max-w-screen-lg flex-col px-4 pb-4 sm:flex-row"
      >
        <div className="flex w-full flex-col gap-10 py-6 sm:w-1/2">
          <h1 className="text-5xl font-medium">
            Discover Your Next Favorite Product Today!
          </h1>
          <p>
            At ShopLyst, we bring you an extensive range of products tailored to
            your needs. Explore our latest promotions and find exactly what
            you're looking for with ease.
          </p>
          <div className="flex gap-4">
            <Button style="primary">
              <a href="#shop">Shop</a>
            </Button>
            <Button>
              <a href="#discover">Learn More</a>
            </Button>
          </div>
        </div>
        <div className="w-full sm:w-1/2"></div>
      </section>

      {/* Testimonial */}
      <Callout>
        <div className="flex flex-col text-center">
          <h2 className="invisible">Testimonial</h2>
          <p className="font-bold text-cat">
            "Shoplyst has transformed my shopping experience completely!"
          </p>
          <img
            src="https://www.fakepersongenerator.com/Face/female/female201410239383418.jpg"
            alt="Jane Doe"
            className="mx-auto my-6 h-14 w-14 rounded-full"
          />
          <p className="-mb-1 font-medium">Jane Doe</p>
          <p>Happy Customer</p>
        </div>
      </Callout>

      {/* Shop */}
      <section id="shop" className="mx-auto w-full max-w-screen-lg px-4 py-24">
        <div className="w-1/2">
          <p className="text-sm font-semibold">Splurge</p>
          <h2 className="my-4 py-0 text-4xl font-medium text-navy">Products</h2>
          <p>
            Discover the latest products from top brands across various
            categories. Shop for electronics, home goods, and more with ease.
          </p>
        </div>
        {/* Render products */}
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error: {error.message}</div>}
        {data && (
          <div className="my-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Discover */}
      <Callout>
        <div id="discover" className="flex flex-col text-center">
          <h2>Discover</h2>
          <p className="my-2 text-3xl font-bold text-cat">
            Unleash Your Shopping Experience with Shoplyst
          </p>
          <p className="mx-auto max-w-xl text-center">
            At Shoplyst, we offer an extensive range of products to meet all
            your needs. Enjoy a seamless shopping experience with fast shipping
            and top-notch customer service.
          </p>
        </div>
        <div className="mx-auto mt-24 flex flex-col content-center justify-center gap-10 sm:flex-row sm:gap-6">
          <Feature
            title="Explore Our Extensive Product Range"
            desc="From electronics to home goods, we have it all."
            icon="basket-shopping"
          />
          <Feature
            title="Experience Lightning-Fast Shipping"
            desc="Get your orders delivered right to your door in no time."
            icon="truck-fast"
          />
          <Feature
            title="Count on Our Exceptional Customer Service"
            desc="Our dedicated team is here to assist you every step of the way."
            icon="comments-question-check"
          />
        </div>
        <p className="mt-32 flex justify-center gap-4 text-center">
          <a className="hover:text-cat" href="#shop">
            Shop now
          </a>{' '}
          <span>
            <FontAwesomeIcon
              className="text-white hover:text-white"
              icon={byPrefixAndName.fas[`angle-right`]}
            />
          </span>
        </p>
      </Callout>
    </div>
  );
}
