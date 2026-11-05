import { en } from "./en";
import { vi } from "./vi";
import { Locale, TranslationDictionary } from "./types";

export * from "./types";
export { en, vi };

export const translations: Record<Locale, TranslationDictionary> = {
  vi,
  en,
};

