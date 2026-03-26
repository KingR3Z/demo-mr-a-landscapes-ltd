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
    { name: "Bev Eiffert", rating: 5, text: "I would like to say a massive thank you to Al and his team for such a fantastic job they did on my garden. The weather was not great and they worked in the rain and hailstones. I am absolutely thrilled with my new garden. I would highly recommend this company for all your garden needs. Thank you guys", date: "a day ago" },
    { name: "Vicki Gardner", rating: 5, text: "Really pleased with all that Al, Dennis and Jibs of  Mr A Landscapes have done over the last 3 weeks to transform my gardens. They worked really hard, nothing was too much trouble, they were polite and courteous and did an amazing tidy up at the end. Would highly recommend Mr A Landscapes", date: "5 days ago" },
    { name: "Lynzi Gilbert", rating: 5, text: "From start to finish, Al and his team have taken great care to create our vision for our garden and I cannot believe the space we now have! The weather was not kind for the time they have been with us, but they cracked on in the pouring rain meaning the job was finished swiftly and beautifully. I love all the finishing touches, little extra bits they added and the extra jobs they completed to bring all the areas together. Nothing was too much trouble. Thank you so so much fellas!", date: "3 weeks ago" },
    { name: "Russ Gilbert", rating: 5, text: "So pleased with our new garden.  Al was the only quote we had that saw our vision and constructed our garden exactly the way we wanted it, even adding extras and amendments along the way if we asked.  Al and Dennis were out in horrible weather and mud to create our lovely garden.  They completed the work with small added extras and finishing touches, put everything right and tidied up.  If you need any gardening or landscaping done, get these guys..and lots of coffee!  Cheers lads.", date: "3 weeks ago" },
    { name: "rachel rowland", rating: 5, text: "We had an idea for what we wanted done in our garden and Al and team completely realised our vision for a patio and pergola. They were so helpful and professional throughout and delivered a first class job - despite the dreadful weather! Would thoroughly recommend them to anyone wanting landscaping done.", date: "a month ago" },
    { name: "Cathrine Hayday", rating: 5, text: "We chose Mr A Landscapes after being recommended them by our neighbors who also had their garden done by them.  I can highly recommend them to anyone looking to have their garden done - they are very professional and friendly, showing up and working through all kinds of weather! We had our small garden completely redone, removing old grass and trees along with a rotted decking area. We showed them a picture of what we were after, and they always made sure to see if we were happy with materials before they were bought and put down (millboard for new decking, fence, shingle etc). The garden got a complete makeover, and we can't wait to decorate it with trees and plants! Thank you again!", date: "2 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Mr A Landscapes Ltd | Landscaper in Aylesford",
    description: "Professional landscaper in Aylesford. 5.0-star rated on Google. Call for a free quote.",
  },
};
