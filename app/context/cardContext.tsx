import { createContext, ReactNode, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: String) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
export const CartProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  console.log(cart);
  console.log(cart);
  const addToCart = (item: CartItem) => {
    setCart((prevCart): any => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
