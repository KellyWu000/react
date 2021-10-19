import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Menu.scss'

function Menu(props) {
  return (
    <>
      <ul className="menu">
        {/* TODO: 以logo顯示 */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/custom-meal">客製化餐點</Link>
        </li>
        <li>
          <Link to="/shop">好食商城</Link>
        </li>
        <li>
          <Link to="/about">好食專欄</Link>
        </li>
        <li>
          <Link to="/restaurants">健康餐盒</Link>
        </li>
        <li>
          <Link to="/food-shot">餐食輪盤</Link>
        </li>

        {/* TOOD: 以icon顯示 */}
        <li>
          <Link to="/login">Login</Link>
        </li>

        {/* TOOD: 以icon顯示 */}
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </>
  )
}

export default Menu
