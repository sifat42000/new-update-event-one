/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BusinessInfo, Service } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Chuadanga Event Planner",
  owner: "MD SHAHIN",
  phones: ["01717445854", "01825052535"],
  whatsapp: "01717445854",
  email: "bondhuttoflowerhouse@gmail.com",
  facebook: "https://www.facebook.com/weddingplanningcd",
};

const commonPackages = [
  {
    id: "basic",
    name: "Basic Package",
    priceRange: "10k – 15k",
    description: "Simple yet elegant decoration for intimate gatherings.",
    images: Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/basic-${i}/800/600`),
  },
  {
    id: "standard",
    name: "Standard Package",
    priceRange: "15k – 35k",
    description: "Beautiful medium-scale decoration with more floral arrangements.",
    images: Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/standard-${i}/800/600`),
  },
  {
    id: "premium",
    name: "Premium Package",
    priceRange: "35k – 60k",
    description: "High-quality decoration with premium lighting and backdrop designs.",
    images: Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/premium-${i}/800/600`),
  },
  {
    id: "royal",
    name: "Royal Package",
    priceRange: "60k+",
    description: "Luxury decoration for grand events with exquisite details and grand stages.",
    images: Array.from({ length: 9 }, (_, i) => `https://picsum.photos/seed/royal-${i}/800/600`),
  },
];

export const SERVICES: Service[] = [
  {
    id: "haldi",
    title: "Haldi Ceremony Decoration",
    description: "Vibrant yellow-themed decorations for your traditional Haldi ceremony.",
    image: "https://picsum.photos/seed/haldi/800/600",
    packages: commonPackages,
  },
  {
    id: "mehndi",
    title: "Mehndi Ceremony Decoration",
    description: "Creative and colorful setups for a memorable Mehndi night.",
    image: "https://picsum.photos/seed/mehndi/800/600",
    packages: commonPackages,
  },
  {
    id: "wedding-stage",
    title: "Wedding Stage Decoration",
    description: "Grand and elegant stage designs for your big day.",
    image: "https://picsum.photos/seed/wedding/800/600",
    packages: commonPackages,
  },
  {
    id: "reception-stage",
    title: "Wedding Reception Stage Decoration",
    description: "Sophisticated and modern reception stage setups.",
    image: "https://picsum.photos/seed/reception/800/600",
    packages: commonPackages,
  },
  {
    id: "birthday",
    title: "Birthday Stage Decoration",
    description: "Fun and themed decorations for all ages.",
    image: "https://picsum.photos/seed/birthday/800/600",
    packages: commonPackages,
  },
  {
    id: "engagement",
    title: "Engagement Ceremony Stage Decoration",
    description: "Romantic and classy setups for your engagement.",
    image: "https://picsum.photos/seed/engagement/800/600",
    packages: commonPackages,
  },
  {
    id: "islamic-mahfil",
    title: "Islamic Mahfil Stage Decoration",
    description: "Respectful and beautiful arrangements for religious gatherings.",
    image: "https://picsum.photos/seed/mahfil/800/600",
    packages: commonPackages,
  },
  {
    id: "invitation-stage",
    title: "Event Invitation Stage Decoration",
    description: "Welcoming and stylish entrance and invitation area designs.",
    image: "https://picsum.photos/seed/invitation/800/600",
    packages: commonPackages,
  },
  {
    id: "baby-shower",
    title: "Baby Shower Decoration",
    description: "Sweet and gentle decorations to celebrate your new arrival.",
    image: "https://picsum.photos/seed/babyshower/800/600",
    packages: commonPackages,
  },
  {
    id: "lighting-decor",
    title: "Road & Ceiling Lighting Decoration",
    description: "Professional lighting decoration for roads and ceilings to create a stunning atmosphere.",
    image: "https://picsum.photos/seed/lighting/800/600",
    packages: commonPackages,
  },
  {
    id: "wedding-night-room",
    title: "Wedding Night Room Decoration",
    description: "Romantic and luxurious room decoration for the wedding night.",
    image: "https://picsum.photos/seed/weddingroom/800/600",
    packages: commonPackages,
  },
  {
    id: "wedding-car",
    title: "Wedding Car Decoration",
    description: "Elegant car decoration to make the wedding ride special.",
    image: "https://picsum.photos/seed/weddingcar/800/600",
    packages: commonPackages,
  },
  {
    id: "bride-groom-garlands",
    title: "Bride & Groom Flower Garlands",
    description: "Fresh and beautiful flower garlands for bride and groom.",
    image: "https://picsum.photos/seed/garlands/800/600",
    packages: commonPackages,
  },
  {
    id: "tomtom-rental",
    title: "TomTom Car Rental",
    description: "Comfortable and reliable TomTom car rental service for your special events.",
    image: "https://picsum.photos/seed/tomtom/800/600",
    packages: commonPackages,
  },
  {
    id: "palanquin-rental",
    title: "Wedding Palanquin Rental",
    description: "Traditional palanquin rental with charming design for solemn entry.",
    image: "https://picsum.photos/seed/palanquin/800/600",
    packages: commonPackages,
  },
  {
    id: "sherwani-rental-sale",
    title: "Sherwani Rental & Sale",
    description: "Premium sherwani options available for rental and purchase.",
    image: "https://picsum.photos/seed/sherwani/800/600",
    packages: commonPackages,
  },
];
