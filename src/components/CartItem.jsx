import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-8d12afa6e5/icons';

import { useCartStore } from '../store';
import priceFormatter from '../util/priceFormatter';

export default function CartItem(product) {
  const { id, title, price, image, amount } = product;
  const { decrementFromCart, removeFromCart, addToCart } = useCartStore();
  const priceTotal = price * amount;

  return (
    <div className="relative flex w-full flex-col gap-4 rounded-sm border border-navy p-4 xsm:flex-row">
      <button
        onClick={() => removeFromCart(id)}
        className="absolute right-4 top-4"
      >
        <FontAwesomeIcon
          className="text-2xl hover:text-error"
          icon={byPrefixAndName.fas['trash-xmark']}
        />
      </button>
      <img
        className="h-32 w-32 rounded-md object-cover"
        src={image}
        alt={title}
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-navy">{title}</h3>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <p className="font-medium">Quantity:</p>
            <button onClick={() => decrementFromCart(id)}>
              <FontAwesomeIcon
                className="hover:text-cat"
                icon={byPrefixAndName.fas['circle-minus']}
              />
            </button>
            <span>{amount}</span>
            <button onClick={() => addToCart(product)}>
              <FontAwesomeIcon
                className="hover:text-cat"
                icon={byPrefixAndName.fas['circle-plus']}
              />
            </button>
          </div>
          <p className="font-medium">
            Price:{' '}
            <span className="font-normal">{priceFormatter(priceTotal)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
