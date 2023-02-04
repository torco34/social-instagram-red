import React from "react";
import { ImgWrapper, Img, Button } from "./styles";
import { AiTwotoneHeart } from "react-icons/ai";
const IMG =
  "https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
export const PhotoCard = ({ id, like = 0, src }) => {
  return (
    <>
      <article>
        <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={IMG} />
          </ImgWrapper>
        </a>
        <Button>
          {" "}
          <AiTwotoneHeart size="30px" />
          {like} likes!
        </Button>
      </article>
    </>
  );
};
