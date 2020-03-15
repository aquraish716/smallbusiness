import React from 'react'
import { Container } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import LocationOnIcon from 'google-map-react'
const api_key = 'AIzaSyBBKC1L_aWLMPVCefz0zz5bQEStQzoh5hU'
const AnyReactComponent = ({ text }) => <div>{text}</div>

const ListingAboutPage = (props) => {
    const id = props.match.params.id
    const listings = props.listings.find(c => c.id == id)
    
    const defaultProps = {
        center: {
            lat: Number(listings.Latitude),
            lng: Number(listings.Longitude)
        },
        zoom: 11
    }
    return (
        <Container>
            <h2>{listings["businessName"]}</h2>
            <p >{listings["businessDescription"]}</p>
            <p>{listings["businessHours"]}</p>
            <p>{listings["businessAddress"]}</p>
                <div style={{ height: '50vh', width: '75%' }}>
                        <GoogleMapReact
                        bootstrapURLKeys={{ key: api_key}}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        
                       
                        >
                        <AnyReactComponent
                            lat={listings.Latitude}
                            lng={listings.Longitude}
                            text={listings.businessName}
                        />
                        </GoogleMapReact>
                    </div>
        </Container>
    )
}

export default ListingAboutPage