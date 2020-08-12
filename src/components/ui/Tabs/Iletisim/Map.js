import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const handleMapClick = () => {
    window.open(
      'https://www.google.com/maps/place/Connect+Yurt+D%C4%B1%C5%9F%C4%B1+E%C4%9Fitim+Dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1/@40.9912558,29.1039779,20z/data=!4m12!1m6!3m5!1s0x14cac79bd937f79f:0x5fedc6bb6f417edc!2zQ29ubmVjdCBZdXJ0IETEscWfxLEgRcSfaXRpbSBEYW7EscWfbWFubMSxxJ_EsQ!8m2!3d40.9912199!4d29.1042434!3m4!1s0x14cac79bd937f79f:0x5fedc6bb6f417edc!8m2!3d40.9912199!4d29.1042434'
    );
  };

  return (
    <Map
      google={props.google}
      zoom={12}
      initialCenter={{ lat: 40.991271, lng: 29.104375 }}
      containerStyle={{ width: '100%', height: '30em', position: 'relative' }}>
      <Marker
        title={'Connect Yurt Disi Egitim Danismanligi'}
        name={'Connect'}
        position={{ lat: 40.991271, lng: 29.104375 }}
        onClick={handleMapClick}
      />
    </Map>
  );
};

export default GoogleApiWrapper({ apiKey: 'AIzaSyCf2cM3g7U_wxxuzcWRrsm3F-Gw1nY2yZU' })(
  MapContainer
);
