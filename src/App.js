import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Menu from "./components/menu/Menu";
import routes from "./routes";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu></Menu>
          
          {this.showContentMenu(routes)}

        </div>
      </Router>

    );
  }
  showContentMenu = (routes) => {
    var result = null
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          >
          </Route>
        )
      })
    }
    return <Switch>{result}</Switch>
  }
}


export default App;
