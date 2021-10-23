import React, { useState } from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useHistory } from 'react-router'

function  ResMap() {
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
  })

  const [location, setLocation] = useState();


  const history = useHistory();

  console.log(history.location.state.mapData);
  console.log(history.location.state);

  return (
    <>

      <MapContainer
      // 中心點: 會是你輸入的經緯
        center={[history.location.state.lat, history.location.state.lng]}
        zoom={14}
        scrollWheelZoom={false}
        showPopup={true}
        style={{ height: '100vh', width: '20%', padding: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          history.location && history.location.state && history.location.state.mapData &&
          history.location.state.mapData.map((item, index) => {
            return (
              <Marker key={index} position={[item.res_lng, item.res_lat]}>
                <Popup>
               
                
                <h4>{item.res_name} </h4> 
                  {item.res_rate}
                <p>{item.res_introduce}</p>
                <p>{item.res_starttime}-{item.res_endtime	}</p>
                
                
                </Popup>
            </Marker>
            )
          })
        }

        {/* <Marker position={[25.0723232, 121.4627458]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker position={[25.0723999, 121.4627451]}>
          <Popup>
            A pretty 2222222. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </>
  )
}

export default ResMap