import React, {useState, Component} from "react";
import "./RestaurantTeaser.css";
import { data } from "../data/data";
import { PreviewCard } from "../PreviewCard/PreviewCard";
import "../PreviewCard/PreviewCard.css";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function RestaurantTeaser(props) {
  const defaultProps = {
    center: {
      lat: props.restaurant.location.latitude,
      lng: props.restaurant.location.longitude
    },
    zoom: 14
  };
   
  return (
    <div className="restaurant-teaser">
      <div className="restaurant-teaser__background">
      <div style={{ height: '100vh', width: '100%' }}>
      
        <GoogleMapReact
        
          bootstrapURLKeys={{ key: "AIzaSyC87tvxkpDiF98HFzYaWqJq_T2B0Mmg-6M" }}
          defaultCenter={defaultProps.center}
          defaultZoom= {defaultProps.zoom}
        >
          <AnyReactComponent
            lat={ props.restaurant.location.latitude}
            lng={ props.restaurant.location.longitude}
            text={props.restaurant.title}
            color="blue"
          />
        </GoogleMapReact>
      </div>
     
        {/* <img
          src={props.restaurant.largeImageUrl}
          className="restaurant-teaser__background-image"
          alt={props.restaurant.title}
        />  */}
       </div>
      {/* <div className="restaurant-teaser__wrapper">
        <div className="restaurant-teaser__preview-card">
          <PreviewCard restaurant={data}/>
        </div>
      </div> */}
    </div>
  );
}
