export const getProductsByCategory = async (slug) => {
  const res = await fetch('http://localhost:3000/products.json', {
    cache: 'no-store',
  });

  const products = await res.json();

  // যদি "all" হয় → সব return করবে
  if (slug === 'all') return products;

  // না হলে category filter করবে
  return products.filter(product => 
    product.category.toLowerCase() === slug.toLowerCase()
  );
};