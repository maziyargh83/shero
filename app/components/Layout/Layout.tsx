import { Outlet, useMatches } from "@remix-run/react";
import { Fragment, useMemo, useState } from "react";
import CONFIG from "~/Config";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ClipPath } from "~/components/Icons";
import { Main } from "~/components/Main";

export const Layout = () => {
  const matches = useMatches();
  const disable = useMemo(() => {
    return matches.some((item) => CONFIG.disableTheme.includes(item.id));
  }, [matches]);
  if (disable) return <Outlet />;
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
