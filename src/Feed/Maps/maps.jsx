import React from 'react';
import GoogleMapReact from 'google-map-react';
import './maps.css';

const LocationMarker = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'blue',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

const LocMaps = () => {
  const defaultProps = {
    center: {
      lat: 31.520370,
      lng: 74.358749
    },
    zoom: 11
  };

  return (
    <div style={{ height: '80vh', width: '100vh' }} className='overflow-x-auto overflow-y-auto  mx-60 my-20  max-h-svh'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD_C357wkKPMYw_uHtbQdCfO80D7NrmPoc' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <LocationMarker
          lat={31.520370}
          lng={74.358749}
          text="My Location"
        />
      </GoogleMapReact>
    </div>
  );
};

export default LocMaps;
