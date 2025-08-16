export interface ProgramDetail {
  programId: string;
  title: string;
  subtitle: string;
  bannerImage: string;
  featuredImage: string;
  category: string;
  raised: number;
  goal: number;
  description: string[];
  programPhotos: string[];
  categories: { name: string; count: number }[];
  ourGoals: string[];
  hashtags: string[];
  gallery: string[];
}


export const PROGRAM_DETAILS: ProgramDetail[] = [
{
  programId: "p1",
  title: "Somalian People Need Pure Water",
  subtitle: "Our Mission: Food, Education, Medicine",
  bannerImage: "assets/img/page-banner.jpg",
  featuredImage: "assets/img/cause-details.jpg",
  category: "water",
  raised: 70,
        goal: 7000,
                            
  description: [
    "But many people around the world don’t have that luxury. Every day, about 1,400 children die from diseases caused by unsafe water and poor sanitation. But it doesn’t have to be that way. There are simple solutions like drilled wells, spring protections and BioSand filters",
    "100% of the money will be used to build clean water projects, and when they’re complete, charity: water will send us photos and GPS coordinates so we can see the exact community we helped.",
    "I started this fundraising campaign to help charity: water build these types of projects around the world, and I'm looking for anyone who can help me. But many people around the world don’t have that luxury. Every day, about 1,400 children die from diseases caused by unsafe water and poor sanitation. But it doesn’t have to be that way. There are simple solutions like drilled wells, spring protections and BioSand filters that help provide clean water to communities around the world."
  ],
  programPhotos: [
    "assets/img/blog/p2.jpg",
    "assets/img/blog/p3.jpg"
  ],
  categories: [
    { name: "Charity", count: 35 },
    { name: "Donation", count: 20 },
    { name: "Food & Water", count: 57 },
    { name: "Medical", count: 208 },
    { name: "Kids in Africa", count: 9 }
        ],
  ourGoals: [
    "Surely access to clean water should be a basic human right in the 21st century. If you can only give £10 just this one time, it will still make a difference.",
    "I started this fundraising campaign to help charity: water build these types of projects around the world, and I'm looking for anyone who can help me. But many people around the world don’t have that luxury. Every day, about 1,400 children die from diseases caused by unsafe water and poor sanitation. But it doesn’t have to be that way. There are simple solutions like drilled wells, spring protections and BioSand filters that help provide clean water to communities around the world."
        ],
  
    hashtags: [
      "A place in history",
      "It’s about impact, goodness",
      "More goodness in the world",
      "The world we live in right now"
        ],
    gallery: [
      'assets/img/sidebar/g1.jpg',
      'assets/img/sidebar/g2.jpg',
        'assets/img/sidebar/g3.jpg',
        'assets/img/sidebar/g4.jpg'
    ]
  }
];