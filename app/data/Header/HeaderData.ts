import { LUNA_PRODUCT, SHERO_PRODUCT } from "~/data/constants";
import type { headerType } from "~/types/headerTypes";
import { isShero } from "~/utils";

export const HeaderData: headerType = [
  {
    title: "HEADER_HOME",
    link: "/",
  },
  {
    title: "HEADER_SUPPORT",
    link: "/HelpCenter",
  },
  {
    title: "HEADER_PREGNANCY_TOOLS",
    link: "/Pregnancy-calculator",
  },
  {
    title: "HEADER_OVULATION_CALCULATOR",
    link: "/Period-calculator",
  },

  {
    title: "HEADER_ABOUT_US",
    link: "/AboutUs",
    condition: LUNA_PRODUCT,
  },
  {
    title: "PRIVACY_TITLE",
    link: "/Privacy",
    extra: true,
    condition: SHERO_PRODUCT,
  },
  {
    title: "CONTACT_US_TITLE",
    link: "/ContactUs",
  },
  {
    title: "TERMS_TITLE",
    link: "/Terms",
    extra: true,
  },
  {
    title: "HEADER_DOWNLOAD",
    link: "/Download",
    extra_mobile: true,
  },
];
