export interface ArtXApp {
  id: string;
  name: string;
  nameBn?: string;
  tagline: string;
  category: string;
  description: string;
  fullDescription: string;
  iconSrc: string;
  developer: string;
  websiteUrl?: string;
  supportEmail?: string;
  screenshots: { src: string; alt: string }[];
  // Update version and fileSize when a new release is published.
  version: string;
  fileSize: string;
  platform: string;
  requires?: string;
  downloadUrl: string;
  installSteps?: string[];
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
    developer: "ArtX Dev",
    websiteUrl: "https://biniyogbriddhi.com/",
    supportEmail: "support@biniyogbriddhi.com",
    screenshots: [
      { src: "/desgins/binoyg/binioyg.png", alt: "Biniyog Briddhi home screen" },
      { src: "/desgins/binoyg/biniyog (2).png", alt: "Biniyog Briddhi opportunities overview" },
      { src: "/desgins/binoyg/biniyog.png1.png", alt: "Biniyog Briddhi active opportunities" },
    ],
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
  {
    id: "artx-hub",
    name: "ArtX Hub",
    tagline: "Anime HUD Launcher",
    category: "Launcher",
    description: "Turn your phone into an anime HUD home screen.",
    fullDescription:
      "ArtX Hub turns your Android phone into an anime HUD home screen. Choose from the BIRD, Mika and CyberHome themes, and hold the round dial on the home screen to switch between them.",
    iconSrc: "/artxhub/artxhub-app-logo.png",
    developer: "ArtX Dev",
    screenshots: [
      {
        src: "https://github.com/tareksec/artxhub-releases/releases/download/v1.0.0/screenshot-bird-dark.png",
        alt: "ArtX Hub BIRD theme in dark mode",
      },
      {
        src: "https://github.com/tareksec/artxhub-releases/releases/download/v1.0.0/screenshot-bird-light.png",
        alt: "ArtX Hub BIRD theme in light mode",
      },
    ],
    version: "v1.0.1",
    fileSize: "16.4 MB",
    platform: "Android",
    requires: "Android 8 or newer",
    downloadUrl:
      "https://github.com/tareksec/artxhub-releases/releases/download/v1.0.0/ArtXHub-1.0.1-1500020301.apk",
    installSteps: [
      `Tap "Download APK" on your Android phone (Android 8 or newer).`,
      "Open the downloaded file and allow install from this source.",
      `Open ArtX Hub, pick Light, Dark or Auto, then tap "Apply look".`,
      "Choose ArtX Hub as your home app when Android asks.",
      "Hold the round dial on the home screen to change themes.",
    ],
    features: [
      {
        title: "Anime HUD Home Screen",
        description: "Give your phone a full anime HUD look.",
      },
      {
        title: "Three Themes",
        description: "Choose BIRD, Mika or CyberHome.",
      },
      {
        title: "Light, Dark or Auto",
        description: "Pick a mode and apply your look in one tap.",
      },
      {
        title: "Auto Updates",
        description: "The app updates itself when a new version is out.",
      },
    ],
    notice:
      "This is an early test build, tested on one phone so far. Apply look replaces your home and lock wallpaper. To leave, open Android Settings > Apps > Default apps > Home app.",
    isFeatured: true,
  },
];

export const artxHubCategories = Array.from(new Set(artxHubApps.map((app) => app.category)));
