import React from "react";
const IMAGEN = "https://i.imgur.com/dJa0Hpl.jpg";
import { Ancort, Image } from "./styles";
export const Category = ({ cover = IMAGEN, path, emoji: emoji = "?" }) => {
  return (
    <div>
      <Ancort href={path}>
        <Image src={cover} />
        {emoji}
      </Ancort>
    </div>
  );
};
