export const enum imagesKey {
  "LOGO",
  // market
  "APP_STORE",
  "GOOGLE_PLAY",
  "PWA",
  //
  "PERSON_1",
  "PERSON_2",
  "PERSON_3",
  "ICON",
  //
  "FRAME_MAIN",
  "FRAME_MAIN_DARK_HALF",
  "FRAME_1",
  "FRAME_2",
  "FRAME_3",
  "FRAME_4",
  "FRAME_5",
  //
  "SLIDER_1",
  "ABOUT_TITLE",
  "TERM_TITLE",
  // team
  "ASHKAN",
  "ATABAK",
  "BEHRAD",
  "EHSAN",
  "MAZIYAR",
  "MOHAMMAD",
  "MOHAMMAD_TP",
  "NEDA",
  "RAHIL",
  "RAMIN",
  "SAHAR",
  "SANA",
  "YASER",
  //
  "PRIVACY_TITLE",
  //
  "GETTING_STARTED",
  //
  "CONTACT_US_TITLE",
}
interface imageTypesValue {
  url: string | { shero: string; luna: string };
  type?: "image" | "svg";
}
export type imageTypes = Record<keyof typeof imagesKey, imageTypesValue>;
