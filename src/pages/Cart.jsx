import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-8d12afa6e5/icons';

import { useCartStore } from '../store';
import priceFormatter from '../util/priceFormatter';

import CartItem from '../components/CartItem';
import Button from '../components/Button';

export default function Cart() {
  const navigate = useNavigate();
  const products = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const totalItems = useCartStore((state) => state.getTotalItems());
  const [checkout, setCheckout] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target));
    console.log('Shipping details: ', formData);

    // Clear cart
    useCartStore.setState({ cart: [] });
    setCheckout(true);
  };

  const handleNavigation = () => {
    navigate('/#shop');
  };

  return (
    <div id="cart-wrapper" className="w-full">
      {/* Checkout success */}
      {checkout && totalItems === 0 && (
        <section className="mt-12 flex flex-col items-center gap-6">
          <FontAwesomeIcon
            icon={byPrefixAndName.fas['badge-check']}
            className="text-9xl text-success"
          />
          <h3 className="text-4xl font-semibold text-navy">Success!</h3>
          <p className="-mb-4">Your order has been successfully placed.</p>
          <p className="mb-6">Thank you for shopping with us!</p>
          <Button style="primary" onClick={handleNavigation}>
            Shop More!
          </Button>
        </section>
      )}
      {/* Cart items */}
      {totalItems === 0 && checkout === false && (
        <section className="mt-12 flex flex-col items-center gap-6">
          <FontAwesomeIcon
            icon={byPrefixAndName.fas['cart-xmark']}
            className="text-9xl text-error"
          />
          <h3 className="text-4xl font-semibold text-navy">
            Your Cart is Empty!
          </h3>
          <p className="mb-6">
            You have no items in your cart. Add some items to get started.
          </p>
          <Button style="primary" onClick={handleNavigation}>
            Go Shopping
          </Button>
        </section>
      )}

      {totalItems > 0 && (
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
          <div className="mt-12 flex items-center gap-4">
            <FontAwesomeIcon
              className="text-2xl"
              icon={byPrefixAndName.far['cart-shopping']}
            />
            <h2 className="text-4xl font-medium text-navy">Cart Total:</h2>
            <p className="text-4xl font-semibold text-navy">
              {priceFormatter(totalPrice)}
            </p>
          </div>
        </section>
      )}
      {/* Shipping */}
      {totalItems > 0 && (
        <section id="continue-shopping" className="bg-navy">
          <div className="mx-auto flex w-full max-w-screen-lg flex-col px-4 py-24">
            <div className="flex w-full flex-col">
              <p className="mb-2 font-medium text-white">Let's get shippin'</p>
              <h2 className="text-4xl font-semibold text-cat">
                Shipping Details
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="my-12 flex w-full flex-col gap-12 sm:flex-row sm:gap-4"
            >
              <div className="w-full text-white sm:w-1/2">
                <div className="flex w-full flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="rounded border border-navy p-2"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john.doe@email.com"
                      className={`rounded border border-navy p-2`}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="street">Street</label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      placeholder="123 Tree Road"
                      className={`rounded border border-navy p-2`}
                    />
                  </div>
                  <div className="flex flex-wrap items-end gap-2">
                    <div className="flex flex-grow flex-col gap-2">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Woodsville"
                        className={`rounded border border-navy p-2`}
                      />
                    </div>
                    <div className="flex w-1/3 flex-col gap-2">
                      <label htmlFor="zip">Zip Code</label>
                      <input
                        type="number"
                        id="zip"
                        name="zip"
                        placeholder="4819"
                        className={`w-full rounded border border-navy p-2`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full text-white sm:w-1/2">
                {/* Credit card form */}

                <div className="flex w-full flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="card">Credit Card Number</label>
                    <input
                      type="text"
                      id="card"
                      name="card"
                      placeholder="1234 5678 9101 1121"
                      className={`rounded border border-navy p-2 text-black`}
                    />
                  </div>
                  <div className="flex flex-wrap items-end gap-2">
                    <div className="flex flex-grow flex-col gap-2">
                      <label htmlFor="expiry">Expiry Date</label>
                      <input
                        type="date"
                        id="expiry"
                        name="expiry"
                        placeholder="MM/YY"
                        className={`rounded border border-navy p-2 text-black`}
                      />
                    </div>
                    <div className="flex w-1/3 flex-col gap-2">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="number"
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        className={`w-full rounded border border-navy p-2 text-black`}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-12 w-full rounded border border-white bg-cat py-2 font-semibold text-navy"
                >
                  Pay & Checkout
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}
