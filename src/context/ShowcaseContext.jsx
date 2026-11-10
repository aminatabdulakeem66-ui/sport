import React, { createContext, useContext, useState, useEffect } from 'react';

const ShowcaseContext = createContext();

const WISHLIST_STORAGE_KEY = 'sportkit_favorite_kits_v1';

export const ShowcaseProvider = ({ children }) => {
  // Clear any legacy cart data from localStorage if present
  useEffect(() => {
    try {
      localStorage.removeItem('sportkit_cart_items_v1');
    } catch (e) {
      // ignore
    }
  }, []);

  // Quick View / Kit Inspection Modal State
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Saved Favorites for showcase
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Toast notification helper
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist:', e);
    }
  }, [wishlist]);

  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage((current) => (current?.id ? null : current));
    }, 3500);
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed from saved showcase favorites`, 'info');
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`Saved ${product.name} to favorites!`, 'success');
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => wishlist.some((item) => item.id === productId);

  return (
    <ShowcaseContext.Provider
      value={{
        quickViewProduct,
        setQuickViewProduct,
        wishlist,
        toggleWishlist,
        isInWishlist,
        toastMessage,
        setToastMessage,
        showToast,
      }}
    >
      {children}
    </ShowcaseContext.Provider>
  );
};

export const useShowcase = () => {
  const context = useContext(ShowcaseContext);
  if (!context) {
    throw new Error('useShowcase must be used within a ShowcaseProvider');
  }
  return context;
};
