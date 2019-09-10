import React from "react";
import Russell from "../../assets/icons/Russell.jpg";
import { TattoArtistCard } from "./ArtistCard.styles";
import { artists } from "./tempArtist";

const ArtistCard = () => {
  return (
    <TattoArtistCard>
      <section>
        <p className="name">Russell</p>
        <p className="phone">(727) 772-7772</p>
      </section>
      <img src={Russell} alt="" />
      <p className="about">
        A fun loving lad who enjoys tattooing for a living @hightidetattoofl
      </p>
      <p className="booking-options">
        <span>Book Me</span>
      </p>
    </TattoArtistCard>
  );
};
export default ArtistCard;
