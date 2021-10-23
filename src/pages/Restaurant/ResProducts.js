import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import { imgUrl } from '../../config'
import TitleBorder from '../../components/TitleBorder'
import ResProductCard from '../../components/Restaurant/ResProductCard'
import ResPopular from '../../components/Restaurant/ResPopular'
import { FiPhone } from 'react-icons/fi'
import { RiMapPinLine } from 'react-icons/ri'
import { BsClock } from 'react-icons/bs'

function ResPrdoucts() {
  return (
    <>
      <div className="container">
        <div className="ma-80">
          <TitleBorder />
        </div>
        <div className="row  justify-content-center">
          <div className="col-md-5 col-sm-6 p-0">
            <img
              className="resImg"
              // src={`${imgUrl}/images/res.png`}
              src={`http://localhost:3000/images/Restaurant/res.png`}
              alt=""
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <div className="col-md-5 col-sm-6 p-0">
            <div className="res-production">
              <h3>
                站在每位食用者的立場來料理每一個食材，現點現做，手工修清所有嚴選原肉品。站在每位食用者的立場來料理每一個食材，現點現做。
              </h3>
            </div>
          </div>
        </div>
        <div className="res-connect text-center">
          <h3>
            <FiPhone
              style={{
                color: '#2a593e',
                fontSize: '26x',
                marginRight: '8px',
                marginBottom: '4px',
              }}
            />
            02-87912383{' '}
          </h3>
          <h3>
            {' '}
            <BsClock
              style={{
                color: '#8FC065',
                marginRight: '8px',
                marginBottom: '4px',
                fontSize: '24px',
              }}
            />
            每週一至週日11:00~20:00
          </h3>{' '}
          <h3>
            {' '}
            <RiMapPinLine
              style={{
                color: '#FB6107',
                fontSize: '26px',
                marginRight: '8px',
                marginBottom: '4px',
              }}
            />
            地址:台北市內湖區新湖三路134號
          </h3>
        </div>
      </div>
      <div className="ma-80">
        <TitleBorder />
      </div>
      <ResProductCard />
    </>
  )
}

export default ResPrdoucts
