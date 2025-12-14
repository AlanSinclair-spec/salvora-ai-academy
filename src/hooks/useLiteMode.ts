// Enhanced Lite Mode hook with accessibility support
// Combines user settings with system preferences

import { useSettings } from "@/contexts/SettingsContext";
import { useEffect, useState } from "react";

interface LiteModeState {
  isLiteMode: boolean;
  shouldReduceMotion: boolean;
  defaultToQuickView: boolean;
  disableAnimations: boolean;
}

// Hook to check system prefers-reduced-motion
function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Use addEventListener with options for modern browsers
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return prefersReducedMotion;
}

export function useEnhancedLiteMode(): LiteModeState {
  const { settings } = useSettings();
  const prefersReducedMotion = usePrefersReducedMotion();

  const shouldReduceMotion = settings.reduceMotion || prefersReducedMotion;

  return {
    isLiteMode: settings.liteMode,
    shouldReduceMotion,
    defaultToQuickView: settings.liteMode && settings.defaultQuickView,
    // Disable animations if lite mode or reduced motion preference
    disableAnimations: settings.liteMode || shouldReduceMotion,
  };
}

// Re-export for convenience
export { usePrefersReducedMotion };
