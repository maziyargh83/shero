import { HeaderMenu } from "~/components/Header/HeaderMenu";
import { HeaderData } from "~/data";
import { imageBuilder } from "~/utils";
export const Header = () => {
  return (
    <header>
      <div>
        <img src={imageBuilder("LOGO")} alt="logo" />
        {HeaderData.map((data) => {
          return <HeaderMenu key={data.title + "_menu_item"} {...data} />;
        })}
      </div>
    </header>
  );
};
