export const createWhatsappUrl = (whatsappNumber: string, message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
