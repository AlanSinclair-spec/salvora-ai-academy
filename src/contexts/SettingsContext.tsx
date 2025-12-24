// Settings Context for Salvora AI Academy
// Manages app-wide settings including Lite Mode and Classroom Mode

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { z } from "zod";
import type { AppSettings } from "@/types/settings";
import { DEFAULT_SETTINGS } from "@/types/settings";

const STORAGE_KEY = "salvora-settings";

// Zod schema for AppSettings validation
const AppSettingsSchema = z.object({
  liteMode: z.boolean(),
  disableVideos: z.boolean(),
  offlineSaving: z.boolean(),
  classroomMode: z.boolean(),
  preferredLanguage: z.literal("es"),
  reduceMotion: z.boolean(),
  defaultQuickView: z.boolean(),
  darkMode: z.boolean().optional().default(true),
});

interface SettingsContextType {
  settings: AppSettings;
  updateSettings: (partial: Partial<AppSettings>) => void;
  resetSettings: () => void;
  isLiteMode: boolean;
  isClassroomMode: boolean;
  isDarkMode: boolean;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

function loadSettings(): AppSettings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_SETTINGS;
    
    const parsed = JSON.parse(stored);
    const validated = AppSettingsSchema.safeParse(parsed);
    
    if (validated.success) {
      return { ...DEFAULT_SETTINGS, ...validated.data };
    }
    
    console.warn("Invalid settings data, using defaults");
    return DEFAULT_SETTINGS;
  } catch (error) {
    console.error("Error loading settings:", error);
    return DEFAULT_SETTINGS;
  }
}

function saveSettings(settings: AppSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.error("Error saving settings:", error);
  }
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>(loadSettings);

  // Save to localStorage whenever settings change
  useEffect(() => {
    saveSettings(settings);
  }, [settings]);

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    if (settings.darkMode) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [settings.darkMode]);

  const updateSettings = (partial: Partial<AppSettings>) => {
    setSettings((prev) => ({ ...prev, ...partial }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  const value: SettingsContextType = {
    settings,
    updateSettings,
    resetSettings,
    isLiteMode: settings.liteMode,
    isClassroomMode: settings.classroomMode,
    isDarkMode: settings.darkMode,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextType {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}

// Convenience hook for just checking lite mode
export function useLiteMode(): boolean {
  const { isLiteMode } = useSettings();
  return isLiteMode;
}

// Convenience hook for classroom mode
export function useClassroomMode(): boolean {
  const { isClassroomMode } = useSettings();
  return isClassroomMode;
}
