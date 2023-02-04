import React from "react";

export const PhotoCard = ({ id, like = 0, src }) => {
  return (
    <>
      <article>
        <a href={`/detail/${id}`}>
          <div>
            <img src={src} />
          </div>
        </a>
        <button>{like} likes!</button>
      </article>
    </>
  );
};
