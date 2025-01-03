import GoogleMapReact from 'google-map-react';

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
};

const Maps = () => {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}></GoogleMapReact>
    </div>
  );
};

export default Maps;
