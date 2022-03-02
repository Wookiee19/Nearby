import React from "react";

import BACKEND_URL from "./constants";

import Card from "./Card";
import CardSection from "./CardSection";


const Restaurant = ({ category, cover, district, name, price }) => {
  const src = cover[0] ? cover[0].url : "";

  return (
    <li>
      <Card>
        <div className="img-wrapper">
          <img alt="img" src={`${BACKEND_URL}${src}`} />
        </div>
        <CardSection className="banner">
          <div className="left-infos">
            <h4>{name}</h4>
            <p className="description">
              
              {category && <span>&nbsp;•&nbsp;{category.name}</span>}
              <span>
                &nbsp;•&nbsp;
                {district.includes("_") ? district.replace("_", "") : district}
              </span>
            </p>
          </div>
          <div className="right-infos" />
        </CardSection>
      </Card>
    </li>
  );
};

export default Restaurant;
