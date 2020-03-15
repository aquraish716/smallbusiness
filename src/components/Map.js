import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const api_key = 'AIzaSyDpgbepVjfefYlDLJ7nviuC_aIMo7wdfEk'

const Map = (props) => {
    const Map = (props) => {

        const defaultProps = {
            center: {
                lat: props.lat,
                lng: props.lng,
            },
            zoom: 11
        }

    return (
        <Container style={{ height: '400px', width: '400px',margin: 'auto', padding: '40px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: api_key }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals

            >
                <LocationOnIcon
                    lat={props.lat}
                    lng={props.lng}
                />

            </GoogleMapReact>
        </Container>
    )
}
}

export default Map