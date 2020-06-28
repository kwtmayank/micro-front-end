import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Microfrontend from "./pages/micro-front-end/micro-front-end";

const profilesHost = process.env.PROFILE_LIST_HOST;
const profileDetailsHost = process.env.PROFILE_DETAILS_HOST;



const Profiles = ({ history }) => {
  console.log(profilesHost);
 return <Microfrontend history={history} host={profilesHost} name={"profileList"} />;
};

const ProfileDetails = ({ history, location }) => {
  console.log(location);
 return <Microfrontend history={history} host={profileDetailsHost} name={"profileDetails"} state={location.state} />;
};

class App extends React.Component {
  render() {
    console.log(process.env.JSON_SERVER_HOST);
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
            <li>
              <Link to="/profileDetails">Profile Details</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/profileDetails" component={ProfileDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
