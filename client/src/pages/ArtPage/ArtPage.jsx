import React, { useEffect, useState } from "react";
import { ArtWrap, Images } from "./ArtPage.styles";
import { artArray } from "./ScrapedArt";
import LazyLoad from "react-lazyload";

const ArtPage = () => {
  // Why does Instagram hate developers so much? Sorry about the local array.

  return (
    <ArtWrap>
      <Images>
        {artArray.map(art => (
          <LazyLoad key={art.url} height={200}>
            <div className="contain">
              <img src={art.imageUrl} alt="artwork" />
            </div>
          </LazyLoad>
        ))}
      </Images>
    </ArtWrap>
  );
};

export default ArtPage;
