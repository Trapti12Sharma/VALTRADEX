import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappChatButton = () => {
  const phoneNumber = "919876543210"; // ✅ Replace with your official WhatsApp number (no + or spaces)
  const message = "Hello! I’d like to know more about Valtradex services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20b358] text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsappChatButton;
