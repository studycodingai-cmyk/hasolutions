"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, TranslationDictionary, translations } from "@/locales";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "hasolutions_locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default language is Vietnamese ("vi")
  const [locale, setLocaleState] = useState<Locale>("vi");

  useEffect(() => {
    // Check localStorage on client mount
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "en" || saved === "vi" || saved === "zh") {
        setLocaleState(saved);
      }
    } catch {
      // LocalStorage unavailable, keep default "vi"
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLocale = () => {
    if (locale === "vi") setLocale("en");
    else if (locale === "en") setLocale("zh");
    else setLocale("vi");
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

