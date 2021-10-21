import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import './App.scss'
import { imgUrl } from './config'
import Home from './pages/Home'
import Restaurants from './pages/res-pages/Restaurants'
import ResList from './pages/res-pages/ResList'
import Map from './pages/res-pages/Map'
import ResDetail from './pages/res-pages/ResDetail'
import Menu from './components/Menu'
import Shop from './pages/Shop'
import FoodShot from './pages/FoodShot'
import CustomMeal from './pages/CustomMeal'



function App() {
  return (
    <>
      <Router>
        <>
          <Menu />
          <Switch>
            <Route path="/restaurants">
              <Restaurants />
            </Route>
            <Route path="/reslist">
              <ResList />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/resdetail">
              <ResDetail />
            </Route>
            <Route path="/custom-meal">
              <CustomMeal />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/food-shot">
              <FoodShot />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  )
}
export default App
