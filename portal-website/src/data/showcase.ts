export type ShowcaseSource = {
  src: string;
  type: string;
};

export type ShowcaseMedia = {
  title: string;
  description: string;
  poster?: string;
  sources: ShowcaseSource[];
  gallery?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
};

export const portalShowcase: ShowcaseMedia = {
  title: "Portal product showcase",
  description: "Portal opening several official AI services together in one desktop window.",
  poster: "/media/portal-showcase-poster.jpg",
  sources: [{ src: "/media/portal-showcase.mp4", type: "video/mp4" }],
};

