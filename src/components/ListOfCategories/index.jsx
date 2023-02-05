import React, { useEffect, useState } from "react";
import { Category } from "../Category";

import { List, Item } from "./styles";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);
  useEffect(function () {
    fetch("https://petgram-server-edsf8xpy2.now.sh/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);
  useEffect(function () {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed != newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  });
  const renderLista = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => {
        return (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        );
      })}
    </List>
  );
  return (
    <>
      {renderLista()}
      {showFixed && renderLista(true)}
    </>
  );
};
