import React, { useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";

import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
const IMG =
  "https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, like = 0, src }) => {
  const [show, setShow] = useState(false);
  const element = useRef(null);
  const [liked, setLinkd] = useState(false);

  useEffect(
    function () {
      console.log(element.current);
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          console.log("si,");
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    },
    [element]
  );
  const Icon = liked ? BsSuitHeartFill : BsSuitHeart;
  return (
    <>
      <Article ref={element}>
        {show && (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={IMG} />
              </ImgWrapper>
            </a>
          </>
        )}

        <Button onClick={() => setLinkd(!liked)}>
          {" "}
          <Icon size="30px" />
          {like} likes!
        </Button>
      </Article>
    </>
  );
};
