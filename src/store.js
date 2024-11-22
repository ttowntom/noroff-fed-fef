import { create } from 'zustand';
import { saveLocal, loadLocal } from '../src/util/localStorage';

const initialCart = loadLocal('cart') || [];

export const useCartStore = create((set, get) => ({
  cart: initialCart,

  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      const updatedCart = existingProduct
        ? state.cart.map((item) =>
            item.id === product.id ? { ...item, amount: item.amount + 1 } : item
          )
        : [...state.cart, { ...product, amount: 1 }];

      saveLocal('cart', updatedCart);
      return { cart: updatedCart };
    }),

  decrementFromCart: (productId) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === productId);

      if (!existingProduct) return state;

      const updatedCart =
        existingProduct.amount === 1
          ? state.cart.filter((item) => item.id !== productId)
          : state.cart.map((item) =>
              item.id === productId
                ? { ...item, amount: item.amount - 1 }
                : item
            );

      saveLocal('cart', updatedCart);
      return { cart: updatedCart };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== productId);
      saveLocal('cart', updatedCart);
      return { cart: updatedCart };
    }),

  getTotalPrice: () => {
    return get().cart.reduce((acc, item) => acc + item.price * item.amount, 0);
  },

  getTotalItems: () => {
    return get().cart.reduce((acc, item) => acc + item.amount, 0);
  },
}));
