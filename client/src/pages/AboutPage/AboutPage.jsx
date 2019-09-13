import React from "react";
import { AboutWrap, About, Artists } from "./AboutPage.styles";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { ReactComponent as Anchor } from "../../assets/icons/anchor.svg";
import { artists } from "../../components/ArtistCard/tempArtist";
const AboutPage = () => {
  return (
    <AboutWrap>
      <About className="about-hightide">
        <div>
          <h1>– Who we are –</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            ratione eos rerum quasi molestiae voluptatum nam labore. Corrupti
            quasi molestias aliquam aliquid ratione distinctio error beatae est
            velit eius sapiente numquam, blanditiis itaque nulla fuga
            consequuntur tempore fugiat? Pariatur facilis aliquid deserunt animi
            eligendi odit omnis laudantium sint distinctio aspernatur.
          </p>
        </div>
      </About>
      <Artists>
        {artists.map(artist => (
          <ArtistCard
            name={artist.name}
            about={artist.about}
            phone={artist.phone}
            instagramUrl={artist.instagramUrl}
            handle={artist.handle}
            photo={artist.photo}
          />
        ))}
        {/*
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard /> */}
      </Artists>
    </AboutWrap>
  );
};

export default AboutPage;
