// export const getProducts = async () => {
//   const res = await fetch('/products.json');
//   return await res.json();
// };

export const getProducts = async () => {
  const res = await fetch('http://localhost:3000/products.json', {
    cache: 'no-store',
  });

  return res.json();
};