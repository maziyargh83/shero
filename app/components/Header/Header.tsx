import { imageBuilder } from "~/utils";

export const Header = () => {
  return (
    <header>
      <img src={imageBuilder("LOGO")} />
    </header>
  );
};
