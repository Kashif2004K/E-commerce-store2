const API_URL = "http://localhost:3000/api/products";

export const getProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(response.error);
  }
  return response.json();
};
