import { serviceAreas } from "@/config/service-areas";
import { imageSet } from "@/content/shared";
import { PageKey, pathFor, type Locale } from "@/lib/routes";

type ServiceKey = "propertyCare" | "smartLiving" | "seniorSafeHomes" | "maintenance";

type LocalizedContent = {
  locale: Locale;
  nav: { label: string; page: PageKey }[];
  ctaLabel: string;
  switchLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    line: string;
  };
  trust: string[];
  problem: { title: string; text: string };
  servicesTitle: string;
  servicesIntro: string;
  services: Record<ServiceKey, { title: string; text: string; link: string; image: string }>;
  how: { title: string; steps: { title: string; text: string }[] };
  propertyTypes: { title: string; items: string[] };
  technology: { title: string; text: string };
  senior: { title: string; text: string };
  areas: { title: string; note: string; items: string[] };
  work: { title: string; note: string; items: string[] };
  finalCta: { title: string; text: string; button: string };
  about: { title: string; text: string };
  form: {
    title: string;
    text: string;
    submit: string;
    sending: string;
    success: string;
    required: string;
    privacy: string;
    labels: Record<string, string>;
    serviceOptions: string[];
  };
  privacy: { title: string; text: string; sections: { title: string; text: string }[] };
  pages: Record<PageKey, { title: string; description: string; intro: string }>;
};

const enServices = {
  propertyCare: {
    title: "Property Care",
    text: "Scheduled inspections, preventive reviews, property preparation and documented follow-up while you are away.",
    link: "View property care",
    image: imageSet.service,
  },
  smartLiving: {
    title: "Smart Living",
    text: "Thoughtfully integrated lighting, climate, access, connectivity, sensors and remote control systems.",
    link: "View smart living",
    image: imageSet.technology,
  },
  seniorSafeHomes: {
    title: "Senior-Safe Homes",
    text: "Practical home improvements that support safer, more comfortable and independent living.",
    link: "View senior-safe homes",
    image: imageSet.senior,
  },
  maintenance: {
    title: "Maintenance & Response",
    text: "Preventive maintenance, diagnostics, repairs and reliable coordination with local specialists.",
    link: "View maintenance",
    image: imageSet.maintenance,
  },
};

const esServices = {
  propertyCare: {
    title: "Cuidado de propiedades",
    text: "Inspecciones programadas, revisiones preventivas, preparación del inmueble y seguimiento documentado durante tu ausencia.",
    link: "Ver cuidado de propiedades",
    image: imageSet.service,
  },
  smartLiving: {
    title: "Hogar inteligente",
    text: "Iluminación, clima, accesos, conectividad, sensores y sistemas de control remoto cuidadosamente integrados.",
    link: "Ver hogar inteligente",
    image: imageSet.technology,
  },
  seniorSafeHomes: {
    title: "Hogares seguros para adultos mayores",
    text: "Mejoras prácticas para crear viviendas más seguras, cómodas y adecuadas para una vida independiente.",
    link: "Ver hogares seguros",
    image: imageSet.senior,
  },
  maintenance: {
    title: "Mantenimiento y respuesta",
    text: "Mantenimiento preventivo, diagnóstico, reparaciones y coordinación confiable con especialistas locales.",
    link: "Ver mantenimiento",
    image: imageSet.maintenance,
  },
};

