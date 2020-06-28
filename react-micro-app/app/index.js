import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import UserList from "./component/user-list";

window.renderProfileList = (containerId, history, handleClick) => {
  ReactDOM.render(
    <UserList history={history} handleClick={handleClick}/>,
    document.getElementById(containerId)
  );
};

window.unmountProfileList = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
