import { isShero } from "~/utils";

const socialLuna = {
  instagramUrl: "https://www.instagram.com/luna.application/",
  instagram: "@luna.application",
  email: "support@luna.health",
  twitter: "@lunahealthapp",
  twitterLink: "https://twitter.com/lunahealthapp",
};
const socialShero = {
  instagramUrl: "https://www.instagram.com/sheroapp/",
  instagram: "@Shero.application",
  email: "support@Shero.info",
  twitter: undefined,
  twitterLink: undefined,
};
export const Social = isShero() ? socialShero : socialLuna;
