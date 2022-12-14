import { useState } from 'react'
import GoogleMapReact from 'google-map-react'

// define constants
// const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ center, zoom }) => {
    // const [locationInfo, setLocationInfo] = useState(null)

    // const markers = eventData.map((ev, index) => {
    //     if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
    //         return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    //     }
    //     return null
    

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyB7kl-oMVAcRXLF5kkfjoDi5D4CNEldWBw'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {/* {markers} */}
            </GoogleMapReact>
            {/* {locationInfo && <LocationInfoBox info={locationInfo} />} */}
        </div>
    )
    }

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
