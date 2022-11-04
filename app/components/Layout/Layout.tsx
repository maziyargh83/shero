import { Outlet } from "@remix-run/react";
import { Fragment } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ClipPath } from "~/components/Icons";
import { Main } from "~/components/Main";

export const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <ClipPath />
    </Fragment>
  );
};
