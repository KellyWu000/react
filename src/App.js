import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import './App.scss'
import { imgUrl } from './config'
import Home from './pages/Home'
import Restaurants from './pages/Restaurant/Restaurants'
import ResList from './components/Restaurant/ResList'
import ResMap from './pages/Restaurant/ResMap'
import ResProducts from './pages/Restaurant/ResProducts'
import Menu from './components/Menu'
// import Shop from './pages/Shop'
// import FoodShot from './pages/FoodShot'
// import CustomMeal from './pages/CustomMeal'



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
            {/* <Route path="/reslist">
              <ResList />
            </Route> */}
            <Route path="/resmap">
              <ResMap />
            </Route>
            <Route path="/resprdoucts/:id" component={ResProducts} />
            {/* <Route path="/custom-meal">
              <CustomMeal />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/food-shot">
              <FoodShot />
            </Route> */}
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
