import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import ProfileList from "./pages/profile-list";
import ProfileDetails from "./pages/profile-details";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="page-header">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profiles" className="nav-link">
                  Profiles
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profiles" component={ProfileList} />
            <Route path="/profileDetails" component={ProfileDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
