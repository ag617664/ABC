import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '40vw',
  height: '40vh',
  margin:'auto'
};
const center = {
  lat: 28.698297, // default latitude
  lng: 77.123347, // default longitude
};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCggsWkY_vdHiz-2i39U5mPPPseK73FP7c',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={17}
        center={center}
>
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default App;