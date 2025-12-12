// Icon utility for dynamic icon loading
// Maps string icon names to Lucide React components

import {
  Brain,
  GraduationCap,
  BookOpen,
  Globe,
  Sparkles,
  Bot,
  Code,
  Play,
  FileText,
  CheckCircle2,
  Lock,
  Calendar,
  ClipboardList,
  MessageSquare,
  Calculator,
  Lightbulb,
  Users,
  School,
  Building2,
  Award,
  Target,
  Zap,
  Heart,
  Star,
  TrendingUp,
  Shield,
  Eye,
  Settings,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  GraduationCap,
  BookOpen,
  Globe,
  Sparkles,
  Bot,
  Code,
  Play,
  FileText,
  CheckCircle2,
  Lock,
  Calendar,
  ClipboardList,
  MessageSquare,
  Calculator,
  Lightbulb,
  Users,
  School,
  Building2,
  Award,
  Target,
  Zap,
  Heart,
  Star,
  TrendingUp,
  Shield,
  Eye,
  Settings,
};

/**
 * Get a Lucide icon component by name
 * @param name - The name of the icon (e.g., "Brain", "GraduationCap")
 * @returns The Lucide icon component, or Brain as fallback
 */
export function getIconByName(name: string): LucideIcon {
  return iconMap[name] || Brain;
}

/**
 * Check if an icon name is valid
 * @param name - The name to check
 * @returns true if the icon exists in the map
 */
export function isValidIconName(name: string): boolean {
  return name in iconMap;
}

/**
 * Get all available icon names
 * @returns Array of valid icon names
 */
export function getAvailableIcons(): string[] {
  return Object.keys(iconMap);
}
