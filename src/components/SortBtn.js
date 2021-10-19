import React from 'react'
import { Link } from 'react-router-dom'
import { RiMapPinLine } from 'react-icons/ri'
import { imgUrl } from '../config'
function SortBtn(props) {
  return (
    <>
      <div className="row ">
        <div className="col-md-4 col-12 ">
          <Link to="/map">
            <button type="button" class="btn orange-btn ">
              <RiMapPinLine
                style={{
                  color: '#FB6107',
                  fontSize: '24px',
                  marginBottom: '4px',
                }}
              />{' '}
              地圖模式
            </button>
          </Link>
        </div>
        <div className="col-md-4  col-6 ">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm "
            style={{
              backgroundImage: `url(${`${imgUrl}/images/arrow-icon.png`}) `,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '90% center',
            }}
          >
            <option value="">價格排序</option>
            <option value="1">100~200</option>
            <option value="2">200~300</option>
            <option value="2">300~400</option>
          </select>
        </div>

        <div className="col-md-4  col-6 ">
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm "
            style={{
              backgroundImage: `url(${`${imgUrl}/images/arrow-icon.png`}) `,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '90% center',
            }}
          >
            <option value="">評分排序</option>
            <option value="1">最高評分</option>
            <option value="2">最低評分</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default SortBtn
