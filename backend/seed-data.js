// seed-data.js — static starter data. Later this can move to a real CMS or admin panel.

export const MOODS = [
  { id: "chill", label: "Chill & Slow", emoji: "🌊", tint: "#6FA98B", description: "Quiet mornings, no itinerary, just vibe." },
  { id: "adventure", label: "Adventure", emoji: "⛰️", tint: "#E8604C", description: "Treks, rapids, cliffs — heart-rate up." },
  { id: "romance", label: "Romantic", emoji: "🌇", tint: "#F2A93B", description: "Sunsets built for two." },
  { id: "solo", label: "Solo Reset", emoji: "🧭", tint: "#7C93C7", description: "Just you, a backpack, and no plan." },
  { id: "spiritual", label: "Spiritual", emoji: "🪔", tint: "#C77CBB", description: "Temples, silence, and old stone steps." },
  { id: "party", label: "Party & Social", emoji: "🎉", tint: "#F2556A", description: "Loud music, new friends, late nights." },
];

export const SEASONS = ["Winter", "Summer", "Monsoon", "Post-Monsoon"];

export const DESTINATIONS = [
  {
    id: "spiti-valley",
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    moods: ["adventure", "solo", "spiritual"],
    season: "Summer",
    bestMonths: "May – Sep",
    tagline: "A cold desert that feels like another planet.",
    description:
      "Spiti sits at 12,500 ft, all barren mountains and impossibly blue skies. Key Monastery, Chandratal Lake and the world's highest post office at Hikkim make it a favourite for solo riders and monks-at-heart alike.",
    hiddenGem: false,
    budgetPerDay: 2500,
  },
  {
    id: "gokarna",
    name: "Gokarna",
    state: "Karnataka",
    moods: ["chill", "solo", "spiritual"],
    season: "Winter",
    bestMonths: "Oct – Feb",
    tagline: "Goa's quieter, barefoot cousin.",
    description:
      "Om Beach, Kudle Beach and a temple town vibe without Goa's crowd. Great for hammock-and-book kind of days, cheap beach shacks, and sunset yoga.",
    hiddenGem: false,
    budgetPerDay: 1500,
  },
  {
    id: "chopta",
    name: "Chopta",
    state: "Uttarakhand",
    moods: ["chill", "adventure"],
    season: "Post-Monsoon",
    bestMonths: "Sep – Nov",
    tagline: "Mini Switzerland, minus the crowd tax.",
    description:
      "Rolling meadows, rhododendron forests, and the Tungnath trek — the highest Shiva temple in the world. Base for Deoriatal Lake too.",
    hiddenGem: true,
    budgetPerDay: 1800,
  },
  {
    id: "hampi",
    name: "Hampi",
    state: "Karnataka",
    moods: ["adventure", "spiritual", "solo"],
    season: "Winter",
    bestMonths: "Nov – Feb",
    tagline: "Ruins that look like a movie set, because they basically are.",
    description:
      "Boulders, ancient temples, and a river you cross in a giant basket boat. Great for cycling around ruins at golden hour.",
    hiddenGem: false,
    budgetPerDay: 1600,
  },
  {
    id: "udupi-coast",
    name: "Maravanthe & Kodi Beach",
    state: "Karnataka",
    moods: ["romance", "chill"],
    season: "Winter",
    bestMonths: "Nov – Feb",
    tagline: "The road where the sea sits on one side and a river on the other.",
    description:
      "A quiet coastal stretch most tourists skip on the way to Gokarna. Best watched from a bike, at sunset, with almost no one else around.",
    hiddenGem: true,
    budgetPerDay: 1700,
  },
  {
    id: "tawang",
    name: "Tawang",
    state: "Arunachal Pradesh",
    moods: ["adventure", "spiritual", "solo"],
    season: "Summer",
    bestMonths: "Mar – Jun",
    tagline: "India's largest monastery, guarded by snow passes.",
    description:
      "Sela Pass, Madhuri Lake and a 400-year-old monastery. Far enough that it still feels undiscovered, even in 2026.",
    hiddenGem: true,
    budgetPerDay: 2200,
  },
  {
    id: "pondicherry",
    name: "Pondicherry",
    state: "Puducherry",
    moods: ["romance", "chill", "solo"],
    season: "Winter",
    bestMonths: "Nov – Feb",
    tagline: "French lanes, filter coffee, and a promenade at dusk.",
    description:
      "White Town's mustard-yellow walls, Auroville close by, and cafés built for slow mornings. Easy to fall into a routine here.",
    hiddenGem: false,
    budgetPerDay: 2000,
  },
  {
    id: "majuli",
    name: "Majuli Island",
    state: "Assam",
    moods: ["chill", "spiritual", "solo"],
    season: "Post-Monsoon",
    bestMonths: "Oct – Mar",
    tagline: "The world's largest river island, and one of its quietest.",
    description:
      "Satras (monasteries), mask-making villages, and the Brahmaputra all around. Very few tourists make it here — that's the point.",
    hiddenGem: true,
    budgetPerDay: 1400,
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    state: "Uttarakhand",
    moods: ["adventure", "spiritual", "party"],
    season: "Post-Monsoon",
    bestMonths: "Sep – Nov",
    tagline: "Rapids by day, aarti by the Ganga at night.",
    description:
      "White-water rafting, bungee jumping, and the Triveni Ghat aarti in the same 24 hours. A strange, good kind of whiplash.",
    hiddenGem: false,
    budgetPerDay: 1900,
  },
  {
    id: "andaman-havelock",
    name: "Havelock Island",
    state: "Andaman & Nicobar",
    moods: ["romance", "chill", "adventure"],
    season: "Winter",
    bestMonths: "Nov – Apr",
    tagline: "Radhanagar Beach, and water so clear it looks fake.",
    description:
      "Scuba diving, bioluminescent kayaking at night, and beaches that consistently rank among Asia's best.",
    hiddenGem: false,
    budgetPerDay: 3500,
  },
  {
    id: "khonoma",
    name: "Khonoma Village",
    state: "Nagaland",
    moods: ["chill", "spiritual", "solo"],
    season: "Post-Monsoon",
    bestMonths: "Oct – Dec",
    tagline: "India's first 'green village' — terraced, silent, alpine.",
    description:
      "Stone gates, terraced fields, and homestays run by the same families for generations. Almost no phone signal, which is the appeal.",
    hiddenGem: true,
    budgetPerDay: 1500,
  },
  {
    id: "goa-north",
    name: "Goa (Anjuna–Vagator belt)",
    state: "Goa",
    moods: ["party", "romance", "chill"],
    season: "Winter",
    bestMonths: "Nov – Feb",
    tagline: "Flea markets by day, trance by the cliffs at night.",
    description:
      "The classic answer, and still a good one — as long as you know which lanes to skip. Great base to branch out to the hidden coves nearby.",
    hiddenGem: false,
    budgetPerDay: 2800,
  },
];

