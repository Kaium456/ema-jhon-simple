import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Product from '../product/product.js';
import Cart from '../Cart/cart.js';

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProduct] = useState(first10);
  const [cart, setCart] = useState([]);
 
  const handleAddProduct = (product) => {
    console.log('product add', product);
    const newCart = [...cart,product]
    setCart(newCart)
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            handleAddProduct={handleAddProduct}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
          <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
