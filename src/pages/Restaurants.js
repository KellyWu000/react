import { Link } from 'react-router-dom'
import React, { useRef } from 'react'
import '../App.scss'
import { BsCursor } from 'react-icons/bs'
import { imgUrl } from '../config'
import ResList from './ResList'
import SortBtn from '../components/SortBtn'
import Popular from '../components/Popular'
import TitleBorder from '../components/TitleBorder'
import { useState, useEffect } from 'react'
import Geocode from 'react-geocode'
import { apiKey } from '../api/googleApi'
import { useHistory } from 'react-router-dom'

function Restaurants(props) {
  const [address, setAddress] = useState('')
  const history = useHistory()

  const myRef = useRef(null)

  const onSubmit = () => {
    // history.push('/map')
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div
        className="res-banner"
        style={{
          backgroundImage: `url(${`${imgUrl}/images/banner.jpg`})`,
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

      {/* <img className="bannerImg" src={`${imgUrl}/images/banner.jpg`} alt="" /> */}
      <div className="ma-80" ref={myRef}>
        <TitleBorder />
      </div>

      <div className="container d-flex  justify-content-center ">
        <SortBtn />
      </div>
      <div className="container mt-35" >
        <ResList />
      </div>
      <Popular />
    </>
  )
}

export default Restaurants
