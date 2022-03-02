import React from "react";
import Restaurant from "./Restaurant";

const Restaurants = ({ restaurants }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {restaurants.map((restaurant) => (
        <Restaurant {...restaurant} key={restaurant.id} />
      ))}
    </ul>
  );
};

export default Restaurants;
