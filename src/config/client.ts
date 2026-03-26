export const client = {
  // Business Details
  name: "Mr A Landscapes Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Aylesford.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07973 864422",
  email: "",
  website: "",

  // Location
  address: "Aylesford",
  city: "Aylesford",
  county: "",
  postcode: "",
  basedIn: "Aylesford",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Lynzi Gilbert", rating: 5, text: "New From start to finish, Al and his team have taken great care to create our vision for our garden and I cannot believe the space we now have! The weather was not kind for the time they have been with us, but they cracked on in the pouring …  ", date: "3 weeks ago" },
    { name: "Lauren Whiteside", rating: 5, text: "We’re really pleased with the work Al and his team have done – they were fantastic from start to finish. Communication was excellent, everything was handled professionally, and the results speak for themselves. They removed our old decking …  ", date: "5 months ago" },
    { name: "Cathrine Hayday", rating: 5, text: "We chose Mr A Landscapes after being recommended them by our neighbors who also had their garden done by them. …  ", date: "2 months ago" },
    { name: "Luke (Luke)", rating: 5, text: "Mr A Landscaped did an absolutely fantastic job laying my back garden patio and path. The work was completed to a very high standard, and the result looks amazing. On …  ", date: "5 months ago" },
    { name: "Russ Gilbert", rating: 5, text: "New So pleased with our new garden.  Al was the only quote we had that saw our vision and constructed our garden exactly the way we wanted it, even adding extras and amendments along the way if we asked.  Al and Dennis were out in horrible …  ", date: "3 weeks ago" },
    { name: "Tolu Lope", rating: 5, text: "Alex and the boys were awesome with our full garden job - extremely professional yet pleasant in all his dealings. His quote was very transparent, and I was able to swap things around, pick my preferred stones and porcelain tiles as the job …  ", date: "5 months ago" },
    { name: "Yvonne Webb", rating: 5, text: "Mr A and his team did a very good job of work on our wall. They were polite and professional. ", date: "11 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Mr A Landscapes Ltd | Landscaper in Aylesford",
    description: "Professional landscaper in Aylesford. 5.0-star rated on Google. Call for a free quote.",
  },
};
