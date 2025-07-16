import { useContext } from 'react';

import { CartContext } from '../context/CartContext/CartContext';

// Створюємо кастомний хук для зручного доступу до контексту
export const useCart = () => {
  return useContext(CartContext);
};