import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  getTotalPrice: () => {
    return useCartStore
      .getState()
      .cart.reduce((acc, product) => acc + product.price, 0);
  },
  getTotalItems: () => {
    return useCartStore.getState().cart.length;
  },
}));
