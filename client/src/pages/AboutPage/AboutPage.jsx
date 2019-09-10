import React from "react";
import { AboutWrap } from "./AboutPage.styles";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

const AboutPage = () => {
  return (
    <AboutWrap>
      <div className="about-hightide">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ratione
          eos rerum quasi molestiae voluptatum nam labore. Corrupti quasi
          molestias aliquam aliquid ratione distinctio error beatae est velit
          eius sapiente numquam, blanditiis itaque nulla fuga consequuntur
          tempore fugiat? Pariatur facilis aliquid deserunt animi eligendi odit
          omnis laudantium sint distinctio aspernatur.
        </p>
      </div>
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
      <ArtistCard />
    </AboutWrap>
  );
};

export default AboutPage;
