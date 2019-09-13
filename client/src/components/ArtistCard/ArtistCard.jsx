import React from "react";
import Russell from "../../assets/icons/Russell.jpg";
import { TattoArtistCard } from "./ArtistCard.styles";
import { artists } from "./tempArtist";
import { ReactComponent as Insta } from "../../assets/icons/instagram.svg";
const ArtistCard = ({ name, about, phone, instagramUrl, handle, photo }) => {
  return (
    <TattoArtistCard>
      <section>
        <p className="name">{name}</p>
        <p className="phone">{phone}</p>
      </section>

      <img src={photo} alt="" />

      <section>
        <p className="about">
          {"A fun loving lad who enjoys tattooing for a living"}
        </p>
        <p className="booking-options">
          <span>Book Me</span>
        </p>
      </section>

      <section className="social">
        <a href={instagramUrl}>
          <Insta />
          {handle}
        </a>
      </section>
    </TattoArtistCard>
  );
};
export default ArtistCard;
