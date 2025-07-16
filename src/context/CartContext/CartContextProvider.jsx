import { useState } from 'react';

import { CartContext } from './CartContext';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Функція для додавання товару в кошик
  const addToCart = (product) => {
    // Тут можна додати більш складну логіку (напр. перевірка, чи товар вже є)
    setCartItems(prevItems => [...prevItems, product]);
    console.log(`${product.name} додано до кошика!`);
  };

  // Функція для видалення товару (може знадобитися в майбутньому)
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // 3. Значення, яке буде доступне всім дочірнім компонентам
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    // Можна додати й інші дані, наприклад, загальну вартість
    cartCount: cartItems.length,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}