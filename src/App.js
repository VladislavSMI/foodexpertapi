import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FoodState from "./context/foodapi/FoodState";
import AlertState from "./context/alert/AlertState";

import { Navbar } from "./components/layout/Navbar";
import { Banner } from "./components/layout/Banner";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Favourite } from "./components/pages/Favourite";
import { NotFound } from "./components/pages/NotFound";
import { Recipe } from "./components/recipes/Recipe";
import { Alerts } from "./components/layout/Alerts";

import "./App.css";

export const App = () => {
  return (
    <FoodState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <Banner />
            <div className="container">
              <Alerts />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/recipe/:id" component={Recipe} />
                <Route extact path="/favourite" component={Favourite} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </FoodState>
  );
};
