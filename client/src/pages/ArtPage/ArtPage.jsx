import React, { useEffect, useState } from "react";
import { ArtWrap, Images, Filters } from "./ArtPage.styles";
import { artArray } from "./ScrapedArt";
import LazyLoad from "react-lazyload";

const ArtPage = () => {
  // Why does Instagram hate developers so much? Sorry about the local array.

  const [filter, setFilter] = useState(false);
  const [artPosts, setArtPosts] = useState(artArray);
  const [filteredPosts, setFilteredPosts] = useState([...artPosts]);
  useEffect(() => {
    const filterPosts = () => {
      if (filter) {
        setFilteredPosts(artPosts.filter(art => art.artist === filter));
      } else {
        setFilteredPosts([...artPosts]);
      }
    };
    filterPosts();
  }, [filter]);
  return (
    <ArtWrap>
      <Images>
        <Filters>
          <li onClick={() => setFilter(false)}>All</li>
          <li onClick={() => setFilter("Chris Russell")}>Chris</li>
          <li onClick={() => setFilter("Neil Powers")}>Neil</li>
          <li onClick={() => setFilter("Cory Connell")}>Cory</li>
          <li onClick={() => setFilter("Fallon")}>Fallon</li>
        </Filters>
        {/* {artArray.filter(artist => artist.name === filter)} */}

        {filteredPosts.map(art => (
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
