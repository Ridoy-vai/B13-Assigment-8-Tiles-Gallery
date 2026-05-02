export const getProductsByCategory = async (slug) => {
  const res = await fetch('/products.json', {
    cache: 'no-store',
  });

  const products = await res.json();

   "all" 
  if (slug === 'all') return products;

  // category filter
  return products.filter(product => 
    product.category.toLowerCase() === slug.toLowerCase()
  );
};