export const content: Record<Locale, LocalizedContent> = {
  en: {
    locale: "en",
    nav: [
      { label: "Services", page: "services" },
      { label: "How It Works", page: "howItWorks" },
      { label: "Service Areas", page: "serviceAreas" },
      { label: "About", page: "about" },
      { label: "Contact", page: "contact" },
    ],
    ctaLabel: "Request an Assessment",
    switchLabel: "Change language",
    hero: {
      eyebrow: "PROPERTY CARE · SMART LIVING · LOCAL SUPPORT",
      title: "Your property, cared for wherever you are.",
      text: "Professional property maintenance, smart home solutions and reliable local support across Riviera Maya and Huatulco.",
      primary: "Request a Property Assessment",
      secondary: "Explore Our Services",
      line: "Property Care · Smart Home · Senior Safety · Maintenance",
    },
    trust: ["Bilingual support", "Documented visits", "Trusted local coordination", "Remote visibility"],
    problem: {
      title: "Owning property should not feel uncertain.",
      text: "When you cannot be there in person, small problems can quickly become expensive ones. ENUNPUNTO provides the local presence, documentation and technical support needed to keep your property protected, functional and ready.",
    },
    servicesTitle: "Services shaped around the property.",
    servicesIntro: "Care, maintenance and technology are planned together so the home remains understandable, functional and ready.",
    services: enServices,
    how: {
      title: "How it works",
      steps: [
        { title: "Assessment", text: "We review the property, priorities and current conditions." },
        { title: "Care Plan", text: "We prepare a clear proposal based on your actual needs." },
        { title: "Ongoing Support", text: "We carry out the work, document progress and remain available." },
      ],
    },
    propertyTypes: {
      title: "Properties we support",
      items: ["Second homes", "Vacation residences", "Condominiums", "Rental properties", "Retirement homes", "Family residences"],
    },
    technology: {
      title: "Technology should protect the home, not take it over.",
      text: "We integrate technology around the way people actually live. Every system should be understandable, reliable and useful without making the property feel complicated.",
    },
    senior: {
      title: "A safer home without losing independence.",
      text: "Thoughtful lighting, access, connectivity and practical adaptations can reduce everyday risks while preserving comfort and independence.",
    },
    areas: {
      title: "Service areas",
      note: "Additional locations may be evaluated based on project scope.",
      items: serviceAreas,
    },
    work: {
      title: "Selected Work",
      note: "A configurable structure for real projects. Client names, figures, locations and results will be added only when confirmed.",
      items: ["Property connectivity upgrade", "Remote access installation", "Preventive property review", "Residential maintenance coordination"],
    },
    finalCta: {
      title: "Your property deserves a reliable local presence.",
      text: "Tell us where your property is and what kind of support you need.",
      button: "Request an Assessment",
    },
    about: {
      title: "About ENUNPUNTO",
      text: "ENUNPUNTO brings together property care, practical maintenance and thoughtfully integrated technology. Our work is built around a simple idea: homeowners should be able to understand what is happening in their property and rely on a local team when they cannot be there themselves.",
    },
    form: {
      title: "Request a property assessment",
      text: "Share the basic details and we will review the best next step. This review build uses a simulated confirmation until CONTACT_FORM_PROVIDER is configured.",
      submit: "Send request",
      sending: "Sending...",
      success: "Review mode: your request was validated locally. Real delivery is pending contact provider configuration.",
      required: "This field is required.",
      privacy: "I agree to be contacted about my property assessment request.",
      labels: {
        name: "Full name",
        email: "Email",
        phone: "Phone or WhatsApp",
        language: "Preferred language",
        location: "Property location",
        type: "Property type",
        occupancy: "Current occupancy",
        service: "Service needed",
        contactMethod: "Preferred contact method",
        message: "Message",
      },
      serviceOptions: ["Property care", "Smart home", "Maintenance", "Senior-safe home", "Connectivity", "Security and access", "Property assessment", "Other"],
    },
    privacy: {
      title: "Privacy Policy",
      text: "This first version is a placeholder policy structure and should be reviewed before publication.",
      sections: [
        { title: "Information collected", text: "Contact form submissions may include name, email, phone, property location and service needs." },
        { title: "Use of information", text: "Information is used only to evaluate and respond to property service requests." },
        { title: "Pending legal review", text: "Final retention, contact and legal terms must be supplied before launch." },
      ],
    },
    pages: {
      home: { title: "ENUNPUNTO | Property Care & Smart Living", description: "Professional property care, maintenance and smart home support across Riviera Maya and Huatulco.", intro: "" },
      services: { title: "Services | ENUNPUNTO", description: "Property care, smart living, senior-safe homes and maintenance services.", intro: "Four service lines designed to work together without making the property feel complicated." },
      propertyCare: { title: "Property Care | ENUNPUNTO", description: "Scheduled inspections, preventive reviews and documented property care.", intro: enServices.propertyCare.text },
      smartLiving: { title: "Smart Living | ENUNPUNTO", description: "Thoughtfully integrated residential technology for real homes.", intro: enServices.smartLiving.text },
      seniorSafeHomes: { title: "Senior-Safe Homes | ENUNPUNTO", description: "Practical home adaptations for safer independent living.", intro: enServices.seniorSafeHomes.text },
      maintenance: { title: "Maintenance & Response | ENUNPUNTO", description: "Preventive maintenance, diagnostics and local specialist coordination.", intro: enServices.maintenance.text },
      howItWorks: { title: "How It Works | ENUNPUNTO", description: "Assessment, care plan and ongoing documented support.", intro: "A clear process before work begins, during execution and after every visit." },
      serviceAreas: { title: "Service Areas | ENUNPUNTO", description: "Initial service areas in Riviera Maya, Cancun, Playa del Carmen, Puerto Morelos, Tulum and Huatulco.", intro: "Initial coverage is intentionally specific and evaluated by project scope." },
      about: { title: "About | ENUNPUNTO", description: "About ENUNPUNTO and its property care approach.", intro: "A local presence for homeowners who need clarity, care and technical support." },
      contact: { title: "Contact | ENUNPUNTO", description: "Request a property assessment from ENUNPUNTO.", intro: "Tell us where your property is and what kind of support you need." },
      privacy: { title: "Privacy | ENUNPUNTO", description: "Privacy policy structure for ENUNPUNTO.", intro: "A provisional policy structure pending final legal review." },
    },
  },
  es: {
    locale: "es",
    nav: [
      { label: "Servicios", page: "services" },
      { label: "Cómo funciona", page: "howItWorks" },
      { label: "Zonas de servicio", page: "serviceAreas" },
      { label: "Nosotros", page: "about" },
      { label: "Contacto", page: "contact" },
    ],
    ctaLabel: "Solicitar evaluación",
    switchLabel: "Cambiar idioma",
    hero: {
      eyebrow: "CUIDADO DE PROPIEDADES · HOGAR INTELIGENTE · SOPORTE LOCAL",
      title: "Tu propiedad, cuidada estés donde estés.",
      text: "Mantenimiento profesional, soluciones para hogares inteligentes y soporte local confiable en Riviera Maya y Huatulco.",
      primary: "Solicitar evaluación",
      secondary: "Conocer nuestros servicios",
      line: "Cuidado de propiedades · Hogar inteligente · Seguridad para adultos mayores · Mantenimiento",
    },
    trust: ["Atención bilingüe", "Visitas documentadas", "Coordinación local confiable", "Supervisión a distancia"],
    problem: {
      title: "Tener una propiedad no debería generar incertidumbre.",
      text: "Cuando no puedes estar presente, un problema pequeño puede convertirse rápidamente en uno costoso. ENUNPUNTO ofrece presencia local, documentación y soporte técnico para mantener tu propiedad protegida, funcional y lista.",
    },
    servicesTitle: "Servicios pensados alrededor del inmueble.",
    servicesIntro: "El cuidado, mantenimiento y la tecnología se planean juntos para que el hogar siga siendo comprensible, funcional y listo.",
    services: esServices,
    how: {
      title: "Cómo funciona",
      steps: [
        { title: "Evaluación", text: "Revisamos el inmueble, sus prioridades y condiciones actuales." },
        { title: "Plan de atención", text: "Preparamos una propuesta clara según las necesidades reales." },
        { title: "Soporte continuo", text: "Realizamos el trabajo, documentamos avances y permanecemos disponibles." },
      ],
    },
    propertyTypes: {
      title: "Tipos de propiedad",
      items: ["Segundas residencias", "Viviendas vacacionales", "Condominios", "Propiedades de renta", "Viviendas para retiro", "Residencias familiares"],
    },
    technology: {
      title: "La tecnología debe proteger el hogar, no apoderarse de él.",
      text: "Integramos tecnología alrededor de la forma en que las personas realmente viven. Cada sistema debe ser comprensible, confiable y útil, sin volver complicada la propiedad.",
    },
    senior: {
      title: "Un hogar más seguro sin perder independencia.",
      text: "La iluminación, los accesos, la conectividad y las adaptaciones prácticas pueden reducir riesgos cotidianos conservando comodidad e independencia.",
    },
    areas: {
      title: "Zonas de servicio",
      note: "Otras ubicaciones pueden evaluarse según el alcance del proyecto.",
      items: ["Riviera Maya", "Cancún", "Playa del Carmen", "Puerto Morelos", "Tulum", "Huatulco"],
    },
    work: {
      title: "Proyectos seleccionados",
      note: "Estructura configurable para proyectos reales. Clientes, cifras, ubicaciones y resultados se agregarán solo cuando estén confirmados.",
      items: ["Mejora de conectividad residencial", "Instalación de acceso remoto", "Revisión preventiva de propiedad", "Coordinación de mantenimiento residencial"],
    },
    finalCta: {
      title: "Tu propiedad merece una presencia local confiable.",
      text: "Cuéntanos dónde está tu propiedad y qué tipo de apoyo necesitas.",
      button: "Solicitar evaluación",
    },
    about: {
      title: "Nosotros",
      text: "ENUNPUNTO reúne cuidado de propiedades, mantenimiento práctico y tecnología cuidadosamente integrada. Nuestro trabajo parte de una idea sencilla: los propietarios deben poder saber qué ocurre en su inmueble y contar con un equipo local cuando no pueden estar presentes.",
    },
    form: {
      title: "Solicitar evaluación",
      text: "Comparte los datos básicos y revisaremos el siguiente paso. Esta versión de revisión usa una confirmación simulada hasta configurar CONTACT_FORM_PROVIDER.",
      submit: "Enviar solicitud",
      sending: "Enviando...",
      success: "Modo revisión: tu solicitud fue validada localmente. El envío real queda pendiente de configurar el proveedor de contacto.",
      required: "Este campo es obligatorio.",
      privacy: "Acepto que me contacten sobre mi solicitud de evaluación.",
      labels: {
        name: "Nombre completo",
        email: "Email",
        phone: "Teléfono o WhatsApp",
        language: "Idioma preferido",
        location: "Ubicación del inmueble",
        type: "Tipo de propiedad",
        occupancy: "Ocupación actual",
        service: "Servicio requerido",
        contactMethod: "Medio de contacto preferido",
        message: "Mensaje",
      },
      serviceOptions: ["Cuidado de propiedades", "Hogar inteligente", "Mantenimiento", "Hogar seguro para adultos mayores", "Conectividad", "Seguridad y accesos", "Evaluación de propiedad", "Otro"],
    },
    privacy: {
      title: "Aviso de privacidad",
      text: "Esta primera versión es una estructura provisional y debe revisarse antes de publicación.",
      sections: [
        { title: "Información recabada", text: "El formulario puede incluir nombre, email, teléfono, ubicación del inmueble y necesidades de servicio." },
        { title: "Uso de información", text: "La información se usa solo para evaluar y responder solicitudes de servicio." },
        { title: "Revisión legal pendiente", text: "Los términos finales de retención, contacto y cumplimiento legal deben proporcionarse antes del lanzamiento." },
      ],
    },
    pages: {
      home: { title: "ENUNPUNTO | Cuidado de propiedades y hogar inteligente", description: "Cuidado de propiedades, mantenimiento y soporte para hogar inteligente en Riviera Maya y Huatulco.", intro: "" },
      services: { title: "Servicios | ENUNPUNTO", description: "Cuidado de propiedades, hogar inteligente, hogares seguros y mantenimiento.", intro: "Cuatro líneas de servicio diseñadas para trabajar juntas sin complicar el inmueble." },
      propertyCare: { title: "Cuidado de propiedades | ENUNPUNTO", description: "Inspecciones programadas, revisiones preventivas y cuidado documentado.", intro: esServices.propertyCare.text },
      smartLiving: { title: "Hogar inteligente | ENUNPUNTO", description: "Tecnología residencial cuidadosamente integrada para hogares reales.", intro: esServices.smartLiving.text },
      seniorSafeHomes: { title: "Hogares seguros para adultos mayores | ENUNPUNTO", description: "Adaptaciones prácticas para una vida independiente más segura.", intro: esServices.seniorSafeHomes.text },
      maintenance: { title: "Mantenimiento y respuesta | ENUNPUNTO", description: "Mantenimiento preventivo, diagnóstico y coordinación con especialistas locales.", intro: esServices.maintenance.text },
      howItWorks: { title: "Cómo funciona | ENUNPUNTO", description: "Evaluación, plan de atención y soporte documentado continuo.", intro: "Un proceso claro antes, durante y después de cada visita." },
      serviceAreas: { title: "Zonas de servicio | ENUNPUNTO", description: "Zonas iniciales en Riviera Maya, Cancún, Playa del Carmen, Puerto Morelos, Tulum y Huatulco.", intro: "La cobertura inicial es específica y se evalúa según el alcance del proyecto." },
      about: { title: "Nosotros | ENUNPUNTO", description: "Acerca de ENUNPUNTO y su enfoque de cuidado de propiedades.", intro: "Presencia local para propietarios que necesitan claridad, cuidado y soporte técnico." },
      contact: { title: "Contacto | ENUNPUNTO", description: "Solicita una evaluación de propiedad con ENUNPUNTO.", intro: "Cuéntanos dónde está tu propiedad y qué tipo de apoyo necesitas." },
      privacy: { title: "Privacidad | ENUNPUNTO", description: "Estructura de aviso de privacidad para ENUNPUNTO.", intro: "Estructura provisional pendiente de revisión legal final." },
    },
  },
};

export const servicePageKeys: ServiceKey[] = ["propertyCare", "smartLiving", "seniorSafeHomes", "maintenance"];

export function pageUrl(locale: Locale, page: PageKey) {
  return pathFor(locale, page);
}
