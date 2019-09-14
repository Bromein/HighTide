import React from "react";
import { TattoArtistCard } from "./ArtistCard.styles";

import { ReactComponent as Insta } from "../../assets/icons/instagram.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";

const ArtistCard = ({
  name,
  about,
  phone,
  instagramUrl,
  handle,
  photo,
  email
}) => {
  return (
    <TattoArtistCard>
      <section>
        <p className="name">{name}</p>
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

      <section className="connect">
        <span className="connect-section">
          <Phone className="icon" />
          <a href={`tel:${phone}`}>{phone}</a>
        </span>
        <span className="connect-section">
          <Mail className="icon" />
          <a href={`mailto:${email}`}>{email}</a>
        </span>
        <span className="connect-section">
          <Insta className="icon" />
          <a href={instagramUrl}>{handle}</a>
        </span>
      </section>
    </TattoArtistCard>
  );
};
export default ArtistCard;
