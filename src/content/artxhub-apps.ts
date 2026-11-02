export interface ArtXApp {
  id: string;
  name: string;
  nameBn?: string;
  tagline: string;
  category: string;
  description: string;
  fullDescription: string;
  iconSrc: string;
  websiteUrl?: string;
  // Update version and fileSize when a new release is published.
  version: string;
  fileSize: string;
  platform: string;
  downloadUrl: string;
  features: { title: string; description: string }[];
  notice?: string;
  isFeatured?: boolean;
  isSpotlight?: boolean;
}

// Add every new app here. It then appears on Home, Apps and Categories.
export const artxHubApps: ArtXApp[] = [
  {
    id: "biniyog-briddhi",
    name: "Biniyog Briddhi",
    nameBn: "বিনিয়োগ বৃদ্ধি",
    tagline: "Verified Business Investment",
    category: "Finance",
    description: "Discover and invest in verified businesses across Bangladesh.",
    fullDescription:
      "Biniyog Briddhi helps you discover verified businesses in Bangladesh and take part through an interest-free co-investment model built on transparency.",
    iconSrc: "https://biniyogbriddhi.com/logo.png",
    websiteUrl: "https://biniyogbriddhi.com/",
    version: "v0.2.0",
    fileSize: "63.7 MB",
    platform: "Android",
    downloadUrl:
      "https://github.com/tareksec/biniyog-app-download/releases/latest/download/biniyog-briddhi.apk",
    features: [
      {
        title: "Verified Businesses",
        description: "Explore opportunities reviewed before listing.",
      },
      {
        title: "Interest-Free Model",
        description: "Co-invest through a model built without interest.",
      },
      {
        title: "Transparent Investing",
        description: "See each opportunity and its status clearly.",
      },
    ],
    notice: "Every investment carries risk, and returns are not guaranteed.",
    isFeatured: true,
    isSpotlight: true,
  },
];

export const artxHubCategories = Array.from(new Set(artxHubApps.map((app) => app.category)));
