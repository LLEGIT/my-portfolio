import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
    const mapStyles = {
    height: "90%",
    width: "100%",
    minHeight: 400,
    minWidth: "100%"
  };

  const defaultCenter = {
    lat: 44.8333,
    lng: -0.5667,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={13}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};