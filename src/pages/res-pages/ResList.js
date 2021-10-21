import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.scss'
import { BsClock } from 'react-icons/bs'
import { BsStarFill } from 'react-icons/bs'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { imgUrl } from '../../config'
import SortBtn from '../../components/SortBtn'
import TitleBorder from '../../components/TitleBorder'
import { Col, Row } from 'reactstrap'
function ResList({listData}) {
  return (
    <>
    
      {/* <Row className="justify-content-center"> */}
        <div class="row  justify-content-center"> 
      {listData.map((el,i)=>{
         return  <div class="col-md-5  col-12  key={i}">
      
          {/* <Col md={5} sm={12}> */}


 <div class="reslist-card d-flex  ">
            <img className="foodImg" src={`${imgUrl}/images/food.jpg`} alt="" />
            <div className="reslist-txt  ">
              <div className="reslist-title d-flex justify-content-between ">
                <Link to="/resdetail/">
                <h3>{el.res_name}</h3>
                </Link>
                <span>
                  <FiHeart
                    style={{
                      color: '#FB6107',
                      fontSize: '22px',
                      marginTop: '3px',
                    }}
                  />
                </span>
              </div>
              <p>
               {el.res_rate}
                <BsStarFill
                  style={{
                    fontSize: '24px',
                    color: '#FB6107',
                    marginRight: '6px',
                    paddingBottom: '4px',
                  }}
                />
              </p>
              <p>
                <MdOutlineAttachMoney
                  // size="1.4em"
                  style={{
                    fontSize: '28px',
                    color: '#FFB606',
                    marginRight: '6px',
                    paddingRight: '3px',
                  }}
                />
                平均消費:{el.res_price}
              </p>
              <p>
                <BsClock
                  // size="1em"
                  style={{
                    color: '#8FC065',
                    marginRight: '14px',
                    marginLeft: '2px',
                    fontSize: '20px',
                  }}
                />
               {el.res_starttime}-{el.res_endtime}
              </p>
            </div>
          </div>

          
         </div> })}
        {/* </Col> */}
      
        
    
        {/* <div class="col-md-5  col-12  ">
          <div class="reslist-card d-flex ">
            <img className="foodImg" src={`${imgUrl}/images/food.jpg`} alt="" />
            <div className="reslist-txt  ">
              <div className="reslist-title d-flex justify-content-between ">
                <Link to="/resdetail/">
                  <h3>生活倉廚</h3>
                </Link>
                <span>
                  <FiHeart
                    style={{
                      color: '#FB6107',

                      fontSize: '24px',
                    }}
                  />
                </span>
              </div>
              <p>
                4.8
                <BsStarFill
                  style={{
                    fontSize: '24px',
                    color: '#FB6107',
                    marginRight: '6px',
                    paddingBottom: '4px',
                  }}
                />
              </p>
              <p>
                <MdOutlineAttachMoney
                  // size="1.4em"
                  style={{
                    fontSize: '28px',
                    color: '#FFB606',
                    marginRight: '6px',
                    paddingRight: '3px',
                  }}
                />
                平均消費:NT150
              </p>
              <p>
                <BsClock
                  // size="1em"
                  style={{
                    color: '#8FC065',
                    marginRight: '14px',
                    marginLeft: '2px',
                    fontSize: '20px',
                  }}
                />
                11:00-20:00
              </p>
            </div>
          </div>
        </div>

        <div class="w-100"></div>

        <div class="col-md-5  col-12  ">
          <div class="reslist-card d-flex ">
            <img className="foodImg" src={`${imgUrl}/images/food.jpg`} alt="" />
            <div className="reslist-txt  ">
              <div className="reslist-title d-flex justify-content-between ">
                <Link to="/resdetail/">
                  <h3>生活倉廚</h3>
                </Link>
                <span>
                  <FiHeart
                    style={{
                      color: '#FB6107',

                      fontSize: '24px',
                    }}
                  />
                </span>
              </div>
              <p>
                4.8
                <BsStarFill
                  style={{
                    fontSize: '24px',
                    color: '#FB6107',
                    marginRight: '6px',
                    paddingBottom: '4px',
                  }}
                />
              </p>
              <p>
                <MdOutlineAttachMoney
                  // size="1.4em"
                  style={{
                    fontSize: '28px',
                    color: '#FFB606',
                    marginRight: '6px',
                    paddingRight: '3px',
                  }}
                />
                平均消費:NT150
              </p>
              <p>
                <BsClock
                  // size="1em"
                  style={{
                    color: '#8FC065',
                    marginRight: '14px',
                    marginLeft: '2px',
                    fontSize: '20px',
                  }}
                />
                11:00-20:00
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-5  col-12  ">
          <div class="reslist-card d-flex ">
            <img className="foodImg" src={`${imgUrl}/images/food.jpg`} alt="" />
            <div className="reslist-txt  ">
              <div className="reslist-title d-flex justify-content-between ">
                <Link to="/resdetail/">
                  <h3>生活倉廚</h3>
                </Link>
                <span>
                  <FiHeart
                    style={{
                      color: '#FB6107',

                      fontSize: '24px',
                    }}
                  />
                </span>
              </div>
              <p>
                4.8
                <BsStarFill
                  style={{
                    fontSize: '24px',
                    color: '#FB6107',
                    marginRight: '6px',
                    paddingBottom: '4px',
                  }}
                />
              </p>
              <p>
                <MdOutlineAttachMoney
                  // size="1.4em"
                  style={{
                    fontSize: '28px',
                    color: '#FFB606',
                    marginRight: '6px',
                    paddingRight: '3px',
                  }}
                />
                平均消費:NT150
              </p>
              <p>
                <BsClock
                  // size="1em"
                  style={{
                    color: '#8FC065',
                    marginRight: '14px',
                    marginLeft: '2px',
                    fontSize: '20px',
                  }}
                />
                11:00-20:00
              </p>
            </div>
          </div>
        </div>
        <div class="w-100"></div>

        <div class="col-md-5  col-12  ">
          <div class="reslist-card d-flex ">
            <img className="foodImg" src={`${imgUrl}/images/food.jpg`} alt="" />
            <div className="reslist-txt  ">
              <div className="reslist-title d-flex justify-content-between ">
                <Link to="/resdetail/">
                  <h3>生活倉廚</h3>
                </Link>
                <span>
                  <FiHeart
                    style={{
                      color: '#FB6107',

                      fontSize: '24px',
                    }}
                  />
                </span>
              </div>
              <p>
                4.8
                <BsStarFill
                  style={{
                    fontSize: '24px',
                    color: '#FB6107',
                    marginRight: '6px',
                    paddingBottom: '4px',
                  }}
                />
              </p>
              <p>
                <MdOutlineAttachMoney
                  // size="1.4em"
                  style={{
                    fontSize: '28px',
                    color: '#FFB606',
                    marginRight: '6px',
                    paddingRight: '3px',
                  }}
                />
                平均消費:NT150
              </p>
              <p>
                <BsClock
                  // size="1em"
                  style={{
                    color: '#8FC065',
                    marginRight: '14px',
                    marginLeft: '2px',
                    fontSize: '20px',
                  }}
                />
                11:00-20:00
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-5  col-12  ">
          <div class="reslist-card d-flex ">
            <img className="foodImg" src={`${imgUrl}/images/food.jpg`} alt="" />
            <div className="reslist-txt  ">
              <div className="reslist-title d-flex justify-content-between ">
                <Link to="/resdetail/">
                  <h3>生活倉廚</h3>
                </Link>
                <span>
                  <FiHeart
                    style={{
                      color: '#FB6107',

                      fontSize: '24px',
                    }}
                  />
                </span>
              </div>
              <p>
                4.8
                <BsStarFill
                  style={{
                    fontSize: '24px',
                    color: '#FB6107',
                    marginRight: '6px',
                    paddingBottom: '4px',
                  }}
                />
              </p>
              <p>
                <MdOutlineAttachMoney
                  // size="1.4em"
                  style={{
                    fontSize: '28px',
                    color: '#FFB606',
                    marginRight: '6px',
                    paddingRight: '3px',
                  }}
                />
                平均消費:NT150
              </p>
              <p>
                <BsClock
                  // size="1em"
                  style={{
                    color: '#8FC065',
                    marginRight: '14px',
                    marginLeft: '2px',
                    fontSize: '20px',
                  }}
                />
                11:00-20:00
              </p>
            </div>
          </div>
        </div> */}
        </div>
        
      {/* </Row> */}

      <div className="ma-80">
        <TitleBorder />
      </div>
   
    </>
  )
}

export default ResList
