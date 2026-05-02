export const getProducts = async () => {
  // const res = await fetch(`${process.env.BETTER_AUTH_URL}/products.json`, {
  //   cache: 'no-store',
  // });

  return [
    {
      "id": "tile_001",
      "title": "Carrara White Marble Tile",
      "description": "Elegant white marble with subtle grey veining for a luxurious look.",
      "image": "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=800",
      "category": "Marble",
      "price": 85.50,
      "currency": "USD",
      "dimensions": "60x120 cm",
      "material": "Natural Marble",
      "inStock": true
    },
    {
      "id": "tile_002",
      "title": "Rustic Oak Wood-Look Tile",
      "description": "Durable porcelain tile with a realistic oak wood grain texture.",
      "image": "https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&q=80&w=800",
      "category": "Porcelain",
      "price": 32.99,
      "currency": "USD",
      "dimensions": "20x120 cm",
      "material": "Porcelain",
      "inStock": true
    },
    {
      "id": "tile_003",
      "title": "Moroccan Patterned Cement Tile",
      "description": "Handcrafted-style cement tiles with intricate blue and white patterns.",
      "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      "category": "Ceramic",
      "price": 12.50,
      "currency": "USD",
      "dimensions": "20x20 cm",
      "material": "Cement/Ceramic",
      "inStock": true
    },
    {
      "id": "tile_004",
      "title": "Industrial Grey Concrete Tile",
      "description": "Modern matte finish concrete look, perfect for loft-style interiors.",
      "image": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
      "category": "Concrete",
      "price": 28.00,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Full Body Porcelain",
      "inStock": true
    },
    {
      "id": "tile_005",
      "title": "Emerald Green Zellige Tile",
      "description": "Glossy Moroccan-style tiles with unique variations in color and texture.",
      "image": "https://images.unsplash.com/photo-1595113340145-5829d3bd0d40?auto=format&fit=crop&q=80&w=800",
      "category": "Marble",
      "price": 45.00,
      "currency": "USD",
      "dimensions": "10x10 cm",
      "material": "Clay",
      "inStock": false
    },
    {
      "id": "tile_006",
      "title": "Nero Marquina Black Marble",
      "description": "Deep black marble with striking white veins, ideal for accent walls.",
      "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
      "category": "Porcelain",
      "price": 95.00,
      "currency": "USD",
      "dimensions": "60x60 cm",
      "material": "Natural Stone",
      "inStock": true
    },
    {
      "id": "tile_007",
      "title": "Classic White Subway Tile",
      "description": "Traditional high-gloss beveled edge tiles for kitchen backsplashes.",
      "image": "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800",
      "category": "Marble",
      "price": 15.75,
      "currency": "USD",
      "dimensions": "7.5x15 cm",
      "material": "Ceramic",
      "inStock": true
    },
    {
      "id": "tile_008",
      "title": "Terrazzo Multi-Color Flakes",
      "description": "Trendy terrazzo tiles with a mix of marble and glass fragments.",
      "image": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800",
      "category": "Ceramic",
      "price": 55.20,
      "currency": "USD",
      "dimensions": "40x40 cm",
      "material": "Composite",
      "inStock": true
    },
    {
      "id": "tile_009",
      "title": "Travertine Beige Stone Tile",
      "description": "Natural pitted texture with a warm beige tone for outdoor patios.",
      "image": "https://images.unsplash.com/photo-1523413555809-0fb8a4a2c707?auto=format&fit=crop&q=80&w=800",
      "category": "Porcelain",
      "price": 42.00,
      "currency": "USD",
      "dimensions": "30x60 cm",
      "material": "Travertine",
      "inStock": true
    },
    {
      "id": "tile_010",
      "title": "Calacatta Gold Porcelain",
      "description": "High-end porcelain alternative to marble with gold and grey veins.",
      "image": "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=800",
      "category": "Porcelain",
      "price": 68.00,
      "currency": "USD",
      "dimensions": "80x80 cm",
      "material": "Porcelain",
      "inStock": true
    },
    {
      "id": "tile_011",
      "title": "Hexagon Carrara Mosaic",
      "description": "Small hexagonal marble pieces mesh-mounted for easy installation.",
      "image": "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
      "category": "Marble",
      "price": 18.90,
      "currency": "USD",
      "dimensions": "30x30 cm Sheet",
      "material": "Marble",
      "inStock": true
    },
    {
      "id": "tile_012",
      "title": "Slate Anthracite Floor Tile",
      "description": "Dark, textured natural slate for a rugged and modern floor finish.",
      "image": "https://images.unsplash.com/photo-1534349762230-e0cadf78f505?auto=format&fit=crop&q=80&w=800",
      "category": "Ceramic",
      "price": 38.50,
      "currency": "USD",
      "dimensions": "30x30 cm",
      "material": "Natural Slate",
      "inStock": true
    },
    {
      "id": "tile_013",
      "title": "Ocean Blue Glass Mosaic",
      "description": "Shimmering glass tiles perfect for swimming pools and bathrooms.",
      "image": "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=800",
      "category": "Porcelain",
      "price": 22.00,
      "currency": "USD",
      "dimensions": "30x30 cm Sheet",
      "material": "Glass",
      "inStock": true
    },
    {
      "id": "tile_014",
      "title": "Sandstone Outdoor Paver",
      "description": "Non-slip, weather-resistant sandstone for garden walkways.",
      "image": "https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?auto=format&fit=crop&q=80&w=800",
      "category": "Marble",
      "price": 25.00,
      "currency": "USD",
      "dimensions": "40x60 cm",
      "material": "Natural Sandstone",
      "inStock": true
    },
    {
      "id": "tile_015",
      "title": "Art Deco Geometric Tile",
      "description": "Bold geometric patterns for a vintage 1920s aesthetic.",
      "image": "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?auto=format&fit=crop&q=80&w=800",
      "category": "Porcelain",
      "price": 48.00,
      "currency": "USD",
      "dimensions": "25x25 cm",
      "material": "Ceramic",
      "inStock": true
    }
  ];
  // return await res.json();
};









// export const getProductsByCategory = async (slug) => {
//   const res = await fetch('http://localhost:3000/products.json', {
//     cache: 'no-store',
//   });

//   const products = await res.json();

//    "all"
//   if (slug === 'all') return products;

//   // category filter
//   return products.filter(product =>
//     product.category.toLowerCase() === slug.toLowerCase()
//   );
// };