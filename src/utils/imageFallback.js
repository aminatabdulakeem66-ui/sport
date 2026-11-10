// Reliable SVG fallback for jerseys, balls and football scenes if network drops
export const DEFAULT_PRODUCT_FALLBACK = "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=800&auto=format&fit=crop";

export const handleImageError = (e, fallback = DEFAULT_PRODUCT_FALLBACK) => {
  if (e.target.src !== fallback) {
    e.target.onerror = null;
    e.target.src = fallback;
  }
};
