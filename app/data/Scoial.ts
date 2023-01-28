import { isShero } from "~/utils";

const socialLuna = {
  instagramUrl: "https://www.instagram.com/sheroapp/",
  instagram: "@Shero.application",
  email: "support@Shero.info",
};
const socialShero = {
  instagramUrl: "https://www.instagram.com/sheroapp/",
  instagram: "@Shero.application",
  email: "support@Shero.info",
};
export const Social = isShero() ? socialShero : socialLuna;
