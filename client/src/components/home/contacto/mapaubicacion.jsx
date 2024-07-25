import React from 'react'
import GoogleMapReact from 'google-map-react';

import location from '../../../assets/iconos/contacto/location.png'

export default function MapaUbicacion({proporcional}) {
    
    const AnyReactComponent = ({ text }) => <img src={location} style={{width: 34 / proporcional, height: 48 / proporcional}}/>;
 
    const defaultProps_1 = {
        center: {
          lat: -12.2547532,
          lng: -76.8877542
        },
        zoom: 14
      };

    return (
        <div style={{width: '100%', height: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCwoATN7RLTSy4jWO_iK4rQbHXfeNHFuxs" }}
                defaultCenter={defaultProps_1.center}
                defaultZoom={defaultProps_1.zoom}
            >
                <AnyReactComponent
                    lat={-12.2547532}
                    lng={-76.8877542}
                    text="Almacen Paul Poblet"
                />
            </GoogleMapReact>
        </div>
    )
}
