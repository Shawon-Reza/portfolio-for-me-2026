import { Image, Users, Code2, Fish } from "lucide-react"
import { Service } from "./services.types"
import codeguardian from "../../../assets/projects/codeguardian.png"
import hiremind from "../../../assets/projects/hiremind.png"
import aquavision from "../../../assets/projects/aqua.png"
import candy from "../../../assets/projects/candy.png"

export const SCROLL_PER_CARD = 500 // px of scroll to transition to next card

export const services: Service[] = [
  {
    id: "01",
    category: "Artificial Intelligence",
    title: "CANDY – Your Personal AI Assistant",
    description:
      "End-to-end image captioning system using CNN and LSTM models. Trained on COCO dataset to generate contextual descriptions for images.",
    icon: Image,
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.08)",
    accentBorder: "rgba(167,139,250,0.20)",
    tags: ["TensorFlow", "OpenCV", "CNN", "LSTM", "Python"],
    imageSrc: candy.src,
    cta: "View Project",
  },
  {
    id: "02",
    category: "Machine Learning",
    title: "HireMind AI – AI-Powered Recruitment System",
    description:
      "Intelligent recruitment platform with 87% candidate-job matching accuracy. Automates resume screening and reduces hiring time by 60% using NLP and ML ranking.",
    icon: Users,
    accent: "#38bdf8",
    accentBg: "rgba(56,189,248,0.08)",
    accentBorder: "rgba(56,189,248,0.20)",
    tags: ["NLP", "Scikit-learn", "LLM", "Next.js", "Python"],
    imageSrc: hiremind.src,
    cta: "View Project",
  },
  {
    id: "03",
    category: "Machine Learning",
    title: "Code Guardian – AI Code Debugging Assistant",
    description:
      "AI-powered debugging tool supporting C, C++, Java, and Python. Achieved 98% error detection accuracy with pattern matching and AST analysis.",
    icon: Code2,
    accent: "#34d399",
    accentBg: "rgba(52,211,153,0.08)",
    accentBorder: "rgba(52,211,153,0.20)",
    tags: ["Python", "HTML", "CSS", "JavaScript", "AST"],
    imageSrc: codeguardian.src,
    cta: "View Project",
  },
  {
    id: "04",
    category: "Computer Vision",
    title: "AquaVision AI – Fish Species Classifier",
    description:
      "Real-time fish classification system using ResNet50 transfer learning. Reduced identification time to under 2 seconds with <5% misclassification rate.",
    icon: Fish,
    accent: "#fb923c",
    accentBg: "rgba(251,146,60,0.08)",
    accentBorder: "rgba(251,146,60,0.20)",
    tags: ["OpenCV", "TensorFlow", "Transfer Learning", "ResNet50"],
    imageSrc: aquavision.src,
    cta: "View Project",
  },
]
