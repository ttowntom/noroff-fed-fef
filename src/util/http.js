import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

const url = 'https://v2.api.noroff.dev/online-shop';

export async function getProducts() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`${response?.message || 'Failed to fetch data'}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`${url}/${id}`);

    if (!response.ok) {
      throw new Error(`${response?.message || 'Failed to fetch product data'}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
