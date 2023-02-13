import { isShero } from "~/utils";
interface marketLink {
  googlePlay?: string;
  PWA?: string;
  cafeBazar?: string;
  appStore?: string;
}

const lunaMarketLink: marketLink = {
  googlePlay: "https://play.google.com/store/apps/details?id=com.lunaapp",
  PWA: "https://web.luna.health/SplashScreen",
  cafeBazar: "https://cafebazaar.ir/app/com.lunaapp",
  appStore: "https://apps.apple.com/us/app/luna-period-tracker/id1605495324",
};
const sheroMarketLink: marketLink = {};

export const market = isShero() ? sheroMarketLink : lunaMarketLink;
