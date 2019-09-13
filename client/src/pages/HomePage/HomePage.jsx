import React from "react";
import { HomeWrap, RecentWork, Hero } from "./HomePage.styled";
import Card from "../../components/Card/Card";

const HomePage = () => {
  return (
    <HomeWrap>
      {/* <Hero className="hero">
        <p className="title">
          Empower your <span>creativity</span>
        </p>
      </Hero> */}

      <RecentWork>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </RecentWork>
    </HomeWrap>
  );
};

export default HomePage;
