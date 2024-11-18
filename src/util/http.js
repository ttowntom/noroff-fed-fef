const url = 'https://v2.api.noroff.dev/online-shop';

export async function getProducts() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.message}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
