import { createI18n } from "vue-i18n";
import en from "@/locales/en.js";
import ja from "@/locales/ja.js";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      ...en,
    },
    ja: {
      ...ja,
    },
  },
});

export default i18n;
