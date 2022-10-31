import type { languageKeys } from "~/types/langKeys";

const EN: Record<keyof typeof languageKeys, string> = {
  HEADER_HOME: "home",
  HEADER_SUPPORT: "support",
  HEADER_PREGNANCY_TOOLS: "Pregnancy Tools",
  HEADER_BLOG: "blog",
  HEADER_ABOUT_US: "About Us",
  HEADER_OVULATION_CALCULATOR: "Ovulation Calculator",
  HEADER_DOWNLOAD: "download",
  APP_NAME: "Shero",
  APP_SUBTITLE: "with health",
  APP_DESCRIPTION:
    "Shero is a smart and simple calendar for women's health tracking. Shero has different features such as tracking and predicting the exact calendar of menstruation and ovulation, and pregnancy tracking will be added to Shero's predictions soon.",
  GETTING_START: "Getting Started",
};
export default EN;
