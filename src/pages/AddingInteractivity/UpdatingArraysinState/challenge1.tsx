import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  count: number;
}

const initialProducts: Product[] = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleIncreaseClick = (productId: number) => {
    setProducts(products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1,
        };
      } else {
        return product;
      }
    }));
  };

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button onClick={() => handleIncreaseClick(product.id)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingCart;