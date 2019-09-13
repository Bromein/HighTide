import React from "react";
import { CardWrap, CardHeader, CardSub, CardContent } from "./Card.styles";

const Card = (...props) => {
  return (
    <CardWrap {...props}>
      <CardHeader {...props}>Title</CardHeader>
      <CardSub {...props}>SubTitle</CardSub>
      <CardContent {...props}>Content</CardContent>
    </CardWrap>
  );
};

export default Card;
