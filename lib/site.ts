export const site = {
  name: "GM GYM",
  tagline: "Jankipuram's trusted hub for strength and conditioning.",
  phoneDisplay: "+91 94533 26595",
  phoneHref: "tel:+919453326595",
  whatsappNumber: "919453326595",
  address:
    "Behind Sahara States, Sector F / Sector D, Jankipuram, Lucknow, Uttar Pradesh",
  addressShort: "Jankipuram, Lucknow",
  hours: [
    { day: "Monday – Saturday", time: "6:00 AM – 9:30 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  rating: {
    score: "4.8",
    reviews: "270+",
  },
  // Replace this with the official Google Business Profile review URL when available.
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=GM+GYM+Jankipuram+Lucknow",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=GM%20GYM%2C%20Behind%20Sahara%20States%2C%20Sector%20F%2C%20Jankipuram%2C%20Lucknow&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=GM+GYM%2C+Behind+Sahara+States%2C+Jankipuram%2C+Lucknow",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Membership", href: "#membership" },
  { label: "Facilities", href: "#facilities" },
  { label: "Trainers", href: "#trainers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

/** Encode once, open in a new tab. Replace the number in one place if it changes. */
export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const trialMessage =
  "Hello GM GYM, I am interested in booking a free gym trial. Please share the available timings and details.";

const generalMessage =
  "Hello GM GYM, I would like to know more about your membership and facilities.";

export const generalWhatsappUrl = whatsappUrl(generalMessage);
export const trialWhatsappUrl = whatsappUrl(trialMessage);

export type Plan = {
  id: string;
  name: string;
  price: string;
  unit: string;
  note: string;
  features: string[];
  popular?: boolean;
  message: string;
};

/**
 * SAMPLE / ESTIMATED PRICES — update price, unit and message together.
 * Messages are passed through encodeURIComponent() by whatsappUrl().
 */
export const plans: Plan[] = [
  {
    id: "daily",
    name: "Daily Pass",
    price: "₹250",
    unit: "/ day",
    note: "Try the floor, no commitment.",
    features: ["One-Day Gym Access", "Strength Training Area", "Cardio Equipment"],
    message:
      "Hello GM GYM, I am interested in the Daily Pass membership for ₹250. Please share more details.",
  },
  {
    id: "monthly",
    name: "Monthly Plan",
    price: "₹3,000",
    unit: "/ month",
    note: "The most flexible way to start.",
    features: [
      "Full Gym Access",
      "Strength & Cardio",
      "Functional Training Area",
      "Trainer Guidance",
    ],
    popular: true,
    message:
      "Hello GM GYM, I am interested in the Monthly Membership for ₹3,000. Please share more details about joining.",
  },
  {
    id: "half-yearly",
    name: "Half-Yearly Plan",
    price: "₹8,000",
    unit: "/ 6 months",
    note: "Build a consistent training habit.",
    features: [
      "Full Gym Access",
      "Strength & Cardio",
      "Functional Training Area",
      "Trainer Guidance",
    ],
    message:
      "Hello GM GYM, I am interested in the Half-Yearly Membership for ₹8,000. Please share more details about joining.",
  },
  {
    id: "annual",
    name: "Annual Plan",
    price: "₹15,000",
    unit: "/ year",
    note: "Best value for long-term progress.",
    features: [
      "Full Gym Access",
      "Strength & Cardio",
      "Functional Training Area",
      "Trainer Guidance",
      "Long-Term Membership Benefits",
    ],
    message:
      "Hello GM GYM, I am interested in the Annual Membership for ₹15,000. Please share more details about joining.",
  },
];

export const features = [
  {
    number: "01",
    title: "Supportive Training Environment",
    description:
      "A welcoming floor where beginners and experienced lifters train side by side — no judgement, just encouragement.",
    icon: "users",
  },
  {
    number: "02",
    title: "Dedicated Strength & Cardio Zones",
    description:
      "Separate, well-equipped spaces for free weights, machines and cardio so your session flows without waiting.",
    icon: "dumbbell",
  },
  {
    number: "03",
    title: "Beginner-Friendly Fitness Guidance",
    description:
      "Approachable trainer support, form correction and practical advice to help you start safely and stay consistent.",
    icon: "heart",
  },
];

export const facilities = [
  {
    title: "Strength & Weight Training",
    description:
      "Racks, barbells and plate-loaded machines for structured, progressive strength work.",
    image: "/images/facility-strength.jpg",
    tag: "Strength",
  },
  {
    title: "Cardio & Endurance",
    description:
      "Treadmills, cycles and cross-trainers to build stamina, heart health and recovery.",
    image: "/images/facility-cardio.jpg",
    tag: "Cardio",
  },
  {
    title: "Free Weights",
    description:
      "Dumbbells, benches and free-weight zones for balanced, functional strength.",
    image: "/images/facility-weights.jpg",
    tag: "Free weights",
  },
  {
    title: "Functional Training",
    description:
      "Kettlebells, bodyweight work and movement patterns that carry into everyday life.",
    image: "/images/facility-functional.jpg",
    tag: "Functional",
  },
  {
    title: "Personalised Training Guidance",
    description:
      "Floor support, form correction and practical programming advice whenever you need it.",
    image: "/images/facility-guidance.jpg",
    tag: "Guidance",
  },
  {
    title: "Group Fitness Environment",
    description:
      "A busy, high-energy floor where beginners and regulars keep each other moving.",
    image: "/images/facility-group.jpg",
    tag: "Community",
  },
];

export const trainers = [
  {
    role: "Strength & Conditioning",
    focus: "Compound lifts · Technique · Progressive overload",
    image: "/images/trainer-1.jpg",
  },
  {
    role: "Functional Training",
    focus: "Mobility · Kettlebell work · Conditioning",
    image: "/images/trainer-2.jpg",
  },
  {
    role: "Beginner Guidance",
    focus: "Form basics · Confidence · Consistency",
    image: "/images/trainer-3.jpg",
  },
];

/**
 * Sample testimonial placeholders. Replace with verified Google reviews before launch.
 * No real customer names or quotes are represented here.
 */
export const sampleReviews = [
  {
    quote:
      "Sample review — a welcoming floor, clear guidance and enough space to train without feeling rushed.",
    label: "Sample testimonial 01",
    rating: 5,
  },
  {
    quote:
      "Sample review — a good mix of strength and cardio equipment, with friendly support for beginners.",
    label: "Sample testimonial 02",
    rating: 5,
  },
  {
    quote:
      "Sample review — a motivating atmosphere that makes it easier to show up and stay consistent.",
    label: "Sample testimonial 03",
    rating: 5,
  },
];

export const gallery = [
  { image: "/images/gallery-1.jpg", alt: "Rows of gym equipment and weights in a training area — illustrative image.", caption: "Training floor" },
  { image: "/images/gallery-2.jpg", alt: "Gym interior with strength machines — illustrative image.", caption: "Strength zone" },
  { image: "/images/gallery-3.jpg", alt: "Dumbbell rack in a gym — illustrative image.", caption: "Free weights" },
  { image: "/images/gallery-4.jpg", alt: "Athlete training with dumbbells — illustrative image.", caption: "Dumbbell work" },
  { image: "/images/gallery-5.jpg", alt: "Cardio and strength equipment in a gym — illustrative image.", caption: "Equipment" },
  { image: "/images/gallery-6.jpg", alt: "Boxing and conditioning area — illustrative image.", caption: "Conditioning" },
  { image: "/images/gallery-7.jpg", alt: "Weights and training accessories — illustrative image.", caption: "The details" },
  { image: "/images/gallery-8.jpg", alt: "Barbell training in a dark gym — illustrative image.", caption: "Barbell work" },
];
