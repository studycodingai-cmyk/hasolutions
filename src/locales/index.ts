import { en } from "./en";
import { vi } from "./vi";
import { zh } from "./zh";
import { Locale, TranslationDictionary } from "./types";

export * from "./types";
export { en, vi, zh };

export const translations: Record<Locale, TranslationDictionary> = {
  vi,
  en,
  zh,
};


