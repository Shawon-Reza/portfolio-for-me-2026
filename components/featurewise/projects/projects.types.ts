import { LucideIcon } from "lucide-react"

export type project = {
  id: string
  category: string
  title: string
  description: string
  icon: LucideIcon
  accent: string
  accentBg: string
  accentBorder: string
  tags: string[]
  imageSrc: string
  cta: string
}
