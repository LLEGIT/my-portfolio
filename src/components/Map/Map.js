import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
    const mapStyles = {
    height: "450px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 50.6333,
    lng: 3.0667,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={13}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};