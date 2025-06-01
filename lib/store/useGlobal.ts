import { create } from "zustand";
import { persist } from "zustand/middleware";
import { EN, EN_PROJECTS } from "@/locales/en";
import { ZH_TW, ZH_TW_PROJECTS } from "@/locales/zh-tw";
import { Locale } from "@/types";

interface I18nStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const useI18nStore = create<I18nStore>()(
  persist(
    (set) => ({
      locale: "en",
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: "locale-storage",
    }
  )
);

export const useTranslations = () => {
  const { locale } = useI18nStore();

  const translations = {
    en: EN,
    "zh-TW": ZH_TW,
  };

  return translations[locale];
};

export const useProject = (project: string) => {
  const { locale } = useI18nStore();

  const translations = {
    en: EN_PROJECTS,
    "zh-TW": ZH_TW_PROJECTS,
  };

  return translations[locale][
    project as keyof (typeof translations)[typeof locale]
  ];
};
