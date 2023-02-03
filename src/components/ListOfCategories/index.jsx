import React from "react";
import { Category } from "../Category";
import { categories } from "../../../api/db.json";
import { List, Item } from "./styles";

export const ListOfCategories = () => {
  return (
    <List>
      {categories.map((category) => {
        return (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        );
      })}
    </List>
  );
};
