export const enum imagesKey {
  "LOGO",
  "FRAME_MAIN",
  "APP_STORE",
  "GOOGLE_PLAY",
  "PERSON_1",
  "PERSON_2",
  "PERSON_3",
  "ICON",
  "FRAME_1",
  "FRAME_2",
  "FRAME_3",
  "FRAME_4",
  "FRAME_5",
}
interface imageTypesValue {
  url: string | { shero: string; luna: string };
  type?: "image" | "svg";
}
export type imageTypes = Record<keyof typeof imagesKey, imageTypesValue>;
