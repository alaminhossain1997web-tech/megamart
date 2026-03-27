import React, { createContext, useContext, useEffect, useState } from "react";
import { useAddCartMutation } from "./api";
import { getStoredSession } from "./auth";

const CART_STORAGE_KEY = "megamart-cart";
const CartContext = createContext(null);

const getStoredCart = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const rawCart = window.localStorage.getItem(CART_STORAGE_KEY);
    return rawCart ? JSON.parse(rawCart) : [];
  } catch {
    return [];
  }
};

const normalizeProduct = (product) => ({
  id: product?.id,
  title: product?.title ?? "Product",
  price: Number(product?.price ?? 0),
  thumbnail: product?.thumbnail ?? product?.images?.[0] ?? "",
  brand: product?.brand ?? "",
  stock: product?.stock ?? 0,
  category: product?.category ?? "",
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => getStoredCart());
  const [statusMessage, setStatusMessage] = useState("");
  const [addCart] = useAddCartMutation();

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (!statusMessage) {
      return undefined;
    }

    const timer = window.setTimeout(() => setStatusMessage(""), 2600);
    return () => window.clearTimeout(timer);
  }, [statusMessage]);

  const syncRemoteCart = async (items) => {
    try {
      const session = getStoredSession();
      const userId = session?.id ?? 1;

      await addCart({
        userId,
        products: items.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      }).unwrap();
    } catch {
      setStatusMessage("Cart saved locally. Remote cart sync is unavailable right now.");
    }
  };

  const addItem = async (product, quantity = 1) => {
    const normalizedProduct = normalizeProduct(product);
    if (!normalizedProduct.id) {
      return;
    }

    let nextCartItems = [];

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === normalizedProduct.id);

      if (existingItem) {
        nextCartItems = currentItems.map((item) =>
          item.id === normalizedProduct.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        nextCartItems = [...currentItems, { ...normalizedProduct, quantity }];
      }

      return nextCartItems;
    });

    setStatusMessage("Item added to cart.");
    await syncRemoteCart(nextCartItems);
  };

  const updateQuantity = async (productId, nextQuantity) => {
    let nextCartItems = [];

    setCartItems((currentItems) => {
      if (nextQuantity <= 0) {
        nextCartItems = currentItems.filter((item) => item.id !== productId);
      } else {
        nextCartItems = currentItems.map((item) =>
          item.id === productId ? { ...item, quantity: nextQuantity } : item
        );
      }

      return nextCartItems;
    });

    await syncRemoteCart(nextCartItems);
  };

  const removeItem = async (productId) => {
    let nextCartItems = [];

    setCartItems((currentItems) => {
      nextCartItems = currentItems.filter((item) => item.id !== productId);
      return nextCartItems;
    });

    setStatusMessage("Item removed from cart.");
    await syncRemoteCart(nextCartItems);
  };

  const clearCart = async () => {
    setCartItems([]);
    setStatusMessage("Cart cleared.");
    await syncRemoteCart([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length ? 15 : 0;
  const total = subtotal + shipping;

  const value = {
    cartItems,
    cartCount,
    subtotal,
    shipping,
    total,
    statusMessage,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
