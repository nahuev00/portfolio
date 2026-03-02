export const SITE_CONFIG = {
  title: "Vera Nahuel | Full Stack Developer",
  description: "Portafolio profesional de desarrollo web con React y Astro.",
};

export const NAV_LINKS = [
  { label: "Inicio", href: "#home" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
];

export const EXPERIENCE_DATA = [
  {
    company: "Freelance",
    position: "DatAd's Solutions",
    period: "2024",
    description:
      "Desarrollo de Landing Page para agencia de Marketing Digital.",
  },
  {
    company: "Freelancer",
    position: "Desarrollador Freelancer",
    period: "2022 - 2023",
    description: `Desarrollo de interfaces graficas, componentes en React y Next.js.\nNuevas integraciones y refactorizado de codigo en API's`,
  },
  {
    company: "",
    position: "Aprendizaje y Creacion de Proyectos Personales",
    period: "2022 - Act.",
    description:
      "Desarrollé múltiples aplicaciones listas para producción, como Chats de texto y voz, Tiendas virtuales, Gestores de Stock, Landing Page, integraciones de AI y bots de criptomonedas.",
  },
];

export const SKILLS_DATA = [
  { name: "Astro", icon: "logos:astro-icon" },
  { name: "Vite", icon: "logos:vitejs" },
  { name: "React", icon: "logos:react" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Redux", icon: "logos:redux" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Java", icon: "logos:java" },
  { name: "Spring Boot", icon: "logos:spring" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Nest.js", icon: "material-icon-theme:nest" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "MySQL", icon: "devicon:mysql-wordmark" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "Prisma", icon: "logos:prisma" },
  { name: "Express", icon: "logos:express" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "Postman", icon: "devicon:postman" },
  { name: "Linux", icon: "flat-color-icons:linux" },
];

export const HERO_DATA = {
  greeting: "Hola, soy",
  name: "Nahuel",
  role: "Desarrollador Full Stack",
  description:
    "Transformo ideas complejas en aplicaciones web robustas y escalables. Especializado en el ecosistema TypeScript.",
  cta: "Ver Proyectos",
};

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "ChatPDF",
    description:
      "Aplicación interactiva que utiliza Inteligencia Artificial para analizar documentos PDF y responder preguntas en tiempo real mediante un chat inteligente.",
    longDescription:
      "Este proyecto transforma la lectura pasiva de documentos en una experiencia interactiva. Permite a los usuarios subir archivos PDF complejos y, mediante el uso de Large Language Models (LLMs) y procesamiento de lenguaje natural, extraer información específica en segundos.",
    thumbnail: "./chatPDF1.webp",
    images: [
      "./chatPDF1.webp",
      "./chatPDF2.webp",
      "./chatPDF3.webp",
      "./chatPDF4.webp",
    ],

    tags: [
      "Next.js",
      "Typescript",
      "tRPC",
      "Prisma",
      "Clerk",
      "Tailwind CSS",
      "Stripe",
    ],
    link: "https://github.com/nahuev00/chat-PDF",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Team Chat",
    description:
      "Un clon funcional de Discord desarrollado con React y TypeScript. Permite comunicación en tiempo real mediante chat de texto, canales de voz y videollamadas de alta calidad, con un sistema completo de gestión de servidores y roles.",
    longDescription:
      "Este proyecto es una réplica fullstack de Discord diseñada para ofrecer una experiencia de usuario fluida y reactiva. La arquitectura permite a los usuarios crear y personalizar sus propios servidores, organizar canales por categorías y gestionar miembros de forma dinámica.",
    thumbnail: "./team-chat1.webp",
    images: ["./team-chat1.webp", "./team-chat2.webp"],
    tags: ["Next.js", "Typescript", "Prisma", "Clerk", "Shadcn", "Socket.io"],
    link: "https://github.com/nahuev00/team-chat",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "CMS Dashboard",
    description:
      "Un panel de administración integral diseñado para gestionar múltiples tiendas virtuales desde un solo lugar. Permite el control total de inventario, categorías y configuraciones de tienda, exponiendo una API robusta para que cualquier frontend (tienda web) consuma los datos en tiempo real.",
    longDescription:
      "Este Dashboard CMS es una solución 'headless' desarrollada para centralizar la gestión de e-commerce. A diferencia de las plataformas cerradas, este sistema separa la administración de la visualización, permitiendo a los dueños de negocios gestionar sus productos de forma intuitiva mientras los desarrolladores conectan cualquier interfaz a través de su API.",
    thumbnail: "./cms2.webp",
    images: [
      "./cms1.webp",
      "./cms2.webp",
      "./cms3.webp",
      "./cms4.webp",
      "./cms5.webp",
      "./cms6.webp",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Prisma",
      "PostgreSQL",
      "Stripe",
    ],
    link: "https://github.com/nahuev00/e-commerce-CMS",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Clothes Dropset",
    description:
      "E-commerce de alto rendimiento desarrollado con Next.js y TypeScript, enfocado en la velocidad de carga, SEO optimizado y una experiencia de usuario fluida mediante una arquitectura moderna",
    longDescription:
      "E-commerce de alto rendimiento desarrollado con Next.js y TypeScript, enfocado en la velocidad de carga, SEO optimizado y una experiencia de usuario fluida mediante una arquitectura moderna",
    thumbnail: "./ecommerce1.webp",
    images: [
      "./ecommerce1.webp",
      "./ecommerce2.webp",
      "./ecommerce3.webp",
    ],
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Axios", "Shadcn"],
    link: "https://github.com/nahuev00/e-commerce-client",
    demo: "https://demo.com",
  },
];

export const CONTACT_DATA = {
  title: "Contacto",
  description:
    "¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para colaborar en nuevas ideas y desafíos.",
  email: "nahuev00@gmail.com",
  linkedin: "https://www.linkedin.com/in/nahuev00/",
  whatsapp: "https://wa.me/5492235122511",
  whatsappNumber: "+54 9 223 5 122511",
};
