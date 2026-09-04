import type { CreativeItem } from '../types';

export const CREATIVE_STATEMENT = {
  title: "Beyond Technology",
  subtitle: "Creating Beyond Code",
  statement: "Beyond technology and code, I enjoy creating handmade resin and UV resin art. Working with resin allows me to explore creativity, design, color chemistry, tactile craftsmanship, and experimentation in a completely different medium.",
  philosophy: "Just like software engineering requires precision, modularity, and patience, crafting resin art demands an exact ratio of resin to hardener, timing, heat management, and an eye for composition. It offers a tangible creative counterweight to the digital world.",
  areas: [
    {
      title: "Resin Art",
      description: "Epoxy resin casting, layered fluid dynamics, pigment suspensions, and custom decorative pieces.",
      badge: "Epoxy Medium"
    },
    {
      title: "UV Resin Art",
      description: "Precision micro-casting cured with ultraviolet light, intricate inclusions, and detailed miniature designs.",
      badge: "UV Precision"
    },
    {
      title: "Handmade Crafts",
      description: "Handcrafted accessories, experimental color blends, botanical preservation, and custom artisanal artifacts.",
      badge: "Handcrafted"
    }
  ]
};

export const CREATIVE_GALLERY: CreativeItem[] = [
  {
    id: "resin-1",
    title: "Celestial Fluid Geode",
    medium: "Epoxy Resin & Metallic Mica Pigments",
    category: "Resin Art",
    description: "Deep oceanic and celestial fluid art created with layered epoxy resin, micro-glitter dispersions, and metallic gold vein accents.",
    accentColor: "from-blue-600 to-indigo-900",
    aspectRatio: "aspect-square",
    details: ["Multi-layer pour", "Gold leaf accents", "High-gloss mirror finish"]
  },
  {
    id: "resin-2",
    title: "Botanical Floral Pendant",
    medium: "UV Crystal Clear Resin & Preserved Florals",
    category: "UV Resin Art",
    description: "Miniature handcrafted botanical pendant encasing delicate dried flora in crystal-clear, bubble-free UV cured resin.",
    accentColor: "from-emerald-600 to-teal-800",
    aspectRatio: "aspect-[4/5]",
    details: ["Botanical specimen", "UV cured in stages", "Sterling bezel mounting"]
  },
  {
    id: "resin-3",
    title: "Iridescent Cosmic Coaster Set",
    medium: "Epoxy Resin & Holographic Color-Shift Powders",
    category: "Resin Art",
    description: "Functional set of artisanal coasters featuring fluid color-shift pigments that transform under differing ambient light angles.",
    accentColor: "from-purple-600 to-pink-900",
    aspectRatio: "aspect-square",
    details: ["Thermal resistant", "Edge hand-gilded", "Scratch-resistant topcoat"]
  },
  {
    id: "resin-4",
    title: "Minimalist Ocean Shore Wave",
    medium: "Multi-layered Resin on Natural Wood",
    category: "Crafts",
    description: "Realistic foaming white wave crests formed with heat manipulation and white alcohol ink over natural live-edge wood grain.",
    accentColor: "from-cyan-600 to-blue-950",
    aspectRatio: "aspect-[16/9]",
    details: ["Live-edge wood base", "Torch wave lacing", "Lustrous depth"]
  },
  {
    id: "resin-5",
    title: "Aurora Glow UV Shaker Charm",
    medium: "UV Resin & Liquid Glow Medium",
    category: "UV Resin Art",
    description: "Intricate domed shaker charm with luminescent floating stars and liquid mineral oil core, completely sealed with UV resin.",
    accentColor: "from-teal-500 to-indigo-800",
    aspectRatio: "aspect-[4/5]",
    details: ["Hollow shaker cavity", "Photoluminescent", "Zero-leak seal"]
  },
  {
    id: "resin-6",
    title: "Emerald & Quartz Terrazzo Tray",
    medium: "Epoxy Resin with Embedded Glass & Crystal Chips",
    category: "Resin Art",
    description: "Hexagonal modern display tray combining jewel-toned emerald resin with crushed clear quartz and gold dust.",
    accentColor: "from-emerald-700 to-green-950",
    aspectRatio: "aspect-square",
    details: ["Heavyweight cast", "Diamond polished edges", "Anti-skid base pads"]
  }
];
