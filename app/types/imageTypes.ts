export const enum imagesKey {
  "LOGO",
}
interface imageTypesValue {
  url: string | { shero: string; luna: string };
  type?: "image" | "svg";
}
export type imageTypes = Record<keyof typeof imagesKey, imageTypesValue>;
