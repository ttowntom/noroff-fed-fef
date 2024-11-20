import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-8d12afa6e5/icons';

import { useCartStore } from '../store';
import priceFormatter from '../util/priceFormatter';

import CartItem from '../components/CartItem';

export default function Cart() {
  const products = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <div id="cart-wrapper" className="w-full">
      {/* Cart items */}
      <section
        id="cart-items"
        className="mx-auto flex w-full max-w-screen-lg flex-col px-4 pb-12 pt-6"
      >
        <div className="flex w-full flex-col gap-4">
          <h1 className="text-5xl font-semibold text-navy">
            Your Shopping Cart
          </h1>
          <p>Review your selected items and proceed to checkout.</p>
        </div>
        <div className="mt-12">
          <p className="mb-2 font-medium">Cart</p>
          <h2 className="text-4xl font-medium text-navy">Your Items</h2>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          {products.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4">
          <FontAwesomeIcon
            className="text-2xl"
            icon={byPrefixAndName.far['cart-shopping']}
          />
          <h2 className="text-4xl font-medium text-navy">Cart Total:</h2>
          <p className="text-4xl font-medium text-navy underline">
            {priceFormatter(totalPrice)}
          </p>
        </div>
      </section>
      {/* Shipping */}
      <section id="continue-shopping" className="bg-navy">
        <div className="mx-auto flex w-full max-w-screen-lg flex-col px-4 py-24 sm:flex-row">
          <div className="my-4 w-full py-0 sm:w-1/2">
            <p className="mb-2 font-medium text-white">Let's get shippin'</p>
            <h2 className="text-4xl font-semibold text-cat">
              Shipping Details
            </h2>
          </div>
          <div className="w-full text-white sm:w-1/2">
            Have questions or need assistance? Reach out to us anytime, and our
            dedicated team will be happy to assist you with any inquiries or
            feedback.
          </div>
        </div>
      </section>
    </div>
  );
}
