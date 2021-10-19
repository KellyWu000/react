import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

function Map() {
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
  })
  return (
    <>
      <MapContainer
        center={[25.0723232, 121.4627458]}
        zoom={16}
        scrollWheelZoom={false}
        showPopup={true}
        style={{ height: '100vh', width: '75%', padding: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[25.0723232, 121.4627458]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Marker position={[25.0723999, 121.4627451]}>
          <Popup>
            A pretty 2222222. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Map
