export type PortalService = {
  name: string;
  logo: string;
  featured: boolean;
};

export const portalServices: PortalService[] = [
  { name: "ChatGPT", logo: "/ai-logos/chatgpt.svg", featured: true },
  { name: "Claude", logo: "/ai-logos/claude.svg", featured: true },
  { name: "Gemini", logo: "/ai-logos/gemini.svg", featured: true },
  { name: "Z.ai", logo: "/ai-logos/zai.svg", featured: false },
  { name: "DeepSeek", logo: "/ai-logos/deepseek.svg", featured: true },
  { name: "Perplexity", logo: "/ai-logos/perplexity.svg", featured: false },
];

export const featuredPortalServices = portalServices.filter(
  (service) => service.featured,
);
