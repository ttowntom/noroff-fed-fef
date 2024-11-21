import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, amount: item.amount + 1 } : item
          ),
        };
      }

      return {
        cart: [...state.cart, { ...product, amount: 1 }],
      };
    }),

  decrementFromCart: (productId) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === productId);

      if (!existingProduct) return state;

      if (existingProduct.amount === 1) {
        return {
          cart: state.cart.filter((item) => item.id !== productId),
        };
      }

      return {
        cart: state.cart.map((item) =>
          item.id === productId ? { ...item, amount: item.amount - 1 } : item
        ),
      };
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  getTotalPrice: () => {
    return useCartStore
      .getState()
      .cart.reduce((acc, item) => acc + item.price * item.amount, 0);
  },

  getTotalItems: () => {
    return useCartStore
      .getState()
      .cart.reduce((acc, item) => acc + item.amount, 0);
  },
}));
