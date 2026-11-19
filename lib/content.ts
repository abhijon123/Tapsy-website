export interface Creator {
  id: string;
  name: string;
  role: string;
  category: string;
  followers: string;
  avatar: string;
  cover: string;
  reviewTitle: string;
  placeName: string;
  rating: number;
}

export interface VenueShot {
  id: string;
  title: string;
  place: string;
  category: string;
  image: string;
  rating: number;
  duration: string;
}

export const siteLinks = {
  appStore: "https://apps.apple.com/in/app/tapsy-brand-review/id6754841809",
  playStore:
    "https://play.google.com/store/apps/details?id=com.tapsy.android&pcampaignid=web_share",
  instagram: "https://www.instagram.com/tapsyreviews/",
  twitter: "https://x.com/TapsyReviews",
  youtube: "https://www.youtube.com/@TapsyReviews",
} as const;

export const siteContent = {
  meta: {
    title: "Tapsy | Why Type When You Can Tap? – Authentic 30s Video Reviews",
    description:
      "Forget outdated text and long paragraphs. Tapsy serves up 30-second authentic video reels of restaurants, cafes, and local spots. Fast, fun, and trustworthy.",
  },
  hero: {
    brand: "tapsy",
    badge: "Authentic 30s video reviews",
    titlePrimary: "Why type when you can",
    titleGradient: "tap?",
    description:
      "Forget outdated text reviews and fake 5-star ratings. Tapsy delivers authentic 30-second video takes for restaurants, gyms, hotels, salons, nightlife — raw reactions, real vibes, zero fluff.",
    ctaPrimary: "Get the app",
    ctaSecondary: "See how it works",
    metrics: [
      { label: "Active reviewers", value: "50K+" },
      { label: "Video reviews", value: "250K+" },
      { label: "Verified spots", value: "12K+" },
      { label: "Authenticity", value: "99.8%" },
    ],
  },
  stepsIntro: {
    badge: "How it works",
    heading: "From tap to trusted take.",
    subheading:
      "Three moments. Zero fluff. Watch the product move as you scroll.",
    steps: [
      {
        stepNumber: "01",
        label: "Record",
        title: "Tap to record",
        subtitle: "30 seconds. One honest take.",
        details:
          "Open the camera in a single tap. Capture the room, service, and energy in HD — no editing drama.",
        bullets: [
          "Strict 30-second clip limit",
          "Tap-to-focus viewfinder",
          "Works offline until you post",
        ],
      },
      {
        stepNumber: "02",
        label: "Rate",
        title: "Slide the vibe",
        subtitle: "Okay → Outstanding.",
        details:
          "Skip confusing star math. Drag the mood slider, drop a tag, and publish your take instantly.",
        bullets: [
          "Sensory vibe slider",
          "Smart geo + category tags",
          "One-tap publish",
        ],
      },
      {
        stepNumber: "03",
        label: "Grow",
        title: "Get social",
        subtitle: "Become the trusted voice.",
        details:
          "Build a following of foodies and explorers. Earn badges. Help your city discover better nights out.",
        bullets: [
          "Creator profile & badges",
          "Neighborhood reputation",
          "Share to every feed",
        ],
      },
    ],
  },
  creatorsSection: {
    badge: "Creator community",
    heading: "Real people. Real places.",
    description:
      "Creators on Tapsy don’t write essays — they show you the night. Follow the voices that match your taste.",
    creators: [
      {
        id: "shawn",
        name: "Shawn",
        role: "Actor & food critic",
        category: "Food & drinks",
        followers: "14.2K",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        cover:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
        reviewTitle: "Best rooftop pasta downtown",
        placeName: "Bella Vista",
        rating: 5.0,
      },
      {
        id: "hella",
        name: "Hella",
        role: "Lifestyle creator",
        category: "Travel",
        followers: "89.4K",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        cover:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
        reviewTitle: "Hidden aesthetic espresso bar",
        placeName: "Artisan Coffee Lab",
        rating: 4.9,
      },
      {
        id: "anna",
        name: "Anna",
        role: "Tech CEO & foodie",
        category: "Dining",
        followers: "32.1K",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        cover:
          "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
        reviewTitle: "Quiet executive lunch spot",
        placeName: "L'Etoile",
        rating: 5.0,
      },
      {
        id: "sarah",
        name: "Sarah",
        role: "UGC creator",
        category: "Nightlife",
        followers: "56.7K",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        cover:
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
        reviewTitle: "Sunset cocktail vibe check",
        placeName: "Sky Lounge",
        rating: 4.8,
      },
      {
        id: "mark",
        name: "Mark Jacob",
        role: "Culinary explorer",
        category: "Italian",
        followers: "28.5K",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        cover:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        reviewTitle: "Tiramisu to die for",
        placeName: "Bella Vista",
        rating: 5.0,
      },
      {
        id: "ria",
        name: "Ria",
        role: "City walker",
        category: "Cafes",
        followers: "41.0K",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
        cover:
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        reviewTitle: "Pour-over Ethiopian roast",
        placeName: "Roastery Lab",
        rating: 5.0,
      },
    ] as Creator[],
  },
  venues: [
    {
      id: "v1",
      title: "Handmade pappardelle",
      place: "Bella Vista",
      category: "Restaurant",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
      rating: 5.0,
      duration: "0:28",
    },
    {
      id: "v2",
      title: "Latte art ritual",
      place: "Artisan Coffee Lab",
      category: "Cafe",
      image: "/assets/cafe-vibe.jpg",
      rating: 4.9,
      duration: "0:22",
    },
    {
      id: "v3",
      title: "Neon hour cocktails",
      place: "Sky Lounge",
      category: "Nightlife",
      image: "/assets/nightlife-vibe.jpg",
      rating: 4.8,
      duration: "0:30",
    },
    {
      id: "v4",
      title: "Rooftop golden hour",
      place: "Harbor House",
      category: "Travel",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      rating: 4.9,
      duration: "0:25",
    },
    {
      id: "v5",
      title: "Morning bakery run",
      place: "Flour & Fire",
      category: "Cafe",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
      rating: 5.0,
      duration: "0:18",
    },
    {
      id: "v6",
      title: "Candlelit tasting",
      place: "L'Etoile",
      category: "Restaurant",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
      rating: 5.0,
      duration: "0:27",
    },
    {
      id: "v7",
      title: "Sunrise strength session",
      place: "Form Studio",
      category: "Fitness",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      rating: 4.7,
      duration: "0:24",
    },
  ] as VenueShot[],
  showcaseReview: {
    businessName: "Bella Vista",
    location: "Downtown, New York",
    rating: 5.0,
    author: "Mark Jacob",
    authorRole: "Verified foodie",
    reviewText:
      "Amazing authentic Italian. Perfect pasta, warm service, tiramisu that ends the night right.",
    tags: ["#Italian", "#Pasta", "#Tiramisu", "#FoodReels"],
    likes: 234,
    comments: 114,
    categories: ["Restaurant", "Cafe", "Nightlife", "Travel", "Fitness"],
  },
  featuresBento: [
    {
      title: "30-second express clips",
      description:
        "Quick, snappy video reviews that show atmosphere, noise, and dishes in half a minute.",
      tag: "Zero fluff",
      icon: "Video",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Interactive mood slider",
      description:
        "Rate from Okay to Outstanding with tactile feedback — not another star spreadsheet.",
      tag: "Tactile rating",
      icon: "Sliders",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "NFC tap standees",
      description:
        "Customers tap the table standee and jump straight into recording a verified visit.",
      tag: "For venues",
      icon: "Nfc",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Creator studio",
      description:
        "Smart trim, audio clean, overlays, and badges — without leaving the app.",
      tag: "Pro tools",
      icon: "Sparkles",
      image: "/assets/creator-recording-feature.png",
    },
    {
      title: "Discover local gems",
      description:
        "Curated feeds by vibe, neighborhood, and verified video ratings.",
      tag: "Geotagged",
      icon: "Compass",
      image: "/assets/app-discover.png",
    },
  ],
  footer: {
    tagline: "The modern video review revolution.",
    copyright: "© 2026 Tapsy App. All rights reserved.",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Creators", href: "#creators" },
      { label: "For business", href: "#business" },
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
  },
};
