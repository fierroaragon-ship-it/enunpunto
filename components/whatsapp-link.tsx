import { contactConfig } from "@/config/contact";
import type { Locale } from "@/lib/routes";

export function WhatsAppLink({ locale }: { locale: Locale }) {
  if (!contactConfig.whatsappNumber) return null;

  const message =
    locale === "en"
      ? "Hello, I would like information about property care services."
      : "Hola, me gustaría recibir información sobre los servicios de cuidado de propiedades.";
  const href = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a className="whatsapp-link" href={href} target="_blank" rel="noreferrer">
      WhatsApp
    </a>
  );
}
