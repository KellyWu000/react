import { Link } from 'react-router-dom'
import React, { useRef, useState, useEffect } from 'react'
import '../../App.scss'
import { BsCursor } from 'react-icons/bs'
import { imgUrl } from '../../config'
// import { RESTAURANT } from '../../config'
import ResList from './ResList'
import SortBtn from '../../components/Restaurant/SortBtn'
import Popular from '../../components/Restaurant/ResPopular'
import TitleBorder from '../../components/TitleBorder'
import Geocode from 'react-geocode'
import { apiKey } from '../../api/googleApi'
import { useHistory } from 'react-router-dom'
// import { data } from '../../data'


function Restaurants(props) {
  const [lat, setLat] = useState(25.033198)
  const [lng, setLng] = useState(121.543575)
  const [address, setAddress] = useState('')
  const [apiData, setApiData] = useState([]);
  const history = useHistory()
  const myRef = useRef(null)

 async function  test(){
      let r= await fetch('http://localhost:3002/reslist');
      let j = await r.json();
      if(j.length){
        setApiData(j);
      }
      
  }
useEffect(()=>{
  test();
},[])
 
  
  const onSubmit = () => {
    // history.push('/map')
   test();
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })//滾動效果
    Geocode.setApiKey(apiKey)//輸入地址抓經緯度
    Geocode.setLanguage('zh-TW')
    Geocode.setRegion('tw')
    Geocode.enableDebug()
    Geocode.fromAddress(address).then((response)=>{
      const { lat, lng } = response.results[0].geometry.location
      console.log(lat,lng);
      setLat(lat)
      setLng(lng)
    },(error)=>{
      console.error(error)
    }
    )
  }
// useEffect (()=>{
//   (async()=>{
//     let r= await fetch(ResList);
//     let j = await r.json();
//     if(j.apiData){
//       setApiData(j);
//     }
//     })();
//   },[]);
   


  return (
    <>
      <div
        className="res-banner p-0"
        style={{
          // backgroundImage: `url(${`${imgUrl}/images/banner.jpg`})`,
          backgroundImage: `url('http://localhost:3000/images/Restaurant/banner.jpg')`,

        }}
      >
        <div className="res-slogan">
          <h1>尋找，</h1>
          <h2>附近的健康餐盒</h2>
        </div>
        <div className="search-group ">
          <input
            type="text"
            id="address"
            placeholder="請輸入地址"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {/* 
          {/* <Link to="/resdetail/">
            <button id="submit">
              <BsCursor size="24px" />
            </button>
          </Link> */}

          <button id="submit" onClick={onSubmit}>
            <BsCursor size="24px" />
          </button>
        </div>
      </div>

 
      <div className="ma-80" ref={myRef}>
        <TitleBorder />
      </div>

      <div className="container d-flex  justify-content-center ">
        <SortBtn mapData={apiData} lat={lat} lng ={lng}/>
      </div>
      <div className="container mt-35" >

        <ResList listData={apiData}/>
      </div>
      <Popular />
    </>
  )
}

export default Restaurants
