export interface ArtXApp {
  id: string;
  name: string;
  tagline: string;
  category:
    | "Creative Image Editor"
    | "Notes & Productivity"
    | "Short Video Player"
    | "Habit Tracker"
    | "Android Launcher"
    | "Android Theme";
  categoryGroup: "featured" | "launcher" | "theme" | "utility";
  description: string;
  fullDescription: string;
  iconSrc: string;
  iconBgColor?: string;
  version: string;
  fileSize: string;
  minAndroid: string;
  architecture: string;
  packageName: string;
  googlePlayUrl?: string;
  cloudflareDownloadUrl: string; // User will connect their Cloudflare link here
  directApkUrl?: string;
  rating: number;
  ratingCount: number;
  features: string[];
  isSpotlight?: boolean;
}

export const artxHubApps: ArtXApp[] = [
  {
    id: "artx",
    name: "ArtX",
    tagline: "Creative Image Editor",
    category: "Creative Image Editor",
    categoryGroup: "featured",
    description: "Edit, enhance and create stunning visuals with powerful tools and AI features.",
    fullDescription:
      "Turn your imagination into reality with ArtX. Built for digital creators, photographers, and mobile artists. Includes pro color grading, AI object removal, neural background generation, ultra-HD 4K export, and an ad-free fluid interface.",
    iconSrc: "/artxhub/icon-artx.png",
    iconBgColor: "#111827",
    version: "v2.5.0",
    fileSize: "28.4 MB",
    minAndroid: "Android 8.0 (Oreo) or later",
    architecture: "arm64-v8a, armeabi-v7a (Universal APK)",
    packageName: "tech.artx.editor",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=tech.artx.editor",
    cloudflareDownloadUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/artx-image-editor-v2.5.0.apk",
    directApkUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/artx-image-editor-v2.5.0.apk",
    rating: 4.9,
    ratingCount: 1420,
    features: [
      "AI-Powered Tools: Generate, edit, and enhance with neural models",
      "High-Quality Export: Crisp, lossy-free ultra-high resolution export",
      "Fast & Lightweight: Smooth 120Hz UI, optimized RAM consumption",
      "No Watermarks & No Ads for creator freedom",
    ],
    isSpotlight: true,
  },
  {
    id: "cloudnote",
    name: "CloudNote",
    tagline: "Notes & Productivity",
    category: "Notes & Productivity",
    categoryGroup: "featured",
    description: "Simple, fast and beautiful note-taking for your ideas, tasks and life.",
    fullDescription:
      "Capture quick thoughts, create markdown checklists, and organize your daily workflow with CloudNote. Designed with minimalist aesthetics, end-to-end encrypted backup, and instant offline search.",
    iconSrc: "/artxhub/icon-cloudnote.png",
    iconBgColor: "#38BDF8",
    version: "v1.8.2",
    fileSize: "14.2 MB",
    minAndroid: "Android 9.0 (Pie) or later",
    architecture: "Universal APK",
    packageName: "tech.artx.cloudnote",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=tech.artx.cloudnote",
    cloudflareDownloadUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/cloudnote-v1.8.2.apk",
    directApkUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/cloudnote-v1.8.2.apk",
    rating: 4.8,
    ratingCount: 890,
    features: [
      "Instant offline notes with local SQLite caching",
      "Markdown formatting & checklist hierarchy",
      "Biometric lock (fingerprint / face ID)",
      "Zero telemetry & cloud backup option",
    ],
  },
  {
    id: "vidora",
    name: "Vidora",
    tagline: "Short Video Player",
    category: "Short Video Player",
    categoryGroup: "featured",
    description: "Watch, save and enjoy short videos with a clean and smooth experience.",
    fullDescription:
      "A buttery-smooth media player tailored for vertical short-form reels, stories, and videos. Hardware accelerated decoding, background audio, swipe gestures, and zero bloat.",
    iconSrc: "/artxhub/icon-vidora.png",
    iconBgColor: "#0F172A",
    version: "v3.1.0",
    fileSize: "19.6 MB",
    minAndroid: "Android 8.0 (Oreo) or later",
    architecture: "arm64-v8a, x86_64",
    packageName: "tech.artx.vidora",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=tech.artx.vidora",
    cloudflareDownloadUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/vidora-player-v3.1.0.apk",
    directApkUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/vidora-player-v3.1.0.apk",
    rating: 4.7,
    ratingCount: 1150,
    features: [
      "Hardware accelerated vertical swipe player",
      "Custom playback speed (0.25x - 3.0x)",
      "Picture-in-picture (PiP) multitasking",
      "Privacy-first offline storage",
    ],
  },
  {
    id: "greenlife",
    name: "GreenLife",
    tagline: "Habit Tracker",
    category: "Habit Tracker",
    categoryGroup: "featured",
    description: "Build better habits, track your progress and live a healthier life.",
    fullDescription:
      "A serene, calming habit companion that helps you plant daily routines and watch them blossom. Featuring mindful streaks, customizable widgets, hydration tracking, and weekly analytics.",
    iconSrc: "/artxhub/icon-greenlife.png",
    iconBgColor: "#10B981",
    version: "v2.0.4",
    fileSize: "12.1 MB",
    minAndroid: "Android 8.0 (Oreo) or later",
    architecture: "Universal APK",
    packageName: "tech.artx.greenlife",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=tech.artx.greenlife",
    cloudflareDownloadUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/greenlife-habits-v2.0.4.apk",
    directApkUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/greenlife-habits-v2.0.4.apk",
    rating: 4.9,
    ratingCount: 960,
    features: [
      "Serene plant-growth habit gamification",
      "Home screen interactive Material You widgets",
      "Smart scheduled push notifications",
      "Weekly & monthly consistency analytics",
    ],
  },
  {
    id: "cyberhome-launcher",
    name: "CyberHome Launcher",
    tagline: "Android Launcher",
    category: "Android Launcher",
    categoryGroup: "launcher",
    description: "Next-gen cyber overlay home screen based on Lawnchair 15 and Android 15 Quickstep.",
    fullDescription:
      "A customized, blazing-fast home launcher port built directly by ArtX / CyberHome team. Features Material You dynamic palette, QuickSwitch recents provider, custom icon pack shaders, and gesture navigation.",
    iconSrc: "/artxhub/icon-artx.png",
    iconBgColor: "#18181B",
    version: "v15.0-CyberBeta",
    fileSize: "36.2 MB",
    minAndroid: "Android 10.0+ (Full QuickSwitch on Android 12-15)",
    architecture: "arm64-v8a",
    packageName: "app.cyberhome.lawnchair",
    cloudflareDownloadUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/cyberhome-launcher-v15.apk",
    directApkUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/cyberhome-launcher-v15.apk",
    rating: 5.0,
    ratingCount: 340,
    features: [
      "Android 15 Launcher3 source base",
      "Material You auto dynamic palette theming",
      "Smooth 120Hz gesture navigation & Quickstep recents",
      "Custom Cyber overlay and widget packs",
    ],
  },
  {
    id: "artx-minimal-launcher",
    name: "ArtX Minimal Launcher",
    tagline: "Android Launcher",
    category: "Android Launcher",
    categoryGroup: "launcher",
    description: "Distraction-free, typographic Android home launcher designed for digital calm.",
    fullDescription:
      "Eliminate phone addiction with an intentional text-based interface, swipe-to-search, custom app hiding, and calming monochrome aesthetics.",
    iconSrc: "/artxhub/icon-artx.png",
    iconBgColor: "#27272A",
    version: "v1.4.1",
    fileSize: "6.8 MB",
    minAndroid: "Android 8.0+",
    architecture: "Universal APK",
    packageName: "tech.artx.minimallauncher",
    cloudflareDownloadUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/artx-minimal-launcher-v1.4.1.apk",
    directApkUrl: "https://cloudflare-cdn.artxhub.workers.dev/apks/artx-minimal-launcher-v1.4.1.apk",
    rating: 4.8,
    ratingCount: 520,
    features: [
      "Text-only minimalist home screen",
      "Fast T9 app search and gesture shortcuts",
      "Digital wellness screen time counter",
      "Extremely light on battery and memory (under 10MB)",
    ],
  },
  {
    id: "nordic-paper-theme",
    name: "Nordic Paper Theme",
    tagline: "Android Theme",
    category: "Android Theme",
    categoryGroup: "theme",
    description: "Warm tactile eggshell & ink vector theme with 1,200+ handcrafted icons.",
    fullDescription:
      "A handcrafted theme package for Nova Launcher, Niagara Launcher, Lawnchair, and CyberHome. Features subtle textured wallpapers, organic glyphs, and custom KWGT widgets.",
    iconSrc: "/artxhub/icon-cloudnote.png",
    iconBgColor: "#F5F5F0",
    version: "v2.1",
    fileSize: "42.0 MB",
    minAndroid: "Android 8.0+",
    architecture: "Theme Pack / APK",
    packageName: "tech.artx.themes.nordicpaper",
    cloudflareDownloadUrl: "https://cloudflare-cdn.artxhub.workers.dev/themes/nordic-paper-theme.apk",
    directApkUrl: "https://cloudflare-cdn.artxhub.workers.dev/themes/nordic-paper-theme.apk",
    rating: 4.9,
    ratingCount: 780,
    features: [
      "1,200+ custom vector outlined app icons",
      "14 exclusive editorial nature & grain wallpapers",
      "Adaptive dynamic clock & weather KWGT widgets",
      "Compatible with Lawnchair 15, CyberHome, Nova & Niagara",
    ],
  },
];
