import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ListOfCategories } from "./components/ListOfCategories";
import { PhotoCard } from "./components/PhotoCard";
function App() {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <PhotoCard />
    </>
  );
}
export { App };
