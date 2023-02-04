import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ListOfCategories } from "./components/ListOfCategories";
import { PhotoCard } from "./components/PhotoCard";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard";
import { Logo } from "./components/Logo";
function App() {
  return (
    <>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />

      <ListOfPhotoCard />
    </>
  );
}
export { App };
