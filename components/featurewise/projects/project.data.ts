import { Image, Users, Code2, Fish, Sparkles } from "lucide-react"

import { project } from "./projects.types"

export const SCROLL_PER_CARD = 500 // px of scroll to transition to next card

export const projects: project[] = [
  {
    id: "01",
    category: "Travel & Tourism",
    title: "VacanzaMyCost – Multi-role Tour Management Platform",
    description:
      "Led frontend development of a multi-role platform with real-time bidding, chat, payments, Google Maps, dual language, and AI image generation.",
    icon: Image,
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
    accentBorder: "rgba(167,139,250,0.20)",
    tags: ["React.js", "Next.js", "Tailwind CSS", "WebSocket", "TanStack Query"],
    imageSrc: "https://res.cloudinary.com/dfsu0cuvb/image/upload/q_auto/f_auto/v1776507420/vacanzamycost-it-Home-04-18-2026_11_54_AM_vyk5oo.png",
    cta: "View Project",
  },

  {
    id: "02",
    category: "Healthcare & AI",
    title: "Kyro – AI-powered Clinic Management System",
    description:
      "Led entire frontend for an AI-powered clinic system with real-time messaging, notifications, AI Assistant, Chatty AI, and Assessment Generator.",
    icon: Users,
    accent: "#38bdf8",
    accentBg: "rgba(56,189,248,0.08)",
    accentBorder: "rgba(56,189,248,0.20)",
    tags: ["React.js", "Next.js", "WebSocket", "AI Integration"],
    imageSrc: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781429444/kyro_wbsnyl.png",
    cta: "View Project",
  },

  {
    id: "03",
    category: "Business & Portfolio",
    title: "Vopromos – Business Portfolio",
    description:
      "Full-stack business portfolio website built with React & Tailwind CSS. Ranks #1 on Google Search with integrated Node.js backend.",
    icon: Code2,
    accent: "#34d399",
    accentBg: "rgba(52,211,153,0.08)",
    accentBorder: "rgba(52,211,153,0.20)",
    tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
    imageSrc: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781429445/vopromos_x0w2xm.png",
    cta: "View Project",
  },

  {
    id: "04",
    category: "Veterans & AI",
    title: "Valr Pro – VA Disability Claims Platform",
    description:
      "AI-powered platform for veterans to manage disability claims with AI narrative generation, rating calculator, secure document handling, and admin dashboard.",
    icon: Sparkles,
    accent: "#fb923c",
    accentBg: "rgba(251,146,60,0.08)",
    accentBorder: "rgba(251,146,60,0.20)",
    tags: ["React.js", "Next.js", "AI Features", "Secure Payments"],
    imageSrc: "https://res.cloudinary.com/dfsu0cuvb/image/upload/q_auto/f_auto/v1775554273/VALRPRO-04-07-2026_03_17_PM_r1ayif.png",
    cta: "View Project",
  },

  {
    id: "05",
    category: "Beauty & AI",
    title: "YourSelf Beauty – AI-powered Skincare Platform",
    description:
      "AI-driven skincare platform with personalized recommendations, skin analysis, tracking, reviews, AI skin quiz, and real-time chat/calling.",
    icon: Fish,
    accent: "#f472b6",
    accentBg: "rgba(244,114,182,0.08)",
    accentBorder: "rgba(244,114,182,0.20)",
    tags: ["React.js", "Next.js", "WebSocket", "AI Features"],
    imageSrc: "https://res.cloudinary.com/dbmdhxmtx/image/upload/v1781429440/beauty_irn7xy.png",
    cta: "View Project",
  },
];