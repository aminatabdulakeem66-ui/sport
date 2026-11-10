import { formatCurrency } from './formatters';

export const OFFICIAL_PHONE = "07012952924";
export const OFFICIAL_WHATSAPP_NUMBER = "2347012952924";
export const OFFICIAL_EMAIL = "aminatabdulakeem66@gmail.com";
export const OFFICIAL_WHATSAPP_URL = `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}`;

/**
 * Builds direct quick WhatsApp enquiry link for a single football kit
 */
export const generateProductWhatsAppUrl = (product, selectedSize = "M") => {
  const priceText = product.price ? ` | Reference Price: ${formatCurrency(product.price)}` : '';
  const text = `Hello SPORT KIT! I am enquiring about the *${product.name}* (Club: ${product.club}, Size: *${selectedSize}*${priceText}). Could you please share more details and availability?`;
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

/**
 * Builds direct WhatsApp enquiry link for custom jersey personalisation
 */
export const generateCustomJerseyWhatsAppUrl = ({ customName, customNumber, colorway, size, patchOption, price }) => {
  const text = `*CUSTOM JERSEY ENQUIRY - SPORT KIT*\n` +
    `• Colorway: ${colorway || 'SPORT KIT Heritage'}\n` +
    `• Custom Name: *${customName?.toUpperCase() || 'PLAYER'}*\n` +
    `• Custom Squad Number: *${customNumber || '10'}*\n` +
    `• Size: *${size || 'L'}*\n` +
    `• Sleeve Badge: *${patchOption?.toUpperCase() || 'NONE'}*\n` +
    (price ? `• Guide Price: *${formatCurrency(price)}*\n\n` : `\n`) +
    `Hello SPORT KIT! I would like to enquire about getting this custom personalised jersey created. Please confirm turnaround time and availability!`;
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

/**
 * Direct general WhatsApp chat URL
 */
export const getGeneralWhatsAppUrl = () => {
  const text = `Hello SPORT KIT! I would like to make an enquiry about your football sportswear showcase, club collections, and jersey availability.`;
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
