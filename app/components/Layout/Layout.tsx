import { Outlet } from "@remix-run/react";
import { Fragment } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Main } from "~/components/Main";

export const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Fragment>
  );
};
