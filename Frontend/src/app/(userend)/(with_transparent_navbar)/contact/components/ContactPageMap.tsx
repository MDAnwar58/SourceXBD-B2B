"use client";

import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
   width: "100%",
   height: "400px",
};

const defaultCenter = {
   lat: -3.745, // Default latitude
   lng: -38.523, // Default longitude
};

function ContactPageMap() {
   const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyCXrjTaVRgnY6VRVipbXfNn6egqcUKiL-k",
   });

   const [selectedLocation, setSelectedLocation] = useState(defaultCenter);

   const handleMapClick = useCallback((event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
         setSelectedLocation({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
         });
      }
   }, []);

   return isLoaded ? (
      <GoogleMap
         mapContainerStyle={containerStyle}
         center={selectedLocation}
         zoom={10}
         onClick={handleMapClick} // Add onClick handler
      >
         {/* Marker to show the selected location */}
         <Marker position={selectedLocation} />
      </GoogleMap>
   ) : (
      <div>Loading...</div>
   );
}

export default React.memo(ContactPageMap);
