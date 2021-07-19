import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FoodState from "./context/foodapi/FoodState";
import AlertState from "./context/alert/AlertState";

import { Navbar } from "./components/layout/Navbar";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { NotFound } from "./components/pages/NotFound";
import { Recipe } from "./components/recipes/Recipe";
import { Alert } from "./components/layout/Alert";

import "./App.css";

export const App = () => {
  return (
    <FoodState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/recipe/:id" component={Recipe} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </FoodState>
  );
};