// A handful of seed community posts so the feed isn't empty on first run.
export const POSTS = [
  {
    id: "p1",
    author: "wanderlust_riya",
    destinationId: "udupi-coast",
    title: "Found a beach on the Gokarna route that isn't on Google Maps properly",
    body:
      "Was riding from Udupi to Gokarna and stopped at this stretch near Maravanthe where the highway literally has the sea on one side and a river on the other. Almost no tourists — just fishermen. Stayed for the sunset, best 20 minutes of the whole trip. Ping me if you want the exact stop.",
    upvotes: 42,
    createdAt: "2026-06-14T10:00:00Z",
    comments: [
      { id: "c1", author: "backpacker_dev", body: "Saved. Doing this route in Oct, thank you!" },
      { id: "c2", author: "solo_shreya", body: "This spot changed my whole trip honestly" },
    ],
  },
  {
    id: "p2",
    author: "himalayan_karan",
    destinationId: "khonoma",
    title: "Khonoma village, Nagaland — zero phone signal, best 3 days of the year",
    body:
      "Stayed with a homestay family for 3 nights. No signal, no rush, just terraced fields and the quietest mornings I've had. If you're tired of 'hidden gem' places that are actually full of influencers now, this genuinely still isn't.",
    upvotes: 67,
    createdAt: "2026-05-02T08:30:00Z",
    comments: [
      { id: "c3", author: "quietmind_", body: "Adding this to my list immediately" },
    ],
  },
  {
    id: "p3",
    author: "chopta_regular",
    destinationId: "chopta",
    title: "Tungnath trek at sunrise > any gym membership",
    body:
      "Did the Chopta–Tungnath–Chandrashila trek starting 4am. Reached the summit right as the sun hit the peaks. Moderate difficulty, doable in a day, and somehow still not overcrowded even in peak season.",
    upvotes: 29,
    createdAt: "2026-04-20T14:00:00Z",
    comments: [],
  },
];
